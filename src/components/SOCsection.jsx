import { Link } from "react-router-dom";

export default function SOCSection() {
  return (
    <section className="py-24 border-t border-white/5 section-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-[#00ff99] text-sm font-mono tracking-widest uppercase mb-4">
              D08 • Managed Security
            </p>

            <h2 className="text-4xl font-bold text-white mb-4">
              24×7 Security Operations
            </h2>

            <p className="text-gray-400 text-lg mb-8">
              Our Security Operations Centre never sleeps. L1/L2/L3 analysts, AI-powered SIEM, SOAR automation, and proactive threat hunting — all working to keep you secure around the clock.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>✓ MTTD under 15 minutes — AI-accelerated detection</li>
              <li>✓ CERT-In 6-hour reporting built into every incident</li>
              <li>✓ SIEM: Microsoft Sentinel, Splunk, IBM QRadar, Elastic</li>
              <li>✓ SOAR playbooks for auto-containment of known threats</li>
              <li>✓ Three service tiers: Essentials · Professional · Enterprise</li>
            </ul>
           <Link
  to="/assessment"
  className="inline-block mt-8 px-8 py-4 bg-[#00ff99] text-black font-semibold rounded-lg hover:bg-[#00e68a] transition"
>
  Get SOC Assessment →
</Link>
          </div>

          <div className="bg-[#061321] border border-[#00ff99]/20 rounded-2xl p-8">

  <div className="flex justify-center mb-10">
    <div
      className="w-36 h-36 rounded-full border-4 border-[#00ff99]
      shadow-[0_0_40px_rgba(0,255,153,0.25)]
      flex items-center justify-center"
    >
      <div className="text-center">
        <div className="text-[#00ff99] text-xl font-bold">
          SOC
        </div>
        <div className="text-[#00ff99] text-xl font-bold">
          ACTIVE
        </div>
      </div>
    </div>
  </div>

  <div className="space-y-4">

    <div className="flex justify-between items-center bg-[#08111f] border border-[#00ff99]/10 rounded-lg px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#00ff99]" />
        <span>Network Perimeter</span>
      </div>
      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-md text-sm">
        PROTECTED
      </span>
    </div>

    <div className="flex justify-between items-center bg-[#08111f] border border-white/10 rounded-lg px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <span>Active Threat Feed</span>
      </div>
      <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-md text-sm">
        LIVE
      </span>
    </div>

    <div className="flex justify-between items-center bg-[#08111f] border border-white/10 rounded-lg px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#00ff99]" />
        <span>Endpoint Coverage</span>
      </div>
      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-md text-sm">
        98.6%
      </span>
    </div>

    <div className="flex justify-between items-center bg-[#08111f] border border-white/10 rounded-lg px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-yellow-500" />
        <span>Threat Intel Feed</span>
      </div>
      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-md text-sm">
        PROCESSING
      </span>
    </div>

    <div className="flex justify-between items-center bg-[#08111f] border border-white/10 rounded-lg px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#00ff99]" />
        <span>Compliance Status</span>
      </div>
      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-md text-sm">
        ISO ALIGNED
      </span>
    </div>

    <div className="flex justify-between items-center bg-[#08111f] border border-white/10 rounded-lg px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#00ff99]" />
        <span>IR Response SLA</span>
      </div>
      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-md text-sm">
        &lt;4 HOURS
      </span>
    </div>

  </div>

</div>

        </div>

      </div>
    </section>
  );
}