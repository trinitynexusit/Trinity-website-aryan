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
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">

    <p className="text-gray-400 text-sm mb-10">
      Home / Services / <span className="text-white">App Security & DevSecOps</span>
    </p>

    <span className="inline-block border border-emerald-500 text-emerald-400 px-3 py-1 rounded text-sm mb-4">
      D05 • App Security & DevSecOps
    </span>

    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
      SECURITY IN EVERY COMMIT
      <br />
      <span className="text-emerald-400">
        SAST. DAST. SBOM. SUPPLY CHAIN.
      </span>
    </h1>

    <p className="text-gray-400 mt-5 max-w-4xl text-lg">
      Secure Code Review • SAST/DAST • SCA • SBOM • Threat Modelling • CI/CD Security • Supply Chain
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 max-w-4xl">

      <div>
        <h2 className="text-emerald-400 text-4xl font-bold">13</h2>
        <p className="uppercase tracking-widest text-gray-500 text-xs">
          Services
        </p>
      </div>

      <div>
        <h2 className="text-emerald-400 text-4xl font-bold">4</h2>
        <p className="uppercase tracking-widest text-gray-500 text-xs">
          Add-ons
        </p>
      </div>

      <div>
        <h2 className="text-emerald-400 text-3xl font-bold">
          OWASP ASVS
        </h2>
        <p className="uppercase tracking-widest text-gray-500 text-xs">
          Standard
        </p>
      </div>

      <div>
        <h2 className="text-emerald-400 text-4xl font-bold">
          SHIFT LEFT
        </h2>
        <p className="uppercase tracking-widest text-gray-500 text-xs">
          Approach
        </p>
      </div>

    </div>

   <div className="flex gap-5 mt-12 mb-20">

      <button className="bg-emerald-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-emerald-300 transition">
        Get Free Assessment
      </button>

      <button className="border border-emerald-500 text-emerald-400 px-8 py-3 rounded-lg hover:bg-emerald-500 hover:text-black transition">
        ← All Domains
      </button>

    </div>

<section className="py-14 border-t border-[#00ff99]/10 bg-[#0b1d2f]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* Left */}

      <div>

        <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
          // OVERVIEW
        </p>

        <h2 className="text-4xl font-extrabold uppercase text-white leading-tight mb-6">
          SECURITY BUILT INTO DEVELOPMENT
        </h2>

        <div className="space-y-5 text-gray-400 leading-8">

          <p>
            Security bolted on after release is expensive and slow. Trinity Nexus
            embeds security directly into your SDLC through a
            <span className="text-white font-semibold"> shift-left </span>
            approach that reduces remediation cost.
          </p>

          <p>
            Our engineers integrate
            <span className="text-white font-semibold">
              {" "}SAST, DAST, SCA and secrets detection{" "}
            </span>
            directly into GitHub Actions, GitLab CI, Jenkins and Azure DevOps
            pipelines.
          </p>

          <p>
            We also establish
            <span className="text-white font-semibold">
              {" "}Security Champions
            </span>
            programmes and developer training to build a long-term secure
            engineering culture.
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="bg-[#0d1c2d] border border-emerald-900 rounded-xl p-6">

        <p className="uppercase tracking-[4px] text-gray-500 text-xs mb-6">
          AT A GLANCE
        </p>

        <div className="space-y-4 text-sm">

          <div className="flex justify-between border-b border-gray-800 pb-3">
            <span className="text-gray-400">Engagement</span>
            <span className="text-white font-semibold">
              Assessment • Advisory • Project
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-800 pb-3">
            <span className="text-gray-400">Languages</span>
            <span className="text-white font-semibold">
              Java • Python • .NET • Node.js
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-800 pb-3">
            <span className="text-gray-400">CI/CD</span>
            <span className="text-white font-semibold">
              GitHub • GitLab • Jenkins
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-800 pb-3">
            <span className="text-gray-400">Standards</span>
            <span className="text-white font-semibold">
              OWASP ASVS • OWASP Top 10
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Compliance</span>
            <span className="text-white font-semibold">
              ISO 27001 • SOC 2 • PCI DSS
            </span>
          </div>

        </div>

        <button className="w-full mt-8 py-3 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition">
          Enquire Now →
        </button>

      </div>

    </div>

  </div>
</section>

<section className="relative overflow-hidden py-16 border-t border-[#00ff99]/10 bg-gradient-to-r from-[#0b2345] via-[#143b6b] to-[#0b2345]">

  {/* Grid */}
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

  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#1e4d8f]/30 via-transparent to-transparent" />

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <p className="text-center text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
      // WHY CHOOSE TRINITY NEXUS
    </p>

    <h2 className="text-center text-4xl font-extrabold uppercase text-white mb-10">
      OUR STRENGTHS
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Card 1 */}

      <div className="bg-[#0d1c2d] border border-emerald-900 rounded-xl p-6">
        <div className="text-4xl mb-5">🔍</div>
        <h3 className="text-white text-2xl font-bold mb-4">
          Manual Secure Code Review
        </h3>
        <p className="text-gray-400 leading-7">
          Expert review covering Java, Python, .NET, Node.js, Go and PHP.
          Detects injection, IDOR, insecure deserialization and business
          logic flaws.
        </p>
      </div>

      {/* Card 2 */}

      <div className="bg-[#0d1c2d] border border-emerald-900 rounded-xl p-6">
        <div className="text-4xl mb-5">⚡</div>
        <h3 className="text-white text-2xl font-bold mb-4">
          CI/CD Pipeline Security
        </h3>
        <p className="text-gray-400 leading-7">
          SAST and DAST integrated directly into GitHub, GitLab and Jenkins
          pipelines for fast developer feedback.
        </p>
      </div>

      {/* Card 3 */}

      <div className="bg-[#0d1c2d] border border-emerald-900 rounded-xl p-6">
        <div className="text-4xl mb-5">📦</div>
        <h3 className="text-white text-2xl font-bold mb-4">
          Software Supply Chain
        </h3>
        <p className="text-gray-400 leading-7">
          SBOM generation, dependency scanning and SLSA-based protection for
          open-source software.
        </p>
      </div>

      {/* Card 4 */}

      <div className="bg-[#0d1c2d] border border-emerald-900 rounded-xl p-6">
        <div className="text-4xl mb-5">🧠</div>
        <h3 className="text-white text-2xl font-bold mb-4">
          Threat Modelling
        </h3>
        <p className="text-gray-400 leading-7">
          STRIDE and PASTA based workshops that identify design flaws before
          development.
        </p>
      </div>

      {/* Card 5 */}

      <div className="bg-[#0d1c2d] border border-emerald-900 rounded-xl p-6">
        <div className="text-4xl mb-5">🔑</div>
        <h3 className="text-white text-2xl font-bold mb-4">
          Secrets Detection
        </h3>
        <p className="text-gray-400 leading-7">
          Detect API keys, passwords and credentials from repositories using
          automated scanning.
        </p>
      </div>

      {/* Card 6 */}

      <div className="bg-[#0d1c2d] border border-emerald-900 rounded-xl p-6">
        <div className="text-4xl mb-5">🏆</div>
        <h3 className="text-white text-2xl font-bold mb-4">
          Security Champions
        </h3>
        <p className="text-gray-400 leading-7">
          Build an internal security culture through developer training and
          champion programmes.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="bg-[#081522] py-14">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
      // OUR DELIVERY APPROACH
    </p>

    <h2 className="text-4xl font-extrabold uppercase text-white mb-6">
      HOW WE DELIVER
    </h2>

    <p className="text-gray-400 text-lg max-w-4xl leading-8 mb-10">
      We embed security at every stage of your SDLC — from design through
      production deployment and continuous monitoring.
    </p>

    <div className="space-y-6">

      {/* Step 1 */}

      <div className="flex gap-8 border-b border-[#12344d] pb-6">
        <div className="text-5xl font-bold text-emerald-500 min-w-[80px]">
          01
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            SDLC Maturity Assessment
          </h3>

          <p className="text-gray-400 leading-8">
            Assess your DevSecOps maturity, security gate effectiveness,
            developer awareness and pipeline security posture.
          </p>
        </div>
      </div>

      {/* Step 2 */}

      <div className="flex gap-8 border-b border-[#12344d] pb-6">
        <div className="text-5xl font-bold text-emerald-500 min-w-[80px]">
          02
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Tool Selection & Integration
          </h3>

          <p className="text-gray-400 leading-8">
            Integrate SAST, DAST, SCA and secrets detection into GitHub,
            GitLab, Azure DevOps or Jenkins pipelines.
          </p>
        </div>
      </div>

      {/* Step 3 */}

      <div className="flex gap-8 border-b border-[#12344d] pb-6">
        <div className="text-5xl font-bold text-emerald-500 min-w-[80px]">
          03
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Threat Modelling & Secure Design
          </h3>

          <p className="text-gray-400 leading-8">
            STRIDE/PASTA workshops, DFD creation, trust boundaries and
            mitigation planning before development begins.
          </p>
        </div>
      </div>

      {/* Step 4 */}

      <div className="flex gap-8 border-b border-[#12344d] pb-6">
        <div className="text-5xl font-bold text-emerald-500 min-w-[80px]">
          04
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Developer Training & Security Champions
          </h3>

          <p className="text-gray-400 leading-8">
            Secure coding workshops and Security Champions programme for
            long-term security culture.
          </p>
        </div>
      </div>

      {/* Step 5 */}

      <div className="flex gap-8">
        <div className="text-5xl font-bold text-emerald-500 min-w-[80px]">
          05
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Continuous Monitoring & Governance
          </h3>

          <p className="text-gray-400 leading-8">
            Quarterly maturity reviews, vulnerability tracking, pipeline
            monitoring and supply chain security governance.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
<section className="relative overflow-hidden py-14 border-t border-[#00ff99]/10 bg-gradient-to-r from-[#0b2345] via-[#143b6b] to-[#0b2345]">

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

  <div className="relative z-10 max-w-7xl mx-auto px-6">
 

    <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
      // 13 SERVICES • 4 ADD-ONS
    </p>

    <h2 className="text-5xl font-extrabold uppercase text-white mb-10">
      COMPLETE SERVICE LIST
    </h2>

    <div className="space-y-6">

      {/* Card 1 */}

      <div className="bg-[#0b1828] border border-cyan-900 rounded-2xl p-8">

        <div className="inline-block bg-pink-900/30 border border-pink-700 text-pink-300 text-sm px-4 py-2 rounded-md mb-5">
          Assessment
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
          Secure Code Review (Manual)
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
          Manual review of source code (Java, Python, .NET, Node.js, Go,
          PHP, Ruby) for injection, insecure deserialization, IDOR and
          cryptographic misuse.
        </p>

        <span className="inline-block border border-cyan-700 rounded-md px-5 py-3 text-emerald-400 text-sm">
          📄 Code review report with line-level findings
        </span>

      </div>

      {/* Card 2 */}

      <div className="bg-[#0b1828] border border-cyan-900 rounded-2xl p-8">

        <div className="inline-block bg-emerald-900/30 border border-emerald-700 text-emerald-300 text-sm px-4 py-2 rounded-md mb-5">
          Project
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
          ↳ SAST Tooling Integration & Review
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
          Integrate SAST (Semgrep, Checkmarx, SonarQube, Veracode) into
          CI/CD pipelines. Tune rulesets and review baseline findings.
        </p>

        <span className="inline-block border border-cyan-700 rounded-md px-5 py-3 text-emerald-400 text-sm">
          📄 SAST integration guide + baseline report
        </span>

      </div>

      {/* Card 3 */}

      <div className="bg-[#0b1828] border border-cyan-900 rounded-2xl p-8">

        <div className="inline-block bg-pink-900/30 border border-pink-700 text-pink-300 text-sm px-4 py-2 rounded-md mb-5">
          Assessment
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
          ↳ Secrets Detection & Remediation
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
          Scan repositories including Git history for hardcoded secrets,
          API keys and credentials using TruffleHog and GitLeaks.
        </p>

        <span className="inline-block border border-cyan-700 rounded-md px-5 py-3 text-emerald-400 text-sm">
          📄 Secrets exposure report + remediation guide
        </span>

      </div>

       <div className="bg-[#0b1828] border border-cyan-900 rounded-2xl p-8">

        <div className="inline-block bg-pink-900/30 border border-pink-700 text-pink-300 text-sm px-4 py-2 rounded-md mb-5">
          Assessment
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
          DAST / Runtime Application Testing
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
Dynamic testing of running app using OWASP ZAP and Burp Suite Pro. Runtime vulns, server misconfigs and exposed admin interfaces.
        </p>

        <span className="inline-block border border-cyan-700 rounded-md px-5 py-3 text-emerald-400 text-sm">
           DAST report with risk-ranked findings
        </span>

      </div>
<div className="bg-[#0b1828] border border-cyan-900 rounded-2xl p-8">

        <div className="inline-block bg-pink-900/30 border border-pink-700 text-pink-300 text-sm px-4 py-2 rounded-md mb-5">
          Assessment
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
          Threat Modelling (STRIDE / PASTA)
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
Structured threat modelling workshops (STRIDE, PASTA, LINDDUN) for new apps. DFDs, threat register and prioritised mitigation backlog.
        </p>

        <span className="inline-block border border-cyan-700 rounded-md px-5 py-3 text-emerald-400 text-sm">
           Threat model doc + DFD + mitigation backlog
        </span>

      </div>
      <div className="bg-[#0b1828] border border-cyan-900 rounded-2xl p-8">

        <div className="inline-block bg-pink-900/30 border border-pink-700 text-pink-300 text-sm px-4 py-2 rounded-md mb-5">
          Assessment
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
          
Software Composition Analysis (SCA)
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
Open-source/3rd-party library vulns and licence risks using Snyk, Dependabot and OWASP Dependency-Check. EPSS-prioritised.
        </p>

        <span className="inline-block border border-cyan-700 rounded-md px-5 py-3 text-emerald-400 text-sm">
           SCA report + dependency risk register
        </span>

      </div>

<div className="bg-[#0b1828] border border-cyan-900 rounded-2xl p-8">

        <div className="inline-block bg-pink-900/30 border border-pink-700 text-pink-300 text-sm px-4 py-2 rounded-md mb-5">
          Assessment
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
          
Software Supply Chain Security Assessment
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
Supply chain risk: library vetting, build pipeline integrity (SLSA framework), dependency confusion exposure and open-source maintainer risk.
        </p>

        <span className="inline-block border border-cyan-700 rounded-md px-5 py-3 text-emerald-400 text-sm">
           Supply chain risk report + SLSA gap analysis
        </span>

      </div>
      <div className="bg-[#0b1828] border border-cyan-900 rounded-2xl p-8">

        <div className="inline-block bg-pink-900/30 border border-pink-700 text-pink-300 text-sm px-4 py-2 rounded-md mb-5">
          Assessment
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
 CI/CD Pipeline Security Review
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
Review GitHub Actions/GitLab CI/Jenkins/Azure DevOps for supply chain injection, secrets in pipeline vars and overprivileged runners.
        </p>

        <span className="inline-block border border-cyan-700 rounded-md px-5 py-3 text-emerald-400 text-sm">
           Pipeline security review report
        </span>

      </div>

    <div className="bg-[#0b1828] border border-cyan-900 rounded-2xl p-8">

        <div className="inline-block bg-pink-900/30 border border-pink-700 text-pink-300 text-sm px-4 py-2 rounded-md mb-5">
          Assessment
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
 DevSecOps Programme Design
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
Security embedding roadmap: tool selection, security gates, developer training plan and vulnerability SLA policies.
        </p>

        <span className="inline-block border border-cyan-700 rounded-md px-5 py-3 text-emerald-400 text-sm">
           DevSecOps roadmap + toolchain architecture
        </span>

      </div>
          <div className="bg-[#0b1828] border border-cyan-900 rounded-2xl p-8">

        <div className="inline-block bg-pink-900/30 border border-pink-700 text-pink-300 text-sm px-4 py-2 rounded-md mb-5">
          Assessment
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
 Security Champions Programme
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
Design and launch Security Champions programme: selection, curriculum, responsibilities and community of practice..
        </p>

        <span className="inline-block border border-cyan-700 rounded-md px-5 py-3 text-emerald-400 text-sm">
           Programme charter + training calendar
        </span>

      </div>
       <div className="bg-[#0b1828] border border-cyan-900 rounded-2xl p-8">

        <div className="inline-block bg-pink-900/30 border border-pink-700 text-pink-300 text-sm px-4 py-2 rounded-md mb-5">
          Assessment
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
 
API Security Design Review
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
Review OpenAPI/Swagger specs pre-development: auth scheme, authorisation model, data exposure, rate limiting and error handling.
        </p>

        <span className="inline-block border border-cyan-700 rounded-md px-5 py-3 text-emerald-400 text-sm">
           API security design review report
        </span>

      </div>

      <div className="bg-[#0b1828] border border-cyan-900 rounded-2xl p-8">

        <div className="inline-block bg-pink-900/30 border border-pink-700 text-pink-300 text-sm px-4 py-2 rounded-md mb-5">
          Assessment
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
 
Secure Architecture Review (SAR)
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
Review solution architecture against OWASP ASVS Level 2/3, NIST and security design principles.
        </p>

        <span className="inline-block border border-cyan-700 rounded-md px-5 py-3 text-emerald-400 text-sm">
           Architecture security review report
        </span>

      </div>



    </div>
<section
  className="relative overflow-hidden py-16 mt-16 border-t border-[#00ff99]/10
  bg-gradient-to-r from-[#0b2345] via-[#143b6b] to-[#0b2345]"
>
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

<div className="relative z-10 max-w-7xl mx-auto px-6"></div>
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16">

      {/* Left */}

      <div>

        <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
          // TOOLS & TECHNOLOGY
        </p>

        <h2 className="text-5xl font-extrabold uppercase text-white mb-6">
          TECHNOLOGY STACK
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-8 max-w-xl">
          The same tools used by the world's most security-mature engineering
          teams — deployed and tuned for your environment.
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "Semgrep",
            "Checkmarx",
            "SonarQube",
            "Veracode",
            "OWASP ZAP",
            "Burp Suite Pro",
            "Snyk",
            "OWASP Dependency-Check",
            "Dependabot",
            "TruffleHog",
            "GitLeaks",
            "Trivy",
            "Syft",
            "SPDX",
            "CycloneDX",
            "GitHub Actions",
            "GitLab CI",
            "Jenkins",
            "Azure DevOps"
          ].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-lg border border-cyan-800 bg-[#0d1c2d] text-gray-300 text-sm"
            >
              {tool}
            </span>
          ))}

        </div>

      </div>

      {/* Right */}

      <div>

        <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
          // MEASURABLE OUTCOMES
        </p>

        <h2 className="text-5xl font-extrabold uppercase text-white mb-8">
          WHAT YOU GAIN
        </h2>

        <div className="grid grid-cols-2 gap-x-10 gap-y-5 text-white">

          <p>✓ SAST integrated into every pull request</p>

          <p>✓ DAST running against every staging deployment</p>

          <p>✓ All open-source dependencies scanned</p>

          <p>✓ SBOM generated for every release</p>

          <p>✓ Zero hardcoded secrets in repositories</p>

          <p>✓ Threat models completed for all new apps</p>

          <p>✓ Developers trained in secure coding</p>

          <p>✓ Supply chain SLSA Level 2 achieved</p>

        </div>

      </div>

    </div>

  </div>
</section>
  </div>
  <section className="bg-[#07131f] py-14">
  <div className="max-w-7xl mx-auto px-6">

    <div className="rounded-3xl border border-cyan-900 bg-gradient-to-b from-[#0c1d31] to-[#091725] py-16 px-8 text-center">

      <p className="text-sm uppercase tracking-[8px] text-gray-400 mb-5">
        D05 • APP SECURITY & DEVSECOPS
      </p>

      <h2 className="text-5xl font-extrabold uppercase text-white mb-6">
        SHIFT SECURITY LEFT TODAY
      </h2>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8 mb-10">
        Get a free DevSecOps maturity assessment. We'll show you exactly
        where security can be embedded into your development pipeline
        to reduce risk and cost.
      </p>

      <div className="flex flex-wrap justify-center gap-5">

        <button className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold px-10 py-4 rounded-lg transition">
          Start Free Assessment
        </button>

        <button className="border border-cyan-800 text-emerald-400 hover:bg-cyan-950 px-10 py-4 rounded-lg transition">
          ← All Services
        </button>

      </div>

    </div>

  </div>
</section>
</section>
  </div>
</section>
</>
  );
}
