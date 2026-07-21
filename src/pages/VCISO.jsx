import { useNavigate } from "react-router-dom";
import ServiceTabs from "../components/ServiceTabs";
export default function NetworkSecurity() {
  const navigate = useNavigate();

  return (
    <>
      <ServiceTabs />

      <section
  className="relative overflow-hidden border-b border-cyan-900/30"
 style={{
  background: `
    radial-gradient(circle at top,
      rgba(59,130,246,0.10) 0%,
      transparent 45%
    ),
    linear-gradient(
      180deg,
      #173867 0%,
      #1b447c 40%,
      #214d8b 100%
    )
  `,
}} >

  {/* Background Grid */}
  <div
  className="absolute inset-0 opacity-25"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
    `,
    backgroundSize: "72px 72px",
  }}
/>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">

    {/* Breadcrumb */}
    <div className="flex items-center gap-3 text-sm text-gray-400 mb-6">
      <span>Home</span>
      <span>/</span>
      <span>Services</span>
      <span>/</span>
      <span className="text-white">vCISO & Strategic Advisory</span>
    </div>

    {/* Badge */}
    <div className="inline-flex border border-emerald-500/40 rounded-lg px-4 py-2 mb-6">
      <span className="text-emerald-400 uppercase tracking-[3px] text-xs font-semibold">
        D10 • vCISO & Strategic Advisory
      </span>
    </div>

    {/* Heading */}
    <h1 className="font-black uppercase leading-[0.95]">

      <span className="block text-4xl md:text-5xl lg:text-6xl text-white">
        Strategic Security Leadership
      </span>

      <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl text-emerald-400">
        On Demand. On Budget.
      </span>

    </h1>

    {/* Description */}
    <p className="mt-6 text-gray-400 text-base lg:text-lg leading-8 max-w-5xl">
      Fractional CISO • Security Strategy • Board Reporting • M&A Advisory •
      Budget Planning • Vendor Selection
    </p>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">

      <div>
        <h3 className="text-emerald-400 text-4xl font-black">10</h3>
        <p className="text-[11px] tracking-[3px] uppercase text-gray-400 mt-2">
          Services
        </p>
      </div>

      <div>
        <h3 className="text-emerald-400 text-4xl font-black">5</h3>
        <p className="text-[11px] tracking-[3px] uppercase text-gray-400 mt-2">
          Add-ons
        </p>
      </div>

      <div>
        <h3 className="text-emerald-400 text-2xl md:text-3xl font-black">
          Fractional
        </h3>
        <p className="text-[11px] tracking-[3px] uppercase text-gray-400 mt-2">
          CISO Model
        </p>
      </div>

      <div>
        <h3 className="text-emerald-400 text-2xl md:text-3xl font-black">
          Board-Ready
        </h3>
        <p className="text-[11px] tracking-[3px] uppercase text-gray-400 mt-2">
          Reporting
        </p>
      </div>

    </div>

    {/* Divider */}
    <div className="h-px w-full bg-cyan-900/30 my-10" />

    {/* Buttons */}
    <div className="flex flex-wrap gap-4">

      <button
  onClick={() => navigate("/assessment", { replace: false })}
  className="px-7 py-3 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition"
>
   Get Free Assessment
</button>

      <button className="px-7 py-3 rounded-lg border border-cyan-700 text-emerald-400 hover:bg-emerald-400 hover:text-black transition">
        ← All Domains
      </button>

    </div>

  </div>
{/* ================= Overview ================= */}

<section className="py-14 bg-[#08131f]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* Left Side */}
      <div>

        <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-4">
          // Overview
        </p>

        <h2 className="text-3xl lg:text-5xl font-black uppercase text-white leading-tight">
          Executive Security Leadership
          <br />
          Without The Executive Cost
        </h2>

        <div className="mt-8 space-y-5 text-gray-400 text-base leading-8">

          <p>
            A full-time CISO costs ₹1–2 crore per year in salary alone before
            bonus, benefits and recruiter fees. Many organisations need
            strategic security leadership but cannot justify that investment.
            Trinity Nexus Technologies provides a
            <span className="text-white font-semibold">
              {" "}Virtual CISO (vCISO)
            </span>{" "}
            programme that delivers experienced leadership at a fraction of the
            cost.
          </p>

          <p>
            Our vCISOs are experienced security leaders who build security
            programmes, present directly to the board, manage vendors and
            represent your organisation with regulators including CERT-In,
            RBI and SEBI.
          </p>

          <p>
            Whether you need one day per month for a startup or five days per
            month for an enterprise, we provide a flexible engagement model
            tailored to your business.
          </p>

        </div>

      </div>

      {/* Right Card */}

      <div className="relative z-10 rounded-2xl border border-cyan-900/40 bg-[#0c1b2d] p-6">

        <p className="uppercase tracking-[4px] text-[11px] text-gray-500 mb-5">
          At A Glance
        </p>

        <div className="space-y-5 text-sm">

          {[
            [
              "Engagement Models",
              "1-2 days/month (SMB) • 2-5 days/month (Enterprise)",
            ],
            [
              "Certifications",
              "CISSP • CISM • ISO 27001 Lead Auditor",
            ],
            [
              "Board Experience",
              "Board briefings • Regulatory presentations",
            ],
            [
              "Regulatory Liaison",
              "CERT-In • RBI • SEBI • IRDAI • DPA",
            ],
            [
              "Industries",
              "BFSI • IT/ITeS • Healthcare • Manufacturing • Government",
            ],
          ].map(([title, value]) => (
            <div
              key={title}
              className="flex justify-between gap-5 border-b border-cyan-900/20 pb-4"
            >
              <span className="text-gray-400">{title}</span>

              <span className="text-white font-semibold text-right max-w-[260px]">
                {value}
              </span>
            </div>
          ))}

        </div>

        <button
  onClick={() => navigate("/assessment", { replace: false })}
  className="relative z-20 w-full mt-8 bg-emerald-400 text-black py-3 rounded-lg font-semibold hover:bg-emerald-300 transition"
>
  Enquire Now →
</button>

      </div>

    </div>

  </div>
</section>

{/* ================= OUR STRENGTHS ================= */}

{/* ================= OUR STRENGTHS ================= */}

<section
  className="relative py-24 overflow-hidden"
  style={{
    background: `
      radial-gradient(circle at top, #1d4b8f 0%, #173d78 25%, #102d58 50%, #08131d 100%)
    `,
  }}
>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="text-center mb-10">

      <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
        // Why Choose Trinity Nexus
      </p>

      <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
        Our Strengths
      </h2>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          icon: "🏅",
          title: "Board-Level Credibility",
          desc: "Our vCISOs present technical cyber risks in business language for CEOs, boards and executive leadership."
        },
        {
          icon: "📊",
          title: "Strategy & Roadmap Development",
          desc: "2–3 year cyber security roadmap aligned with business objectives, regulatory obligations and investment planning."
        },
        {
          icon: "💰",
          title: "Budget Optimisation",
          desc: "Benchmark security spend, eliminate redundant investments and maximise ROI from cyber programmes."
        },
        {
          icon: "⚖️",
          title: "Regulatory Representation",
          desc: "Support for CERT-In, RBI, SEBI and IRDAI engagements including audit preparation and compliance reporting."
        },
        {
          icon: "🤝",
          title: "Vendor Risk & Selection",
          desc: "Independent advisory for MSSP and security vendor evaluation, RFP creation and contract negotiation."
        },
        {
          icon: "🔎",
          title: "M&A Cyber Due Diligence",
          desc: "Technical, governance and compliance assessment before acquisitions to identify cyber risks."
        }
      ].map((item, index) => (

        <div
          key={index}
          className="rounded-xl border border-cyan-900/30 bg-[#0b1b2d] p-6 hover:border-emerald-400 transition"
        >

          <div className="text-3xl mb-4">
            {item.icon}
          </div>

          <h3 className="text-xl font-bold text-white mb-3">
            {item.title}
          </h3>

          <p className="text-gray-400 leading-7 text-sm">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>

{/* ================= HOW WE DELIVER ================= */}

<section className="py-14 bg-[#08131f]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
      // Our Delivery Approach
    </p>

    <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-5">
      How We Deliver
    </h2>

    <p className="text-gray-400 text-base max-w-3xl mb-12">
      Our vCISO engagement begins with a rapid security programme assessment
      and builds into strategic security ownership within weeks.
    </p>

    <div className="space-y-8">

      {[
        {
          no: "01",
          title: "Security Programme Maturity Assessment",
          desc: "Rapid assessment across people, process and technology. CMMI-inspired scoring, benchmarking and identification of critical gaps."
        },
        {
          no: "02",
          title: "Strategy & Roadmap Development",
          desc: "Develop a 2–3 year cyber security roadmap aligned with business goals, regulatory obligations and investment priorities."
        },
        {
          no: "03",
          title: "Quick Wins & Board Briefing",
          desc: "Implement immediate improvements and prepare executive board presentations covering cyber posture, risks and investment priorities."
        },
        {
          no: "04",
          title: "Ongoing Advisory & Governance",
          desc: "Monthly vCISO sessions, vendor oversight, policy reviews, regulatory liaison and governance support."
        },
        {
          no: "05",
          title: "CISO Transition Support (If Required)",
          desc: "Support hiring and handover to a full-time CISO through documentation, knowledge transfer and governance continuity."
        }
      ].map((step) => (

        <div
          key={step.no}
          className="flex gap-6 border-b border-cyan-900/20 pb-8"
        >

          <div className="text-emerald-500 text-4xl font-black min-w-[70px]">
            {step.no}
          </div>

          <div>

            <h3 className="text-xl font-bold text-white mb-3">
              {step.title}
            </h3>

            <p className="text-gray-400 text-sm leading-7 max-w-5xl">
              {step.desc}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

{/* ================= COMPLETE SERVICE LIST ================= */}

<section
  className="relative py-20 overflow-hidden"
  style={{
    background:
      "linear-gradient(180deg, #173867 0%, #1b447c 45%, #214d8b 100%)",
  }}
>
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-2">
      // 10 Services • 5 Add-ons
    </p>

    <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-10">
      Complete Service List
    </h2>

    <div className="space-y-5">

      {[
        {
          tag: "Retainer",
          color: "bg-purple-900/30 text-purple-300 border-purple-700",
          title: "Virtual CISO (vCISO) — Full Retainer",
          desc: "Dedicated fractional CISO (2–5 days/month): security strategy ownership, board reporting, vendor oversight, regulatory liaison and budget planning.",
          deliverable: "Monthly security leadership report + board deck"
        },
        {
          tag: "Retainer",
          color: "bg-purple-900/30 text-purple-300 border-purple-700",
          title: "vCISO — Startup/SMB Package",
          desc: "Lightweight vCISO retainer (1–2 days/month): security foundations, tool selection, investor due diligence and compliance milestones.",
          deliverable: "Monthly advisory summary + priority action list"
        },
        {
          tag: "Advisory",
          color: "bg-yellow-900/30 text-yellow-300 border-yellow-700",
          title: "Security Strategy & Roadmap Development",
          desc: "Develop a 2–3 year cyber security roadmap aligned with business objectives, risk appetite and regulatory obligations.",
          deliverable: "Security strategy document + investment roadmap"
        },
        {
          tag: "Advisory",
          color: "bg-yellow-900/30 text-yellow-300 border-yellow-700",
          title: "Board & Executive Security Briefing",
          desc: "Executive board presentations covering cyber posture, threat landscape, compliance and investment priorities.",
          deliverable: "Board briefing deck + executive narrative"
        },
        {
          tag: "Advisory",
          color: "bg-yellow-900/30 text-yellow-300 border-yellow-700",
          title: "Cybersecurity Budget Planning & Review",
          desc: "Review security investments, benchmark spend and optimise budget allocation with ROI analysis.",
          deliverable: "Budget review report + benchmarking analysis"
        },
        {
          tag: "Assessment",
          color: "bg-pink-900/30 text-pink-300 border-pink-700",
          title: "Security Programme Maturity Assessment",
          desc: "Holistic assessment across people, process and technology using maturity benchmarking.",
          deliverable: "Gap assessment + maturity scorecard"
        },
        {
  tag: "Advisory",
  color: "bg-yellow-900/30 text-yellow-300 border-yellow-700",
  title: "Cyber Insurance Advisory",
  desc: "Help complete insurer questionnaires, assess coverage gaps and benchmark posture against insurer minimum requirements.",
  deliverable: "Insurance readiness report + questionnaire support pack"
},
{
  tag: "Project",
  color: "bg-emerald-900/30 text-emerald-300 border-emerald-700",
  title: "M&A Cyber Due Diligence",
  desc: "Pre-acquisition security assessment covering technical vulnerabilities, compliance liabilities, data privacy risk, architecture review and risk quantification.",
  deliverable: "M&A cyber due diligence report + risk quantification summary"
},
{
  tag: "Advisory",
  color: "bg-yellow-900/30 text-yellow-300 border-yellow-700",
  title: "Security Vendor Selection Advisory",
  desc: "Independent advisory for selecting security tools or MSSPs including requirements definition, RFP preparation, vendor shortlisting and PoC evaluation.",
  deliverable: "Vendor selection report + evaluation scorecard"
},
{
  tag: "Assessment",
  color: "bg-pink-900/30 text-pink-300 border-pink-700",
  title: "Physical & Environmental Security Review",
  desc: "Audit physical security controls including data centres, server rooms, CCTV, visitor management, clean desk and environmental controls.",
  deliverable: "Physical security assessment report"
}
        
      ].map((item, index) => (

        <div
          key={index}
          className="rounded-xl border border-cyan-900/30 bg-[#0d1a2d] p-5 hover:border-emerald-500 duration-300"
        >

          <div className="flex items-center gap-3 flex-wrap">

            <span
              className={`px-3 py-1 rounded-md text-[11px] border font-semibold ${item.color}`}
            >
              {item.tag}
            </span>

            <h3 className="text-lg font-bold text-white">
              {item.title}
            </h3>

          </div>

          <p className="text-gray-400 text-sm leading-7 mt-4">
            {item.desc}
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-md border border-emerald-700 bg-[#102636] text-emerald-400 text-xs font-mono">
            📄 {item.deliverable}
          </div>

        </div>

      ))}

    </div>

  </div>
</section>

{/* ================= TECHNOLOGY STACK ================= */}

<section className="py-14 bg-[#08131f]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-12">

      {/* LEFT */}

      <div>

        <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-2">
          // Tools & Technology
        </p>

        <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">
          Technology Stack
        </h2>

        <p className="text-gray-400 text-sm leading-7 mb-8 max-w-xl">
          Strategic advisory is backed by industry frameworks and data from
          the world's leading security research organisations.
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "NIST CSF 2.0",
            "ISO 27001",
            "MITRE ATT&CK",
            "FAIR Risk Model",
            "Gartner Security Research",
            "Forrester Research",
            "SANS Top 20",
            "CIS Controls v8",
            "OWASP SAMM",
            "BSIMM",
            "SecurityScorecard",
            "BitSight",
            "Microsoft Secure Score",
          ].map((tool, index) => (

            <span
              key={index}
              className="px-4 py-2 rounded-md border border-cyan-900/40 bg-[#0f1f33] text-gray-300 text-xs font-mono hover:border-emerald-500 transition"
            >
              {tool}
            </span>

          ))}

        </div>

      </div>

      {/* RIGHT */}

      <div>

        <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-2">
          // Measurable Outcomes
        </p>

        <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-8">
          What You Gain
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-white">

          {[
            "Security strategy aligned to business goals",
            "Security budget optimised and justified",
            "Vendor risk programme established",
            "CISO hiring supported with role definition",
            "Board receives regular security briefings",
            "Regulatory relationships managed proactively",
            "M&A cyber risks quantified pre-acquisition",
            "Security programme maturity improved year-on-year",
          ].map((item, index) => (

            <div key={index} className="flex gap-2">

              <span className="text-emerald-400 mt-1">✓</span>

              <span className="text-sm leading-7 text-gray-200">
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>
</section>

{/* ================= CTA SECTION ================= */}

<section
  className="relative py-24 overflow-hidden"
  style={{
    background:
      "linear-gradient(180deg, #173867 0%, #1b447c 45%, #214d8b 100%)",
  }}
>
  <div className="max-w-5xl mx-auto px-6">

    <div className="rounded-2xl border border-cyan-900/40 bg-[#0d1a2d] py-12 px-8 text-center">

      <p className="text-[12px] uppercase tracking-[6px] text-gray-400 mb-5">
        D10 • VCISO & STRATEGIC ADVISORY
      </p>

      <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
        Get Strategic Security Leadership
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-sm leading-7">
        Book a free introductory call with Trinity Nexus Technologies vCISO.
        We'll assess your current security programme and show you where to
        focus first.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">

        <button
  onClick={() => navigate("/assessment", { replace: false })}
  className="px-7 py-3 rounded-lg bg-emerald-400 hover:bg-emerald-500 transition text-black font-semibold"
>
  Start Free Assessment
</button>

        <button className="px-7 py-3 rounded-lg border border-cyan-800 text-emerald-400 hover:bg-cyan-900/20 transition font-semibold">
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