import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { Terminal, Shield, Bug, RotateCw, Ban } from 'lucide-react';

// ── CONFIG ──────────────────────────────────────────────────────────
const WORKER_URL = 'https://trinity-cti-worker.trinitynexus-it.workers.dev';
const POLL_INTERVAL = 45 * 1000; // 45s — matches worker cache

// ── Severity → colour ──────────────────────────────────────────────
const SEV = {
  CRITICAL: { text: 'text-[#ff1a2b]', bg: 'bg-[#ff1a2b]/15', ring: 'ring-[#ff1a2b]/40', label: 'CRIT', glow: 'drop-shadow-[0_0_6px_#ff1a2b]' },
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

// ── Live animated matrix-grid background (contained inside the card) ─
function MatrixGridBackgroundImpl() {
  const columnCount = 18;
  const columns = Array.from({ length: columnCount }, (_, i) => {
    const rows = 30;
    const chars = Array.from({ length: rows }, () => (Math.random() > 0.5 ? '1' : '0'));
    return {
      left: (i / columnCount) * 100,
      duration: 7 + (i % 6) * 1.4,
      delay: -(i * 0.9),
      opacity: 0.25 + (i % 3) * 0.08,
      chars,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* static grid lines */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(57,255,106,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,106,0.6) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* falling code columns */}
      {columns.map((col, i) => (
        <div
          key={i}
          className="matrix-col absolute top-0 font-mono text-[10px] leading-[14px] whitespace-pre text-[#39ff6a]"
          style={{
            left: `${col.left}%`,
            opacity: col.opacity,
            animationDuration: `${col.duration}s`,
            animationDelay: `${col.delay}s`,
          }}
        >
          {col.chars.join('\n')}
        </div>
      ))}
      <style>{`
        .matrix-col {
          animation-name: matrixFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes matrixFall {
          0% { transform: translateY(-60%); }
          100% { transform: translateY(60%); }
        }
      `}</style>
    </div>
  );
}

const MatrixGridBackground = memo(MatrixGridBackgroundImpl);

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
    // Single card: rounded, bordered, overflow-hidden so nothing (border lines, animation) ever spills outside
    <div className="relative rounded-xl border border-[#17ff5c]/60 bg-[#020810] overflow-hidden font-mono text-xs flex flex-col shadow-[0_0_18px_rgba(23,255,92,0.22),inset_0_0_26px_rgba(23,255,92,0.06)]">
      <MatrixGridBackground />

      <div className="relative z-10 flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0f172a]/90 border-b border-[#17ff5c]/20 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff1a2b]/90 drop-shadow-[0_0_4px_#ff1a2b]" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-[#39ff6a]/80" />
          </div>
          <div className="flex items-center gap-1.5 ml-3 text-gray-500">
            <Shield size={11} />
            <span>trinity-soc — live intel</span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <span className="text-gray-600 text-[0.65rem] normal-case">
              {updatedAt ? `Updated ${updatedAt.toLocaleTimeString('en-IN', { hour12: true })}` : ''}
            </span>
            <div className="flex items-center gap-1.5">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  status === 'live' ? 'bg-[#39ff6a] animate-pulse shadow-[0_0_6px_#39ff6a]'
                  : status === 'error' ? 'bg-[#ff1a2b] drop-shadow-[0_0_6px_#ff1a2b]'
                  : 'bg-gray-500'
                }`}
              />
              <span className={status === 'live' ? 'text-[#39ff6a]' : status === 'error' ? 'text-[#ff1a2b]' : 'text-gray-500'}>
                {status === 'live' ? 'LIVE' : status === 'error' ? 'RECONNECTING' : 'CONNECTING'}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 px-2 py-2 bg-[#0b1220]/90 border-b border-[#17ff5c]/20 shrink-0">
          {TABS.map(t => {
            const Icon = t.icon;
            const active = activeTab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-colors ${
                  active ? 'bg-[#39ff6a]/15 text-[#39ff6a] ring-1 ring-[#39ff6a]/30' : 'text-gray-500 hover:text-gray-300'
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

        {/* List */}
        <div
          ref={listRef}
          onMouseEnter={() => { isHoveringRef.current = true; }}
          onMouseLeave={() => { isHoveringRef.current = false; }}
          className="h-[400px] overflow-y-auto p-2 space-y-1 scrollbar-thin">
          {list.length === 0 && status === 'connecting' && (
            <div className="text-gray-600 p-2">Connecting to threat feeds…</div>
          )}
          {list.length === 0 && status === 'error' && (
            <div className="text-[#ff1a2b] drop-shadow-[0_0_6px_#ff1a2b] p-2">Worker unreachable — check WORKER_URL / deployment.</div>
          )}
          {list.length === 0 && status === 'live' && (
            <div className="text-gray-600 p-2">No events in this category right now.</div>
          )}
  {isBlacklist && (
    <div className="grid grid-cols-[2fr_1fr_2fr_1fr_1fr] gap-2 px-2 py-2 text-[10px] uppercase text-gray-500 border-b border-[#17ff5c]/20 sticky top-0 bg-[#020810]/90 z-10">
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
          className="rounded-lg border border-[#17ff5c]/20 bg-[#08131d]/55 p-1.5 hover:border-[#39ff6a]/40 transition text-center"
        >
          <div className="flex flex-wrap justify-center gap-1.5 mb-1">
            <span className="px-1.5 py-0.5 rounded bg-[#39ff6a]/15 text-[#39ff6a] text-[9px] font-semibold">
              {evt.indicator}
            </span>

            {evt.cvss && (
              <span className="px-1.5 py-0.5 rounded bg-[#ff1a2b]/15 text-[#ff1a2b] text-[9px] drop-shadow-[0_0_5px_#ff1a2b]">
                CVSS {evt.cvss}
              </span>
            )}

            <span className="px-1.5 py-0.5 rounded bg-[#ff1a2b]/15 text-[#ff1a2b] text-[9px] drop-shadow-[0_0_5px_#ff1a2b]">
              {evt.source}
            </span>
          </div>

          <div className="text-white font-semibold text-[0.7rem] leading-4">
            {evt.title}
          </div>

          <div className="mt-1 text-gray-500 text-[9px]">
            {evt.vendor || "Unknown Vendor"}
          </div>

          <div className="mt-1 flex justify-center gap-2 text-[9px] text-gray-500">
            <span>{timeAgo(evt.timestamp)}</span>
            <span>•</span>
            <span className="text-[#ff1a2b] drop-shadow-[0_0_4px_#ff1a2b]">{evt.source}</span>
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
          className="grid grid-cols-[2fr_1fr_2fr_1fr_1fr] gap-2 px-2 py-2 border-b border-[#17ff5c]/10 text-[11px] hover:bg-white/5 transition"
        >
          <div className="text-[#ff1a2b] truncate font-medium drop-shadow-[0_0_4px_#ff1a2b]">
            {evt.indicator}
          </div>

          <div className="text-[#39ff6a]">
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
                ? "text-[#39ff6a] font-semibold"
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
        className="block rounded-md border-l-2 px-2 py-1.5 hover:bg-white/5 transition-colors text-center"
        style={{ borderLeftColor: "currentColor" }}
      >
        <div className={`flex flex-wrap items-center justify-center gap-1.5 ${sev.text}`}>
          <span
            className={`px-1 py-0.5 rounded text-[0.55rem] font-bold ${sev.bg} ring-1 ${sev.ring} ${sev.glow || ''}`}
          >
            {sev.label}
          </span>

          <span className="text-[#39ff6a] text-[0.58rem] uppercase tracking-wide">
            {evt.source}
          </span>

          {evt.cvss && (
            <span className="text-gray-500 text-[0.58rem]">
              CVSS {evt.cvss}
            </span>
          )}

          {evt.country_flag && (
            <span className="text-[0.7rem]">
              {evt.country_flag}
            </span>
          )}

          <span className="text-gray-600 text-[0.56rem]">
            {timeAgo(evt.timestamp)}
          </span>
        </div>

        <div className="mt-0.5">
          <div className="text-gray-100 text-[0.72rem] leading-snug font-medium">
            {evt.title}
          </div>

          <div className="mt-1 flex flex-wrap justify-center gap-1.5">
            {evt.indicator && (
              <span className="px-1.5 py-0.5 rounded bg-[#39ff6a]/10 border border-[#39ff6a]/20 text-[#8bffb0] text-[9px]">
                {evt.iocType || "IOC"} &nbsp; {evt.indicator}
              </span>
            )}

            {evt.cvss && (
              <span className="px-1.5 py-0.5 rounded bg-[#ff1a2b]/10 border border-[#ff1a2b]/30 text-[#ff1a2b] text-[9px] drop-shadow-[0_0_4px_#ff1a2b]">
                CVSS {evt.cvss}
              </span>
            )}
          </div>

          <div className="mt-1 flex items-center justify-center gap-1.5 flex-wrap text-[9px] text-gray-500">
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
        <div className="px-3 py-1.5 border-t border-[#17ff5c]/20 bg-[#0f172a]/90 flex items-center justify-between gap-2 shrink-0 whitespace-nowrap overflow-x-auto">
          <span className="text-gray-600 text-[0.65rem]">trinity@soc:~$</span>

          <div className="flex items-center gap-2 text-[0.62rem]">
            <span className="text-[#ff1a2b] drop-shadow-[0_0_5px_#ff1a2b]">● {critCount} CRIT</span>
            <span className="text-amber-400">● {highCount} HIGH</span>
          </div>

          <span className="text-gray-600 text-[0.62rem]">
            events: <span className="text-[#39ff6a] font-semibold drop-shadow-[0_0_5px_#39ff6a]">{stats.total}</span>{' '}
            | crit: <span className="text-[#ff1a2b] font-semibold drop-shadow-[0_0_5px_#ff1a2b]">{stats.critical}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
