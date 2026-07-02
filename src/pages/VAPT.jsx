import ServiceTabs from "../components/ServiceTabs";
export default function NetworkSecurity() {
  return (
  <>
    <ServiceTabs />

    {/* Hero Section */}
    {/* Hero Section */}
<section className="relative overflow-hidden min-h-screen flex items-center border-b border-[#00ff99]/10 bg-gradient-to-r from-[#0b2345] via-[#143b6b] to-[#0b2345]">

  {/* Grid Background */}
  <div
    className="absolute inset-0 opacity-20"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
    }}
  />

  {/* Blue Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#1e4d8f]/30 via-transparent to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
    {/* Breadcrumb */}
    <div className="text-sm text-gray-400 mb-5">
      Home <span className="mx-2">/</span>
      Services <span className="mx-2">/</span>
      <span className="text-white">VAPT & Offensive Security</span>
    </div>

    {/* Label */}
    <div className="inline-flex px-4 py-2 rounded-md border border-[#00ff99]/30 text-[#00ff99] font-mono text-sm mb-6">
      D04 • VAPT & Offensive Security
    </div>

    {/* Heading */}
    <h1 className="text-5xl md:text-6xl font-bold leading-none">
      <span className="block text-white">
        FIND YOUR WEAKNESSES
      </span>

      <span className="block mt-3 text-[#00ff99]">
        BEFORE ATTACKERS DO.
      </span>
    </h1>

    {/* Subtitle */}

    <p className="mt-8 text-gray-400 text-lg">
      Network VAPT • Web App • API • Mobile • Red Team • AI/LLM • OT/ICS • Blockchain • Social Engineering
    </p>

    {/* Stats */}

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-cyan-900/30 pt-10">

      <div>
        <h2 className="text-5xl font-bold text-[#00ff99]">23</h2>
        <p className="text-gray-500 uppercase tracking-widest text-sm mt-2">
          Services
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-[#00ff99]">10</h2>
        <p className="text-gray-500 uppercase tracking-widest text-sm mt-2">
          Add-ons
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-[#00ff99]">
          OSCP/CEH
        </h2>

        <p className="text-gray-500 uppercase tracking-widest text-sm mt-2">
          Certified
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-[#00ff99]">
          MITRE ATT&CK
        </h2>

        <p className="text-gray-500 uppercase tracking-widest text-sm mt-2">
          Framework
        </p>
      </div>

    </div>

    {/* Buttons */}

    <div className="flex flex-wrap gap-5 mt-12">

      <button className="px-8 py-4 rounded-xl bg-[#00ff99] text-black font-semibold hover:scale-105 transition">
        Get Free Assessment
      </button>

      <button className="px-8 py-4 rounded-xl border border-cyan-900 text-[#00ff99] hover:bg-[#00ff99]/10 transition">
        ← All Domains
      </button>

    </div>
{/* ================= OVERVIEW ================= */}

<section className="max-w-6xl mx-auto px-6 py-14">

  <div className="grid lg:grid-cols-2 gap-12 items-start">

    {/* Left */}

    <div>

      <p className="text-[#00ff99] text-xs uppercase tracking-[4px] font-mono mb-3">
        // Overview
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
        Real-World Attack Simulation
      </h2>

      <div className="space-y-5 text-gray-400 leading-8 text-[16px]">

        <p>
          Discover vulnerabilities before attackers exploit them. Our
          offensive security team performs real-world penetration testing
          across enterprise environments.
        </p>

        <p>
          We assess <span className="text-white font-semibold">Web,
          Network, API, Mobile, Cloud, AI/LLM and OT/ICS</span> using
          OWASP, PTES, NIST and MITRE ATT&CK methodologies.
        </p>

        <p>
          Every engagement includes proof-of-concept validation,
          executive reporting and practical remediation guidance.
        </p>

      </div>

    </div>

    {/* Right */}

    <div className="rounded-2xl border border-cyan-900 bg-[#091726] p-7">

      <p className="text-xs uppercase tracking-[4px] text-gray-500 mb-6">
        At A Glance
      </p>

      <div className="space-y-5 text-sm">

        {[
          ["Certifications","OSCP • CEH • CREST • eWPT"],
          ["Methodology","OWASP • PTES • MITRE ATT&CK"],
          ["Reports","Executive + Technical + PoC"],
          ["Retesting","Included for Critical Findings"],
          ["Compliance","PCI DSS • ISO 27001 • CERT-In"]
        ].map(([k,v])=>(
          <div
            key={k}
            className="flex justify-between gap-6 border-b border-cyan-900/40 pb-4"
          >
            <span className="text-gray-400">{k}</span>

            <span className="text-white text-right font-medium">
              {v}
            </span>
          </div>
        ))}

      </div>

      <button className="w-full mt-8 py-3 rounded-xl bg-[#00ff99] text-black font-semibold hover:scale-105 transition">
        Enquire Now →
      </button>

    </div>

  </div>

</section>

{/* ================= OUR STRENGTHS ================= */}

<section className="max-w-6xl mx-auto px-6 py-14">

  <div className="text-center mb-10">
    <p className="text-[#00ff99] text-xs tracking-[4px] uppercase font-mono mb-3">
      // Why Choose Trinity Nexus
    </p>

    <h2 className="text-3xl md:text-4xl font-bold text-white">
      Our Strengths
    </h2>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      {
        icon:"🎯",
        title:"Full Attack Surface",
        desc:"Network, Web, API, Mobile, Cloud, AI/LLM & OT/ICS testing."
      },
      {
        icon:"🏴",
        title:"Real APT Simulation",
        desc:"Red team engagements using MITRE ATT&CK and real-world tactics."
      },
      {
        icon:"🤖",
        title:"AI & LLM Testing",
        desc:"Prompt injection, jailbreak, RAG and model security assessments."
      },
      {
        icon:"📱",
        title:"Mobile Security",
        desc:"Android & iOS penetration testing using OWASP MASVS."
      },
      {
        icon:"🏭",
        title:"OT/ICS Security",
        desc:"Industrial systems assessment with minimal operational impact."
      },
      {
        icon:"📋",
        title:"Actionable Reports",
        desc:"Executive summary, PoC evidence and remediation roadmap."
      }
    ].map((item)=>(
      <div
        key={item.title}
        className="bg-[#081524] border border-cyan-900 rounded-xl p-6 hover:border-[#00ff99] transition"
      >
        <div className="text-3xl mb-4">{item.icon}</div>

        <h3 className="text-xl font-semibold text-white mb-3">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm leading-7">
          {item.desc}
        </p>

      </div>
    ))}

  </div>

</section>
{/* ================= DELIVERY APPROACH ================= */}

<section className="max-w-6xl mx-auto px-6 py-14">

  <div className="mb-10">
    <p className="text-[#00ff99] text-xs tracking-[4px] uppercase font-mono mb-3">
      // Our Delivery Approach
    </p>

    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      How We Deliver
    </h2>

    <p className="text-gray-400 max-w-3xl">
      Every engagement follows a structured methodology—from scoping to
      exploitation, reporting and remediation validation.
    </p>
  </div>

  <div className="space-y-8">

    {[
      {
        no:"01",
        title:"Scoping & Rules of Engagement",
        desc:"Define objectives, scope, exclusions and engagement rules before testing."
      },
      {
        no:"02",
        title:"Reconnaissance & OSINT",
        desc:"Passive & active information gathering, DNS enumeration, OSINT and attack surface mapping."
      },
      {
        no:"03",
        title:"Vulnerability Discovery & Exploitation",
        desc:"Manual testing with proof-of-concept validation for confirmed vulnerabilities."
      },
      {
        no:"04",
        title:"Reporting & Debrief",
        desc:"Executive summary, technical report and remediation guidance."
      },
      {
        no:"05",
        title:"Remediation Validation",
        desc:"Retesting after fixes with certificate of completion for verified issues."
      }
    ].map((step)=>(
      <div
        key={step.no}
        className="grid md:grid-cols-[70px_1fr] gap-6 border-b border-cyan-900/40 pb-6"
      >

        <h3 className="text-4xl font-bold text-[#00ff99]/40">
          {step.no}
        </h3>

        <div>
          <h4 className="text-xl font-semibold text-white mb-2">
            {step.title}
          </h4>

          <p className="text-gray-400 leading-7">
            {step.desc}
          </p>
        </div>

      </div>
    ))}

  </div>

</section>

{/* ================= COMPLETE SERVICE LIST ================= */}

<section className="max-w-6xl mx-auto px-6 py-14">

  <div className="mb-10">
    <p className="text-[#00ff99] text-xs tracking-[4px] uppercase font-mono mb-3">
      // 23 Services • 10 Add-ons
    </p>

    <h2 className="text-3xl md:text-4xl font-bold text-white">
      Complete Service List
    </h2>
  </div>

  <div className="space-y-5">

    {[
      {
        type:"Assessment",
        title:"External Network Penetration Test",
        desc:"Black/Grey-box assessment of internet-facing assets.",
        deliverable:"📄 Executive + Technical Report"
      },
      {
        type:"Assessment",
        title:"Internal Network Penetration Test",
        desc:"Privilege escalation, AD review and lateral movement testing.",
        deliverable:"📄 Internal Pentest Report"
      },
      {
        type:"Assessment",
        title:"Active Directory Security",
        desc:"Kerberoasting, ACL abuse, BloodHound & Pass-the-Hash testing.",
        deliverable:"📄 AD Security Report"
      },
      {
        type:"Project",
        title:"Web Application Pentest",
        desc:"OWASP Top 10 assessment with manual exploitation.",
        deliverable:"📄 Web Pentest Report"
      },
      {
        type:"Project",
        title:"API Security Testing",
        desc:"REST & GraphQL API security assessment.",
        deliverable:"📄 API Security Report"
      }
    ].map((service)=>(
      <div
        key={service.title}
        className="bg-[#081524] border border-cyan-900 rounded-xl p-6 hover:border-[#00ff99] transition"
      >

        <div className="flex items-center gap-3 mb-3">

          <span className="text-xs bg-pink-900/40 text-pink-300 px-3 py-1 rounded-md">
            {service.type}
          </span>

          <h3 className="text-xl font-semibold text-white">
            {service.title}
          </h3>

        </div>

        <p className="text-gray-400 mb-4">
          {service.desc}
        </p>

        <span className="inline-block border border-cyan-800 rounded-md px-3 py-2 text-[#00ff99] text-sm">
          {service.deliverable}
        </span>

      </div>
    ))}

  </div>

</section>
{/* ================= TECHNOLOGY STACK ================= */}

<section className="max-w-6xl mx-auto px-6 py-14">

  <div className="grid lg:grid-cols-2 gap-14">

    {/* LEFT */}

    <div>

      <p className="text-[#00ff99] text-xs tracking-[4px] uppercase font-mono mb-3">
        // Tools & Technology
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
        Technology Stack
      </h2>

      <p className="text-gray-400 mb-6 leading-7">
        Industry-leading offensive security tools used during every assessment.
      </p>

      <div className="flex flex-wrap gap-3">

        {[
          "Metasploit",
          "Burp Suite",
          "OWASP ZAP",
          "Nessus",
          "Qualys",
          "BloodHound",
          "Cobalt Strike",
          "Nmap",
          "Nikto",
          "sqlmap",
          "ffuf",
          "MobSF",
          "GoPhish",
          "Frida",
          "Trivy"
        ].map(tool => (

          <span
            key={tool}
            className="px-4 py-2 text-sm rounded-lg border border-cyan-900 bg-[#081524] text-[#00ff99]"
          >
            {tool}
          </span>

        ))}

      </div>

    </div>

    {/* RIGHT */}

    <div>

      <p className="text-[#00ff99] text-xs tracking-[4px] uppercase font-mono mb-3">
        // Measurable Outcomes
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        What You Gain
      </h2>

      <div className="grid grid-cols-2 gap-4 text-gray-300">

        {[
          "Critical vulnerabilities identified",
          "OWASP Top 10 coverage",
          "Mobile security validation",
          "OT/ICS risks assessed",
          "AD attack paths mapped",
          "API security hardened",
          "Red Team readiness",
          "Compliance evidence"
        ].map(item => (

          <div key={item} className="flex gap-2">

            <span className="text-[#00ff99]">✔</span>

            <p>{item}</p>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>

{/* ================= FINAL CTA ================= */}

<section className="max-w-6xl mx-auto px-6 py-14">

  <div className="rounded-3xl border border-cyan-900 bg-gradient-to-b from-[#0b1d31] to-[#081523] py-16 px-8 text-center">

    <p className="text-[#00ff99] text-xs tracking-[6px] uppercase font-mono mb-6">
      D04 • VAPT & Offensive Security
    </p>

    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
      KNOW YOUR VULNERABILITIES FIRST
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-8">
      Get a scoping call for your VAPT engagement. Fixed-scope,
      fixed-price proposals delivered within 48 hours.
    </p>

    <div className="flex flex-wrap justify-center gap-5">

      <a
        href="/assessment"
        className="px-8 py-3 rounded-xl bg-[#00ff99] text-black font-semibold hover:scale-105 transition"
      >
        ⚡ Start Free Assessment
      </a>

      <a
        href="/services"
        className="px-8 py-3 rounded-xl border border-cyan-800 text-[#00ff99] hover:bg-cyan-900/20 transition"
      >
        ← All Services
      </a>

    </div>

  </div>

</section>

  </div>

</section>
</>
  );
}