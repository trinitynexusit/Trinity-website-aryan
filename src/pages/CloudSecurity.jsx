import ServiceTabs from "../components/ServiceTabs";
export default function CloudSecurity() {
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

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-14">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

    <p className="text-gray-400 text-sm mb-6">
      Home <span className="mx-2">/</span>
      Services <span className="mx-2">/</span>
      <span className="text-white">Cloud Security</span>
    </p>

    <div className="inline-block px-4 py-2 rounded-md border border-[#00ff99]/30 bg-[#00ff99]/10 text-[#00ff99] font-mono mb-8">
      D03 • Cloud Security
    </div>

    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
      SECURE YOUR CLOUD
    </h1>

    <h2 className="mt-3 text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#00ff99]">
      CSPM. CWPP. CIEM. ZERO TRUST.
    </h2>

    <p className="mt-5 text-gray-400 text-base max-w-4xl">
      Cloud Posture Management • Workload Protection • Kubernetes Security •
      CASB • Cloud Architecture Review
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14">

      <div>
        <h3 className="text-[#00ff99] text-3xl font-bold">13</h3>
        <p className="text-gray-500 uppercase tracking-widest mt-2">
          Services
        </p>
      </div>

      <div>
        <h3 className="text-[#00ff99] text-3xl font-bold">5</h3>
        <p className="text-gray-500 uppercase tracking-widest mt-2">
          Add-ons
        </p>
      </div>

      <div>
        <h3 className="text-[#00ff99] text-3xl font-bold">
          AWS/AZURE/GCP
        </h3>
        <p className="text-gray-500 uppercase tracking-widest mt-2">
          Platforms
        </p>
      </div>

      <div>
        <h3 className="text-[#00ff99] text-3xl font-bold">
          Continuous
        </h3>
        <p className="text-gray-500 uppercase tracking-widest mt-2">
          Monitoring
        </p>
      </div>

    </div>

    <div className="flex flex-wrap gap-5 mt-10">

      <button className="px-8 py-4 rounded-lg bg-[#00ff99] text-black font-bold hover:opacity-90 transition">
        Get Free Assessment
      </button>

      <button className="px-8 py-4 rounded-lg border border-[#00ff99]/30 text-[#00ff99] hover:bg-[#00ff99]/10 transition">
        ← All Domains
      </button>
    </div>
    </div>
{/* ================= OVERVIEW SECTION ================= */}

<section className="max-w-6xl mx-auto px-6 py-14">
  <div className="grid lg:grid-cols-2 gap-10 items-start">

    {/* Left */}

    <div>

      <p className="text-[#00ff99] uppercase tracking-[4px] text-xs font-mono mb-3">
        // Overview
      </p>

      <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
        Cloud Security
        <br />
        Without Compromise
      </h2>

      <div className="space-y-5 text-gray-400 text-[15px] leading-8">

        <p>
          The cloud enables speed and scale—but misconfigured resources remain the
          leading cause of breaches. We provide
          <span className="text-white font-semibold">
            {" "}continuous cloud security posture management
          </span>
          across AWS, Azure and GCP.
        </p>

        <p>
          We deploy
          <span className="text-white font-semibold">
            {" "}Prisma Cloud, Wiz and AWS Security Hub
          </span>
          for posture visibility and workload protection.
        </p>

        <p>
          Built around the
          <span className="text-white font-semibold">
            {" "}Shared Responsibility Model
          </span>
          with continuous compliance monitoring.
        </p>

      </div>

    </div>

    {/* Right */}

    <div className="rounded-2xl border border-cyan-900 bg-[#091827] p-6">

      <p className="uppercase tracking-[4px] text-[11px] text-gray-500 mb-5">
        At a Glance
      </p>

      {[
        ["Platforms","AWS • Azure • GCP"],
        ["Engagement","Managed • Advisory • Project"],
        ["Tools","Prisma • Wiz • AWS Security Hub"],
        ["Compliance","ISO27001 • PCI DSS • DPDP"],
        ["Coverage","IaaS • PaaS • SaaS"]
      ].map(([k,v])=>(
        <div
          key={k}
          className="flex justify-between gap-4 border-b border-white/10 py-3"
        >
          <span className="text-gray-400 text-sm">
            {k}
          </span>

          <span className="text-white text-sm font-medium text-right">
            {v}
          </span>

        </div>
      ))}

      <button className="mt-6 w-full py-3 rounded-lg bg-[#00ff99] text-black font-semibold hover:opacity-90 transition">
        Enquire Now →
      </button>

    </div>

  </div>
</section>

{/* ================= OUR STRENGTHS ================= */}

<section className="max-w-6xl mx-auto px-6 py-14">

  <div className="text-center mb-10">

    <p className="text-[#00ff99] uppercase tracking-[4px] text-xs font-mono mb-3">
      // Why Choose Trinity Nexus
    </p>

    <h2 className="text-3xl md:text-4xl font-bold text-white">
      Our Strengths
    </h2>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      {
        icon:"☁️",
        title:"Continuous Cloud Posture",
        desc:"Continuous CSPM scanning to detect cloud misconfigurations, exposed storage and insecure IAM."
      },
      {
        icon:"🐳",
        title:"Container & Kubernetes",
        desc:"Cluster hardening, RBAC reviews, workload protection and runtime security."
      },
      {
        icon:"🔑",
        title:"Cloud Identity",
        desc:"CIEM analysis to discover risky permissions and privilege escalation paths."
      },
      {
        icon:"⚡",
        title:"Serverless Security",
        desc:"Protect Lambda, Azure Functions and Cloud Run from insecure configurations."
      },
      {
        icon:"🔒",
        title:"Cloud Data Protection",
        desc:"Encryption, KMS, Key Vault, Secrets Manager and compliance monitoring."
      },
      {
        icon:"📊",
        title:"Cloud IR Readiness",
        desc:"CloudTrail, Azure Monitor and GCP logging with incident response readiness."
      }
    ].map((item,index)=>(

      <div
        key={index}
        className="rounded-2xl border border-cyan-900 bg-[#091827] p-6 hover:border-[#00ff99]/40 transition"
      >

        <div className="text-3xl mb-5">
          {item.icon}
        </div>

        <h3 className="text-xl font-semibold text-white mb-4">
          {item.title}
        </h3>

        <p className="text-gray-400 text-[15px] leading-7">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</section>

{/* ================= HOW WE DELIVER ================= */}

<section className="max-w-6xl mx-auto px-6 py-14">

  <div className="max-w-3xl mb-10">

    <p className="text-[#00ff99] uppercase tracking-[4px] text-xs font-mono mb-3">
      // Our Delivery Approach
    </p>

    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      How We Deliver
    </h2>

    <p className="text-gray-400 text-[15px] leading-7">
      Our cloud security engagement follows a structured maturity journey —
      from initial visibility to continuous managed protection.
    </p>

  </div>

  <div className="space-y-8">

    {[
      {
        no: "01",
        title: "Cloud Discovery & Asset Inventory",
        desc: "Discover cloud accounts, workloads, identities and build a complete asset inventory."
      },
      {
        no: "02",
        title: "Posture Assessment & Benchmark",
        desc: "CIS benchmark review with risk findings, remediation guidance and compliance mapping."
      },
      {
        no: "03",
        title: "Architecture Review & Design",
        desc: "Review cloud architecture, IAM, networking and Zero Trust security best practices."
      },
      {
        no: "04",
        title: "Continuous CSPM Monitoring",
        desc: "Deploy CSPM tools for real-time monitoring, alerts and posture dashboards."
      },
      {
        no: "05",
        title: "Compliance & Audit Support",
        desc: "Generate evidence for ISO 27001, PCI DSS and DPDP compliance audits."
      }

    ].map((item) => (

      <div
        key={item.no}
        className="flex gap-6 border-b border-white/10 pb-6"
      >

        <div className="text-4xl font-bold text-[#00ff99]/60 min-w-[55px]">
          {item.no}
        </div>

        <div>

          <h3 className="text-xl font-semibold text-white mb-2">
            {item.title}
          </h3>

          <p className="text-gray-400 text-[15px] leading-7">
            {item.desc}
          </p>

        </div>

      </div>

    ))}

  </div>

</section>

{/* ================= COMPLETE SERVICE LIST ================= */}

<section className="max-w-6xl mx-auto px-6 py-14">

  <p className="text-[#00ff99] uppercase tracking-[4px] text-xs font-mono mb-3">
    // 13 Services • 5 Add-ons
  </p>

  <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
    Complete Service List
  </h2>

  <div className="space-y-5">

    {[
      {
        type:"Ongoing Service",
        color:"bg-blue-500/10 text-blue-300 border-blue-500/20",
        title:"Cloud Security Posture Mgmt (CSPM)",
        desc:"Continuous monitoring of AWS, Azure and GCP for misconfigurations, exposed storage and risky IAM permissions.",
        deliverable:"Weekly posture dashboard + remediation tracking"
      },
      {
        type:"Assessment",
        color:"bg-pink-500/10 text-pink-300 border-pink-500/20",
        title:"Cloud Configuration Baseline Audit",
        desc:"CIS benchmark review with risk findings and prioritized remediation roadmap.",
        deliverable:"Cloud CIS benchmark report"
      },
      {
        type:"Assessment",
        color:"bg-pink-500/10 text-pink-300 border-pink-500/20",
        title:"S3 / Blob / GCS Exposure Audit",
        desc:"Enumerate all object storage buckets. Identify public access, over-permissive ACLs, missing encryption and logging gaps.",
        deliverable:"Storage exposure report"
      },
      {
        type:"Project",
        color:"bg-green-500/10 text-green-300 border-green-500/20",
        title:"Cloud Workload Protection (CWPP)",
        desc:"Runtime protection for VMs, containers and serverless. File integrity monitoring, threat detection, image scanning and SOC alerting.",
        deliverable:"Architecture design document"
      },
      {
        type:"Project",
        color:"bg-green-500/10 text-green-300 border-green-500/20",
        title:" IAM Policy Review (Least Privilege)",
        desc:"Review IAM policies for least-privilege violations. Map actual vs required permissions using Access Analyzer and Policy Advisor.",
        deliverable:"Architecture design document"
      },
      {
        type:"Project",
        color:"bg-green-500/10 text-green-300 border-green-500/20",
        title:"Cloud Architecture Security Review",
        desc:"Review cloud architecture: network topology, security group design, inter-service trust and secrets management. AWS WAF / Azure Security Benchmark.",
        deliverable:"Architecture risk report + design recommendations"
      },
      {
        type:"Project",
        color:"bg-green-500/10 text-green-300 border-green-500/20",
        title:"Container & Kubernetes Security",
        desc:"K8s cluster config, RBAC policies, network policies, pod security standards, secrets management and image registry security.",
        deliverable:"K8s security assessment report"
      },
      {
        type:"Project",
        color:"bg-green-500/10 text-green-300 border-green-500/20",
        title:"Container Image Vulnerability Scan",
        desc:"Scan container images (Trivy, Snyk, Twistlock) for OS and app-layer vulnerabilities with CVSS/EPSS scoring.",
        deliverable:"Image vulnerability scan report"
      },
       {
        type:"Project",
        color:"bg-green-500/10 text-green-300 border-green-500/20",
        title:"Cloud Incident Response Readiness",
        desc:"Assess cloud logging, alerting and IR playbook maturity. Identify detection gaps and build cloud-native IR capability.",
        deliverable:"IR readiness gap report"
      },
    {
        type:"Project",
        color:"bg-green-500/10 text-green-300 border-green-500/20",
        title:"Serverless Security Assessment",
        desc:"Review Lambda/Functions/Cloud Run for injection risks, overprivileged roles, insecure triggers and secrets in env vars.",
        deliverable:" Serverless security report"
      },
      {
        type:"Project",
        color:"bg-green-500/10 text-green-300 border-green-500/20",
        title:"Cloud Data Security & Encryption Review",
        desc:"Review encryption at rest/transit, KMS key policies, secrets management and data residency obligations.",
        deliverable:" Data security advisory report"
      },
      {
        type:"Project",
        color:"bg-green-500/10 text-green-300 border-green-500/20",
        title:"Log Management & Retention Audit",
        desc:"Review log coverage, retention periods, centralisation, integrity and access controls. CERT-In (180d), PCI DSS (12mo) and ISO 27001 aligned.",
        deliverable:" Log management audit report + compliance gap list"
      }

    ].map((item,index)=>(

      <div
        key={index}
        className="rounded-2xl border border-cyan-900 bg-[#091827] p-6 hover:border-[#00ff99]/30 transition"
      >

        <span className={`inline-block px-3 py-1 rounded-md border text-xs font-medium ${item.color}`}>
          {item.type}
        </span>

        <h3 className="text-xl font-semibold text-white mt-4 mb-3">
          {item.title}
        </h3>

        <p className="text-gray-400 text-[15px] leading-7 mb-5">
          {item.desc}
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#00ff99]/30 bg-[#00ff99]/10 text-[#00ff99] text-sm font-mono">
          📄 {item.deliverable}
        </div>

      </div>

    ))}

  </div>

</section>

{/* ================= TECHNOLOGY STACK ================= */}

<section className="max-w-6xl mx-auto px-6 py-14">

  <div className="grid lg:grid-cols-2 gap-14">

    {/* Left */}
    <div>

      <p className="text-[#00ff99] text-xs tracking-[4px] uppercase font-mono mb-3">
        // Tools & Technology
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Technology Stack
      </h2>

      <p className="text-gray-400 text-[16px] leading-8 mb-8">
        Industry-leading cloud security tools deployed and managed by our
        certified cloud security engineers.
      </p>

      <div className="flex flex-wrap gap-3">

        {[
          "Prisma Cloud",
          "Wiz",
          "AWS Security Hub",
          "Microsoft Defender",
          "Google SCC",
          "Aqua Security",
          "Twistlock",
          "Trivy",
          "Snyk",
          "Checkov",
          "Terraform",
          "Vault",
          "AWS Secrets Manager",
          "Azure Key Vault",
          "Orca Security"
        ].map((tool) => (

          <span
            key={tool}
            className="px-4 py-2 rounded-lg border border-cyan-900 bg-[#091827] text-gray-300 text-sm"
          >
            {tool}
          </span>

        ))}

      </div>

    </div>

    {/* Right */}

    <div>

      <p className="text-[#00ff99] text-xs tracking-[4px] uppercase font-mono mb-3">
        // Measurable Outcomes
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        What You Gain
      </h2>

      <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-gray-300 text-[16px] leading-8">

        {[
          "Zero public cloud storage exposures",
          "All IAM roles reviewed",
          "Kubernetes CIS benchmark compliant",
          "Runtime container threats detected",
          "Cloud logging coverage achieved",
          "Encryption at rest confirmed",
          "Cloud IR playbooks validated",
          "CERT-In reporting ready"
        ].map((item) => (

          <div key={item} className="flex gap-2">
            <span className="text-[#00ff99]">✓</span>
            <span>{item}</span>
          </div>

        ))}

      </div>

    </div>

  </div>

</section>

{/* ================= FINAL CTA ================= */}

<section className="max-w-6xl mx-auto px-6 py-14">

  <div className="rounded-3xl border border-cyan-900 bg-gradient-to-b from-[#0b1625] to-[#09121d] py-16 px-8 text-center">

    <p className="text-[#00ff99] uppercase tracking-[6px] text-xs font-mono mb-5">
      D03 • CLOUD SECURITY
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Secure Your Cloud Estate
    </h2>

    <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-8 mb-10">
      Get a free cloud security posture assessment. We'll scan your AWS,
      Azure or GCP environment and identify cloud risks in under 48 hours.
    </p>

    <div className="flex flex-wrap justify-center gap-4">

      <button className="px-8 py-4 rounded-xl bg-[#00ff99] text-black font-semibold hover:scale-105 transition">
        Start Free Assessment
      </button>

      <button className="px-8 py-4 rounded-xl border border-cyan-900 text-[#00ff99] hover:bg-[#00ff99]/10 transition">
        ← All Services
      </button>

    </div>

  </div>

</section>
  </div>
  
</section>
</>

  );
}