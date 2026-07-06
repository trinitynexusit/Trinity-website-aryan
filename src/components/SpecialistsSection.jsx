export default function SpecialistsSection() {
  return (
   <section
  id="about"
  className="py-10"

>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-[#00ff99] text-sm tracking-[4px] uppercase font-mono mb-4">
          // OUR SPECIALISTS
        </p>

        <h2 className="text-2xl md:text-4xl font-extrabold uppercase text-white leading-tight mb-8">
          THE ARCHITECTS OF <br />
          YOUR RESILIENCE
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-[#061321] border border-[#00ff99]/10 rounded-xl p-5">
            <p className="text-[#00ff99] uppercase tracking-[3px] text-sm mb-4">
              Leadership
            </p>
            <h3 className="text-white text-lg font-semibold mb-2">
              Senior Security Architects
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Zero Trust architecture, Never-Trust-Always-Verify models,
              distributed systems security design.
            </p>
          </div>

          <div className="bg-[#061321] border border-[#00ff99]/10 rounded-xl p-6">
            <p className="text-[#00ff99] uppercase tracking-[3px] text-sm mb-4">
              Offensive Security
            </p>
            <h3 className="text-white text-lg font-semibold mb-2">
              Red Team & VAPT Specialists
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              CEH, OSCP certified ethical hackers. Web, API, mobile,
              network, cloud, OT/ICS testing.
            </p>
          </div>

          <div className="bg-[#061321] border border-[#00ff99]/10 rounded-xl p-6">
            <p className="text-[#00ff99] uppercase tracking-[3px] text-sm mb-4">
              Threat Intelligence
            </p>
            <h3 className="text-white text-lg font-semibold mb-2">
              AI-Security & SOC Analysts
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              AI-powered SIEM/SOAR, threat hunting, CTI, dark web
              monitoring and detection engineering.
            </p>
          </div>
          <div className="bg-[#061321] border border-[#00ff99]/10 rounded-xl p-6">
  <p className="text-[#00ff99] uppercase tracking-[3px] text-sm mb-4">
    Cloud Security
  </p>
  <h3 className="text-white text-xl font-semibold mb-3">
    Cloud Security Engineers
  </h3>
  <p className="text-gray-400 text-sm leading-relaxed mb-4">
    CSPM, CWPP, CIEM, Kubernetes hardening. AWS, Azure,
    GCP certified architects.
  </p>
</div>

<div className="bg-[#061321] border border-[#00ff99]/10 rounded-xl p-6">
  <p className="text-[#00ff99] uppercase tracking-[3px] text-sm mb-4">
    Compliance
  </p>
  <h3 className="text-white text-lg font-semibold mb-2">
    GRC & Compliance Consultants
  </h3>
  <p className="text-gray-400 text-sm leading-relaxed mb-4">
    ISO 27001 lead auditors, DPDP 2023 specialists,
    RBI/SEBI/IRDAI advisory.
  </p>
</div>

<div className="bg-[#061321] border border-[#00ff99]/10 rounded-xl p-6">
  <p className="text-[#00ff99] uppercase tracking-[3px] text-sm mb-4">
    Engineering
  </p>
  <h3 className="text-white text-lg font-semibold mb-2">
    DevSecOps Engineers
  </h3>
  <p className="text-gray-400 text-sm leading-relaxed mb-4">
    SAST/DAST integration, SBOM, supply chain security,
    container and Kubernetes security.
  </p>
</div>

<div className="bg-[#061321] border border-[#00ff99]/10 rounded-xl p-6">
  <p className="text-[#00ff99] uppercase tracking-[3px] text-sm mb-4">
    Forensics
  </p>
  <h3 className="text-white text-lg font-semibold mb-2">
    DFIR Specialists
  </h3>
  <p className="text-gray-400 text-sm leading-relaxed mb-4">
    Digital forensics, malware analysis, ransomware recovery
    and CERT-In reporting capability.
  </p>
</div>

<div className="bg-[#061321] border border-[#00ff99]/10 rounded-xl p-6">
  <p className="text-[#00ff99] uppercase tracking-[3px] text-sm mb-4">
    Advisory
  </p>
  <h3 className="text-white text-xl font-semibold mb-3">
    Virtual CISOs (vCISO)
  </h3>
  <p className="text-gray-400 text-sm leading-relaxed mb-4">
    Fractional CISO programme, security strategy,
    board reporting and regulatory liaison.
  </p>
</div>

<div className="bg-[#061321] border border-[#00ff99]/10 rounded-xl p-6">
  <p className="text-[#00ff99] uppercase tracking-[3px] text-sm mb-4">
    Identity
  </p>
  <h3 className="text-white text-lg font-semibold mb-2">
    IAM / PAM Specialists
  </h3>
 <p className="text-gray-400 text-sm leading-relaxed mb-4">
    CyberArk, BeyondTrust, SailPoint, Zero Trust access,
    JIT provisioning and IGA programme design.
  </p>
</div>
        </div>
      </div>
    </section>
  );
}