import { useState, useEffect, useRef, useCallback } from 'react';
import { Terminal, Shield, Bug, RotateCw, Ban } from 'lucide-react';

// ── CONFIG ──────────────────────────────────────────────────────────
const WORKER_URL = 'https://trinity-cti-worker.trinitynexus-it.workers.dev';
const POLL_INTERVAL = 45 * 1000; // 45s — matches worker cache

// ── Severity → colour ──────────────────────────────────────────────
const SEV = {
  CRITICAL: { text: 'text-red-400', bg: 'bg-red-500/15', ring: 'ring-red-500/30', label: 'CRIT' },
  HIGH:     { text: 'text-amber-400', bg: 'bg-amber-500/15', ring: 'ring-amber-500/30', label: 'HIGH' },
  MEDIUM:   { text: 'text-yellow-300', bg: 'bg-yellow-500/15', ring: 'ring-yellow-500/30', label: 'MED' },
  INFO:     { text: 'text-[#06b6d4]', bg: 'bg-[#06b6d4]/15', ring: 'ring-[#06b6d4]/30', label: 'INFO' },
};

const FLAGS = {
  US: "🇺🇸",
  RU: "🇷🇺",
  CN: "🇨🇳",
  NL: "🇳🇱",
  DE: "🇩🇪",
  FR: "🇫🇷",
  GB: "🇬🇧",
  IN: "🇮🇳",
};

const TABS = [
  { key: 'feed',      label: 'Threat Feed', icon: Terminal },
  { key: 'blacklist', label: 'Blacklist',   icon: Ban },
  { key: 'cves',      label: 'CVEs',        icon: Bug },
];

function timeAgo(ts) {
  const d = new Date(ts);
  if (isNaN(d)) return '';
  const mins = Math.max(0, Math.round((Date.now() - d.getTime()) / 60000));
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.round(hrs / 24)}d ago`;
}

export default function TerminalFeed() {
  const [activeTab, setActiveTab] = useState('feed');
  const [events, setEvents] = useState([]);
  const [stats, setStats] = useState({ total: 0, critical: 0, high: 0 });
  const [status, setStatus] = useState('connecting'); // connecting | live | error
  const [updatedAt, setUpdatedAt] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const pollRef = useRef(null);
  const listRef = useRef(null);

  const fetchThreats = useCallback(async (manual = false) => {
    if (manual) setRefreshing(true);
    try {
      const resp = await fetch(`${WORKER_URL}/api/threats`, {
        headers: { Accept: 'application/json' },
        cache: 'no-cache',
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();
      console.table(
  data.events.map(e => ({
    type: e.type,
    title: e.title,
    source: e.source
  }))
);
      setEvents(data.events || []);
      setStats(data.stats || { total: 0, critical: 0, high: 0 });
      setStatus('live');
      setUpdatedAt(new Date());
      if (listRef.current) {
        listRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      setStatus('error');
      console.error('[CTI] fetch failed:', err.message);
    } finally {
      if (manual) setRefreshing(false);
    }
  }, []);

const blacklist = events.filter(e => e.type === 'BOTNET_C2' || e.type === 'MALWARE_URL');
console.log(events.slice(0,5));
console.log("Blacklist:", blacklist);
  const cves = events.filter(e => e.type === 'EXPLOITED_CVE' || e.type === 'NEW_CVE');
  const list = activeTab === 'feed' ? events : activeTab === 'blacklist' ? blacklist : cves;
const isBlacklist = activeTab === "blacklist";
  useEffect(() => {
    fetchThreats();
    pollRef.current = setInterval(fetchThreats, POLL_INTERVAL);
    return () => clearInterval(pollRef.current);
  }, [fetchThreats]);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = 0;
  }, [activeTab]);

  // ── Slow continuous auto-scroll, pauses on hover ─────────────────
  const isHoveringRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    let lastTime = performance.now();
    const SPEED = 12; // px per second

    function step(now) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (!isHoveringRef.current && el.scrollHeight > el.clientHeight) {
        el.scrollTop += SPEED * dt;
        // Loop back to top once we hit the bottom
        if (el.scrollTop + el.clientHeight >= el.scrollHeight - 1) {
          el.scrollTop = 0;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [activeTab, list.length]);

  

  const critCount = list.filter(e => e.severity === 'CRITICAL').length;
  const highCount = list.filter(e => e.severity === 'HIGH').length;

  return (
    <div className="rounded-xl border border-white/10 bg-[#020810] overflow-hidden font-mono text-xs shadow-2xl shadow-black/60 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0f172a] border-b border-white/8 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-[#06b6d4]/80" />
        </div>
        <div className="flex items-center gap-1.5 ml-3 text-gray-500">
          <Shield size={11} />
          <span>trinity-soc — live intel</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              status === 'live' ? 'bg-[#06b6d4] animate-pulse'
              : status === 'error' ? 'bg-red-500'
              : 'bg-gray-500'
            }`}
          />
          <span className={status === 'live' ? 'text-[#06b6d4]' : status === 'error' ? 'text-red-400' : 'text-gray-500'}>
            {status === 'live' ? 'LIVE' : status === 'error' ? 'RECONNECTING' : 'CONNECTING'}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-2 py-2 bg-[#0b1220] border-b border-white/8 shrink-0">
        {TABS.map(t => {
          const Icon = t.icon;
          const active = activeTab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-colors ${
                active ? 'bg-[#06b6d4]/15 text-[#06b6d4] ring-1 ring-[#06b6d4]/30' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Icon size={11} />
              <span>{t.label}</span>
            </button>
          );
        })}
        <button
          onClick={() => fetchThreats(true)}
          disabled={refreshing}
          className="ml-auto flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-gray-500 hover:text-gray-300 transition-colors disabled:opacity-50"
        >
          <RotateCw size={11} className={refreshing ? 'animate-spin' : ''} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Stat strip */}
      <div className="flex items-center gap-3 px-4 py-1.5 border-b border-white/8 bg-[#020810] shrink-0 text-[0.68rem]">
        <span className="text-red-400">● {critCount} CRITICAL</span>
        <span className="text-amber-400">● {highCount} HIGH</span>
        <span className="ml-auto text-gray-600">
          {updatedAt ? `Updated ${updatedAt.toLocaleTimeString('en-IN', { hour12: true })}` : ''}
        </span>
      </div>

      {/* List */}
      <div
        ref={listRef}
        onMouseEnter={() => { isHoveringRef.current = true; }}
        onMouseLeave={() => { isHoveringRef.current = false; }}
        className="h-[400px] overflow-y-auto p-3 space-y-1.5 scrollbar-thin">
        {list.length === 0 && status === 'connecting' && (
          <div className="text-gray-600 p-2">Connecting to threat feeds…</div>
        )}
        {list.length === 0 && status === 'error' && (
          <div className="text-red-400 p-2">Worker unreachable — check WORKER_URL / deployment.</div>
        )}
        {list.length === 0 && status === 'live' && (
          <div className="text-gray-600 p-2">No events in this category right now.</div>
        )}
{isBlacklist && (
  <div className="grid grid-cols-[2fr_1fr_2fr_1fr_1fr] gap-2 px-2 py-2 text-[10px] uppercase text-gray-500 border-b border-white/10 sticky top-0 bg-[#020810] z-10">
    <div>IOC</div>
    <div>Type</div>
    <div>Threat</div>
    <div>Country</div>
    <div>Conf.</div>
  </div>
)}
        {list.map((evt) => {

  // =========================
  // CVEs
  // =========================
  if (activeTab === "cves") {
    return (
      <div
        key={evt.id || evt.indicator}
        className="rounded-lg border border-cyan-900/30 bg-[#08131d] p-3 hover:border-cyan-500/40 transition"
      >
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="px-2 py-1 rounded bg-emerald-500/15 text-emerald-400 text-[11px] font-semibold">
            {evt.indicator}
          </span>

          {evt.cvss && (
            <span className="px-2 py-1 rounded bg-red-500/15 text-red-400 text-[11px]">
              CVSS {evt.cvss}
            </span>
          )}

          <span className="px-2 py-1 rounded bg-amber-500/15 text-amber-300 text-[11px]">
            {evt.source}
          </span>
        </div>

        <div className="text-white font-semibold text-sm leading-6">
          {evt.title}
        </div>

        <div className="mt-2 text-gray-500 text-xs">
          {evt.vendor || "Unknown Vendor"}
        </div>

        <div className="mt-3 flex justify-between text-[11px] text-gray-500">
          <span>{timeAgo(evt.timestamp)}</span>
          <span>{evt.source}</span>
        </div>
      </div>
    );
  }

  // =========================
  // BLACKLIST
  // =========================
  if (isBlacklist) {
    return (
      <div
        key={evt.id || evt.indicator}
        className="grid grid-cols-[2fr_1fr_2fr_1fr_1fr] gap-2 px-2 py-2 border-b border-white/5 text-[11px] hover:bg-white/5 transition"
      >
        <div className="text-red-400 truncate font-medium">
          {evt.indicator}
        </div>

        <div className="text-cyan-400">
          {evt.iocType === "ip:port"
            ? "C2 Server"
            : evt.iocType === "url"
            ? "Malicious URL"
            : evt.iocType === "domain"
            ? "Malicious Domain"
            : evt.iocType || "--"}
        </div>

        <div className="text-white truncate">
          {evt.malware || evt.title || "Unknown"}
        </div>

        <div className="text-gray-300 flex items-center gap-1">
         {evt.country ? (
  <>
    <span>{FLAGS[evt.country] || "🌍"}</span>
    <span>{evt.country}</span>
  </>
) : (
  <span className="text-gray-500">Unknown</span>
)}
        </div>

        <div
          className={
            evt.confidence >= 90
              ? "text-emerald-400 font-semibold"
              : evt.confidence >= 75
              ? "text-amber-400 font-semibold"
              : "text-gray-400"
          }
        >
          {evt.confidence ? `${evt.confidence}%` : "--"}
        </div>
      </div>
    );
  }

  // =========================
  // THREAT FEED
  // =========================
  const sev = SEV[evt.severity] || SEV.INFO;

  return (
    <a
      key={evt.id}
      href={evt.reference || undefined}
      target={evt.reference ? "_blank" : undefined}
      rel="noopener"
      className="block rounded-md border-l-2 px-2.5 py-2 hover:bg-white/5 transition-colors"
      style={{ borderLeftColor: "currentColor" }}
    >
      <div className={`flex items-center gap-2 ${sev.text}`}>
        <span
          className={`px-1.5 py-0.5 rounded text-[0.6rem] font-bold ${sev.bg} ring-1 ${sev.ring}`}
        >
          {sev.label}
        </span>

        <span className="text-cyan-400 text-[0.62rem] uppercase tracking-wide">
          {evt.source}
        </span>

        {evt.cvss && (
          <span className="text-gray-500 text-[0.62rem]">
            CVSS {evt.cvss}
          </span>
        )}

        {evt.country_flag && (
          <span className="text-[0.75rem]">
            {evt.country_flag}
          </span>
        )}

        <span className="ml-auto text-gray-600 text-[0.6rem]">
          {timeAgo(evt.timestamp)}
        </span>
      </div>

      <div className="mt-1">
        <div className="text-gray-100 text-[0.78rem] leading-snug font-medium">
          {evt.title}
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {evt.indicator && (
            <span className="px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px]">
              {evt.iocType || "IOC"} &nbsp; {evt.indicator}
            </span>
          )}

          {evt.cvss && (
            <span className="px-2 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-300 text-[10px]">
              CVSS {evt.cvss}
            </span>
          )}
        </div>

        <div className="mt-2 flex items-center gap-2 flex-wrap text-[10px] text-gray-500">
          {evt.vendor && <span>{evt.vendor}</span>}

          {evt.country && (
            <>
              <span>•</span>
              <span>{evt.country}</span>
            </>
          )}

          {evt.iocType && (
            <>
              <span>•</span>
              <span>{evt.iocType}</span>
            </>
          )}
        </div>
      </div>
    </a>
  );
})}
      </div>
      

      {/* Footer */}
      <div className="px-4 py-2 border-t border-white/8 bg-[#0f172a] flex items-center justify-between shrink-0">
        <span className="text-gray-600">trinity@soc:~$</span>
        <span className="text-gray-600">
          events: <span className="text-[#00ff99] font-semibold drop-shadow-[0_0_6px_#00ff99]">{stats.total}</span>{' '}
          | critical: <span className="text-[#00ff99] font-semibold drop-shadow-[0_0_6px_#00ff99]">{stats.critical}</span>
        </span>
      </div>
    </div>
  );
}
