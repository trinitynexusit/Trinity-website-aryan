import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ShieldCheck,
  Cloud,
  Eye,
  Server,
  Users,
  Lock,
  ArrowRight,
  CheckCircle2,
  Globe,
} from 'lucide-react';
import TerminalFeed from '../components/TerminalFeed';
import Stats from '../components/Stats';
import { clients, testimonials } from '../data/clients';

const serviceHighlights = [
  {
    icon: ShieldCheck,
    title: 'Network Security',
    desc: 'Managed Firewall, IDS/IPS, Zero Trust Architecture, and DDoS protection.',
    domain: 'Network+Security',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    desc: 'CSPM, CWPP, cloud penetration testing across AWS, Azure, and GCP.',
    domain: 'Cloud+Security',
  },
  {
    icon: Eye,
    title: 'VAPT',
    desc: 'Infrastructure, web, mobile, and OT vulnerability assessment & penetration testing.',
    domain: 'VAPT',
  },
  {
    icon: Server,
    title: 'Application Security',
    desc: 'Secure code review, API testing, DevSecOps programme, and threat modelling.',
    domain: 'Application+Security',
  },
  {
    icon: Lock,
    title: 'IAM',
    desc: 'PAM, MFA rollout, Active Directory security, and identity governance.',
    domain: 'Identity+%26+Access+Management',
  },
  {
    icon: Users,
    title: 'Compliance & Risk',
    desc: 'ISO 27001, PCI DSS, GDPR, SOC 2, and continuous vendor risk management.',
    domain: 'Compliance+%26+Risk',
  },
];

const trustItems = [
  'CREST Accredited',
  'ISO 27001 Certified',
  'CHECK Status',
  'PCI QSA',
  'Cyber Essentials Plus',
  'NCSC Assured',
];

export default function Home() {
  return (
    <main className="bg-[#0f172a] text-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow orb */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#06b6d4]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#06b6d4]/20 bg-[#06b6d4]/5 text-[#06b6d4] text-xs font-mono mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-pulse" />
                SOC ACTIVE — ALL SYSTEMS NOMINAL
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-4">
                <span className="text-white">TRINITY</span>
                <br />
                <span className="text-[#06b6d4]">NEXUS</span>
                <br />
                <span className="text-white">TECHNOLOGIES</span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 font-semibold mb-6">Cyber Security Solutions</p>

              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                Enterprise-grade cybersecurity across 12 security domains. From 24x7 managed
                detection to offensive security and compliance — we protect what matters most.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-10">
                {trustItems.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-400"
                  >
                    <CheckCircle2 size={11} className="text-[#00FFB2]" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/assessment"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00FFB2] text-[#050D12] font-semibold rounded-lg hover:bg-[#00FFB2]/90 transition-all hover:shadow-lg hover:shadow-[#00FFB2]/20 active:scale-95"
                >
                  Get Free Risk Assessment
                  <ChevronRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all"
                >
                  Explore 192 Services
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right — Terminal */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#00FFB2]/5 rounded-2xl blur-2xl" />
              <div className="relative">
                <TerminalFeed />
              </div>
              {/* Floating stat chips */}
              <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-lg bg-[#050D12] border border-[#00FFB2]/20 shadow-xl">
                <div className="text-xs text-gray-500 mb-0.5">MTTR</div>
                <div className="text-base font-bold text-[#00FFB2] font-mono">&lt; 4 hrs</div>
              </div>
              <div className="absolute -top-4 -right-4 px-3 py-2 rounded-lg bg-[#050D12] border border-blue-400/20 shadow-xl">
                <div className="text-xs text-gray-500 mb-0.5">Threats blocked today</div>
                <div className="text-base font-bold text-blue-400 font-mono">12,847</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Stats />
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[#00FFB2] text-sm font-mono font-medium mb-2 tracking-widest uppercase">
                Security Domains
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Comprehensive Protection
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl">
                192 services across 12 domains — every threat vector covered, every compliance
                standard met.
              </p>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 text-[#00FFB2] text-sm font-medium hover:gap-3 transition-all shrink-0"
            >
              View all services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceHighlights.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  to={`/services?domain=${s.domain}`}
                  className="group p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#00FFB2]/30 hover:bg-[#00FFB2]/[0.03] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00FFB2]/10 border border-[#00FFB2]/20 flex items-center justify-center mb-4 group-hover:bg-[#00FFB2]/20 transition-colors">
                    <Icon size={18} className="text-[#00FFB2]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-[#00FFB2] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-xs text-[#00FFB2] font-medium group-hover:gap-2 transition-all">
                    Explore services <ChevronRight size={12} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About / Value Prop */}
      <section id="about" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#00FFB2] text-sm font-mono font-medium mb-2 tracking-widest uppercase">
                Why Trinity Nexus
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Built for Adversarial Conditions
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our teams are staffed with former intelligence, government, and elite private
                sector security professionals. We operate under the same threat models as our
                clients — because we understand what real attackers do.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Threat-Informed Defence', desc: 'We apply MITRE ATT&CK and real-world threat intelligence to every engagement.' },
                  { title: 'Guaranteed SLAs', desc: 'Contractual response commitments backed by 24x7 analyst availability.' },
                  { title: 'Transparent Reporting', desc: 'Risk-rated findings, CVSS scoring, and board-ready executive summaries.' },
                  { title: 'Continuous Partnership', desc: 'Not a one-time assessment — a strategic security partner for the long term.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[#00FFB2]/10 border border-[#00FFB2]/30 flex items-center justify-center">
                      <CheckCircle2 size={11} className="text-[#00FFB2]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                      <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="p-6 rounded-xl border border-white/8 bg-white/[0.02]"
                >
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#00FFB2]/10 border border-[#00FFB2]/20 flex items-center justify-center">
                      <Users size={14} className="text-[#00FFB2]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{t.author}</div>
                      <div className="text-xs text-gray-600">{t.sector}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00FFB2] text-sm font-mono font-medium mb-2 tracking-widest uppercase">
              Trusted By
            </p>
            <h2 className="text-3xl font-bold text-white">
              Protecting Industry Leaders
            </h2>
          </div>
          {/* Scrolling client logos */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-[scroll_30s_linear_infinite]">
              {[...clients, ...clients].map((c, i) => (
                <div
                  key={`${c.id}-${i}`}
                  className="shrink-0 flex items-center justify-center px-6 py-4 rounded-xl border border-white/8 bg-white/[0.02] min-w-max"
                >
                  <div className="text-center">
                    <Globe size={16} className="text-gray-600 mx-auto mb-1.5" />
                    <div className="text-sm font-semibold text-gray-400 whitespace-nowrap">
                      {c.name}
                    </div>
                    <div className="text-xs text-gray-600">{c.sector}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050D12] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050D12] to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl border border-[#00FFB2]/20 bg-[#00FFB2]/5 p-12 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(#00FFB2 1px, transparent 1px), linear-gradient(90deg, #00FFB2 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative">
              <p className="text-[#00FFB2] text-sm font-mono font-medium mb-3 tracking-widest uppercase">
                Start Today
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Know Your Risk Before Attackers Do
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Our free risk assessment identifies your top exposure areas across people, process,
                and technology — delivered within 48 hours, no commitment required.
              </p>
              <Link
                to="/assessment"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00FFB2] text-[#050D12] font-bold rounded-lg hover:bg-[#00FFB2]/90 transition-all hover:shadow-xl hover:shadow-[#00FFB2]/20 active:scale-95"
              >
                Request Free Risk Assessment
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
