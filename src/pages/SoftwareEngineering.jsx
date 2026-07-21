import { useNavigate } from "react-router-dom";
import ServiceTabs from "../components/ServiceTabs";
export default function NetworkSecurity() {
  const navigate = useNavigate();
  
  
    return (
<>
    <ServiceTabs />

    <section
  className="relative overflow-hidden py-16 lg:py-20"
  style={{
    background:
      "linear-gradient(180deg, #173867 0%, #1d4b88 45%, #214f91 100%)",
  }}
>
{/* Hero Grid */}
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
  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Breadcrumb */}
    <div className="flex items-center gap-3 text-gray-400 text-sm mb-6">
      <span>Home</span>
      <span>/</span>
      <span>Services</span>
      <span>/</span>
      <span className="text-white">
        Software Engineering & Digital Solutions
      </span>
    </div>

    {/* Badge */}
    <div className="inline-flex border border-[#00F5A0]/40 rounded-lg px-5 py-2 mb-8">
      <span className="text-[#00F5A0] font-semibold tracking-[3px] uppercase text-sm">
        D12 • Software Engineering & Digital Solutions
      </span>
    </div>

    {/* Heading */}

    <h1 className="text-5xl lg:text-7xl font-black uppercase leading-none text-white">
      Build Secure Digital Products
    </h1>

    <h1 className="text-5xl lg:text-7xl font-black uppercase leading-none text-[#00F5A0] mt-2">
      Web. Mobile. AI. Cloud-Native.
    </h1>

    {/* Services */}

    <p className="text-gray-400 text-lg mt-8 leading-8 max-w-6xl">
      Web & App Development • Mobile Apps • AI/ML Development • API Engineering •
      Cloud-Native • Data Engineering • DevOps
    </p>

    {/* Stats */}

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 max-w-3xl">

      <div>
        <h2 className="text-[#00F5A0] text-5xl font-bold">20</h2>
        <p className="text-gray-400 uppercase tracking-widest text-xs mt-2">
          Services
        </p>
      </div>

      <div>
        <h2 className="text-[#00F5A0] text-5xl font-bold">8</h2>
        <p className="text-gray-400 uppercase tracking-widest text-xs mt-2">
          Add-ons
        </p>
      </div>

      <div>
        <h2 className="text-[#00F5A0] text-3xl font-bold">
          Security-First
        </h2>
        <p className="text-gray-400 uppercase tracking-widest text-xs mt-2">
          By Design
        </p>
      </div>

      <div>
        <h2 className="text-[#00F5A0] text-3xl font-bold">
          Full Stack
        </h2>
        <p className="text-gray-400 uppercase tracking-widest text-xs mt-2">
          Capability
        </p>
      </div>

    </div>

    <div className="border-t border-cyan-900 my-10"></div>

    {/* Buttons */}

   <div className="flex flex-wrap gap-5 mb-20">

  <button
  onClick={() => navigate("/assessment", { replace: false })}
  className="bg-[#00F5A0] hover:bg-[#00d98b] transition text-black font-semibold px-8 py-4 rounded-lg"
>
   Get Free Assessment
</button>

  <button className="border border-cyan-800 text-[#00F5A0] hover:bg-[#00F5A0] hover:text-black transition px-8 py-4 rounded-lg font-semibold">
    ← All Domains
  </button>

</div>
  </div>


  
<section className="pt-24 pb-16 bg-[#07131f]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* LEFT */}

      <div>

        <p className="text-[#00F5A0] uppercase tracking-[5px] text-sm mb-4">
          // Overview
        </p>

        <h2 className="text-4xl lg:text-5xl font-black uppercase leading-tight text-white mb-8">
          Digital Products Built Secure From
          <br />
          Day One
        </h2>

        <div className="space-y-6 text-gray-400 text-[17px] leading-8">

          <p>
            Most software development firms build first and think about
            security later. At Trinity Nexus Technologies, every application is
            designed with
            <span className="text-white font-semibold">
              {" "}security-by-default architecture
            </span>,
            integrating our cyber security expertise directly into the
            development lifecycle.
          </p>

          <p>
            We build
            <span className="text-white font-semibold">
              {" "}websites, web applications, mobile apps,
              AI/ML solutions and cloud-native platforms
            </span>
            {" "}for enterprises and startups. Our engineers work alongside
            security specialists using DevSecOps practices from day one.
          </p>

          <p>
            Whether you need a secure customer portal, AI-powered platform or
            digital transformation roadmap, we deliver production-grade software
            with built-in security, compliance and scalability.
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div>

       <div className="relative z-10 bg-[#0b1a2a] border border-cyan-900 rounded-2xl p-8">

          <p className="uppercase tracking-[5px] text-xs text-gray-500 mb-8">
            At A Glance
          </p>

          {[
            [
              "Engagement Models",
              "Project • Managed • Advisory",
            ],
            [
              "Frontend",
              "React • Next.js • Vue.js • React Native • Flutter",
            ],
            [
              "Backend",
              "Node.js • Python • Go • Java • .NET",
            ],
            [
              "Cloud",
              "AWS • Azure • GCP • Kubernetes • Serverless",
            ],
            [
              "AI/ML",
              "TensorFlow • PyTorch • OpenAI • Anthropic • LangChain",
            ],
          ].map(([title, value]) => (
            <div
              key={title}
              className="flex justify-between gap-6 py-5 border-b border-cyan-900 last:border-none"
            >
              <span className="text-gray-400">{title}</span>

              <span className="text-white font-semibold text-right max-w-[320px]">
                {value}
              </span>
            </div>
          ))}

         <button
  onClick={() => navigate("/assessment", { replace: false })}
  className="relative z-20 w-full mt-8 bg-[#00F5A0] hover:bg-[#00d98b] transition text-black font-semibold py-4 rounded-lg"
>
  Enquire Now →
</button>

        </div>

      </div>

    </div>

  </div>
</section>

<section
  className="relative overflow-hidden py-14"
  style={{
    background:
      "linear-gradient(180deg, #173867 0%, #1d4b88 45%, #214f91 100%)",
  }}
>
    {/* Grid Background */}
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
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center mb-10">
      <p className="text-[#00F5A0] uppercase tracking-[5px] text-sm mb-3">
        // WHY CHOOSE TRINITY NEXUS
      </p>

      <h2 className="text-4xl font-black uppercase text-white">
        OUR STRENGTHS
      </h2>
    </div>

    {/* Cards */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          icon: "🔒",
          title: "Security-First Development",
          text: "Threat modelling, secure code review, SAST/DAST scanning and dependency analysis are integrated into every software project from day one."
        },

        {
          icon: "🤖",
          title: "AI & LLM Application Development",
          text: "Production-ready AI applications, chatbots, RAG pipelines and AI agents built using OpenAI, Anthropic, Gemini and LangChain."
        },

        {
          icon: "☁️",
          title: "Cloud-Native Architecture",
          text: "Microservices, Kubernetes, AWS, Azure and GCP deployments designed for resilience, scalability and security."
        },

        {
          icon: "📱",
          title: "Cross-Platform Mobile",
          text: "Enterprise mobile apps using React Native and Flutter with CI/CD pipelines, notifications and secure deployments."
        },

        {
          icon: "📊",
          title: "Data Engineering & Analytics",
          text: "Data pipelines, warehouses, BI dashboards and real-time analytics using modern cloud technologies."
        },

        {
          icon: "🚀",
          title: "DevOps & Infrastructure as Code",
          text: "Terraform, GitHub Actions, Azure DevOps, monitoring, automation and secure cloud infrastructure."
        }

      ].map((item, index) => (

        <div
          key={index}
          className="bg-[#0b1a2a] border border-cyan-900 rounded-xl p-6 hover:border-[#00F5A0] transition"
        >

          <div className="text-3xl mb-5">
            {item.icon}
          </div>

          <h3 className="text-white text-xl font-bold mb-4">
            {item.title}
          </h3>

          <p className="text-gray-400 leading-7 text-[15px]">
            {item.text}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>

<section className="py-12 bg-[#07131f]">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="mb-8">
      <p className="text-[#00F5A0] uppercase tracking-[4px] text-sm mb-2">
        // OUR DELIVERY APPROACH
      </p>

      <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
        HOW WE DELIVER
      </h2>

      <p className="text-gray-400 mt-4 max-w-3xl leading-7">
        Our software engineering delivery follows an agile,
        security-integrated SDLC that ensures quality and
        security throughout every sprint.
      </p>
    </div>

    {/* Timeline */}

    <div className="space-y-5">

      {[
        {
          no: "01",
          title: "Requirements & Threat Modelling",
          desc: "Requirements gathering, architecture design and STRIDE threat modelling before development begins."
        },
        {
          no: "02",
          title: "Sprint-Based Development with Security Gates",
          desc: "SAST, dependency scanning and DAST integrated into every sprint with continuous feedback."
        },
        {
          no: "03",
          title: "Security Review & Penetration Testing",
          desc: "Comprehensive security review and penetration testing before production release."
        },
        {
          no: "04",
          title: "Deployment & Infrastructure Security",
          desc: "IaC, WAF, secrets management, access controls and cloud security for production."
        },
        {
          no: "05",
          title: "Post-Launch Monitoring & Maintenance",
          desc: "Continuous monitoring, vulnerability management, patching and monthly security reviews."
        }
      ].map((step) => (

        <div
          key={step.no}
          className="flex gap-5 border-b border-cyan-900/40 pb-5"
        >

          <div className="text-4xl font-bold text-[#00F5A0] min-w-[70px]">
            {step.no}
          </div>

          <div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {step.title}
            </h3>

            <p className="text-gray-400 text-[15px] leading-7">
              {step.desc}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

<section
  className="relative overflow-hidden py-10"
  style={{
    background:
      "linear-gradient(180deg, #173867 0%, #1d4b88 45%, #214f91 100%)",
  }}
>
  {/* Hero Grid */}
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
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="mb-8">
      <p className="text-[#00F5A0] uppercase tracking-[4px] text-sm mb-2">
        // 20 SERVICES • 8 ADD-ONS
      </p>

      <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
        COMPLETE SERVICE LIST
      </h2>
    </div>

    {/* Services */}

    <div className="space-y-5">

      {[
        {
          badge: "Project",
          color: "bg-emerald-900/30 text-emerald-400",
          title: "Custom Website Development",
          desc: "Corporate websites, landing pages, e-commerce and SEO-optimised platforms using React, Next.js and WordPress.",
          doc: "Live website + source code + documentation"
        },
        {
          badge: "Project",
          color: "bg-emerald-900/30 text-emerald-400",
          title: "Website Security Hardening",
          desc: "HTTPS, CSP, WAF, dependency audit, admin access controls and post-launch security hardening.",
          doc: "Security hardening report"
        },
        {
          badge: "Support",
          color: "bg-blue-900/30 text-blue-400",
          title: "Website Maintenance & Support",
          desc: "Content updates, monitoring, plugin updates, backups and monthly health reports.",
          doc: "Maintenance dashboard"
        },
        {
          badge: "Project",
          color: "bg-emerald-900/30 text-emerald-400",
          title: "Web Application Development",
          desc: "SaaS platforms, CRM, ERP, dashboards and enterprise applications.",
          doc: "Application source code"
        },
        {
          badge: "Project",
          color: "bg-emerald-900/30 text-emerald-400",
          title: "Mobile Application Development",
          desc: "Cross-platform mobile applications with React Native and Flutter.",
          doc: "Published mobile app"
        },
        {
          badge: "Project",
          color: "bg-emerald-900/30 text-emerald-400",
          title: "Mobile UI/UX Design",
          desc: "Wireframes, design systems, interactive prototypes and Figma handoff.",
          doc: "Figma design files"
        },
        {
          badge: "Project",
          color: "bg-emerald-900/30 text-emerald-400",
          title: "AI Model Development",
          desc: "ML models, NLP, recommendation engines and production AI pipelines.",
          doc: "Model report"
        },
        {
          badge: "Project",
          color: "bg-emerald-900/30 text-emerald-400",
          title: "LLM Application Development",
          desc: "Chatbots, RAG systems, AI agents and enterprise GenAI solutions.",
          doc: "LLM deployment guide"
        },
        {
  badge: "Project",
  color: "bg-emerald-900/30 text-emerald-400",
  title: "DevOps & Infrastructure Automation",
  desc: "Infrastructure as Code using Terraform and Pulumi, CI/CD pipelines, monitoring and deployment automation.",
  doc: "IaC codebase + CI/CD pipeline"
},
{
  badge: "Project",
  color: "bg-emerald-900/30 text-emerald-400",
  title: "Progressive Web App (PWA)",
  desc: "Installable Progressive Web Apps with offline support, push notifications and high performance.",
  doc: "PWA deployment package"
},
{
  badge: "Advisory",
  color: "bg-amber-900/30 text-amber-400",
  title: "Legacy System Modernisation",
  desc: "Migration planning, cloud transformation, API-first architecture and legacy application modernization.",
  doc: "Modernisation roadmap"
},
{
  badge: "Advisory",
  color: "bg-amber-900/30 text-amber-400",
  title: "Digital Transformation Advisory",
  desc: "Technology roadmap, vendor selection, cloud strategy and enterprise digital transformation consulting.",
  doc: "Transformation roadmap"
}

      ].map((service, index) => (

        <div
          key={index}
          className="bg-[#0b1a2a] border border-cyan-900 rounded-xl p-5 hover:border-[#00F5A0] transition"
        >

          <div className="flex items-center gap-3 flex-wrap">

            <span className={`px-3 py-1 rounded text-xs font-semibold ${service.color}`}>
              {service.badge}
            </span>

            <h3 className="text-white text-xl font-bold">
              {service.title}
            </h3>

          </div>

          <p className="text-gray-400 mt-4 text-[15px] leading-7">
            {service.desc}
          </p>

          <div className="inline-flex mt-4 border border-cyan-900 rounded-md px-4 py-2 text-[#00F5A0] text-sm">
            📄 {service.doc}
          </div>

        </div>

      ))}

    </div>
   </div>
  </div>
</section>

<section className="py-14 bg-[#07111d]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Left */}
      <div>
        <p className="text-[#00F5A0] uppercase tracking-[4px] text-xs font-semibold mb-3">
          // Tools & Technology
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 uppercase">
          Technology Stack
        </h2>

        <p className="text-gray-400 text-sm leading-7 mb-6 max-w-xl">
          Modern, battle-tested technology stack with security integrated
          across development, deployment and operations.
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "React",
            "Next.js",
            "Vue.js",
            "React Native",
            "Flutter",
            "Node.js",
            "Python",
            "Go",
            "FastAPI",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "AWS",
            "Azure",
            "GCP",
            "Docker",
            "Kubernetes",
            "Terraform",
            "GitHub Actions",
            "TensorFlow",
            "PyTorch",
            "LangChain",
            "OpenAI API",
            "Anthropic API",
            "Snowflake",
            "BigQuery",
            "Apache Kafka",
            "Power BI"
          ].map((tool) => (
            <span
              key={tool}
              className="px-3 py-2 rounded-md border border-cyan-900 bg-[#0c1727] text-gray-300 text-xs"
            >
              {tool}
            </span>
          ))}

        </div>
      </div>

      {/* Right */}

      <div>

        <p className="text-[#00F5A0] uppercase tracking-[4px] text-xs font-semibold mb-3">
          // Measurable Outcomes
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 uppercase">
          What You Gain
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-gray-300 text-sm leading-7">

          <p>✓ Security-by-design applications</p>

          <p>✓ Zero critical vulnerabilities</p>

          <p>✓ SAST / DAST integrated CI/CD</p>

          <p>✓ AI apps aligned with OWASP LLM</p>

          <p>✓ Secure cloud infrastructure</p>

          <p>✓ Privacy & compliance ready</p>

          <p>✓ Mobile apps deployment ready</p>

          <p>✓ Monitoring from Day One</p>

        </div>

      </div>

    </div>

  </div>
</section>

<section
  className="relative overflow-hidden py-14"
  style={{
    background:
      "linear-gradient(180deg, #173867 0%, #1d4b88 45%, #214f91 100%)",
  }}
>
  {/* Grid Background */}
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

  <div className="relative z-10 max-w-5xl mx-auto px-6">
  <div className="max-w-5xl mx-auto px-6">

    <div className="rounded-2xl border border-cyan-700/60 bg-[#10294b]/70 backdrop-blur-sm px-8 py-12 text-center">

      <p className="text-[#00F5A0] uppercase tracking-[5px] text-xs font-semibold mb-4">
        D12 • SOFTWARE ENGINEERING & DIGITAL SOLUTIONS
      </p>

      <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-white leading-tight">
        Build Your Next Digital
        <br />
        Product With Us
      </h2>

      <p className="mt-5 text-gray-400 text-base max-w-2xl mx-auto leading-7">
        Get a free technical discovery call. We'll help you plan,
        secure and build scalable digital products from idea to deployment.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">

        <button
  onClick={() => navigate("/assessment", { replace: false })}
  className="px-7 py-3 rounded-lg bg-[#00F5A0] text-black font-semibold hover:bg-[#00d98d] transition"
>
  Start Free Assessment
</button>

        <button className="px-7 py-3 rounded-lg border border-cyan-900 text-[#00F5A0] hover:bg-cyan-900/20 transition">
          ← All Services
        </button>
      </div>
      </div>

    </div>

  </div>
</section>

</section>
</>
  );
}