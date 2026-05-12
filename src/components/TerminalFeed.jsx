import { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

const LOG_TEMPLATES = [
  {
    type: 'BLOCKED', color: 'text-red-400', messages: [
      'Ransomware C2 beacon — 185.220.101.47',
      'SQL injection attempt — /api/users',
      'Brute force login — 10,482 attempts/hr',
      'Malicious PowerShell execution — WORKSTATION-44',
      'Data exfiltration attempt — 2.3 GB outbound',
      'RCE payload detected — CVE-2024-3400',
      'Cryptominer dropper — endpoint-118',
      'Cobalt Strike beacon — 45.142.212.100',
    ]
  },
  {
    type: 'ALERT', color: 'text-amber-400', messages: [
      'Phishing email — 14 recipients targeted',
      'Anomalous admin login — off-hours',
      'Lateral movement — SMB spread detected',
      'Sensitive data access — 842 records',
      'Expired certificate — api.internal',
      'Privileged account anomaly — svc_backup',
      'DLP policy violation — external email',
      'New persistence mechanism — registry run key',
    ]
  },
  {
    type: 'RESOLVED', color: 'text-[#00FFB2]', messages: [
      'Phishing campaign neutralised — 200 IOCs pushed',
      'Compromised credential reset — MFA enforced',
      'Patch deployed — CVE-2024-1234 (CVSS 9.8)',
      'Rogue S3 bucket secured — data access revoked',
      'Incident closed — RCA report issued',
      'Firewall rule updated — threat actor blocked',
      'Endpoint isolated and reimaged — 12 min MTTR',
    ]
  },
  {
    type: 'INFO', color: 'text-blue-400', messages: [
      'Threat intel update — 1,204 new IOCs ingested',
      'SOC analyst shift change — handover complete',
      'SIEM rule tuned — FP rate reduced 18%',
      'Vulnerability scan complete — 2,847 assets',
      'TI feed correlated — APT29 TTP match',
      'Log ingestion nominal — 4.2M events/min',
    ]
  },
];

function randomLog() {
  const category = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)];
  const msg = category.messages[Math.floor(Math.random() * category.messages.length)];
  const ts = new Date().toLocaleTimeString('en-GB', { hour12: false });
  return { id: crypto.randomUUID(), type: category.type, color: category.color, msg, ts };
}

const INITIAL_LOGS = 6;

export default function TerminalFeed() {
  const [logs, setLogs] = useState(() =>
    Array.from({ length: INITIAL_LOGS }, randomLog)
  );
  const bottomRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const next = [...prev, randomLog()];
        return next.length > 30 ? next.slice(-30) : next;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const el = bottomRef.current?.parentElement;
    if (el) el.scrollTop = el.scrollHeight;
  }, [logs]);

  return (
    <div className="rounded-xl border border-white/10 bg-[#020810] overflow-hidden font-mono text-xs shadow-2xl shadow-black/60">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#050D12] border-b border-white/8">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-[#00FFB2]/80" />
        </div>
        <div className="flex items-center gap-1.5 ml-3 text-gray-500">
          <Terminal size={11} />
          <span>trinity-soc — live feed</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00FFB2] animate-pulse" />
          <span className="text-[#00FFB2]">LIVE</span>
        </div>
      </div>

      {/* Log entries */}
      <div className="h-72 overflow-y-auto p-4 space-y-1.5 scrollbar-thin">
        {logs.map((log, i) => (
          <div
            key={log.id}
            className={`flex gap-2 items-start transition-all duration-300 ${i === logs.length - 1 ? 'animate-[fadeIn_0.4s_ease-out]' : ''
              }`}
          >
            <span className="text-gray-600 shrink-0">{log.ts}</span>
            <span className={`font-bold shrink-0 ${log.color}`}>[{log.type}]</span>
            <span className="text-gray-400">{log.msg}</span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Status bar */}
      <div className="px-4 py-2.5 border-t border-white/8 bg-[#050D12] flex items-center justify-between">
        <span className="text-gray-600">trinity@soc:~$</span>
        <span className="text-gray-600">
          events: <span className="text-[#00FFB2]">4.2M/min</span> |
          analysts: <span className="text-[#00FFB2]"> 12 online</span>
        </span>
      </div>
    </div>
  );
}
