import { Link } from 'react-router-dom';
import { Clock, Layers, FileSearch, Lightbulb } from 'lucide-react';
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
    return (<Link
  to={`/services/${service.id}`}
  className={`group block rounded-xl border border-white/20
  bg-white/[0.03]
  transition-all duration-300
  hover:-translate-y-2
  hover:border-[#00ff99]
  hover:shadow-[0_0_40px_rgba(0,255,153,0.5)]
  ${compact ? 'p-4' : 'p-6'}`}
>
      
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-xs text-gray-500 font-mono">{service.domain}</span>
        
      </div>

      
      <h3 className={`font-semibold text-[#00ff99] leading-snug ${compact ? 'text-sm mb-2' : 'text-base mb-3'}`}>
        {service.title}
      </h3>

      
      {!compact && (<p className="text-sm text-white leading-relaxed line-clamp-2 mb-4">
          {service.description}
        </p>)}

      
      
    </Link>);
}
