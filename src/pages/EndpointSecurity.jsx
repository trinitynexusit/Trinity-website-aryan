import React from "react";
import ServiceTabs from "../components/ServiceTabs";

const EndpointSecurity = () => {
 return (
  <>
    <ServiceTabs />

    {/* Hero Section */}
    <section className="relative overflow-hidden min-h-screen flex items-center border-b border-[#00ff99]/10">

  {/* Grid Background */}
  <div
    className="absolute inset-0 opacity-[0.06]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,255,153,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,153,.08) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />

  {/* Glow */}
  <div className="absolute top-20 left-1/3 w-[700px] h-[700px] bg-[#00ff99]/10 rounded-full blur-[180px]" />

  <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">

    {/* Breadcrumb */}
    <div className="flex items-center gap-3 text-gray-400 text-sm mb-8">
      <span>Home</span>
      <span>/</span>
      <span>Services</span>
      <span>/</span>
      <span className="text-white font-medium">
        Endpoint & Device Security
      </span>
    </div>

    {/* Badge */}
    <div className="inline-flex items-center px-5 py-2 rounded-md border border-[#00ff99]/40 bg-[#061321] text-[#00ff99] font-mono tracking-[3px] text-[#00ff99] uppercase mb-8">
      D02 • Endpoint & Device Security
    </div>

    {/* Heading */}
    <h1 className="max-w-4xl text-4xl md:text-4xl lg:text-6xl font-black uppercase leading-tight tracking-tight text-left">
      <span className="text-white block">
        Protect Every Device
      </span>

      <span className="text-[#00ff99] block mt-3">
        EDR. DLP. MDM.
      </span>

      <span className="text-[#00ff99] block">
        ZERO GAPS.
      </span>
    </h1>

    {/* Subtitle */}
    <p className="mt-6 max-w-4xl text-lg text-gray-400 font-mono tracking-[2px]">
      Managed EDR/XDR • Patch Management • DLP •
      MDM • OS Hardening • IoT/OT Security
    </p>

    {/* Stats */}
    <div className="flex flex-wrap gap-10 mt-10">

      <div>
        <h2 className="text-4xl font-bold text-[#00ff99]">
          13
        </h2>
        <p className="text-xs tracking-[3px] text-gray-500 uppercase">
          Services
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-[#00ff99]">
          7
        </h2>
        <p className="text-xs tracking-[3px] text-gray-500 uppercase">
          Add-ons
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-[#00ff99]">
          98.6%
        </h2>
        <p className="text-xs tracking-[3px] text-gray-500 uppercase">
          Coverage
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-[#00ff99]">
          &lt;2HR
        </h2>
        <p className="text-xs tracking-[3px] text-gray-500 uppercase">
          Patch SLA
        </p>
      </div>

    </div>

    {/* Divider */}
    <div className="w-full h-px bg-[#00ff99]/20 mt-14 mb-14" />

    {/* Buttons */}
    <div className="flex gap-5 mt-10">

      <button className="px-6 py-3  bg-[#00ff99] text-black rounded-lg font-bold text-lg hover:bg-[#00ffaa] transition">
         Get Free Assessment
      </button>

      <button className="px-6 py-3  border border-[#00ff99]/30 text-[#00ff99] rounded-lg font-bold text-lg hover:bg-[#00ff99]/10 transition">
        ← All Domains
      </button>

    </div>

  </div>
</section>

{/* Overview Section */}
<section className="py-16 border-t border-[#00ff99]/10">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* Left Side */}
      <div>

        <p className="text-[#00ff99] text-sm font-mono tracking-[5px] uppercase mb-6">
          // OVERVIEW
        </p>

        <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight text-white mb-8">
          EVERY ENDPOINT.
          <br />
          EVERY DEVICE.
          <br />
          SECURED.
        </h2>

<div className="space-y-5 text-base text-gray-400 leading-7">
          <p>
            Endpoints are the #1 attack entry point. Every laptop,
            server, mobile device and IoT sensor is a potential breach
            vector. Trinity Nexus Technologies deploys, manages and
            continuously monitors
            <span className="text-white font-semibold">
              {" "}EDR/XDR solutions from CrowdStrike,
              SentinelOne and Microsoft Defender{" "}
            </span>
            across your entire device estate.
          </p>

          <p>
            Beyond detection, we manage the full endpoint security
            lifecycle —
            <span className="text-white font-semibold">
              {" "}patch management,
              OS hardening,
              DLP,
              MDM{" "}
            </span>
            and browser security — ensuring every device meets your
            security policy at all times.
          </p>

          <p>
            Our approach to endpoint security is
            <span className="text-white font-semibold">
              {" "}assume breach:
            </span>
            {" "}we design controls assuming adversaries will attempt
            to establish a foothold, and focus on rapid detection and
            containment when they try.
          </p>

        </div>

      </div>

      {/* Right Card */}
      <div className="rounded-2xl border border-[#00ff99]/20 bg-[#071827] p-7">

        <p className="text-xs tracking-[5px] uppercase text-gray-500 mb-8">
          AT A GLANCE
        </p>

        <div className="space-y-5">

          <div className="flex justify-between border-b border-white/10 pb-5">
            <span className="text-gray-400">
              Engagement Models
            </span>

            <span className="text-white font-semibold text-right">
              Managed • Assessment • Project • Advisory
            </span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-5">
            <span className="text-gray-400">
              EDR Platforms
            </span>

            <span className="text-white font-semibold text-right">
              CrowdStrike • SentinelOne • Microsoft Defender XDR
            </span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-5">
            <span className="text-gray-400">
              Coverage Target
            </span>

            <span className="text-white font-semibold">
              100% of managed endpoints
            </span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-5">
            <span className="text-gray-400">
              Patch SLA
            </span>

            <span className="text-white font-semibold text-right">
              Critical: 24hr • High: 72hr • Medium: 14d
            </span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-8">
            <span className="text-gray-400">
              Compliance
            </span>

            <span className="text-white font-semibold text-right">
              CIS Benchmarks • ISO 27001 • CERT-In
            </span>
          </div>

        </div>

        <button className="w-full mt-10 py-4 rounded-lg bg-[#00ff99] text-black font-bold text-xl hover:bg-[#00e68a] transition">
          Enquire Now →
        </button>

      </div>

    </div>

  </div>
  {/* Delivery Approach */}
<section className="py-16 border-t border-[#00ff99]/10">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-[#00ff99] text-sm font-mono tracking-[5px] uppercase mb-5">
      // OUR DELIVERY APPROACH
    </p>

    <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-white mb-6">
      HOW WE DELIVER
    </h2>

    <p className="text-lg text-gray-400 leading-8 max-w-3xl mb-14">
      From initial deployment to continuous management, our endpoint
      security practice covers every phase of the endpoint security
      lifecycle.
    </p>

    <div className="space-y-10">

      {/* 01 */}
      <div className="flex gap-8 border-b border-[#00ff99]/10 pb-8">
        <div className="text-5xl font-bold text-[#00ff99]/50">
          01
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Endpoint Discovery & Asset Inventory
          </h3>

          <p className="text-lg text-gray-400 leading-8">
            Complete discovery of all managed and unmanaged endpoints
            across your environment. Identify unprotected devices,
            shadow IT and rogue assets.
          </p>
        </div>
      </div>

      {/* 02 */}
      <div className="flex gap-8 border-b border-[#00ff99]/10 pb-8">
        <div className="text-5xl font-bold text-[#00ff99]/50">
          02
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            EDR Deployment & Policy Configuration
          </h3>

          <p className="text-lg text-gray-400 leading-8">
            Deploy security agents, configure policies, tune detection
            rules and automate response playbooks for your environment.
          </p>
        </div>
      </div>

      {/* 03 */}
      <div className="flex gap-8 border-b border-[#00ff99]/10 pb-8">
        <div className="text-5xl font-bold text-[#00ff99]/50">
          03
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Patch Baseline & Compliance Enforcement
          </h3>

          <p className="text-lg text-gray-400 leading-8">
            Configure automated patch deployment pipelines, define SLA
            targets and integrate compliance monitoring across all
            managed endpoints.
          </p>
        </div>
      </div>

      {/* 04 */}
      <div className="flex gap-8 border-b border-[#00ff99]/10 pb-8">
        <div className="text-5xl font-bold text-[#00ff99]/50">
          04
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            24×7 Monitoring & Threat Hunting
          </h3>

          <p className="text-lg text-gray-400 leading-8">
            Continuous monitoring, proactive threat hunting, malware
            detection and rapid incident response for all critical
            devices.
          </p>
        </div>
      </div>

      {/* 05 */}
      <div className="flex gap-8">
        <div className="text-5xl font-bold text-[#00ff99]/50">
          05
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Monthly Reporting & Posture Review
          </h3>

          <p className="text-lg text-gray-400 leading-8">
            Monthly security reports, compliance dashboards, DLP
            summaries and strategic recommendations for continuous
            improvement.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
<section className="pt-14 pb-20 bg-[#030d18]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="mb-14">
      <p className="text-[#00ff99] uppercase tracking-[6px] text-sm font-mono mb-4">
        // 13 SERVICES • 7 ADD-ONS
      </p>

      <h2 className="text-5xl lg:text-6xl font-black uppercase text-white tracking-tight">
        COMPLETE SERVICE LIST
      </h2>
    </div>

    {/* Card 1 */}
    <div className="bg-[#081727] border border-[#0b5d63] rounded-2xl p-6 mb-6">

      <div className="gap-3 mb-3 gap-4 mb-5">

        <span className="px-3 py-1.5 rounded-md text-xs font-semibold
        bg-[#0f2745] text-[#62c7ff] border border-[#1e4b73]">
          Ongoing Service
        </span>

        <h3 className="text-white text-2xl font-bold">
          Managed EDR/XDR Service
        </h3>

      </div>

      <p className="text-gray-400 text-lg leading-8">
        Fully managed EDR (CrowdStrike Falcon, SentinelOne,
        Microsoft Defender XDR). Agent deployment, policy
        config, alert triage and IR escalation.
      </p>

      <button className="mt-5 px-5 py-2.5 rounded-lg
      border border-[#00ff99]/30
      bg-[#062f2b]
      text-[#00ff99]
      font-mono">
        📄 Monthly EDR threat report + SLA dashboard
      </button>

    </div>

    {/* Card 2 */}

    <div className="ml-8 bg-[#081727]
    border-l-[4px] border-[#00ff99]/30
    border border-[#0b5d63]
    rounded-2xl
    p-6
    mb-6">

      <div className="flex items-center gap-3 mb-3">

        <span className="px-3 py-1.5 rounded-md text-xs font-semibold
        bg-[#351722]
        text-[#ff6b90]
        border border-[#ff6b90]/30">
          Assessment
        </span>

        <h3 className="text-white text-2xl font-bold">
          ↳ EDR Health Check & Coverage Audit
        </h3>

      </div>

      <p className="text-gray-400 text-lg leading-8">
        Audit EDR agent coverage, policy effectiveness,
        exclusion list risks and detection rule gaps.
        Identify unprotected endpoints.
      </p>

      <button className="mt-5 px-5 py-2.5 rounded-lg
      border border-[#00ff99]/30
      bg-[#062f2b]
      text-[#00ff99]
      font-mono">
        📄 Coverage gap report
      </button>

    </div>

    {/* Card 3 */}

    <div className="ml-8 bg-[#081727]
    border-l-[4px] border-[#00ff99]/30
    border border-[#0b5d63]
    rounded-2xl
    p-6">

      <div className="flex items-center gap-3 mb-3">

        <span className="px-3 py-1.5 rounded-md text-xs font-semibold
        bg-[#0b3326]
        text-[#00ff99]
        border border-[#00ff99]/30">
          Project
        </span>

        <h3 className="text-white text-2xl font-bold">
          ↳ EDR Tuning & Policy Optimisation
        </h3>

      </div>

      <p className="text-gray-400 text-lg leading-8">
        Review and optimise EDR exclusion lists,
        detection policies and automated response actions
        to reduce false positives.
      </p>

      <button className="mt-5 px-5 py-2.5 rounded-lg
      border border-[#00ff99]/30
      bg-[#062f2b]
      text-[#00ff99]
      font-mono">
        📄 Tuning report + updated policies
      </button>


    </div>

{/* Patch & Vulnerability Management */}

<div className="bg-[#081727] border border-[#0d5b60] rounded-2xl p-6 mb-6">

  <div className="flex items-center gap-3 mb-3">

    <span className="px-3 py-1.5 rounded-md text-xs font-semibold
    bg-[#0f2745] text-[#62c7ff] border border-[#1e4b73]">
      Ongoing Service
    </span>

    <h3 className="text-white text-2xl font-bold">
      Patch & Vulnerability Management
    </h3>

  </div>

  <p className="text-gray-400 text-lg leading-8">
    Identification, prioritisation and orchestration of
    OS/app patches using Qualys/Tenable/WSUS.
    SLA-driven patching with compliance tracking.
  </p>

  <button className="mt-5 px-5 py-2.5 rounded-lg
  bg-[#062f2b]
  border border-[#00ff99]/30
  text-[#00ff99] font-mono">
    📄 Patch compliance dashboard + monthly report
  </button>

</div>

{/* OS Hardening */}

<div className="ml-8 bg-[#081727] border border-[#0d5b60] border-l-4 border-l-[#00ff99]/30 rounded-2xl p-6 mb-6">

  <div className="flex items-center gap-3 mb-3">

    <span className="px-3 py-1.5 rounded-md text-xs font-semibold
    bg-[#351722]
    text-[#ff6b90]
    border border-[#ff6b90]/30">
      Assessment
    </span>

    <h3 className="text-white text-2xl font-bold">
      ↳ OS Hardening Assessment (CIS Benchmark)
    </h3>

  </div>

  <p className="text-gray-400 text-lg leading-8">
    Benchmark Windows/Linux/macOS configs against
    CIS Level 1 & 2. Detailed deviations list with
    risk ratings and remediation steps.
  </p>

  <button className="mt-5 px-5 py-2.5 rounded-lg
  bg-[#062f2b]
  border border-[#00ff99]/30
  text-[#00ff99] font-mono">
    📄 CIS benchmark gap report
  </button>

</div>

{/* Application Whitelisting */}

<div className="ml-8 bg-[#081727] border border-[#0d5b60] border-l-4 border-l-[#00ff99]/30 rounded-2xl p-6 mb-6">

  <div className="flex items-center gap-3 mb-3">

    <span className="px-3 py-1.5 rounded-md text-xs font-semibold
    bg-[#351722]
    text-[#ff6b90]
    border border-[#ff6b90]/30">
      Assessment
    </span>

    <h3 className="text-white text-2xl font-bold">
      ↳ Application Whitelisting Review
    </h3>

  </div>

  <p className="text-gray-400 text-lg leading-8">
    Review app control/whitelisting (AppLocker,
    WDAC, Carbon Black) effectiveness and known
    bypass risks.
  </p>

  <button className="mt-5 px-5 py-2.5 rounded-lg
  bg-[#062f2b]
  border border-[#00ff99]/30
  text-[#00ff99] font-mono">
    📄 Application control review report
  </button>

</div>

{/* Browser Security */}

<div className="ml-8 bg-[#081727] border border-[#0d5b60] border-l-4 border-l-[#00ff99]/30 rounded-2xl p-6">

  <div className="flex items-center gap-3 mb-3">

    <span className="px-3 py-1.5 rounded-md text-xs font-semibold
    bg-[#351722]
    text-[#ff6b90]
    border border-[#ff6b90]/30">
      Assessment
    </span>

    <h3 className="text-white text-2xl font-bold">
      ↳ Browser & Web Extension Security
    </h3>

  </div>

  <p className="text-gray-400 text-lg leading-8">
    Audit browser security configs
    (Chrome/Edge/Firefox) via GPO/MDM.
    Enumerate extensions, flag over-privileged
    or malicious ones.
  </p>

  <button className="mt-5 px-5 py-2.5 rounded-lg
  bg-[#062f2b]
  border border-[#00ff99]/30
  text-[#00ff99] font-mono">
    📄 Browser security report + policy template
  </button>

</div>

{/* IoT / OT Device Security Assessment */}

<div className="ml-8 bg-[#081727] border border-[#0d5b60] rounded-2xl p-6 mb-6">

  <div className="flex items-center gap-3 mb-3">

    <span className="px-3 py-1.5 rounded-md text-xs font-semibold bg-[#351722] text-[#ff6b90] border border-[#ff6b90]/30">
      Assessment
    </span>

    <h3 className="text-white text-2xl font-bold">
      ↳ IoT / OT Device Security Assessment
    </h3>

  </div>

  <p className="text-gray-400 text-lg leading-8">
    Inventory and risk assessment of IoT/OT/ICS assets.
    Unauthenticated interfaces, insecure protocols and
    firmware vulnerabilities.
  </p>

  <button className="mt-5 px-5 py-2.5 rounded-lg bg-[#062f2b] border border-[#00ff99]/30 text-[#00ff99] font-mono">
    📄 IoT/OT risk register + remediation plan
  </button>

</div>


{/* USB & Peripheral Control Policy */}

<div className="ml-8 bg-[#081727] border border-[#0d5b60] rounded-2xl p-6">

  <div className="flex items-center gap-3 mb-3">

    <span className="px-3 py-1.5 rounded-md text-xs font-semibold bg-[#3b2b11] text-[#ffcc66] border border-[#ffcc66]/30">
      Advisory
    </span>

    <h3 className="text-white text-2xl font-bold">
      ↳ USB & Peripheral Control Policy
    </h3>

  </div>

  <p className="text-gray-400 text-lg leading-8">
    Design and enforce USB/peripheral device control via
    GPO or EDR. Approved device whitelisting and DLP
    integration guidance.
  </p>

  <button className="mt-5 px-5 py-2.5 rounded-lg bg-[#062f2b] border border-[#00ff99]/30 text-[#00ff99] font-mono">
    📄 Policy document + implementation guide
  </button>

</div>
{/* Technology Stack & What You Gain */}

<section className="bg-[#071220] py-16">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

    {/* Left Side */}

    <div>
      <p className="text-[#00f5a0] uppercase tracking-[5px] text-xs mb-4">
        // TOOLS & TECHNOLOGY
      </p>

      <h2 className="text-5xl xl:text-6xl font-black uppercase text-white mb-8 leading-none">
        TECHNOLOGY STACK
      </h2>

      <p className="text-gray-400 text-lg leading-8 mb-8">
        Best-in-class endpoint security tools, integrated and managed by
        our certified specialists.
      </p>

      <div className="flex flex-wrap gap-3">

        {[
          "CrowdStrike Falcon",
          "SentinelOne",
          "Microsoft Defender XDR",
          "Qualys",
          "Tenable.io",
          "WSUS",
          "Microsoft Intune",
          "Jamf",
          "Workspace ONE",
          "Forcepoint DLP",
          "Microsoft Purview",
          "AppLocker",
          "WDAC",
          "Carbon Black",
          "BitLocker",
          "FileVault"
        ].map((tool) => (
          <span
            key={tool}
            className="px-4 py-2 rounded-lg border border-[#0d5b65] bg-[#0b1d2d] text-[#9fc4db] text-sm tracking-wide"
          >
            {tool}
          </span>
        ))}

      </div>
    </div>

    {/* Right Side */}

    <div>

      <p className="text-[#00f5a0] uppercase tracking-[6px] text-[15px] mb-6">
        // MEASURABLE OUTCOMES
      </p>

      <h2 className="text-5xl xl:text-6xl font-black uppercase text-white mb-8 leading-none">
        WHAT YOU GAIN
      </h2>

      <div className="grid grid-cols-2 gap-x-12 gap-y-8 text-white text-xl leading-9">

        <div>✓100% endpoint EDR coverage achieved</div>
        <div>✓Critical patches deployed within 24 hours</div>

        <div>✓All endpoints CIS benchmark compliant</div>
        <div>✓DLP policies active across all endpoints</div>

        <div>✓MDM enforced on all mobile devices</div>
        <div>✓IoT/OT devices inventoried and risk-rated</div>

        <div>✓Full patch compliance audit trail</div>
        <div>✓Zero unmanaged endpoint blind spots</div>

      </div>

    </div>

  </div>
</section>
{/* CTA SECTION */}
<section className="py-16 px-6 bg-[#050d18]">
  <div className="max-w-6xl mx-auto">

    <div className="rounded-[24px] border border-cyan-900/60 bg-gradient-to-b from-[#11233b] to-[#0c1828] py-16 px-8 text-center">

      <p className="uppercase tracking-[6px]text-[#8aa0ba] text-sm mb-8">
        D02 • ENDPOINT & DEVICE SECURITY
      </p>

      <h2
  className="text-5xl md:text-6xl font-extrabold uppercase text-white leading-tight mb-8 tracking-tight"
>
  ELIMINATE YOUR ENDPOINT BLIND SPOTS
</h2>

      <p className="text-[#9db0c7] text-lg leading-8 max-w-2xl mx-auto mb-10">
        Get a free endpoint security assessment. We identify unprotected
        devices, patch gaps and DLP weaknesses across your entire estate.
      </p>

      <div className="flex flex-wrap justify-center gap-4">

        <button className="bg-[#20f2a2] hover:bg-[#14e28f] text-black font-bold px-10 py-4 rounded-lg text-xl transition-all duration-300">
         Start Free Assessment
        </button>

        <button className="border border-cyan-800 text-[#20f2a2] hover:bg-[#20f2a2] hover:text-black font-semibold px-10 py-4 rounded-lg text-xl transition-all duration-300">
          ← All Services
        </button>

      </div>

    </div>

  </div>
</section>
  </div>
  
</section>




  

</section>
    </>
  );
};

export default EndpointSecurity;