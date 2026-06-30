import ServiceTabs from "../components/ServiceTabs";
export default function NetworkSecurity() {
return (
  <>
    <ServiceTabs />

    {/* Hero Section */}
    <section className="relative overflow-hidden min-h-screen flex items-center border-b border-[#00ff99]/10">
  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,170,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.05)_1px,transparent_1px)] bg-[size:62px_62px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">

    {/* Breadcrumb */}
    <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
      <span>Home</span>
      <span>/</span>
      <span>Services</span>
      <span>/</span>
      <span className="text-white">GRC & Compliance</span>
    </div>

    {/* Badge */}
    <div className="inline-flex items-center border border-emerald-500/40 rounded-lg px-5 py-2 mb-8">
      <span className="text-emerald-400 font-semibold tracking-[3px] text-sm uppercase">
        D07 • GRC & Compliance
      </span>
    </div>

    {/* Heading */}
    <h1 className="text-white font-black uppercase leading-none tracking-tight">
      <span className="block text-5xl lg:text-7xl">
        Achieve Compliance
      </span>

      <span className="block mt-4 text-5xl lg:text-7xl text-emerald-400">
        Reduce Risk. Build Trust.
      </span>
    </h1>

    {/* Subtitle */}
    <p className="mt-10 text-gray-400 tracking-[2px] text-sm lg:text-lg">
      ISO 27001 • DPDP Act 2023 • CERT-In • RBI • SEBI • IRDAI • PCI DSS • GDPR
      • SOC 2 • HIPAA • NIS2 • NIST
    </p>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14 max-w-4xl">

      <div>
        <h2 className="text-emerald-400 text-5xl font-bold">31</h2>
        <p className="mt-2 text-xs tracking-[3px] text-gray-400 uppercase">
          Services
        </p>
      </div>

      <div>
        <h2 className="text-emerald-400 text-5xl font-bold">15</h2>
        <p className="mt-2 text-xs tracking-[3px] text-gray-400 uppercase">
          Add-ons
        </p>
      </div>

      <div>
        <h2 className="text-emerald-400 text-5xl font-bold">12+</h2>
        <p className="mt-2 text-xs tracking-[3px] text-gray-400 uppercase">
          Frameworks
        </p>
      </div>

      <div>
        <h2 className="text-emerald-400 text-5xl font-bold whitespace-nowrap">
          INDIA-FIRST
        </h2>
        <p className="mt-2 text-xs tracking-[3px] text-gray-400 uppercase">
          Expertise
        </p>
      </div>

    </div>

    {/* Divider */}
    <div className="w-full h-px bg-cyan-900/40 my-12" />

    {/* Buttons */}
    <div className="flex flex-wrap gap-5">

      <button className="px-8 py-4 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition">
        ⚡ Get Free Assessment
      </button>

      <button className="px-8 py-4 rounded-lg border border-cyan-700 text-emerald-400 hover:bg-emerald-400 hover:text-black transition">
        ← All Domains
      </button>

    </div>
{/* Overview Section */}
<section className="bg-[#07131f] py-16 border-t border-cyan-900/20">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* Left */}
      <div>
        <p className="text-emerald-400 uppercase tracking-[4px] text-sm mb-5">
          // Overview
        </p>

        <h2 className="text-4xl lg:text-5xl font-black uppercase text-white leading-tight mb-8">
          Every Framework.
          <br />
          One Partner.
        </h2>

        <div className="space-y-6 text-gray-400 text-[18px] leading-9">

          <p>
            Compliance is not just a checkbox—it is the minimum standard of
            security your stakeholders, regulators and customers expect.
            Trinity Nexus Technologies brings{" "}
            <span className="text-white font-semibold">
              India-first GRC expertise
            </span>{" "}
            covering every major framework applicable to Indian enterprises.
          </p>

          <p>
            We specialize in{" "}
            <span className="text-white font-semibold">
              DPDP Act 2023, CERT-In Directions, RBI IT Framework,
              SEBI CSCRF and IRDAI Guidelines
            </span>{" "}
            while also supporting ISO 27001, PCI DSS, GDPR, SOC 2,
            HIPAA and NIS2.
          </p>

          <p>
            Our GRC practice helps organizations build an{" "}
            <span className="text-white font-semibold">
              Information Security Management System (ISMS)
            </span>{" "}
            that reduces risk, satisfies regulators and builds customer trust.
          </p>

        </div>
      </div>

      {/* Right Card */}
      <div className="rounded-2xl border border-cyan-900/30 bg-[#0b1828] p-8">

        <p className="uppercase tracking-[5px] text-xs text-gray-500 mb-8">
          At a Glance
        </p>

        <div className="space-y-5">

          {[
            [
              "Indian Frameworks",
              "DPDP 2023 • CERT-In • RBI IT • SEBI CSCRF • IRDAI • MeitY • TRAI",
            ],
            [
              "Global Frameworks",
              "ISO 27001 • PCI DSS • GDPR • SOC 2 • HIPAA • NIS2 • NIST CSF 2.0",
            ],
            [
              "Engagement Models",
              "Assessment • Project • Advisory",
            ],
            [
              "Team",
              "ISO 27001 Lead Auditors • Certified Risk Managers • DPOs",
            ],
            [
              "Deliverables",
              "Audit-ready evidence packs • Policy suites • Risk Registers",
            ],
          ].map(([title, value], index) => (
            <div
              key={index}
              className="flex justify-between gap-8 border-b border-cyan-900/20 pb-4 last:border-none"
            >
              <span className="text-gray-400 w-44">{title}</span>

              <span className="text-white text-right font-semibold">
                {value}
              </span>
            </div>
          ))}

        </div>

        <button className="w-full mt-8 bg-emerald-400 hover:bg-emerald-300 transition rounded-lg py-4 font-semibold text-black">
          Enquire Now →
        </button>

      </div>

    </div>
{/* Our Strengths */}
<section className="bg-[#07131f] py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-12">
      <p className="text-emerald-400 uppercase tracking-[4px] text-sm mb-3">
        // WHY CHOOSE TRINITY NEXUS
      </p>

      <h2 className="text-4xl lg:text-5xl font-black uppercase text-white">
        Our Strengths
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          icon: "🇮🇳",
          title: "India-First Compliance Expertise",
          desc:
            "Dedicated specialists in DPDP Act 2023, CERT-In Directions, RBI IT Framework, SEBI CSCRF and IRDAI guidelines.",
        },
        {
          icon: "🏆",
          title: "ISO 27001 Lead Auditors",
          desc:
            "Certified ISO 27001 Lead Auditors delivering complete ISMS implementation from assessment to certification.",
        },
        {
          icon: "💳",
          title: "PCI DSS v4.0 Specialists",
          desc:
            "Gap assessment, CDE scoping, segmentation validation, penetration testing and QSA support.",
        },
        {
          icon: "📋",
          title: "Policy Suite Development",
          desc:
            "Complete ISMS policy library covering access control, incident response, BCM, DR and cryptography.",
        },
        {
          icon: "⚖️",
          title: "Risk Management",
          desc:
            "Cyber risk assessments using ISO 27005 and FAIR with business-focused risk treatment plans.",
        },
        {
          icon: "🔄",
          title: "M&A Due Diligence",
          desc:
            "Cyber due diligence for mergers and acquisitions covering privacy, compliance and licensing risks.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-cyan-900/30 bg-[#0b1828] p-8 hover:border-emerald-500/40 transition"
        >
          <div className="text-4xl mb-6">{item.icon}</div>

          <h3 className="text-white text-2xl font-bold mb-4">
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
{/* How We Deliver */}
<section className="bg-[#07131f] py-16 border-t border-cyan-900/20">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <p className="text-emerald-400 uppercase tracking-[4px] text-sm mb-4">
      // OUR DELIVERY APPROACH
    </p>

    <h2 className="text-4xl lg:text-5xl font-black uppercase text-white mb-8">
      How We Deliver
    </h2>

    <p className="text-gray-400 text-lg max-w-4xl mb-14">
      Our GRC engagements follow a structured approach—from gap assessment
      through implementation to certification and ongoing maintenance.
    </p>

    <div className="space-y-10">

      {[
        {
          no: "01",
          title: "Gap Assessment & Scoping",
          desc:
            "Assess your current compliance posture against the target framework. Identify all gaps, prioritize findings and prepare a practical implementation roadmap.",
        },
        {
          no: "02",
          title: "Policy & Control Development",
          desc:
            "Develop or update policies, standards, procedures and technical controls required by the selected compliance framework.",
        },
        {
          no: "03",
          title: "Risk Assessment & Treatment",
          desc:
            "Perform ISO 27005 / FAIR risk assessments, identify threats and vulnerabilities, score risks and prepare treatment plans.",
        },
        {
          no: "04",
          title: "Implementation & Evidence Collection",
          desc:
            "Implement required controls, collect audit evidence and prepare documentation for internal and external assessments.",
        },
        {
          no: "05",
          title: "Audit Support & Certification",
          desc:
            "Support internal audits, certification audits, corrective actions and management reviews until successful certification.",
        },
      ].map((step) => (
        <div
          key={step.no}
          className="grid md:grid-cols-[70px_1fr] gap-8 border-b border-cyan-900/20 pb-8 last:border-none"
        >
          <div className="text-emerald-400 text-5xl font-black">
            {step.no}
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold mb-3">
              {step.title}
            </h3>

            <p className="text-gray-400 leading-8">
              {step.desc}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>

  </div>
</section>
  </div>
</section>
</>
  );
}