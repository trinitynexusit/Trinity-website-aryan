import { useNavigate } from "react-router-dom";
import ServiceTabs from "../components/ServiceTabs";
export default function EmergingSecurity() {
  const navigate = useNavigate();

  return (
    <>
      <ServiceTabs />

      <section
  className="relative overflow-hidden border-b border-cyan-900/30"
  style={{
    background:
      "linear-gradient(180deg, #173867 0%, #1b447c 45%, #214d8b 100%)",
  }}
>
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">

    {/* Breadcrumb */}

    <p className="text-gray-400 text-sm mb-5">
      Home <span className="mx-2">/</span> Services
      <span className="mx-2">/</span>
      <span className="text-white">Emerging & Specialized</span>
    </p>

    {/* Badge */}

    <span className="inline-block border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs tracking-[4px] uppercase px-4 py-2 rounded-md mb-6">
      D11 • Emerging & Specialized
    </span>

    {/* Heading */}

    <h1 className="text-4xl md:text-6xl font-black uppercase leading-none text-white">
      Next-Generation Security
    </h1>

    <h2 className="mt-2 text-4xl md:text-6xl font-black uppercase leading-none text-emerald-400">
      AI. Supply Chain. Deception. SOAR.
    </h2>

    {/* Description */}

    <p className="mt-8 max-w-5xl text-gray-400 text-sm md:text-base leading-8 tracking-wide">
      AI/LLM Security • Supply Chain • Privacy Engineering • SOAR Automation •
      Deception Technology • Zero Trust • Resilience
    </p>

    {/* Stats */}

    <div className="flex flex-wrap gap-10 mt-10">

      <div>
        <h3 className="text-4xl font-bold text-emerald-400">11</h3>
        <p className="text-gray-500 uppercase tracking-[3px] text-xs">
          Services
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-emerald-400">4</h3>
        <p className="text-gray-500 uppercase tracking-[3px] text-xs">
          Add-ons
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-emerald-400">
          OWASP LLM
        </h3>
        <p className="text-gray-500 uppercase tracking-[3px] text-xs">
          Top 10
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-emerald-400">
          NIST 800-207
        </h3>
        <p className="text-gray-500 uppercase tracking-[3px] text-xs">
          Zero Trust
        </p>
      </div>

    </div>

    {/* Divider */}

    <div className="h-px bg-cyan-900/30 my-10"></div>

    {/* Buttons */}

    <div className="flex flex-wrap gap-5">

      <button
  onClick={() => navigate("/assessment", { replace: false })}
  className="bg-emerald-400 hover:bg-emerald-500 transition text-black font-semibold px-7 py-3 rounded-lg"
>
  Get Free Assessment
</button>

      <button className="border border-cyan-800 text-emerald-400 hover:bg-cyan-900/20 transition px-7 py-3 rounded-lg font-semibold">
        ← All Domains
      </button>

    </div>

  </div>

  {/* ================= OVERVIEW ================= */}

<section className="py-14 bg-[#08131f]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* LEFT */}

      <div>

        <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-4">
          // Overview
        </p>

        <h2 className="text-3xl md:text-4xl font-black uppercase text-white leading-tight mb-8">
          Security at the Cutting Edge
        </h2>

        <div className="space-y-5 text-gray-400 text-[15px] leading-8">

          <p>
            The threat landscape evolves faster than most security teams can
            track. AI-powered attacks, supply chain compromises,
            privacy-by-design obligations and Zero Trust architecture are now
            present-day realities requiring specialised expertise.
          </p>

          <p>
            Trinity Nexus Technologies maintains a dedicated
            <span className="font-semibold text-white">
              {" "}emerging technologies security practice
            </span>{" "}
            focused on researching new attack techniques before they become
            mainstream.
          </p>

          <p>
            From
            <span className="font-semibold text-white">
              {" "}OWASP LLM Top 10
            </span>
            , AI model risk assessments, SLSA adoption, deception technologies
            and SOAR automation—we bring cutting-edge capability to every
            engagement.
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div className="relative z-10 bg-[#0d1b2d] border border-cyan-900/40 rounded-xl p-6">

        <p className="text-gray-500 uppercase tracking-[5px] text-xs mb-6">
          At a Glance
        </p>

        {[
          ["AI / LLM", "OWASP LLM Top 10 • Prompt Injection • RAG Security"],
          ["Supply Chain", "SLSA Framework • SBOM • Dependency Confusion"],
          ["Zero Trust", "NIST SP 800-207 • Micro-segmentation • ZTNA"],
          ["SOAR", "Palo Alto XSOAR • Microsoft Sentinel • Splunk SOAR"],
          ["Deception", "Honeypots • Honeytokens • Canarytokens"],
        ].map((item, index) => (
          <div
            key={index}
            className="flex justify-between gap-5 py-4 border-b border-cyan-900/20 last:border-none"
          >
            <span className="text-gray-400 text-sm">
              {item[0]}
            </span>

            <span className="text-white text-sm text-right font-medium max-w-[70%]">
              {item[1]}
            </span>
          </div>
        ))}

        <button
  onClick={() => navigate("/assessment", { replace: false })}
  className="relative z-20 mt-8 w-full bg-emerald-400 hover:bg-emerald-500 transition text-black font-semibold py-3 rounded-lg"
>
  Enquire Now →
</button>

      </div>

    </div>

  </div>
</section>

<section
  className="relative py-14 overflow-hidden"
  style={{
    background:
      "linear-gradient(180deg, #173867 0%, #1b447c 45%, #214d8b 100%)",
  }}
>
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
  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">

      <p className="uppercase tracking-[5px] text-emerald-400 text-xs mb-3">
        // WHY CHOOSE TRINITY NEXUS
      </p>

      <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
        OUR STRENGTHS
      </h2>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          icon:"🤖",
          title:"AI & LLM Security Expertise",
          desc:"OWASP LLM Top 10 testing, prompt injection, RAG security, AI model risk assessment and governance."
        },
        {
          icon:"⛓️",
          title:"Supply Chain Security",
          desc:"SLSA adoption, SBOM validation, dependency confusion prevention and software supply chain assurance."
        },
        {
          icon:"🔒",
          title:"Privacy Engineering",
          desc:"Privacy-by-design, GDPR/DPDP compliance, anonymisation and secure SDLC integration."
        },
        {
          icon:"⚡",
          title:"SOAR Automation",
          desc:"Automate SOC workflows using Microsoft Sentinel, Splunk SOAR and Palo Alto XSOAR."
        },
        {
          icon:"🎭",
          title:"Deception Technology",
          desc:"Deploy honeypots, honeytokens and deception environments for early attacker detection."
        },
        {
          icon:"🏛️",
          title:"Zero Trust Architecture",
          desc:"Identity-first Zero Trust implementation based on NIST SP 800-207 and least privilege."
        }
      ].map((item,index)=>(
        <div
          key={index}
          className="bg-[#0d1b2d] border border-cyan-900/40 rounded-xl p-5 min-h-[230px] hover:border-emerald-400 transition"
        >

          <div className="text-3xl mb-5">
            {item.icon}
          </div>

          <h3 className="text-xl font-bold text-white mb-4">
            {item.title}
          </h3>

          <p className="text-sm leading-7 text-gray-400">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

{/* ================= HOW WE DELIVER ================= */}

<section className="py-14 bg-[#08131f]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="max-w-4xl mb-10">

      <p className="uppercase tracking-[5px] text-emerald-400 text-xs mb-3">
        // OUR DELIVERY APPROACH
      </p>

      <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6">
        HOW WE DELIVER
      </h2>

      <p className="text-gray-400 text-[15px] leading-8">
        Our emerging technology engagements combine deep research capability
        with pragmatic implementation—delivering measurable security outcomes,
        not theoretical frameworks.
      </p>

    </div>

    <div className="space-y-7">

      {[
        {
          no:"01",
          title:"Threat Landscape Assessment",
          desc:"Assess exposure to AI-powered attacks, supply chain threats, insider risks and emerging attack techniques."
        },
        {
          no:"02",
          title:"Technology Evaluation & Selection",
          desc:"Compare emerging security technologies through vendor evaluation, proof-of-concept planning and architecture review."
        },
        {
          no:"03",
          title:"Proof of Concept & Pilot",
          desc:"Controlled pilot deployment with clear success metrics before full-scale implementation."
        },
        {
          no:"04",
          title:"Full Deployment & Integration",
          desc:"Production rollout with SIEM/SOC integration, rule tuning, automation and analyst enablement."
        },
        {
          no:"05",
          title:"Continuous Research & Advisory",
          desc:"Regular briefings on emerging threats, evolving regulations and new attack techniques."
        }
      ].map((item,index)=>(
        <div
          key={index}
          className="flex gap-8 border-b border-cyan-900/30 pb-7 last:border-none"
        >

          <div className="text-emerald-500 text-4xl font-black min-w-[70px]">
            {item.no}
          </div>

          <div>

            <h3 className="text-xl font-bold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-sm text-gray-400 leading-7">
              {item.desc}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

{/* ================= COMPLETE SERVICE LIST ================= */}

<section
  className="relative py-16 overflow-hidden"
  style={{
    background:
      "linear-gradient(180deg, #173867 0%, #1b447c 45%, #214d8b 100%)",
  }}
>
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
  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <p className="uppercase tracking-[5px] text-emerald-400 text-xs mb-3">
      // 11 SERVICES • 4 ADD-ONS
    </p>

    <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-10">
      COMPLETE SERVICE LIST
    </h2>

    <div className="space-y-5">

      {[
        {
          badge:"Advisory",
          color:"bg-yellow-900/30 text-yellow-300",
          title:"AI / LLM Security Programme",
          desc:"End-to-end AI security including OWASP LLM Top 10 mapping, adversarial ML testing, prompt injection safeguards and AI governance.",
          deliverable:"AI security programme document + control framework"
        },
        {
          badge:"Assessment",
          color:"bg-pink-900/30 text-pink-300",
          title:"LLM Red Teaming Exercise",
          desc:"Jailbreaking, prompt injection, goal hijacking, RAG testing and AI application security validation.",
          deliverable:"LLM red team report + findings matrix"
        },
        {
          badge:"Assessment",
          color:"bg-pink-900/30 text-pink-300",
          title:"AI Model Risk Assessment",
          desc:"Assess model inversion, data poisoning, privacy risks and production AI governance.",
          deliverable:"AI model risk assessment report"
        },
        {
          badge:"Advisory",
          color:"bg-yellow-900/30 text-yellow-300",
          title:"Software Supply Chain Security",
          desc:"SBOM, SLSA implementation, dependency confusion prevention and build pipeline integrity.",
          deliverable:"Supply chain security roadmap"
        },
        {
          badge:"Advisory",
          color:"bg-yellow-900/30 text-yellow-300",
          title:"Hardware Supply Chain Assurance",
          desc:"Trusted supplier validation, firmware integrity, counterfeit component assessment and HSM guidance.",
          deliverable:"Hardware supply chain advisory report"
        },
        {
          badge:"Advisory",
          color:"bg-yellow-900/30 text-yellow-300",
          title:"Privacy Engineering Advisory",
          desc:"Privacy-by-design implementation, anonymisation, differential privacy and secure SDLC integration.",
          deliverable:"Privacy engineering guidance"
        },
        {
  badge: "Assessment",
  color: "bg-pink-900/30 text-pink-300",
  title: "Data Anonymisation & Pseudonymisation Review",
  desc: "Technical review of anonymisation and pseudonymisation against DPDP, GDPR and ICO guidance with re-identification risk assessment.",
  deliverable: "Anonymisation adequacy report"
},
{
  badge: "Advisory",
  color: "bg-yellow-900/30 text-yellow-300",
  title: "Security Automation & SOAR Advisory",
  desc: "Design automation strategy and implement SOAR playbooks for phishing triage, IOC enrichment and account lockout workflows.",
  deliverable: "SOAR design document + playbooks"
},
{
  badge: "Project",
  color: "bg-emerald-900/30 text-emerald-300",
  title: "Deception Technology Deployment",
  desc: "Deploy honeypots, honeytokens and deception grids to detect lateral movement and credential theft.",
  deliverable: "Deception deployment report + alert integration guide"
},
{
  badge: "Advisory",
  color: "bg-yellow-900/30 text-yellow-300",
  title: "Zero Trust Architecture Advisory",
  desc: "Identity-centric Zero Trust implementation aligned with NIST SP 800-207, micro-segmentation and least privilege.",
  deliverable: "Zero Trust roadmap + architecture blueprint"
},
{
  badge: "Assessment",
  color: "bg-pink-900/30 text-pink-300",
  title: "Cyber Resilience Assessment",
  desc: "Assess recovery capability, business continuity integration, redundancy design and operational resilience maturity.",
  deliverable: "Cyber resilience maturity report + roadmap"
}

      ].map((item,index)=>(

        <div
          key={index}
          className="bg-[#0d1b2d] border border-cyan-900/40 rounded-xl p-5 hover:border-emerald-400 transition"
        >

          <div className="flex items-center gap-3 flex-wrap mb-4">

            <span className={`px-3 py-1 rounded text-[11px] font-semibold ${item.color}`}>
              {item.badge}
            </span>

            <h3 className="text-xl font-bold text-white">
              {item.title}
            </h3>

          </div>

          <p className="text-sm text-gray-400 leading-7 mb-4">
            {item.desc}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-500/40 bg-[#0a1828] text-emerald-400 text-xs">
            📄 {item.deliverable}
          </div>

        </div>

      ))}

    </div>

  </div>
</section>
<section className="py-20 bg-[#07131f]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT */}
      <div>

        <p className="text-[#00F5A0] tracking-[5px] uppercase text-sm mb-4">
          // Tools & Technology
        </p>

        <h2 className="text-5xl font-extrabold text-white uppercase leading-none mb-8">
          Technology Stack
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-8 max-w-xl">
          The most advanced security tools available — evaluated,
          deployed and managed by our specialised emerging
          technology team.
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "OpenAI GPT-4",
            "Anthropic Claude",
            "LangChain",
            "Palo Alto XSOAR",
            "Microsoft Sentinel",
            "Splunk SOAR",
            "Attivo Networks",
            "Illusive Networks",
            "Canarytokens",
            "TrustedCI",
            "SLSA Framework",
            "Syft",
            "Grype",
            "Trivy",
            "HashiCorp Vault",
            "Cycode"
          ].map((item) => (
            <span
              key={item}
              className="border border-cyan-900 text-gray-300 px-4 py-2 rounded-lg text-sm bg-[#091827] hover:border-[#00F5A0] hover:text-[#00F5A0] transition"
            >
              {item}
            </span>
          ))}

        </div>

      </div>

      {/* RIGHT */}

      <div>

        <p className="text-[#00F5A0] tracking-[5px] uppercase text-sm mb-4">
          // Measurable Outcomes
        </p>

        <h2 className="text-5xl font-extrabold text-white uppercase leading-none mb-8">
          What You Gain
        </h2>

        <div className="grid grid-cols-2 gap-x-12 gap-y-5 text-white">

          <div className="flex gap-3">
            <span className="text-[#00F5A0]">✓</span>
            <p>LLM applications tested against OWASP LLM Top 10</p>
          </div>

          <div className="flex gap-3">
            <span className="text-[#00F5A0]">✓</span>
            <p>AI governance framework established</p>
          </div>

          <div className="flex gap-3">
            <span className="text-[#00F5A0]">✓</span>
            <p>Supply chain SLSA Level 2 achieved</p>
          </div>

          <div className="flex gap-3">
            <span className="text-[#00F5A0]">✓</span>
            <p>SOAR automation reduces analyst workload by 60%</p>
          </div>

          <div className="flex gap-3">
            <span className="text-[#00F5A0]">✓</span>
            <p>Deception technology detects lateral movement</p>
          </div>

          <div className="flex gap-3">
            <span className="text-[#00F5A0]">✓</span>
            <p>Zero Trust architecture blueprint delivered</p>
          </div>

          <div className="flex gap-3">
            <span className="text-[#00F5A0]">✓</span>
            <p>Privacy-by-design embedded into SDLC</p>
          </div>

          <div className="flex gap-3">
            <span className="text-[#00F5A0]">✓</span>
            <p>Emerging threat briefings every quarter</p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

<section
  className="relative py-20 overflow-hidden"
  style={{
    background:
      "linear-gradient(180deg, #173867 0%, #1d4b88 45%, #214f91 100%)",
  }}
>
    <div
  className="absolute inset-0 opacity-20"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
    `,
    backgroundSize: "72px 72px",
  }}
/>
  <div className="relative z-10 max-w-6xl mx-auto px-6">

    <div className="rounded-2xl border border-cyan-900 bg-gradient-to-b from-[#0b1a2a] to-[#081522] px-8 py-12 text-center">

      <p className="text-[#00F5A0] uppercase tracking-[6px] text-sm mb-5">
        D11 • Emerging & Specialised
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white mb-6">
        Stay Ahead Of Emerging Threats
      </h2>

      <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-8 mb-10">
        Get a free emerging threat landscape briefing. Our specialists
        will walk you through AI-powered, supply chain and next-generation
        attacks that could impact your organisation.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-5">

        <button
  onClick={() => navigate("/assessment", { replace: false })}
  className="bg-[#00F5A0] hover:bg-[#00d98b] transition text-black font-semibold px-8 py-4 rounded-lg"
>
  Start Free Assessment
</button>

        <button className="border border-cyan-800 text-[#00F5A0] hover:bg-[#00F5A0] hover:text-black transition px-8 py-4 rounded-lg font-semibold">
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