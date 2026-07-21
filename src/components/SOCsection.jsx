import { Link } from "react-router-dom";

export default function SOCSection() {
  return (
    <section className="py-24 border-t border-white/5 bg-[#041827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-[#00ff99] text-sm font-mono tracking-widest uppercase mb-4">
              D08 • Managed Security
            </p>

            <h2 className="text-5xl font-bold text-white mb-6">
              24×7 Security Operations
            </h2>

            <p className="text-gray-400 text-lg mb-8">
              Our Security Operations Centre never sleeps.
              L1/L2/L3 analysts, AI-powered SIEM, SOAR automation,
              and proactive threat hunting working around the clock.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>✓ MTTD under 15 minutes</li>
              <li>✓ CERT-In aligned incident response</li>
              <li>✓ Microsoft Sentinel, Splunk & QRadar</li>
              <li>✓ Automated SOAR playbooks</li>
              <li>✓ Enterprise SOC coverage</li>
            </ul>
           <Link
  to="/assessment"
  className="inline-block mt-8 px-8 py-4 bg-[#00ff99] text-black font-semibold rounded-lg hover:bg-[#00e68a] transition"
>
  Get SOC Assessment →
</Link>
          </div>

          <div className="bg-[#0f172a] border border-[#00ff99]/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto rounded-full border-4 border-[#00ff99]
              flex items-center justify-center text-[#00ff99] font-bold">
                SOC ACTIVE
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Network Perimeter</span>
                <span className="text-[#00ff99]">Protected</span>
              </div>

              <div className="flex justify-between">
                <span>Threat Feed</span>
                <span className="text-yellow-400">Processing</span>
              </div>

              <div className="flex justify-between">
                <span>Endpoint Coverage</span>
                <span className="text-[#00ff99]">98.6%</span>
              </div>

              <div className="flex justify-between">
                <span>Compliance Status</span>
                <span className="text-[#00ff99]">ISO Aligned</span>
              </div>
              <p className="mt-3 text-right text-[11px] text-gray-500 italic">
  * For illustrative purposes only; not actual client data.
</p>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}