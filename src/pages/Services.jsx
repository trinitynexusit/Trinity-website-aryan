import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ChevronDown, X, Zap } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { services, domains } from '../data/services';
const TYPES = ['All', 'Ongoing', 'Project', 'Advisory', 'Assessment'];
export default function Services() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState('');
    const [activeType, setActiveType] = useState('All');
    const [activeDomain, setActiveDomain] = useState('All');
    const [showFilters, setShowFilters] = useState(false);
    useEffect(() => {
        const d = searchParams.get('domain');
        if (d)
            setActiveDomain(d);
    }, [searchParams]);
    useEffect(() => {
    const domain = searchParams.get('domain');

    if (domain) {
        setTimeout(() => {
            document
                .getElementById('services-section')
                ?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
        }, 200);
    }
}, [searchParams]);
    const filtered = useMemo(() => {
        return services.filter((s) => {
            const matchQuery = !query ||
                s.title.toLowerCase().includes(query.toLowerCase()) ||
                s.description.toLowerCase().includes(query.toLowerCase()) ||
                s.domain.toLowerCase().includes(query.toLowerCase());
            const matchType = activeType === 'All' || s.type === activeType;
            const matchDomain = activeDomain === 'All' || s.domain === activeDomain;
            return matchQuery && matchType && matchDomain;
        });
    }, [query, activeType, activeDomain]);
    const grouped = useMemo(() => {
        const map = {};
        filtered.forEach((s) => {
            if (!map[s.domain])
                map[s.domain] = [];
            map[s.domain].push(s);
        });
        return map;
    }, [filtered]);
    const clearFilters = () => {
        setQuery('');
        setActiveType('All');
        setActiveDomain('All');
        setSearchParams({});
    };
    const hasFilters = query || activeType !== 'All' || activeDomain !== 'All';
    const domainHero = {
  "Network Security": {
    line1: "FORTIFY YOUR NETWORK",
    line2: "PERIMETER. INTERIOR. EVERYWHERE."
  },

  "Cloud Security": {
    line1: "SECURE YOUR CLOUD",
    line2: "CSPM. CWPP. CIEM. ZERO TRUST."
  },

  "SOC & Managed Detection": {
    line1: "DETECT EVERY THREAT",
    line2: "MONITOR. ANALYZE. RESPOND."
  }
};

const hero = domainHero[activeDomain] || {
  line1: activeDomain,
  line2: "SECURITY. COMPLIANCE. RESILIENCE."
};
    return (<main className="min-h-screen bg-black text-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/20">
              <Zap size={16} className="text-[#06b6d4]"/>
            </div>
            <div>
              <p className="text-[#00ff99] text-sm font-mono font-medium tracking-widest uppercase">
                Complete Service Catalogue
              </p>
            </div>
          </div>
          <div className="mb-10">

  <div className="inline-flex px-4 py-2 rounded-md border border-[#00ff99]/30 text-[#00ff99] font-mono text-sm mb-6">
    D01 • {activeDomain}
  </div>

  <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-none">
    <span className="block text-white">
      {hero.line1}
    </span>

    <span className="block text-[#00ff99] drop-shadow-[0_0_15px_#00ff99]">
      {hero.line2}
    </span>
  </h1>

  <p className="mt-6 text-gray-400 font-mono text-lg">
    Managed Firewall • IDS/IPS • DNS Security • NTA • Zero Trust Segmentation
  </p>

</div>
        </div>

        
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"/>
              <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search services, capabilities, keywords..." className="w-full bg-white/[0.04] border border-white/10 rounded-lg pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#06b6d4]/50 focus:bg-white/[0.06] transition-all"/>
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border text-sm font-medium transition-all shrink-0 ${showFilters
            ? 'border-[#06b6d4]/40 bg-[#06b6d4]/10 text-[#06b6d4]'
            : 'border-white/10 bg-white/[0.04] text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.06]'}`}>
              <SlidersHorizontal size={16}/>
              <span className="hidden sm:inline">Filters</span>
              <ChevronDown size={14} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`}/>
            </button>
            {hasFilters && (<button onClick={clearFilters} className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg border border-white/10 bg-white/[0.04] text-sm text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors shrink-0">
                <X size={14}/>
                <span className="hidden sm:inline">Clear</span>
              </button>)}
          </div>

          
          {hasFilters && (<div className="flex flex-wrap gap-2">
              {query && (<div className="px-3 py-1.5 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#06b6d4] text-xs font-medium flex items-center gap-2">
                  Search: {query}
                  <button onClick={() => setQuery('')} className="ml-1 hover:text-white transition-colors">
                    ✕
                  </button>
                </div>)}
              {activeType !== 'All' && (<div className="px-3 py-1.5 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-300 text-xs font-medium flex items-center gap-2">
                  Type: {activeType}
                  <button onClick={() => setActiveType('All')} className="ml-1 hover:text-blue-100 transition-colors">
                    ✕
                  </button>
                </div>)}
              {activeDomain !== 'All' && (<div className="px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-medium flex items-center gap-2">
                  Domain: {activeDomain}
                  <button onClick={() => {
                    setActiveDomain('All');
                    setSearchParams({});
                }} className="ml-1 hover:text-amber-100 transition-colors">
                    ✕
                  </button>
                </div>)}
            </div>)}
        </div>

        
        {showFilters && (<div className="mb-10 p-6 rounded-xl border border-white/8 bg-white/[0.02] backdrop-blur-sm space-y-6">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Engagement Type
              </p>
              <div className="flex flex-wrap gap-2">
                {TYPES.map((t) => (<button key={t} onClick={() => setActiveType(t)} className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${activeType === t
                    ? 'border-[#06b6d4]/40 bg-[#06b6d4]/10 text-[#06b6d4]'
                    : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04]'}`}>
                    {t}
                  </button>))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Domain
              </p>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => {
                setActiveDomain('All');
                setSearchParams({});
            }} className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${activeDomain === 'All'
                ? 'border-[#06b6d4]/40 bg-[#06b6d4]/10 text-[#06b6d4]'
                : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04]'}`}>
                  All Domains
                </button>
                {domains.map((d) => (<button key={d} onClick={() => {
                    setActiveDomain(d);
                    setSearchParams({ domain: d });
                }} className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${activeDomain === d
                    ? 'border-[#06b6d4]/40 bg-[#06b6d4]/10 text-[#06b6d4]'
                    : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04]'}`}>
                    {d}
                  </button>))}
              </div>
            </div>
          </div>)}

        
        <div id="services-section">
  <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/5">
          <div>
            <p className="text-sm text-gray-500">
              Showing <span className="text-white font-semibold">{filtered.length}</span> service
              {filtered.length !== 1 ? 's' : ''}
            </p>
          </div>
          {hasFilters && (<span className="text-xs text-[#06b6d4] font-mono bg-[#06b6d4]/10 border border-[#06b6d4]/20 px-2 py-1 rounded">
              Filtered
            </span>)}
        </div>

        
        {Object.keys(grouped).length === 0 ? (<div className="text-center py-32">
            <p className="text-gray-500 text-lg mb-2">No services match your filters.</p>
            <p className="text-gray-600 text-sm mb-6">Try adjusting your search criteria or clearing filters.</p>
            <button onClick={clearFilters} className="text-[#06b6d4] hover:text-[#06b6d4]/80 text-sm font-medium transition-colors">
              Clear all filters
            </button>
          </div>) : (<div className="space-y-16">
            {Object.entries(grouped).map(([domain, domainServices]) => (<div key={domain}>
                <div className="flex items-center gap-3 mb-8">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{domain}</h2>
                    <p className="text-sm text-gray-500">
                      {domainServices.length} service{domainServices.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/5 to-transparent"/>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {domainServices.map((s) => (<ServiceCard key={s.id} service={s}/>))}
                </div>
              </div>))}
          </div>)}
      </div>
      </div>
    </main>);
}
