async function measure(name, fn) {
  const start = Date.now();
  const result = await fn();
  console.log(`${name}: ${Date.now() - start} ms`);
  return result;
}


async function fetchCISA() {
  try {
    const res = await fetch(
      "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json"
    );

    if (!res.ok) return [];

    const data = await res.json();

    return data.vulnerabilities.slice(0, 25).map(v => ({
  type: "EXPLOITED_CVE",

  source: "CISA KEV",
  severity: "CRITICAL",

  title: v.vulnerabilityName,
  indicator: v.cveID,

  timestamp: new Date().toISOString(),

  cvss: null,
  country: "US",

  vendor: v.vendorProject,
  product: v.product,
  reference: v.notes || ""
}));
  } catch (e) {
    console.error(e);
    return [];
  }
}

async function fetchNVD() {
  try {
    const today = new Date();
const last7Days = new Date(today);
last7Days.setDate(today.getDate() - 7);

const res = await fetch(
  `https://services.nvd.nist.gov/rest/json/cves/2.0?pubStartDate=${encodeURIComponent(last7Days.toISOString())}&pubEndDate=${encodeURIComponent(today.toISOString())}&resultsPerPage=25`
);

    if (!res.ok) return [];

    const data = await res.json();

    return (data.vulnerabilities || [])
  .map(v => {
      const cve = v.cve;

      let severity = "MEDIUM";
      let cvss = null;

      const metric =
        cve.metrics?.cvssMetricV31?.[0] ||
        cve.metrics?.cvssMetricV30?.[0] ||
        cve.metrics?.cvssMetricV2?.[0];

      if (metric) {
        cvss = metric.cvssData?.baseScore ?? null;

        if (cvss >= 9) severity = "CRITICAL";
        else if (cvss >= 7) severity = "HIGH";
        else if (cvss >= 4) severity = "MEDIUM";
        else severity = "LOW";
      }

          return {
  type: "NEW_CVE",

  source: "NVD",
  severity,

  title: cve.descriptions?.[0]?.value || cve.id,
  indicator: cve.id,

  timestamp: cve.published,

  cvss,
  country: "US",

  vendor: cve.vendor || "",
  reference:
    cve.references?.[0]?.url || ""
};
    })
    .filter(v => v.indicator);

  } catch (err) {
    console.error(err);
    return [];
  }
}

async function fetchThreatFox(env) {
	console.log("Has ThreatFox Key:", !!env.THREATFOX_API_KEY);
  try {
    const res = await fetch(
      "https://threatfox-api.abuse.ch/api/v1/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Auth-Key": env.THREATFOX_API_KEY
        },
        body: JSON.stringify({
          query: "get_iocs",
          days: 1
        })
      }
    );

    if (!res.ok) {
  const text = await res.text();
  console.error("ThreatFox HTTP Error:", res.status);
  console.error("ThreatFox Response:", text);
  return [];
}

    const data = await res.json();

console.log("ThreatFox query_status:", data.query_status);
console.log("ThreatFox data type:", typeof data.data, Array.isArray(data.data));


if (data.query_status !== "ok") {
  console.error("ThreatFox:", data.query_status);
  return [];
}

return (data.data || [])
  .slice(0,100)
  .map(ioc => ({
    type:
      ioc.ioc_type === "url"
        ? "MALWARE_URL"
        : "BOTNET_C2",

    source: "ThreatFox",
    severity: "HIGH",

    title:
  ioc.malware ||
  ioc.alias ||
  ioc.threat_type ||
  ioc.tags?.join(", ") ||
  "Unknown Malware",

    indicator: ioc.ioc,

    timestamp: ioc.first_seen,

   country: ioc.country || ioc.country_code || "--",

    iocType: ioc.ioc_type,

    malware: ioc.malware,

    confidence: ioc.confidence_level || 95,

    reference:
      "https://threatfox.abuse.ch/"
  }));
  } catch (err) {
    console.error("ThreatFox Error:", err);
    return [];
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // ---------- CORS ----------
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // ---------- Health ----------
    if (url.pathname === "/") {
      return new Response(
        JSON.stringify({
          service: "Trinity CTI Worker",
          status: "online",
          version: "1.0.0"
        }),
        {
          headers: corsHeaders
        }
      );
    }

    // ---------- API ----------
    if (url.pathname === "/api/threats") {
      const cache = caches.default;

let cached = await cache.match(request);

if (cached) {
  return cached;
}

    const [cisa, nvd, threatfox] = await Promise.all([
  measure("CISA", fetchCISA),
  measure("NVD", fetchNVD),
  measure("ThreatFox", () => fetchThreatFox(env))
]);

const events = [
  ...cisa,
  ...nvd,
  ...threatfox
];

events.sort(
  (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
);

console.log("CISA:", cisa.length);
console.log("NVD:", nvd.length);
console.log("ThreatFox:", threatfox.length);
console.log("Total Events:", events.length);

      const response = new Response(
  JSON.stringify({
    updated: new Date().toISOString(),
    stats: {
      total: events.length,
      critical: events.filter(e => e.severity === "CRITICAL").length,
      high: events.filter(e => e.severity === "HIGH").length
    },
    events: events.slice(0, 50)
  }),
  {
    headers: {
      ...corsHeaders,
      "Cache-Control": "public, max-age=60"
    }
  }
);

ctx.waitUntil(cache.put(request, response.clone()));

return response;
    }

    return new Response(
      JSON.stringify({
        error: "Not Found"
      }),
      {
        status: 404,
        headers: corsHeaders
      }
    );
  }
};