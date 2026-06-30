import { Link } from 'react-router-dom';
import { Clock, Layers, FileSearch, Lightbulb } from 'lucide-react';
const typeConfig = {
    Ongoing: {
        icon: Clock,
        color: 'text-emerald-400',
        bg: 'bg-emerald-400/10',
        border: 'border-emerald-400/20',
        dotColor: 'bg-emerald-400',
    },
    Project: {
        icon: Layers,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        border: 'border-blue-400/20',
        dotColor: 'bg-blue-400',
    },
    Assessment: {
        icon: FileSearch,
        color: 'text-amber-400',
        bg: 'bg-amber-400/10',
        border: 'border-amber-400/20',
        dotColor: 'bg-amber-400',
    },
    Advisory: {
        icon: Lightbulb,
        color: 'text-sky-400',
        bg: 'bg-sky-400/10',
        border: 'border-sky-400/20',
        dotColor: 'bg-sky-400',
    },
};
export default function FeaturedServiceCard({ service }) {
    const cfg = typeConfig[service.type] || typeConfig.Advisory;
    const TypeIcon = cfg.icon;
    return (<Link
  to={`/services/${service.id}`}
  className="
    group
    h-full
    flex
    flex-col
    rounded-xl
    border
    border-white/8
    bg-gradient-to-br
    from-white/[0.05]
    to-white/[0.02]

    hover:border-[#00ff99]/60
    hover:bg-[#00ff99]/[0.02]
    hover:shadow-[0_0_40px_rgba(0,255,153,0.45)]
    hover:-translate-y-1

    transition-all
    duration-300
  
">
      
      <div className="h-1 w-full bg-gradient-to-r from-[#06b6d4]/0 via-[#06b6d4]/40 to-[#06b6d4]/0 group-hover:via-[#06b6d4]/60 transition-all"/>

      
      <div className="flex flex-col h-full p-6">
        
        

        
        <h3 className="text-base font-semibold text-white group-hover:text-white transition-colors leading-snug mb-3 line-clamp-2">
          {service.title}
        </h3>

        
        <p className="text-xs text-gray-500 font-mono mb-4">{service.domain}</p>

        
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-6 flex-grow">
          {service.description}
        </p>

        
        <div className="mb-6 pt-4 border-t border-white/5">
          <p className="text-xs text-gray-600 font-medium mb-2">Key Deliverables:</p>
          <ul className="space-y-1">
            {service.deliverables.slice(0, 2).map((d, i) => (<li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                <span className="text-[#00ff99] drop-shadow-[0_0_6px_#00ff99] mt-0.5">•</span>
                <span>{d}</span>
              </li>))}
            {service.deliverables.length > 2 && (<li className="text-xs text-gray-600">
                +{service.deliverables.length - 2} more
              </li>)}
          </ul>
        </div>

        
        
      </div>
    </Link>);
}
