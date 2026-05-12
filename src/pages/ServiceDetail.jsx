import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Clock,
  Layers,
  FileSearch,
  Lightbulb,
  Share2,
} from 'lucide-react';
import { getServiceById, getRelatedServices } from '../data/services';
import ServiceCard from '../components/ServiceCard';

const typeConfig = {
  Ongoing: { icon: Clock, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', label: 'Ongoing Managed Service' },
  Project: { icon: Layers, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20', label: 'Project-Based Engagement' },
  Assessment: { icon: FileSearch, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20', label: 'Security Assessment' },
  Advisory: { icon: Lightbulb, color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20', label: 'Advisory Consulting' },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(id);

  if (!service) {
    return (
      <main className="min-h-screen bg-[#050D12] flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Service not found.</p>
          <Link to="/services" className="text-[#00FFB2] hover:underline text-sm">
            Back to catalogue
          </Link>
        </div>
      </main>
    );
  }

  const cfg = typeConfig[service.type] || typeConfig.Advisory;
  const TypeIcon = cfg.icon;
  const related = getRelatedServices(service.relatedIds);

  return (
    <main className="min-h-screen bg-[#050D12] text-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back
          </button>
          <span className="text-gray-700">/</span>
          <Link to="/services" className="text-sm text-gray-500 hover:text-white transition-colors">
            Services
          </Link>
          <span className="text-gray-700">/</span>
          <span className="text-sm text-gray-400 truncate max-w-xs">{service.title}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-mono text-gray-500 px-2 py-1 rounded bg-white/5 border border-white/8">
                  {service.domain}
                </span>
                <span
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${cfg.color} ${cfg.bg} ${cfg.border}`}
                >
                  <TypeIcon size={11} />
                  {cfg.label}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                {service.title}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Deliverables */}
            <div className="p-6 rounded-xl border border-white/8 bg-white/[0.02]">
              <h2 className="text-base font-semibold text-white mb-4">
                What You Receive
              </h2>
              <ul className="space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#00FFB2]/10 border border-[#00FFB2]/25 flex items-center justify-center">
                      <CheckCircle2 size={11} className="text-[#00FFB2]" />
                    </div>
                    <span className="text-sm text-gray-300">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why this matters */}
            <div className="p-6 rounded-xl border border-white/8 bg-white/[0.02]">
              <h2 className="text-base font-semibold text-white mb-3">
                Engagement Model
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.type === 'Ongoing' &&
                  'This is a managed service with continuous delivery. Your organisation benefits from persistent protection, monthly reporting, and dedicated analyst coverage with guaranteed SLAs.'}
                {service.type === 'Project' &&
                  'This is a time-bound project engagement with clear deliverables and milestones. Our team works alongside yours to deliver outcomes within an agreed timeline and scope.'}
                {service.type === 'Assessment' &&
                  'This is a point-in-time assessment engagement. Our specialists conduct a thorough evaluation and deliver a comprehensive findings report with prioritised remediation guidance.'}
                {service.type === 'Advisory' &&
                  'This is a strategic advisory engagement. Our senior consultants work with your leadership and technical teams to design and guide the implementation of security improvements.'}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* CTA card */}
            <div className="p-6 rounded-xl border border-[#00FFB2]/20 bg-[#00FFB2]/5 sticky top-24">
              <h3 className="font-semibold text-white mb-2">Interested in this service?</h3>
              <p className="text-sm text-gray-400 mb-5">
                Speak with a specialist to understand how this fits your risk posture and budget.
              </p>
              <Link
                to="/assessment"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#00FFB2] text-[#050D12] font-semibold text-sm rounded-lg hover:bg-[#00FFB2]/90 transition-all hover:shadow-lg hover:shadow-[#00FFB2]/20 mb-3"
              >
                Request Assessment
                <ChevronRight size={14} />
              </Link>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                className="flex items-center justify-center gap-2 w-full py-3 border border-white/10 text-gray-400 hover:text-white text-sm rounded-lg hover:border-white/20 transition-all"
              >
                <Share2 size={13} />
                Copy Link
              </button>
              <div className="mt-5 pt-5 border-t border-white/8 space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Engagement type</span>
                  <span className={`font-medium ${cfg.color}`}>{service.type}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Domain</span>
                  <span className="text-gray-400">{service.domain}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">SLA</span>
                  <span className="text-gray-400">Contractual</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related services */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-lg font-bold text-white">Related Services</h2>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
