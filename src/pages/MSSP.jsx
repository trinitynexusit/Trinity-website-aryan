import { useNavigate } from "react-router-dom";
import ServiceTabs from "../components/ServiceTabs";
export default function NetworkSecurity() {
  const navigate = useNavigate();

  const deliverySteps = [
    {
      number: "01",
      title: "Environment Discovery & Log Onboarding",
      desc: "Enumerate all log sources, connect firewalls, endpoints, cloud, Active Directory and applications to the SIEM. Validate parsing, normalisation and baseline correlation rules.",
    },
    {
      number: "02",
      title: "Detection Engineering & Use-Case Development",
      desc: "Build custom detection rules mapped to your threat landscape and MITRE ATT&CK techniques. Configure SOAR playbooks for automated response.",
    },
    {
      number: "03",
      title: "Threat Intelligence Integration",
      desc: "Connect curated IOC feeds, dark web monitoring and sector-specific CTI to enrich alerts and support proactive threat hunting.",
    },
    {
      number: "04",
      title: "24×7 Monitoring & Response",
      desc: "Analysts begin monitoring within days of onboarding. Alert triage, escalation, IR coordination and CERT-In reporting are managed under agreed SLAs.",
    },
    {
      number: "05",
      title: "Monthly Reviews & Continuous Improvement",
      desc: "Monthly SOC performance reviews, detection gap analysis, new use-case development and quarterly threat landscape briefings.",
    },
  ];

  const services = [
  {
    type: "Ongoing Service",
    title: "24×7 Security Operations Centre (SOC)",
    desc: "Fully managed SOC with 24×7×365 monitoring, alert triage, threat detection, escalation, L1/L2/L3 analysts, SIEM, SOAR and CTI.",
    deliverable: "📄 Monthly SOC report + SLA dashboard + incident tickets",
  },
  {
    type: "Ongoing Service",
    title: "SIEM Deployment & Management",
    desc: "Deploy and manage Microsoft Sentinel, Splunk, IBM QRadar and Elastic. Log source onboarding, correlation rules and use-case tuning.",
    deliverable: "📄 SIEM health report + use-case registry",
  },
  {
    type: "Project",
    title: "SIEM Log Source Onboarding",
    desc: "Connect firewalls, Active Directory, cloud and applications to SIEM with parsing validation and baseline correlation.",
    deliverable: "📄 Log onboarding checklist + parsing validation",
  },
  {
    type: "Project",
    title: " Detection Engineering (Use-Case Dev)",
    desc: "Develop custom detection rules and correlation logic mapped to MITRE ATT&CK for client-specific threat scenarios.",
    deliverable: "Detection use-case pack + ATT&CK coverage map",
  },
   {
    type: "Project",
    title: "Threat Hunting (Proactive)",
    desc: "Hypothesis-driven threat hunts across endpoint, network and cloud telemetry for LOLBins, dormant implants and credential theft artefacts.",
    deliverable: "Monthly hunt report + IOC/TTP register",
  },
  {
    type: "Project",
    title: "Managed Threat Intelligence (CTI)",
    desc: "Subscription-based CTI: curated IOC feeds, dark web monitoring, brand/domain monitoring and sector threat intelligence reports.",
    deliverable: "Weekly CTI bulletin + monthly sector threat report",
  },
  {
    type: "Project",
    title: " Dark Web Monitoring",
    desc: "Monitor dark web forums, Telegram and paste sites for leaked credentials, company data and pre-attack chatter.",
    deliverable: "Real-time alerts + monthly dark web report",
  },
  {
    type: "Project",
    title: "  Brand & Domain Protection Monitoring",
    desc: "Monitor for lookalike domains, typosquatting, phishing sites and social media impersonation. Takedown request submission.",
    deliverable: "Takedown report + monitoring dashboard",
  },
  {
    type: "Project",
    title: "  Incident Response (IR) Retainer",
    desc: "Pre-agreed retainer with guaranteed SLAs (4hr/8hr/24hr). Dedicated IR team, forensic tooling on standby and pre-paid response hours.",
    deliverable: "IR engagement report per incident + retainer utilisation summary",
  },
  {
    type: "Project",
    title: "  Digital Forensics & Incident Response (DFIR)",
    desc: "Reactive forensic investigation: host memory/disk forensics, log correlation, attack timeline, root cause and chain of custody..",
    deliverable: "DFIR report + evidence chain of custody",
  },
  {
    type: "Project",
    title: "   Ransomware Response & Recovery",
    desc: "Rapid containment, IOC hunting, decryptor availability assessment, safe recovery procedures and post-incident hardening.",
    deliverable: "Ransomware response report + recovery checklist",
  },
  {
    type: "Project",
    title: "Vulnerability Management as a Service (VMaaS)",
    desc: "Continuous scanning (Tenable.io, Qualys VMDR) with asset discovery, CVSS/EPSS prioritisation, ticketing integration and SLA tracking.",
    deliverable: "Monthly VM dashboard + SLA compliance report",
  },
  {
    type: "Project",
    title: "Email Security Management",
    desc: "Manage email security gateway (Proofpoint, Mimecast, M365 Defender). Spam/phishing tuning, DMARC/DKIM/SPF management and BEC monitoring.",
    deliverable: "Monthly email threat report",
  },
  {
    type: "Project",
    title: " DMARC Implementation & Monitoring",
    desc: "Implement DMARC from none to quarantine to reject. Configure SPF/DKIM and set up aggregate DMARC reporting.",
    deliverable: "DMARC implementation report + reject policy confirmation",
  },
  {
    type: "Project",
    title: "Security Metrics & Reporting Dashboard",
    desc: "Customised executive/operational security dashboards (Power BI, Grafana, SIEM native) with KPIs, KRIs and board-ready reporting.",
    deliverable: "Monthly board-level security report + live dashboard",
  },




];
  
  return (
<>
    <ServiceTabs />

    <section className="relative overflow-hidden bg-gradient-to-r from-[#0b2345] via-[#143b6b] to-[#0b2345] border-b border-cyan-900/20">

  {/* Grid Background */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,170,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.05)_1px,transparent_1px)] bg-[size:62px_62px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">

    {/* Breadcrumb */}
    <div className="flex items-center gap-5 text-sm text-gray-400 mb-8 mt-12">
      <span>Home</span>
      <span>/</span>
      <span>Services</span>
      <span>/</span>
      <span className="text-white">
        Managed Security (MSSP/SOC)
      </span>
    </div>

    {/* Badge */}
    <div className="inline-flex items-center border border-emerald-500/40 rounded-lg px-5 py-2 mb-8">
      <span className="text-emerald-400 font-semibold tracking-[3px] text-sm uppercase">
        D08 • Managed Security (MSSP/SOC)
      </span>
    </div>

    {/* Heading */}
    <h1 className="font-black uppercase leading-none tracking-tight">

      <span className="block text-white text-5xl lg:text-7xl">
        24×7 Security Operations
      </span>

      <span className="block mt-4 text-emerald-400 text-5xl lg:text-7xl">
        Monitor. Detect. Respond. Repeat.
      </span>

    </h1>

    {/* Subtitle */}
    <p className="mt-10 text-gray-400 tracking-[2px] text-sm lg:text-lg leading-8">
      24×7 SOC • SIEM Management • Threat Hunting • CTI • DFIR •
      IR Retainer • Dark Web • Managed IT
    </p>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14 max-w-4xl">

      <div>
        <h2 className="text-emerald-400 text-5xl font-bold">19</h2>
        <p className="mt-2 text-xs tracking-[3px] text-gray-400 uppercase">
          Services
        </p>
      </div>

      <div>
        <h2 className="text-emerald-400 text-5xl font-bold">11</h2>
        <p className="mt-2 text-xs tracking-[3px] text-gray-400 uppercase">
          Add-ons
        </p>
      </div>

      <div>
        <h2 className="text-emerald-400 text-5xl font-bold">&lt;12MIN</h2>
        <p className="mt-2 text-xs tracking-[3px] text-gray-400 uppercase">
          MTTD
        </p>
      </div>

      <div>
        <h2 className="text-emerald-400 text-5xl font-bold">
          L1/L2/L3
        </h2>
        <p className="mt-2 text-xs tracking-[3px] text-gray-400 uppercase">
          Analyst Coverage
        </p>
      </div>

    </div>

    {/* Divider */}
    <div className="w-full h-px bg-cyan-900/40 my-12" />

    {/* Buttons */}
    <div className="flex flex-wrap gap-5">

      <button
  onClick={() => navigate("/assessment")}
  className="px-8 py-4 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition"
>
  Get Free Assessment
</button>

      <button className="px-8 py-4 rounded-lg border border-cyan-700 text-emerald-400 hover:bg-emerald-400 hover:text-black transition">
        ← All Domains
      </button>

    </div>

  </div>
{/* ================= OVERVIEW SECTION ================= */}

<section className="bg-[#08121f] py-16 border-b border-cyan-900/20">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* Left Content */}

      <div>

        <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-4">
          // OVERVIEW
        </p>

        <h2 className="text-4xl lg:text-5xl font-black uppercase text-white leading-tight mb-8">
          Your Security Team.
          <br />
          Always On.
        </h2>

        <div className="space-y-6 text-gray-400 text-lg leading-8">

          <p>
            Building an in-house SOC costs
            <span className="text-white font-semibold">
              {" "}₹3–5 crore annually{" "}
            </span>
            in staffing alone. Trinity Nexus Technologies delivers a
            <span className="text-white font-semibold">
              {" "}fully managed, enterprise-grade SOC
            </span>
            with certified L1, L2 and L3 analysts working around the clock.
          </p>

          <p>
            We integrate with
            <span className="text-white font-semibold">
              {" "}Microsoft Sentinel, Splunk, IBM QRadar and Elastic
            </span>
            while combining AI-powered detection, SOAR automation and human
            expertise to achieve an average
            <span className="text-white font-semibold">
              {" "}MTTD below 12 minutes.
            </span>
          </p>

          <p>
            Beyond monitoring we provide
            <span className="text-white font-semibold">
              {" "}proactive threat hunting,
              managed CTI,
              dark web monitoring,
              CERT-In compliant IR retainers
            </span>
            and complete DFIR capabilities for rapid incident response.
          </p>

        </div>

      </div>

      {/* Right Card */}

      <div className="relative z-10 rounded-2xl border border-cyan-900/30 bg-[#0b1627] p-8">

        <p className="uppercase tracking-[5px] text-xs text-gray-500 mb-8">
          At A Glance
        </p>

        {[
          [
            "SOC Tiers",
            "Essentials (SMB) • Professional • Enterprise",
          ],
          [
            "SIEM Platforms",
            "Microsoft Sentinel • Splunk • IBM QRadar • Elastic",
          ],
          [
            "MTTD",
            "<12 minutes (AI-accelerated)",
          ],
          [
            "IR SLA",
            "<4 hours critical incidents",
          ],
          [
            "Compliance",
            "CERT-In • ISO 27001 • PCI DSS • DPDP",
          ],
        ].map(([title, value]) => (
          <div
            key={title}
            className="flex justify-between gap-6 py-5 border-b border-cyan-900/20 last:border-none"
          >
            <span className="text-gray-400">
              {title}
            </span>

            <span className="text-white font-semibold text-right max-w-[280px]">
              {value}
            </span>
          </div>
        ))}

<button
  onClick={() => navigate("/assessment")}
  className="mt-8 w-full rounded-lg bg-emerald-400 text-black py-4 font-semibold hover:bg-emerald-300 transition"
>
  Enquire Now →
</button>

      </div>

    </div>

  </div>

</section>
{/* ================= OUR STRENGTHS ================= */}

<section
  className="py-20"
  style={{
    background: `
      radial-gradient(circle at top center, rgba(37,99,235,0.18), transparent 55%),
      linear-gradient(180deg, #173867 0%, #1b4277 35%, #214b84 65%, #234f89 100%)
    `,
  }}
>

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="text-center mb-12">

      <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
        // WHY CHOOSE TRINITY NEXUS
      </p>

      <h2 className="text-4xl lg:text-5xl font-black uppercase text-white">
        Our Strengths
      </h2>

    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

      {[
        {
          icon: "🛡️",
          title: "24×7 Expert SOC Analysts",
          desc: "Certified L1, L2 & L3 analysts (GCIH, GCIA, SC-200) monitoring your environment around the clock. Every alert is reviewed by trained security professionals.",
        },
        {
          icon: "🤖",
          title: "AI-Powered Detection",
          desc: "Machine learning, behavioural analytics and custom detection rules mapped to MITRE ATT&CK for faster threat detection and reduced dwell time.",
        },
        {
          icon: "🌑",
          title: "Dark Web Intelligence",
          desc: "Continuous monitoring of leaked credentials, company data, underground forums and Telegram channels for early threat detection.",
        },
       
        {
  icon: "🔬",
  title: "Proactive Threat Hunting",
  desc: "Hypothesis-driven threat hunts across endpoint, network and cloud telemetry. Detects hidden threats, living-off-the-land techniques and dormant malware before impact."
},
{
  icon: "⚡",
  title: "CERT-In Compliant IR",
  desc: "4-hour SLA incident response with CERT-In 6-hour reporting capability. Rapid containment, investigation, eradication and recovery support."
},
{
  icon: "📊",
  title: "Board-Ready Reporting",
  desc: "Monthly executive security reports, quarterly risk reviews and real-time operational dashboards with clear business-focused insights."
}
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-cyan-900/30 bg-[#0b1627] p-8 hover:border-emerald-400/40 transition-all duration-300"
        >
          <div className="text-4xl mb-5">{item.icon}</div>

          <h3 className="text-2xl font-bold text-white mb-4">
            {item.title}
          </h3>

          <p className="text-gray-400 leading-8">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>

</section>
<section className="py-16 lg:py-20 bg-[#08111d]">
  <div className="max-w-6xl mx-auto px-6">

    <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
      // Our Delivery Approach
    </p>

    <h2 className="text-4xl lg:text-5xl font-black text-white uppercase mb-5">
      How We Deliver
    </h2>

    <p className="text-gray-400 max-w-3xl mb-12 leading-8">
      Our SOC onboarding and managed operations process is designed for minimal
      disruption and maximum immediate value.
    </p>

    <div className="space-y-10">

      {deliverySteps.map((step) => (

        <div
          key={step.number}
          className="flex gap-6 border-b border-cyan-900/30 pb-8"
        >

          <div className="w-16 shrink-0">
            <h3 className="text-emerald-500 text-5xl font-black">
              {step.number}
            </h3>
          </div>

          <div>

            <h4 className="text-white text-2xl font-bold mb-3">
              {step.title}
            </h4>

            <p className="text-gray-400 leading-8">
              {step.desc}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>
<section
  className="relative py-20 overflow-hidden"
  style={{
    background: `
      radial-gradient(circle at top center, rgba(37,99,235,0.18), transparent 55%),
      linear-gradient(180deg, #173867 0%, #1b4277 35%, #214b84 65%, #234f89 100%)
    `,
  }}
>

  <div className="max-w-6xl mx-auto px-6">

    <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
      // 19 Services • 11 Add-ons
    </p>

    <h2 className="text-4xl lg:text-5xl font-black text-white uppercase mb-10">
      Complete Service List
    </h2>

    <div className="space-y-6">

      {services.map((service) => (

        <div
          key={service.title}
          className="rounded-2xl border border-cyan-900/30 bg-[#0b1627] p-6 hover:border-emerald-400/40 transition"
        >

          <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-cyan-900/40 text-cyan-300 mb-4">
            {service.type}
          </span>

          <h3 className="text-2xl font-bold text-white mb-3">
            {service.title}
          </h3>

          <p className="text-gray-400 leading-7 mb-5">
            {service.desc}
          </p>

          <div className="inline-flex items-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-400 text-sm">
            {service.deliverable}
          </div>

        </div>

      ))}

    </div>

  </div>

</section>
{/* ================= TECHNOLOGY STACK ================= */}

<section className="bg-[#08121f] py-14 border-b border-cyan-900/20">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-12">

      {/* Left */}

      <div>

        <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
          // Tools & Technology
        </p>

        <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mb-6">
          Technology Stack
        </h2>

        <p className="text-gray-400 leading-7 mb-8">
          Industry-leading SOC tooling deployed, managed and continuously
          tuned by our experienced SOC engineers.
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "Microsoft Sentinel",
            "Splunk Enterprise",
            "IBM QRadar",
            "Elastic SIEM",
            "CrowdStrike Falcon",
            "SentinelOne",
            "Palo Alto XSOAR",
            "Swimlane",
            "TheHive",
            "MISP",
            "OpenCTI",
            "Cortex",
            "VirusTotal",
            "Recorded Future",
            "Shodan",
            "Tenable.io",
            "Qualys VMDR",
          ].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-lg border border-cyan-900/40 bg-[#0b1627] text-gray-300 text-sm hover:border-emerald-400 transition"
            >
              {tool}
            </span>
          ))}

        </div>

      </div>

      {/* Right */}

      <div>

        <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
          // Measurable Outcomes
        </p>

        <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mb-8">
          What You Gain
        </h2>

        <div className="grid grid-cols-2 gap-x-10 gap-y-5 text-gray-300">

          {[
            "✓ MTTD reduced to under 15 minutes",
            "✓ CERT-In 6-hour reporting automated",
            "✓ 100% log source coverage achieved",
            "✓ Proactive threat hunts monthly",
            "✓ Dark web credential monitoring active",
            "✓ IR playbooks tested quarterly",
            "✓ Board-level reporting delivered monthly",
            "✓ PCI DSS SOC requirements satisfied",
          ].map((item) => (
            <div
              key={item}
              className="text-base leading-7"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= CTA SECTION ================= */}

<section
  className="relative py-20 overflow-hidden"
  style={{
    background: `
      radial-gradient(circle at top center, rgba(37,99,235,0.18), transparent 55%),
      linear-gradient(180deg, #173867 0%, #1b4277 35%, #214b84 65%, #234f89 100%)
    `,
  }}
>

  <div className="absolute inset-0 opacity-10 pointer-events-none">
  <div
    className="w-full h-full"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
      `,
      backgroundSize: "48px 48px",
    }}
  />
</div>

<div className="relative z-10">

    <div className="rounded-3xl border border-cyan-900/30 bg-[#0b1627] px-8 py-12 text-center">

      <p className="text-emerald-400 uppercase tracking-[5px] text-xs mb-5">
        D08 • Managed Security (MSSP/SOC)
      </p>

      <h2 className="text-3xl lg:text-5xl font-black uppercase text-white mb-6">
        Get 24×7 SOC Protection
      </h2>

      <p className="max-w-2xl mx-auto text-gray-400 leading-8 mb-10">
        Get a free SOC readiness assessment. We'll evaluate your monitoring
        coverage and show you exactly how Trinity Nexus Technologies can
        strengthen your security operations.
      </p>

      <div className="flex flex-wrap justify-center gap-4">

        <button
  onClick={() => navigate("/assessment")}
  className="px-8 py-4 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition"
>
  Start Free Assessment
</button>

        <button className="px-8 py-4 rounded-lg border border-cyan-700 text-emerald-400 hover:bg-emerald-400 hover:text-black transition">
          ← All Services
        </button>

      </div>

    </div>

  </div>

</section>

</section>
  </>
  );
}