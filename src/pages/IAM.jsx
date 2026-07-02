import ServiceTabs from "../components/ServiceTabs";
export default function NetworkSecurity() {
 return (
  <>
    <ServiceTabs />

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
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

    {/* Breadcrumb */}

    <p className="text-gray-500 text-sm mb-6">
      Home <span className="mx-2">/</span> Services
      <span className="mx-2">/</span>
      <span className="text-white">Identity & Access Management</span>
    </p>

    {/* Badge */}

    <div className="inline-block border border-emerald-700 bg-emerald-900/20 rounded-lg px-5 py-2 mb-8">
      <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">
        D06 • Identity & Access Management
      </span>
    </div>

    {/* Heading */}

    <h1 className="text-6xl font-extrabold uppercase leading-none text-white">
      ZERO TRUST ACCESS
    </h1>

    <h1 className="text-6xl font-extrabold uppercase leading-none text-emerald-400 mt-3">
      PAM. MFA. SSO. IGA.
    </h1>

    {/* Subtitle */}

    <p className="mt-8 text-gray-400 text-lg tracking-wide max-w-5xl">
      Privileged Access Management • MFA • SSO • ZTNA • Identity Governance •
      Access Recertification
    </p>

    {/* Stats */}

    <div className="flex flex-wrap gap-16 mt-12">

      <div>
        <h2 className="text-5xl font-bold text-emerald-400">11</h2>
        <p className="uppercase text-gray-500 tracking-[3px] text-sm mt-2">
          Services
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-emerald-400">4</h2>
        <p className="uppercase text-gray-500 tracking-[3px] text-sm mt-2">
          Add-ons
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-emerald-400">
          ZERO TRUST
        </h2>
        <p className="uppercase text-gray-500 tracking-[3px] text-sm mt-2">
          Architecture
        </p>
      </div>

      <div>
        <h2 className="text-5xl font-bold text-emerald-400">80%</h2>
        <p className="uppercase text-gray-500 tracking-[3px] text-sm mt-2">
          Breaches via Credentials
        </p>
      </div>

    </div>

    {/* Divider */}

    <div className="border-t border-cyan-900 my-12"></div>

    {/* Buttons */}

    <div className="flex flex-wrap gap-5">

      <button className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold px-10 py-4 rounded-lg transition">
        Get Free Assessment
      </button>

      <button className="border border-cyan-800 hover:bg-cyan-950 text-emerald-400 px-10 py-4 rounded-lg transition">
        ← All Domains
      </button>

    </div>


<section className="bg-[#081522] py-14 mt-16">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-14 items-start">

      {/* Left Content */}

      <div>

        <p className="text-emerald-400 uppercase tracking-[4px] text-xs mb-3">
          // OVERVIEW
        </p>

        <h2 className="text-5xl font-extrabold uppercase text-white leading-tight mb-8">
          ELIMINATE CREDENTIAL-BASED
          <br />
          BREACHES
        </h2>

        <div className="space-y-8 text-gray-400 text-lg leading-9">

          <p>
            Over <span className="text-white font-semibold">80%</span> of
            breaches involve compromised credentials. Identity is the new
            perimeter — and organisations often have significant gaps in how
            they manage, govern and protect it.
            <span className="text-white font-semibold">
              {" "}End-to-end IAM transformation
            </span>{" "}
            across the complete identity lifecycle.
          </p>

          <p>
            Deploy and manage
            <span className="text-white font-semibold">
              {" "}CyberArk, BeyondTrust and Delinea
            </span>{" "}
            for Privileged Access Management. Implement MFA using
            <span className="text-white font-semibold">
              {" "}FIDO2, YubiKey
            </span>{" "}
            and design Zero Trust access using
            <span className="text-white font-semibold">
              {" "}Zscaler, Cloudflare Access
            </span>{" "}
            and
            <span className="text-white font-semibold">
              {" "}Microsoft Entra ID.
            </span>
          </p>

          <p>
            Modernize your
            <span className="text-white font-semibold">
              {" "}Joiner–Mover–Leaver
            </span>{" "}
            process, enforce
            <span className="text-white font-semibold">
              {" "}RBAC
            </span>{" "}
            and automate access governance to eliminate
            over-provisioning and privilege creep.
          </p>

        </div>

      </div>

      {/* Right Card */}

      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-8">

        <p className="uppercase tracking-[5px] text-xs text-gray-500 mb-8">
          AT A GLANCE
        </p>

        <div className="space-y-6">

          <div className="flex justify-between border-b border-cyan-900 pb-4">
            <span className="text-gray-400">Engagement Models</span>
            <span className="text-white font-semibold">
              Project • Assessment • Advisory
            </span>
          </div>

          <div className="flex justify-between border-b border-cyan-900 pb-4">
            <span className="text-gray-400">PAM Platforms</span>
            <span className="text-white font-semibold">
              CyberArk • BeyondTrust • Delinea
            </span>
          </div>

          <div className="flex justify-between border-b border-cyan-900 pb-4">
            <span className="text-gray-400">IdP Platforms</span>
            <span className="text-white font-semibold">
              Okta • Entra ID • Ping Identity
            </span>
          </div>

          <div className="flex justify-between border-b border-cyan-900 pb-4">
            <span className="text-gray-400">MFA Methods</span>
            <span className="text-white font-semibold">
              FIDO2 • YubiKey • Duo • OTP
            </span>
          </div>

          <div className="flex justify-between pb-4">
            <span className="text-gray-400">Compliance</span>
            <span className="text-white font-semibold">
              ISO 27001 • NIST 800-53 • PCI DSS • SOX
            </span>
          </div>

        </div>

        <button className="w-full mt-8 bg-emerald-400 hover:bg-emerald-300 text-black font-semibold py-4 rounded-lg transition">
          Enquire Now →
        </button>

      </div>

    </div>

  </div>
</section>
<section className="relative overflow-hidden py-14 mt-16 bg-gradient-to-r from-[#0b2345] via-[#143b6b] to-[#0b2345]">

  {/* Grid Background */}
  <div
    className="absolute inset-0 opacity-20"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
      backgroundSize: "  80px",
    }}
  />

  {/* Blue Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#1e4d8f]/30 via-transparent to-transparent" />

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <p className="text-emerald-400 uppercase tracking-[5px] text-xs mb-3">
        // WHY CHOOSE TRINITY NEXUS
      </p>

      <h2 className="text-5xl font-extrabold uppercase text-white">
        OUR STRENGTHS
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-8 hover:border-emerald-400 transition">
        <div className="text-4xl mb-5">🔑</div>

        <h3 className="text-2xl font-bold text-white mb-4">
          PAM Excellence
        </h3>

        <p className="text-gray-400 leading-8">
          Privileged account discovery, credential vaulting, session recording
          and just-in-time access using CyberArk, BeyondTrust and Delinea.
          Eliminate standing privileges and insider threats.
        </p>
      </div>

      {/* Card 2 */}

      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-8 hover:border-emerald-400 transition">
        <div className="text-4xl mb-5">🚫</div>

        <h3 className="text-2xl font-bold text-white mb-4">
          MFA Everywhere
        </h3>

        <p className="text-gray-400 leading-8">
          Deploy MFA across applications, VPNs and privileged accounts.
          Support for FIDO2, YubiKey, Authenticator Apps and OTP with
          bypass-risk assessment.
        </p>
      </div>

      {/* Card 3 */}

      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-8 hover:border-emerald-400 transition">
        <div className="text-4xl mb-5">🪪</div>

        <h3 className="text-2xl font-bold text-white mb-4">
          Enterprise SSO
        </h3>

        <p className="text-gray-400 leading-8">
          SAML 2.0 & OIDC based SSO using Okta, Microsoft Entra ID and Ping
          Identity with lifecycle management and attribute mapping.
        </p>
      </div>

      {/* Card 4 */}

      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-8 hover:border-emerald-400 transition">
        <div className="text-4xl mb-5">🌐</div>

        <h3 className="text-2xl font-bold text-white mb-4">
          Zero Trust Network Access
        </h3>

        <p className="text-gray-400 leading-8">
          Replace legacy VPNs using Zscaler, Cloudflare Access and Microsoft
          Entra with continuous verification and least-privilege access.
        </p>
      </div>

      {/* Card 5 */}

      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-8 hover:border-emerald-400 transition">
        <div className="text-4xl mb-5">📊</div>

        <h3 className="text-2xl font-bold text-white mb-4">
          Identity Governance
        </h3>

        <p className="text-gray-400 leading-8">
          RBAC, Joiner-Mover-Leaver automation, Separation of Duties and
          access recertification using SailPoint or Saviynt.
        </p>
      </div>

      {/* Card 6 */}

      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-8 hover:border-emerald-400 transition">
        <div className="text-4xl mb-5">🔎</div>

        <h3 className="text-2xl font-bold text-white mb-4">
          Orphaned Account Hunting
        </h3>

        <p className="text-gray-400 leading-8">
          Discover dormant accounts, shared service accounts and excessive
          privileges across Active Directory, Entra ID and enterprise
          applications.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-14 bg-[#081522]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <p className="text-emerald-400 uppercase tracking-[5px] text-xs mb-3">
      // OUR DELIVERY APPROACH
    </p>

    <h2 className="text-5xl font-black uppercase text-white mb-6">
      HOW WE DELIVER
    </h2>

    <p className="text-gray-400 text-lg max-w-3xl leading-8 mb-14">
      Our IAM engagements follow a structured programme that delivers
      measurable risk reduction at every phase.
    </p>

    {/* Timeline */}

    <div className="space-y-10">

      {/* 01 */}

      <div className="grid grid-cols-[70px_1fr] gap-8 border-b border-cyan-900 pb-10">

        <h3 className="text-5xl font-bold text-emerald-500">
          01
        </h3>

        <div>
          <h4 className="text-3xl font-bold text-white mb-4">
            IAM Maturity Assessment
          </h4>

          <p className="text-gray-400 leading-8 text-lg">
            Assess your current IAM posture including privileged account
            management, MFA coverage, identity lifecycle processes and
            governance maturity aligned with ISO 27001 and NIST 800-53.
          </p>
        </div>

      </div>

      {/* 02 */}

      <div className="grid grid-cols-[70px_1fr] gap-8 border-b border-cyan-900 pb-10">

        <h3 className="text-5xl font-bold text-emerald-500">
          02
        </h3>

        <div>

          <h4 className="text-3xl font-bold text-white mb-4">
            Privileged Account Discovery
          </h4>

          <p className="text-gray-400 leading-8 text-lg">
            Discover privileged, shared, service, dormant and
            over-provisioned accounts across Active Directory, cloud IAM
            platforms and enterprise applications.
          </p>

        </div>

      </div>

      {/* 03 */}

      <div className="grid grid-cols-[70px_1fr] gap-8 border-b border-cyan-900 pb-10">

        <h3 className="text-5xl font-bold text-emerald-500">
          03
        </h3>

        <div>

          <h4 className="text-3xl font-bold text-white mb-4">
            PAM & MFA Implementation
          </h4>

          <p className="text-gray-400 leading-8 text-lg">
            Deploy PAM with credential vaulting, session recording and
            just-in-time access. Roll out MFA using FIDO2, YubiKey and
            authenticator methods for high-risk users.
          </p>

        </div>

      </div>

      {/* 04 */}

      <div className="grid grid-cols-[70px_1fr] gap-8 border-b border-cyan-900 pb-10">

        <h3 className="text-5xl font-bold text-emerald-500">
          04
        </h3>

        <div>

          <h4 className="text-3xl font-bold text-white mb-4">
            SSO & ZTNA Architecture
          </h4>

          <p className="text-gray-400 leading-8 text-lg">
            Design enterprise SSO using SAML/OIDC and replace legacy VPNs
            with Zero Trust Network Access using identity-aware access
            policies.
          </p>

        </div>

      </div>

      {/* 05 */}

      <div className="grid grid-cols-[70px_1fr] gap-8">

        <h3 className="text-5xl font-bold text-emerald-500">
          05
        </h3>

        <div>

          <h4 className="text-3xl font-bold text-white mb-4">
            IGA Programme & Access Governance
          </h4>

          <p className="text-gray-400 leading-8 text-lg">
            Implement Joiner-Mover-Leaver automation, RBAC, quarterly
            access recertification, Separation of Duties reviews and
            governance reporting.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>
<section className="relative overflow-hidden py-14 bg-gradient-to-r from-[#0b2345] via-[#143b6b] to-[#0b2345]">

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

    {/* Heading */}

    <p className="text-emerald-400 uppercase tracking-[5px] text-xs mb-3">
      // 11 SERVICES • 4 ADD-ONS
    </p>

    <h2 className="text-5xl font-black uppercase text-white mb-12">
      COMPLETE SERVICE LIST
    </h2>

    <div className="space-y-6">

      {/* Card 1 */}

      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-7 hover:border-emerald-400 transition">

        <div className="flex items-center gap-4 mb-4">

          <span className="px-4 py-2 text-xs rounded-md bg-pink-500/10 border border-pink-500 text-pink-400 font-semibold">
            Assessment
          </span>

          <h3 className="text-3xl font-bold text-white">
            IAM Programme Assessment
          </h3>

        </div>

        <p className="text-lg text-gray-400 leading-8 mb-5">
          End-to-end IAM maturity assessment covering identity lifecycle,
          provisioning, de-provisioning, role management, access certification
          and privileged access.
        </p>

        <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-700 text-emerald-400 font-mono">
          📄 IAM maturity report + roadmap
        </span>

      </div>

      {/* Card 2 */}

      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-7 hover:border-emerald-400 transition">

        <div className="flex items-center gap-4 mb-4">

          <span className="px-4 py-2 text-xs rounded-md bg-emerald-500/10 border border-emerald-500 text-emerald-400 font-semibold">
            Project
          </span>

          <h3 className="text-3xl font-bold text-white">
            Privileged Access Management (PAM)
          </h3>

        </div>

        <p className="text-lg text-gray-400 leading-8 mb-5">
          Design and deploy CyberArk, BeyondTrust and Delinea with credential
          vaulting, session recording and Just-In-Time privileged access.
        </p>

        <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-700 text-emerald-400 font-mono">
          📄 PAM design document + deployment report
        </span>

      </div>

      {/* Card 3 */}

      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-7 hover:border-emerald-400 transition">

        <div className="flex items-center gap-4 mb-4">

          <span className="px-4 py-2 text-xs rounded-md bg-pink-500/10 border border-pink-500 text-pink-400 font-semibold">
            Assessment
          </span>

          <h3 className="text-3xl font-bold text-white">
            Privileged Account Discovery & Audit
          </h3>

        </div>

        <p className="text-lg text-gray-400 leading-8 mb-5">
          Discover privileged accounts across Active Directory, cloud IAM
          environments and enterprise applications. Identify orphaned,
          over-privileged and dormant accounts.
        </p>

        <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-700 text-emerald-400 font-mono">
          📄 Privileged account audit report
        </span>

      </div>
<div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-7 hover:border-emerald-400 transition">

        <div className="flex items-center gap-4 mb-4">

          <span className="px-4 py-2 text-xs rounded-md bg-pink-500/10 border border-pink-500 text-pink-400 font-semibold">
            Assessment
          </span>

          <h3 className="text-3xl font-bold text-white">
            Multi-Factor Authentication (MFA) Deployment
          </h3>

        </div>

        <p className="text-lg text-gray-400 leading-8 mb-5">
          Assess MFA gaps and deploy across apps and VPN (Microsoft Authenticator, Duo, Okta Verify, FIDO2/YubiKey).
        </p>

        <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-700 text-emerald-400 font-mono">
           MFA implementation report + coverage matrix
        </span>

      </div>
<div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-7 hover:border-emerald-400 transition">

        <div className="flex items-center gap-4 mb-4">

          <span className="px-4 py-2 text-xs rounded-md bg-pink-500/10 border border-pink-500 text-pink-400 font-semibold">
            Assessment
          </span>

          <h3 className="text-3xl font-bold text-white">
            MFA Bypass Risk Assessment
          </h3>

        </div>

        <p className="text-lg text-gray-400 leading-8 mb-5">
          Review MFA configs for bypass risks: SS7, SIM swapping, OTP phishing (EvilProxy), MFA fatigue and fallback auth weaknesses.
        </p>

        <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-700 text-emerald-400 font-mono">
           MFA bypass risk report + hardening guide
        </span>

      </div>
<div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-7 hover:border-emerald-400 transition">

        <div className="flex items-center gap-4 mb-4">

          <span className="px-4 py-2 text-xs rounded-md bg-pink-500/10 border border-pink-500 text-pink-400 font-semibold">
            Assessment
          </span>

          <h3 className="text-3xl font-bold text-white">
            
Single Sign-On (SSO) Implementation
          </h3>

        </div>

        <p className="text-lg text-gray-400 leading-8 mb-5">
Design and deploy SSO via SAML 2.0/OIDC (Okta, Azure Entra ID, Ping Identity). App onboarding, attribute mapping and session management.
        </p>

        <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-700 text-emerald-400 font-mono">
           SSO architecture + deployment report
        </span>

      </div>
      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-7 hover:border-emerald-400 transition">

        <div className="flex items-center gap-4 mb-4">

          <span className="px-4 py-2 text-xs rounded-md bg-pink-500/10 border border-pink-500 text-pink-400 font-semibold">
            Assessment
          </span>

          <h3 className="text-3xl font-bold text-white">
            
Zero Trust Network Access (ZTNA)
          </h3>

        </div>

        <p className="text-lg text-gray-400 leading-8 mb-5">
Zero Trust strategy: Zscaler, Cloudflare Access, Microsoft Entra. Identity-based access, continuous verification and micro-segmentation.
        </p>

        <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-700 text-emerald-400 font-mono">
           Zero Trust roadmap + architecture blueprint
        </span>

      </div>

      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-7 hover:border-emerald-400 transition">

        <div className="flex items-center gap-4 mb-4">

          <span className="px-4 py-2 text-xs rounded-md bg-pink-500/10 border border-pink-500 text-pink-400 font-semibold">
            Assessment
          </span>

          <h3 className="text-3xl font-bold text-white">
            
Access Review & Recertification
          </h3>

        </div>

        <p className="text-lg text-gray-400 leading-8 mb-5">
User access review campaigns across apps and infra. Identify role violations, excessive access and dormant accounts.
        </p>

        <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-700 text-emerald-400 font-mono">
           Access review report + remediation tracker
        </span>

      </div>
      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-7 hover:border-emerald-400 transition">

        <div className="flex items-center gap-4 mb-4">

          <span className="px-4 py-2 text-xs rounded-md bg-pink-500/10 border border-pink-500 text-pink-400 font-semibold">
            Assessment
          </span>

          <h3 className="text-3xl font-bold text-white">
            
 Orphaned & Dormant Account Audit
          </h3>

        </div>

        <p className="text-lg text-gray-400 leading-8 mb-5">
Identify unused/orphaned/dormant accounts across AD, cloud directories and business applications.
        </p>

        <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-700 text-emerald-400 font-mono">
            Orphaned account report + cleanup plan
        </span>

      </div>
<div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-7 hover:border-emerald-400 transition">

        <div className="flex items-center gap-4 mb-4">

          <span className="px-4 py-2 text-xs rounded-md bg-pink-500/10 border border-pink-500 text-pink-400 font-semibold">
            Assessment
          </span>

          <h3 className="text-3xl font-bold text-white">
            
Identity Governance & Administration (IGA)
          </h3>

        </div>

        <p className="text-lg text-gray-400 leading-8 mb-5">
Design IGA programme: RBAC model, Joiner-Mover-Leaver process, automated provisioning (SailPoint, Saviynt) and SoD conflict detection.
        </p>

        <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-700 text-emerald-400 font-mono">
           IGA design document + RBAC model
        </span>

      </div>

      <div className="bg-[#0c1b2d] border border-cyan-900 rounded-2xl p-7 hover:border-emerald-400 transition">

        <div className="flex items-center gap-4 mb-4">

          <span className="px-4 py-2 text-xs rounded-md bg-pink-500/10 border border-pink-500 text-pink-400 font-semibold">
            Assessment
          </span>

          <h3 className="text-3xl font-bold text-white">
            
Password Policy Audit & Advisory
          </h3>

        </div>

        <p className="text-lg text-gray-400 leading-8 mb-5">
Review password policy against NIST SP 800-63B. Length over complexity, breached password checks and passwordless readiness.
        </p>

        <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-emerald-700 text-emerald-400 font-mono">
           Password policy audit report + updated policy
        </span>

      </div>
    </div>

  </div>
</section>
<section className="bg-[#081522] py-14">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20">

      {/* LEFT */}

      <div>

        <p className="text-emerald-400 uppercase tracking-[5px] text-xs mb-3">
          // TOOLS & TECHNOLOGY
        </p>

        <h2 className="text-5xl font-black uppercase text-white mb-8">
          TECHNOLOGY STACK
        </h2>

        <p className="text-lg text-gray-400 leading-8 mb-8">
          Leading PAM, IdP and governance platforms deployed and managed by
          our IAM-certified specialists.
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "CyberArk",
            "BeyondTrust",
            "Delinea",
            "Okta",
            "Azure Entra ID",
            "Ping Identity",
            "Zscaler",
            "Cloudflare Access",
            "Microsoft Authenticator",
            "Duo",
            "YubiKey",
            "SailPoint",
            "Saviynt",
            "Microsoft Active Directory",
            "Google Workspace Admin",
          ].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-lg border border-cyan-900 text-gray-300 bg-[#0c1b2d] font-mono text-sm hover:border-emerald-400 transition"
            >
              {tool}
            </span>
          ))}

        </div>

      </div>

      {/* RIGHT */}

      <div>

        <p className="text-emerald-400 uppercase tracking-[5px] text-xs mb-3">
          // MEASURABLE OUTCOMES
        </p>

        <h2 className="text-5xl font-black uppercase text-white mb-8">
          WHAT YOU GAIN
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">

          {[
            "All privileged accounts under PAM control",
            "SSO covering all business applications",
            "Orphaned accounts eliminated",
            "Joiner-Mover-Leaver automated",
            "MFA deployed to 100% of users",
            "VPN replaced with Zero Trust access",
            "Access recertification cycle established",
            "SoD conflicts identified and remediated",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <span className="text-emerald-400 text-xl mt-1">
                ✓
              </span>

              <p className="text-lg text-white leading-8">
                {item}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>

  </div>
</section>
<section className="relative overflow-hidden py-14 bg-gradient-to-r from-[#0b2345] via-[#143b6b] to-[#0b2345]">

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

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    <div className="rounded-3xl border border-cyan-900 bg-gradient-to-b from-[#0d1b2f] to-[#081522] py-16 px-8 text-center">

      <p className="text-gray-400 uppercase tracking-[8px] text-sm mb-8">
        D06 • IDENTITY & ACCESS MANAGEMENT
      </p>

      <h2 className="text-5xl lg:text-6xl font-black uppercase text-white mb-8">
        SECURE EVERY IDENTITY TODAY
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-9 mb-12">
        Get a free IAM maturity assessment. We identify your privileged
        account risks, MFA gaps and access governance weaknesses —
        at no cost.
      </p>

      <div className="flex flex-wrap justify-center gap-6">

        <button className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold px-10 py-4 rounded-lg transition">
           Start Free Assessment
        </button>

        <button className="border border-cyan-900 hover:border-emerald-400 text-emerald-400 px-10 py-4 rounded-lg font-semibold transition">
          ← All Services
        </button>

      </div>

    </div>

  </div>
</section>
  </div>
</section>
</>
  );
}