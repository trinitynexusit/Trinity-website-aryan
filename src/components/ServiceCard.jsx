import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Layers, FileSearch, Lightbulb } from 'lucide-react';

const typeConfig = {
  Ongoing: {
    icon: Clock,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
  Project: {
    icon: Layers,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  Assessment: {
    icon: FileSearch,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
  Advisory: {
    icon: Lightbulb,
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/20',
  },
};

export default function ServiceCard({ service, compact = false }) {
  const cfg = typeConfig[service.type] || typeConfig.Advisory;
  const TypeIcon = cfg.icon;

  return (
    <Link
      to={`/services/${service.id}`}
      className={`group block rounded-xl border bg-white/[0.03] border-white/8 hover:border-[#00FFB2]/30 hover:bg-[#00FFB2]/[0.03] transition-all duration-300 ${
        compact ? 'p-4' : 'p-6'
      }`}
    >
      {/* Domain tag */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-xs text-gray-500 font-mono">{service.domain}</span>
        <span
          className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${cfg.color} ${cfg.bg} ${cfg.border} shrink-0`}
        >
          <TypeIcon size={10} />
          {service.type}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`font-semibold text-white group-hover:text-[#00FFB2] transition-colors leading-snug ${
          compact ? 'text-sm mb-2' : 'text-base mb-3'
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      {!compact && (
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
          {service.description}
        </p>
      )}

      {/* CTA */}
      <div className="flex items-center gap-1 text-xs text-[#00FFB2] font-medium group-hover:gap-2 transition-all">
        View details
        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  );
}
