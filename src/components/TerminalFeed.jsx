import { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

// ── CONFIG ──────────────────────────────────────────────────────────
// Set this to your deployed Cloudflare Worker URL (from cloudflare-worker.js)
const WORKER_URL = 'https://tnx-cti.trinitynexus-it.workers.dev';
const POLL_INTERVAL = 45 * 1000; // 45s — matches worker cache
const MAX_LOGS = 30;

// ── Map real event data → same visual language as the old fake feed ──
const SEV_STYLE = {
  CRITICAL: { type: 'BLOCKED', color: 'text-red-400' },
  HIGH:     { type: 'ALERT',   color: 'text-amber-400' },
  MEDIUM:   { type: 'ALERT',   color: 'text-amber-400' },
  INFO:     { type: 'INFO',    color: 'text-blue-400' },
};

function toLogLine(evt) {
  const style = SEV_STYLE[evt.severity] || SEV_STYLE.INFO;
  const ts = new Date(evt.timestamp);
  const tsStr = isNaN(ts)
    ? ''
    : ts.toLocaleTimeString('en-GB', { hour12: false });
  return {
    id: evt.id,
    type: style.type,
    color: style.color,
    msg: `${evt.title}${evt.country_flag ? ' ' + evt.country_flag : ''}`,
    ts: tsStr,
    reference: evt.reference,
  };
}

export default function TerminalFeed() {
  const [logs, setLogs] = useState([]);
  const [stats, setStats] = useState({ total: 0, critical: 0 });
  const [status, setStatus] = useState('connecting'); // connecting | live | error
  const bottomRef = useRef(null);
  const seenIds = useRef(new Set());

  useEffect(() => {
    let pollTimer;
    let cancelled = false;

    async function fetchThreats() {
      try {
        const resp = await fetch(`${WORKER_URL}/api/threats`, {
          headers: { Accept: 'application/json' },
          cache: 'no-cache',
        });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const data = await resp.json();
        if (cancelled) return;

        const newEvents = (data.events || []).filter(
          (e) => !seenIds.current.has(e.id)
        );
        newEvents.forEach((e) => seenIds.current.add(e.id));

        if (newEvents.length) {
          setLogs((prev) => {
            const next = [...prev, ...newEvents.map(toLogLine)];
            return next.length > MAX_LOGS ? next.slice(-MAX_LOGS) : next;
          });
        }
        setStats(data.stats || { total: 0, critical: 0 });
        setStatus('live');
      } catch (err) {
        if (!cancelled) setStatus('error');
        console.error('[CTI] fetch failed:', err.message);
      }
    }

    fetchThreats();
    pollTimer = setInterval(fetchThreats, POLL_INTERVAL);
    return () => {
      cancelled = true;
      clearInterval(pollTimer);
    };
  }, []);

  useEffect(() => {
    const el = bottomRef.current?.parentElement;
    if (el) el.scrollTop = el.scrollHeight;
  }, [logs]);

  return (
    <div className="rounded-xl border border-white/10 bg-[#020810] overflow-hidden font-mono text-xs shadow-2xl shadow-black/60">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0f172a] border-b border-white/8">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-[#06b6d4]/80" />
        </div>
        <div className="flex items-center gap-1.5 ml-3 text-gray-500">
          <Terminal size={11} />
          <span>trinity-soc — live feed</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              status === 'live'
                ? 'bg-[#06b6d4] animate-pulse'
                : status === 'error'
                ? 'bg-red-500'
                : 'bg-gray-500'
            }`}
          />
          <span
            className={
              status === 'live'
                ? 'text-[#06b6d4]'
                : status === 'error'
                ? 'text-red-400'
                : 'text-gray-500'
            }
          >
            {status === 'live'
              ? 'LIVE'
              : status === 'error'
              ? 'RECONNECTING'
              : 'CONNECTING'}
          </span>
        </div>
      </div>

      <div className="h-[400px] overflow-y-auto p-4 space-y-0.5 scrollbar-thin">
        {logs.length === 0 && status === 'connecting' && (
          <div className="text-gray-600">Connecting to threat feeds…</div>
        )}
        {logs.length === 0 && status === 'error' && (
          <div className="text-red-400">
            Worker unreachable — check WORKER_URL / deployment.
          </div>
        )}
        {logs.map((log, i) => (
          <a
            key={log.id}
            href={log.reference || undefined}
            target={log.reference ? '_blank' : undefined}
            rel={log.reference ? 'noopener' : undefined}
            className={`flex gap-2 items-start transition-all duration-300 hover:bg-white/5 rounded px-1 -mx-1 ${
              i === logs.length - 1 ? 'animate-[fadeIn_0.4s_ease-out]' : ''
            }`}
          >
            <span className="text-gray-600 shrink-0">{log.ts}</span>
            <span className={`font-bold shrink-0 ${log.color}`}>
              [{log.type}]
            </span>
            <span className="text-gray-400">{log.msg}</span>
          </a>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="px-4 py-2.5 border-t border-white/8 bg-[#0f172a] flex items-center justify-between">
        <span className="text-gray-600">trinity@soc:~$</span>
        <span className="text-gray-600">
          events:{' '}
          <span className="text-[#00ff99] font-semibold drop-shadow-[0_0_6px_#00ff99]">
            {stats.total}
          </span>{' '}
          |{' '}
          critical:{' '}
          <span className="text-[#00ff99] font-semibold drop-shadow-[0_0_6px_#00ff99]">
            {stats.critical}
          </span>
        </span>
      </div>
    </div>
  );
}
