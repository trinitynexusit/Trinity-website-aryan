import { Link } from "react-router-dom";
import {
Flame,
Globe,
Search,
Folder,
ShieldAlert,
Lock
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ServiceTabs from "../components/ServiceTabs";

const services = [
  {
    badge: "Ongoing Service",
    color: "bg-blue-500/20 text-blue-300",
    title: "Managed Firewall Service",
    description:
      "Complete lifecycle management of enterprise firewalls including policy optimization, firmware updates, monitoring and compliance reporting.",
    report: "Monthly Health Report",
  },
  {
    badge: "Assessment",
    color: "bg-pink-500/20 text-pink-300",
    title: "Firewall Rule Review & Optimisation",
    description:
      "Review firewall rules to identify redundant, risky and unused rules with remediation recommendations.",
    report: "Rule Audit Report",
  },
  {
    badge: "Assessment",
    color: "bg-pink-500/20 text-pink-300",
    title: "Firewall Configuration Audit",
    description:
      "Benchmark firewall configurations against CIS and vendor security best practices.",
    report: "Hardening Report",
  },
  {
    badge: "Ongoing Service",
    color: "bg-blue-500/20 text-blue-300",
    title: "Attack Surface Management",
    description:
      "Continuous discovery of internet-facing assets, APIs and exposed services.",
    report: "ASM Dashboard",
  },
  {
    badge: "Advisory",
    color: "bg-yellow-500/20 text-yellow-300",
    title: "Network Segmentation Design",
    description:
      "Design secure VLANs, Zero Trust segmentation and ACL architecture.",
    report: "Segmentation Report",
  },
  {
    badge: "Ongoing Service",
    color: "bg-blue-500/20 text-blue-300",
    title: "IDS/IPS Managed Service",
    description:
      "Signature tuning, false-positive reduction and continuous monitoring.",
    report: "Threat Summary",
  },
  {
    badge: "Assessment",
    color: "bg-pink-500/20 text-pink-300",
    title: "VPN Security Assessment",
    description:
      "Review IPsec and SSL VPN configurations for secure remote access.",
    report: "VPN Security Report",
  },
  {
    badge: "Ongoing Service",
    color: "bg-blue-500/20 text-blue-300",
    title: "Network Traffic Analysis",
    description:
      "Monitor network flows to detect malware, lateral movement and anomalies.",
    report: "NTA Dashboard",
  },
  {
    badge: "Assessment",
    color: "bg-pink-500/20 text-pink-300",
    title: "Wireless Security Assessment",
    description:
      "Audit enterprise WiFi, WPA3 configuration and rogue access points.",
    report: "Wireless Report",
  },
  {
    badge: "Ongoing Service",
    color: "bg-blue-500/20 text-blue-300",
    title: "DNS Security",
    description:
      "Protect enterprise DNS against malicious domains and DNS tunneling.",
    report: "DNS Security Report",
  },
  {
    badge: "Assessment",
    color: "bg-pink-500/20 text-pink-300",
    title: "Cryptography Review",
    description:
      "Review TLS versions, certificates and encryption standards.",
    report: "Crypto Report",
  },
  {
    badge: "Advisory",
    color: "bg-yellow-500/20 text-yellow-300",
    title: "DDoS Protection Advisory",
    description:
      "Assess resilience against volumetric and application layer attacks.",
    report: "DDoS Advisory",
  },
];

export default function NetworkSecurity() {

    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
 return (
  <div className="min-h-screen bg-[#061321] text-white">

    <ServiceTabs />

    {/* Hero Section */}

   <section
  data-aos="fade-up"
  className="relative overflow-hidden pt-10 pb-20 bg-gradient-to-r from-[#0b2345] via-[#143b6b] to-[#0b2345]"
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
></div>
<div className="relative z-10 max-w-6xl mx-auto px-8">
        <p className="text-gray-400 text-sm mb-8">
          Home / Services / <span className="text-white">Network Security</span>
        </p>

        <span className="border border-[#00ff99] text-[#00ff99] px-4 py-2 rounded-md text-sm">
          D01 • Network Security
        </span>

<h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mt-8 max-w-4xl">          FORTIFY YOUR NETWORK
          <br />
          <span className="text-[#00ff99]">
            PERIMETER. INTERIOR. EVERYWHERE.
          </span>
        </h1>

<p className="mt-6 text-gray-400 text-lg leading-8 max-w-3xl">  
              Managed Firewall • Attack Surface Management • IDS/IPS • DNS
          Security • Network Traffic Analysis • Zero Trust Segmentation
        </p>

        {/* Stats */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14 max-w-4xl">
          <div>
            <h2 className="text-5xl font-bold text-[#00ff99]">19</h2>
            <p className="text-gray-400 mt-2">SERVICES</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#00ff99]">8</h2>
            <p className="text-gray-400 mt-2">ADD-ONS</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#00ff99]">24×7</h2>
            <p className="text-gray-400 mt-2">MONITORING</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#00ff99]">99.9%</h2>
            <p className="text-gray-400 mt-2">UPTIME SLA</p>
          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-5 mt-12">

          <button className="bg-[#00ff99] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
            ⚡ Get Free Assessment
          </button>

          <Link
            to="/"
            className="border border-[#00ff99] text-[#00ff99] px-8 py-4 rounded-lg hover:bg-[#00ff99] hover:text-black transition"
          >
            ← All Domains
          </Link>

        </div>
        </div>
      </section>
      {/* Overview Section */}

<section
  data-aos="fade-up"
  className="max-w-6xl mx-auto px-8 py-20"

>
  <div className="grid lg:grid-cols-2 gap-10 items-start">

    {/* Left Side */}

    <div>

      <p className="text-[#00ff99] tracking-[4px] text-sm uppercase">
        // Overview
      </p>

<h2 className="text-4xl lg:text-5xl font-bold mt-4 max-w-lg">  
            COMPLETE NETWORK DEFENCE
      </h2>

      <p className="text-gray-400 leading-8 mt-8 text-base">
        Your network is the highway attackers must travel to reach your
        critical systems. Trinity Nexus Technologies provides end-to-end
        network security—from perimeter firewall management and attack
        surface reduction to deep packet inspection and network traffic
        analysis.
      </p>

      <p className="text-gray-400 leading-8 mt-6 text-base">
        We manage security technologies from Palo Alto, Fortinet,
        Check Point and Cisco while ensuring policies remain optimized,
        signatures stay updated and alerts are monitored 24×7.
      </p>

      <p className="text-gray-400 leading-8 mt-6 text-base">
        Our practice follows Zero Trust principles where every device,
        every user and every connection is continuously verified.
      </p>

    </div>

    {/* Right Side */}

    <div className="border border-[#00ff99]/20 rounded-2xl p-8 bg-[#091b2d] max-w-lg ml-auto">

      <p className="text-gray-500 uppercase tracking-[3px] mb-8">
        At A Glance
      </p>

      <div className="space-y-6">

        <div className="flex justify-between items-start gap-6 border-b border-white/10 pb-4">
          <span className="text-gray-400">Engagement</span>
          <span className="font-semibold text-right max-w-[260px]">
  Managed • Assessment • Advisory
</span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-gray-400">Response SLA</span>
          <span className="font-semibold">&lt;4 Hours</span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-gray-400">Vendors</span>
          <span className="font-semibold">
            Palo Alto, Cisco, Fortinet
          </span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-gray-400">Compliance</span>
          <span className="font-semibold">
            ISO 27001 • PCI DSS • CERT-In
          </span>
        </div>

        <div className="flex justify-between pb-6">
          <span className="text-gray-400">Coverage</span>
          <span className="font-semibold">
            Perimeter • Internal • Cloud
          </span>
        </div>

      </div>

      <button className="w-full mt-10 bg-[#00ff99] text-black font-bold py-4 rounded-lg hover:scale-105 transition">
        Enquire Now →
      </button>

    </div>

  </div>

</section>
{/* OUR STRENGTHS */}

<section className="max-w-7xl mx-auto px-8 py-16">
  <p className="text-[#00ff99] uppercase tracking-[4px] text-center">
    // WHY CHOOSE TRINITY NEXUS
  </p>

<h2 className="text-4xl font-bold text-center mt-4">
        OUR STRENGTHS
  </h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 items-stretch">
    <div className="h-full
bg-[#091b2d]
border
border-[#00ff99]/20
rounded-xl
p-6
transition-all
duration-300
hover:border-[#00ff99]
hover:-translate-y-2
hover:shadow-[0_0_30px_rgba(0,255,153,0.15)]">
      <Flame
size={40}
className="text-[#00ff99] mb-4"
/>

      <h3 className="text-xl font-bold">
        NGFW Lifecycle Management
      </h3>

      <p className="text-gray-400 mt-4 leading-7 text-sm">
        Palo Alto, Fortinet, Cisco and Check Point firewall deployment,
        policy optimisation, rule tuning and 24×7 monitoring.
      </p>

    </div>

<div className="h-full bg-[#091b2d] border border-[#00ff99]/20 rounded-xl p-8 transition-all duration-300 hover:border-[#00ff99] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,153,0.15)]">      <Globe
size={40}
className="text-[#00ff99] mb-4"
/>

      <h3 className="text-xl font-bold">
        Attack Surface Visibility
      </h3>

      <p className="text-gray-400 mt-4 leading-7 text-sm">
        Continuous discovery of exposed assets, cloud services,
        forgotten APIs and vulnerable internet-facing systems.
      </p>

    </div>

    <div className="h-full bg-[#091b2d] border border-[#00ff99]/20 rounded-xl p-8 transition-all duration-300 hover:border-[#00ff99] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,153,0.15)]">
      <Search
size={40}
className="text-[#00ff99] mb-4"
/>

      <h3 className="text-xl font-bold">
        AI Driven Traffic Analysis
      </h3>

      <p className="text-gray-400 mt-4 leading-7 text-sm">
        Detect anomalies, lateral movement, beaconing,
        suspicious DNS activity and exfiltration attempts.
      </p>

    </div>

<div className="h-full bg-[#091b2d] border border-[#00ff99]/20 rounded-xl p-8 transition-all duration-300 hover:border-[#00ff99] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,153,0.15)]">      <Folder
size={40}
className="text-[#00ff99] mb-4"
/>

      <h3 className="text-xl font-bold">
        Zero Trust Segmentation
      </h3>

      <p className="text-gray-400 mt-4 leading-7 text-sm">
        Micro segmentation across LAN, Cloud and DMZ
        with Zero Trust architecture.
      </p>

    </div>

<div className="h-full bg-[#091b2d] border border-[#00ff99]/20 rounded-xl p-8 transition-all duration-300 hover:border-[#00ff99] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,153,0.15)]">      <ShieldAlert
size={40}
className="text-[#00ff99] mb-4"
/>

      <h3 className="text-xl font-bold">
        DDoS Resilience
      </h3>

      <p className="text-gray-400 mt-4 leading-7 text-sm">
        Multi-layer protection against volumetric,
        protocol and application attacks.
      </p>

    </div>

<div className="h-full bg-[#091b2d] border border-[#00ff99]/20 rounded-xl p-8 transition-all duration-300 hover:border-[#00ff99] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,153,0.15)]">      <Lock
size={40}
className="text-[#00ff99] mb-4"
/>

      <h3 className="text-xl font-bold">
        Cryptography Hygiene
      </h3>

      <p className="text-gray-400 mt-4 leading-7 text-sm">
        SSL/TLS review, cipher assessment,
        certificate lifecycle and key management.
      </p>

    </div>

  </div>

</section>
<section className="max-w-7xl mx-auto px-8 py-16">

  <p className="text-[#00ff99] uppercase tracking-[4px]">
    // OUR DELIVERY APPROACH
  </p>

<h2 className="text-4xl font-bold mt-2">    HOW WE DELIVER
  </h2>

  <p className="text-gray-400 mt-5 max-w-3xl text-base leading-7">
    Our structured network security methodology leaves no gap—from
    discovery and architecture review to continuous monitoring and
    improvement.
  </p>
<div className="mt-20 border-b border-white/10 pb-12">

<div className="flex gap-6">

<div className="text-[#00ff99] text-5xl font-bold">
01
</div>

<div>

<h3 className="text-2xl font-bold">
Asset Discovery & Baseline
</h3>

<p className="text-gray-400 mt-3 text-base leading-7">
We identify every network-connected asset including on-prem,
cloud resources, APIs and internet-facing systems before
establishing a security baseline.
</p>

</div>

</div>

</div>
<div className="mt-8 border-b border-white/10 pb-8">

  <div className="flex gap-6">

    <div className="text-[#00ff99] text-5xl font-bold">
      02
    </div>

    <div>

      <h3 className="text-2xl font-bold">
        Architecture Review & Gap Analysis
      </h3>

      <p className="text-gray-400 mt-3 text-base leading-7">
        Review existing firewall architecture, network segmentation,
        security zones and identify configuration gaps based on industry
        best practices.
      </p>

    </div>

  </div>

</div>

<div className="mt-8 border-b border-white/10 pb-8">

  <div className="flex gap-6">

    <div className="text-[#00ff99] text-5xl font-bold">
      03
    </div>

    <div>

      <h3 className="text-2xl font-bold">
        Hardening & Control Implementation
      </h3>

      <p className="text-gray-400 mt-3 text-base leading-7">
        Implement firewall hardening, IDS/IPS tuning, secure ACLs,
        segmentation and zero trust policies to reduce attack surface.
      </p>

    </div>

  </div>

</div>

<div className="mt-8 border-b border-white/10 pb-8">

  <div className="flex gap-6">

    <div className="text-[#00ff99] text-5xl font-bold">
      04
    </div>

    <div>

      <h3 className="text-2xl font-bold">
        24×7 Managed Monitoring & Response
      </h3>

      <p className="text-gray-400 mt-3 text-base leading-7">
        Continuous monitoring of firewall logs, network traffic,
        suspicious activities and incident response through our SOC team.
      </p>

    </div>

  </div>

</div>

<div className="mt-12">

  <div className="flex gap-6">

    <div className="text-[#00ff99] text-5xl font-bold">
      05
    </div>

    <div>

      <h3 className="text-2xl font-bold">
        Reporting & Continuous Improvement
      </h3>

      <p className="text-gray-400 mt-3 text-base leading-7">
        Deliver detailed security reports, compliance reviews,
        recommendations and continuous improvement plans.
      </p>

    </div>

  </div>

</div>


</section>




<section className="max-w-7xl mx-auto px-8 py-16">

<p className="text-[#00ff99] uppercase tracking-[4px]">
 // 19 SERVICES • 8 ADD-ONS
</p>

<h2 className="text-4xl font-bold mt-2">
 COMPLETE SERVICE LIST
</h2>

<div className="mt-10 space-y-6">

{services.map((service,index)=>(

<div
key={index}
className="bg-[#091b2d] border border-[#00ff99]/20 rounded-xl p-6 max-w-5xl transition-all duration-300 hover:border-[#00ff99] hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,255,153,0.12)]"
>
<span className={`${service.color} px-3 py-1 rounded-md text-xs`}>{service.badge}
</span>

<h3 className="text-2xl font-bold mt-4">
{service.title}
</h3>

<p className="text-gray-400 text-base leading-7 mt-4">
{service.description}
</p>

<button className="mt-5 border border-[#00ff99]/30 px-4 py-2 rounded-lg text-sm text-[#00ff99] hover:bg-[#00ff99] hover:text-black transition">📄 {service.report}
</button>

</div>

))}

</div>

{/* TECHNOLOGY STACK */}

<section className="max-w-6xl mx-auto px-8 py-12">
  <div className="grid lg:grid-cols-2 gap-12">

    {/* Left */}

    <div>

      <p className="text-[#00ff99] uppercase tracking-[4px]">
        // TOOLS & TECHNOLOGY
      </p>

      <h2 className="text-4xl font-bold mt-4">
        TECHNOLOGY STACK
      </h2>

      <p className="text-gray-400 mt-6 text-base leading-7">
        We work with best-in-class tools and integrate seamlessly with
        your existing security investments.
      </p>

      <div className="flex flex-wrap gap-3 mt-6">

        <span className="border border-[#00ff99]/20 px-4 py-2 rounded-lg text-sm">Palo Alto NGFW</span>
        <span className="border border-[#00ff99]/20 px-4 py-2 rounded-lg text-sm">Fortinet FortiGate</span>
        <span className="border border-[#00ff99]/20 px-4 py-2 rounded-lg text-sm">Check Point</span>
        <span className="border border-[#00ff99]/20 px-4 py-2 rounded-lg text-sm">Cisco Firepower</span>
        <span className="border border-[#00ff99]/20 px-4 py-2 rounded-lg text-sm">Snort</span>
        <span className="border border-[#00ff99]/20 px-4 py-2 rounded-lg text-sm">Suricata</span>
        <span className="border border-[#00ff99]/20 px-4 py-2 rounded-lg text-sm">Zeek</span>
        <span className="border border-[#00ff99]/20 px-4 py-2 rounded-lg text-sm">Darktrace</span>
        <span className="border border-[#00ff99]/20 px-4 py-2 rounded-lg text-sm">Cisco Umbrella</span>
        <span className="border border-[#00ff99]/20 px-4 py-2 rounded-lg text-sm">Infoblox</span>
        <span className="border border-[#00ff99]/20 px-4 py-2 rounded-lg text-sm">NextDNS</span>
        <span className="border border-[#00ff99]/20 px-4 py-2 rounded-lg text-sm">Shodan</span>

      </div>

    </div>

    {/* Right */}

    <div>

      <p className="text-[#00ff99] uppercase tracking-[4px]">
        // MEASURABLE OUTCOMES
      </p>

      <h2 className="text-4xl font-bold mt-4">
        WHAT YOU GAIN
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-6 text-lg">

        <div className="space-y-4">
          <p>✓ Firewall rules audited and optimised</p>
          <p>✓ Zero Trust segmentation implemented</p>
          <p>✓ DNS-layer threat blocking active</p>
          <p>✓ CERT-In reporting capability</p>
        </div>

        <div className="space-y-4">
          <p>✓ Shadow IT fully inventoried</p>
          <p>✓ DDoS mitigation strategy</p>
          <p>✓ Certificate inventory maintained</p>
          <p>✓ PCI DSS segmentation validated</p>
        </div>

      </div>

    </div>

  </div>

</section>

{/* FINAL CTA */}

<section className="max-w-5xl mx-auto px-6 py-10">
  <div className="border border-[#00ff99]/20 rounded-2xl bg-[#091b2d] py-14 px-8 text-center">

    <p className="uppercase tracking-[5px] text-gray-400 text-sm">
      D01 • NETWORK SECURITY
    </p>

    <h2 className="text-4xl font-extrabold mt-5">
      SECURE YOUR NETWORK TODAY
    </h2>

    <p className="text-gray-400 text-base leading-7 max-w-2xl mx-auto mt-5">
      Get a free network security assessment. Our certified engineers
      identify your top exposures and deliver a prioritised remediation
      roadmap — at no cost, no obligation.
    </p>

    <div className="flex justify-center gap-4 mt-8">

      <button className="bg-[#00ff99] text-black font-bold px-10 py-4 rounded-lg hover:scale-105 transition">
         Start Free Assessment
      </button>

      <Link
        to="/"
        className="border border-[#00ff99]/30 text-[#00ff99] px-8 py-3 rounded-lg hover:bg-[#00ff99] hover:text-black transition"
      >
        ← All Services
      </Link>

    </div>

  </div>

</section>

</section>




    </div>
  );
}