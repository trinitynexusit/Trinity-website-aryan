export default function SecurityBulletinSection() {
  return (
    <section className="py-16 border-t border-white/5 section-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div>
            <p className="text-[#00ff99] text-sm tracking-[4px] uppercase font-mono mb-4">
              // THREAT INTELLIGENCE
            </p>

            <h2 className="text-4xl font-bold text-white mb-3">
              SECURITY BULLETIN
            </h2>

            <p className="text-gray-400 text-base">
              Monthly threat intelligence, India compliance updates,
              zero-day advisories.
            </p>
          </div>

          <button className="mt-6 lg:mt-0 px-6 py-3 border border-[#00ff99]/20 rounded-lg text-[#00ff99] hover:bg-[#00ff99]/10 transition">
            Subscribe Free →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#061321] border border-[#00ff99]/10 rounded-xl p-5">
            <p className="text-[#00ff99] text-xs tracking-[3px] uppercase mb-4">
              March 2025 • Threat Intel
            </p>

            <h3 className="text-white text-xl font-semibold mb-3">
              Global Cyber Attack Trends Q1 2025:
              Ransomware Evolves, AI Phishing Surges 340%
            </h3>

            <p className="text-gray-400 mb-6">
              Double-extortion ransomware, AI-generated spear-phishing,
              and critical infrastructure attacks dominate the threat landscape.
            </p>

            <span className="text-gray-500 text-sm">
              12 min read • SOC Team
            </span>
          </div>

          <div className="bg-[#061321] border border-[#00ff99]/10 rounded-xl p-5">
            <p className="text-[#00ff99] text-xs tracking-[3px] uppercase mb-4">
              Feb 2025 • India Alert
            </p>

            <h3 className="text-white text-xl font-semibold mb-3">
              DPDP Act 2023 Enforcement Begins:
              What Every Indian Business Must Do Now
            </h3>

            <p className="text-gray-400 mb-4">
              Compliance checklist, reporting obligations and key actions
              organizations must complete.
            </p>

            <span className="text-gray-500 text-sm">
              8 min read • GRC Team
            </span>
          </div>

          <div className="bg-[#061321] border border-[#00ff99]/10 rounded-xl p-5">
            <p className="text-[#00ff99] text-xs tracking-[3px] uppercase mb-4">
              Jan 2025 • Advisory
            </p>

            <h3 className="text-white text-xl font-semibold mb-3">
              CERT-In 6-Hour Rule:
              Complete Implementation Guide
            </h3>

            <p className="text-gray-400 mb-6">
              Reporting timelines, incident qualification and notification
              procedures.
            </p>

            <span className="text-gray-500 text-sm">
              6 min read • IR Team
            </span>
          </div>

        </div>

      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-8">

  
</div>
    </section>
  );
}