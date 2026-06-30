import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, Clock, Layers, FileSearch, Lightbulb, Share2, Zap, Shield, Target, } from 'lucide-react';
import { getServiceById, getRelatedServices } from '../data/services';
import ServiceCard from '../components/ServiceCard';
const typeConfig = {
  Ongoing: { icon: Clock, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', label: 'Ongoing Managed Service', desc: 'Persistent protection with continuous monitoring and monthly reporting.' },
  Project: { icon: Layers, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20', label: 'Project-Based Engagement', desc: 'Time-bound engagement with clear deliverables and milestones.' },
  Assessment: { icon: FileSearch, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20', label: 'Security Assessment', desc: 'Point-in-time evaluation with findings and remediation guidance.' },
  Advisory: { icon: Lightbulb, color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20', label: 'Advisory Consulting', desc: 'Strategic guidance for security improvements and implementation.' },
};
export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(id);
  if (!service) {
    return (<main className="min-h-screen bg-[#0f172a] flex items-center justify-center pt-20">
      <div className="text-center">
        <p className="text-gray-500 text-lg mb-4">Service not found.</p>
        <Link to="/services" className="text-[#06b6d4] hover:text-[#06b6d4]/80 text-sm font-medium transition-colors">
          Back to catalogue
        </Link>
      </div>
    </main>);
  }
  const cfg = typeConfig[service.type] || typeConfig.Advisory;
  const TypeIcon = cfg.icon;
  const related = getRelatedServices(service.relatedIds);
  const [coverage, setCoverage] = useState(98.6);
const [threats, setThreats] = useState(12847);

useEffect(() => {
  const interval = setInterval(() => {
    setCoverage((98 + Math.random()).toFixed(1));
    setThreats(prev => prev + Math.floor(Math.random() * 5));
  }, 3000);

  return () => clearInterval(interval);
}, []);
  return (<main className="min-h-screen bg-black text-white pt-24 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="flex items-center gap-2 mb-12 pb-8 border-b border-white/5">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors">
          <ArrowLeft size={14} />
          Back
        </button>
        <span className="text-gray-700">/</span>
        <Link to="/services" className="text-sm text-gray-500 hover:text-white transition-colors">
          Services Catalogue
        </Link>
        <span className="text-gray-700">/</span>
        <span className="text-sm text-gray-400 truncate max-w-xs">{service.title}</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">

        <div className="lg:col-span-2 space-y-10">

          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              
            </div>
            <div className="mb-4">
  <span className="inline-block px-4 py-2 border border-[#00ff99]/30 rounded-md text-[#00ff99] font-mono text-sm">
    {service.domain}
  </span>
</div>

<h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-none mb-6">
  <span className="text-white block">
    {service.title}
  </span>
</h1>

<p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
  {service.description}
</p>
            <p className="text-gray-400 text-lg leading-relaxed">
              {service.description}
            </p>
          </div>


          <div className="p-8 rounded-xl border border-white/8 bg-gradient-to-br from-white/[0.05] to-white/[0.02]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/20">
                <CheckCircle2 size={16} className="text-[#06b6d4]" />
              </div>
              <h2 className="text-lg font-bold text-white">What You Receive</h2>
            </div>
            <ul className="space-y-4">
              {service.deliverables.map((d, i) => (<li key={i} className="flex items-start gap-4">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-[#06b6d4]">{i + 1}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-200 leading-relaxed">{d}</p>
                </div>
              </li>))}
            </ul>
          </div>


          <div className="p-8 rounded-xl border border-white/8 bg-gradient-to-br from-white/[0.05] to-white/[0.02]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-400/10 border border-blue-400/20">
                <Target size={16} className="text-blue-400" />
              </div>
              <h2 className="text-lg font-bold text-white">Engagement Model</h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              {cfg.desc}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              {service.type === 'Ongoing' &&
                'Your organisation benefits from persistent protection, monthly reporting, and dedicated analyst coverage with guaranteed SLAs. Our team maintains your security posture continuously.'}
              {service.type === 'Project' &&
                'Our team works alongside yours to deliver outcomes within an agreed timeline and scope. Clear milestones ensure transparency and accountability throughout the engagement.'}
              {service.type === 'Assessment' &&
                'Our specialists conduct a thorough evaluation and deliver a comprehensive findings report with prioritised remediation guidance and risk ratings for each finding.'}
              {service.type === 'Advisory' &&
                'Our senior consultants work with your leadership and technical teams to design, plan, and guide the implementation of security improvements aligned to your business goals.'}
            </p>
          </div>


          <div className="p-8 rounded-xl border border-white/8 bg-gradient-to-br from-white/[0.05] to-white/[0.02]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20">
                <Zap size={16} className="text-emerald-400" />
              </div>
              <h2 className="text-lg font-bold text-white">Why This Service</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">Threat-Informed</p>
                <p className="text-sm text-gray-300">Delivered by specialists with deep expertise in this domain</p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">Risk-Rated</p>
                <p className="text-sm text-gray-300">All findings include CVSS scores and impact assessments</p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">SLA-Backed</p>
                <p className="text-sm text-gray-300">Contractual response and resolution commitments</p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">Transparent</p>
                <p className="text-sm text-gray-300">Board-ready reports and clear remediation roadmaps</p>
              </div>
            </div>
          </div>
        </div>


        <div className="space-y-6">

          <div className="p-7 rounded-xl border border-[#06b6d4]/20 bg-gradient-to-br from-[#06b6d4]/8 to-[#06b6d4]/3 sticky top-24">
            <h3 className="font-bold text-white mb-2 text-base">Get Started</h3>
            <p className="text-sm text-gray-400 mb-6">
              Speak with a specialist to understand how this service addresses your security needs and budget.
            </p>
            <Link to="/assessment" className="flex items-center justify-center gap-2 w-full py-3 bg-[#06b6d4] text-[#0f172a] font-semibold text-sm rounded-lg hover:bg-[#06b6d4]/90 transition-all hover:shadow-lg hover:shadow-[#06b6d4]/20 mb-3 active:scale-95">
              Request Assessment
              <ChevronRight size={14} />
            </Link>
            <button onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert('Service link copied to clipboard!');
            }} className="flex items-center justify-center gap-2 w-full py-3 border border-white/15 text-gray-400 hover:text-white hover:bg-white/[0.05] text-sm rounded-lg hover:border-white/25 transition-all">
              <Share2 size={13} />
              Share Service
            </button>


            <div className="mt-8 pt-8 border-t border-white/8 space-y-4">
              <div>
                <p className="text-xs text-gray-600 uppercase font-mono tracking-widest mb-2">Type</p>
                <p className={`text-sm font-semibold ${cfg.color}`}>{service.type}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase font-mono tracking-widest mb-2">Domain</p>
                <p className="text-sm text-gray-300">{service.domain}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase font-mono tracking-widest mb-2">SLA Coverage</p>
                <p className="text-sm text-gray-300">Contractual with guaranteed response times</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase font-mono tracking-widest mb-2">Deliverables</p>
                <p className="text-sm text-gray-300">{service.deliverables.length} key items</p>
              </div>
            </div>
          </div>


          <div className="p-6 rounded-xl border border-white/8 bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={16} className="text-[#06b6d4]" />
              <h4 className="font-semibold text-white">Coverage</h4>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              This service is part of our comprehensive {service.domain} offering and can be combined with related services for enhanced coverage.
            </p>
          </div>
        
      

</div>
</div>


{/* SOC Dashboard Section */}
<section className="mt-16 border border-[#00ff99]/20 rounded-2xl overflow-hidden bg-[#020617]">
  <div className="grid lg:grid-cols-2">

    <div className="p-10">
      <p className="text-[#00ff99] font-mono text-sm mb-4">
        // D08 • MANAGED SECURITY
      </p>

      <h2 className="text-5xl font-bold text-white mb-6">
        24×7 SECURITY OPERATIONS
      </h2>

      <p className="text-gray-400 leading-relaxed mb-8">
        Our Security Operations Centre never sleeps. L1/L2/L3 analysts,
        AI-powered SIEM, SOAR automation and proactive threat hunting.
      </p>

      <ul className="space-y-4 text-gray-300">
        <li>▸ MTTD under 15 minutes</li>
        <li>▸ CERT-In reporting support</li>
        <li>▸ SIEM: Splunk, QRadar, Sentinel</li>
        <li>▸ Automated SOAR playbooks</li>
        <li>▸ 24×7 monitoring & triage</li>
      </ul>

      <Link
  to="/assessment"
  className="inline-block mt-8 px-6 py-3 bg-[#00ff99] text-black font-semibold rounded-lg hover:opacity-90 transition"
>
  Get SOC Assessment →
</Link>
    </div>

    <div className="p-10 border-l border-[#00ff99]/10">
      <div className="flex justify-center mb-8">
        <div className="w-36 h-36 rounded-full border-4 border-[#00ff99] flex items-center justify-center text-[#00ff99] font-bold animate-pulse shadow-[0_0_30px_rgba(0,255,153,0.6)]">
          SOC ACTIVE
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between p-4 rounded-lg bg-[#0b1220] border border-[#00ff99]/10">
          <span>Network Perimeter</span>
          <span className="text-[#00ff99]">PROTECTED</span>
        </div>

        <div className="flex justify-between p-4 rounded-lg bg-[#0b1220] border border-red-500/20">
          <span>Active Threat Feed</span>
          <span className="text-red-400 animate-pulse">LIVE</span>
        </div>

        <div className="flex justify-between p-4 rounded-lg bg-[#0b1220] border border-[#00ff99]/10">
          <span>Endpoint Coverage</span>
          <span className="text-[#00ff99]">{coverage}%</span>
        </div>

        <div className="flex justify-between p-4 rounded-lg bg-[#0b1220] border border-yellow-500/20">
          <span>Threat Intel Feed</span>
          <span className="text-yellow-400">PROCESSING</span>
        </div>

        <div className="flex justify-between p-4 rounded-lg bg-[#0b1220] border border-[#00ff99]/10">
          <span>Compliance Status</span>
          <span className="text-[#00ff99]">ISO ALIGNED</span>
        </div>
        <div className="flex justify-between items-center p-4 rounded-lg border border-[#00ff99]/20 bg-[#08111f] mt-4">
  <span className="text-white">Threats Blocked Today</span>
  <span className="text-[#00ff99] font-bold">
    {threats.toLocaleString()}
  </span>
</div>
      </div>
    </div>

  </div>
</section>

{related.length > 0 && (
  <div className="mt-24 pt-24 border-t border-white/5">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl font-bold text-white">Related Services</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>
        <p className="text-gray-500 mb-8">
          These services complement {service.title} and are frequently combined to provide comprehensive coverage.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((s) => (<ServiceCard key={s.id} service={s} />))}
        </div>
      </div>)}
    </div>
  </main>);
}
