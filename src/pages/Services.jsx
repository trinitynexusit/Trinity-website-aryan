import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
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
    if (d) setActiveDomain(d);
  }, [searchParams]);

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchQuery =
        !query ||
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
      if (!map[s.domain]) map[s.domain] = [];
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

  return (
    <main className="min-h-screen bg-[#050D12] text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#00FFB2] text-sm font-mono font-medium mb-2 tracking-widest uppercase">
            Service Catalogue
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            192 Security Services
          </h1>
          <p className="text-gray-500 max-w-xl">
            Browse our full catalogue across 12 security domains. Filter by engagement type or
            search for a specific capability.
          </p>
        </div>

        {/* Search + Filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, domains, keywords..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00FFB2]/40 focus:bg-[#00FFB2]/[0.03] transition-all"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-medium transition-all sm:w-auto ${
              showFilters
                ? 'border-[#00FFB2]/40 bg-[#00FFB2]/10 text-[#00FFB2]'
                : 'border-white/10 bg-white/[0.04] text-gray-400 hover:text-white hover:border-white/20'
            }`}
          >
            <SlidersHorizontal size={15} />
            Filters
            <ChevronDown
              size={13}
              className={`transition-transform ${showFilters ? 'rotate-180' : ''}`}
            />
          </button>
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 px-4 py-3 rounded-lg border border-white/10 bg-white/[0.04] text-sm text-gray-400 hover:text-white transition-colors"
            >
              <X size={13} />
              Clear
            </button>
          )}
        </div>

        {/* Filter panels */}
        {showFilters && (
          <div className="mb-8 p-5 rounded-xl border border-white/8 bg-white/[0.02] space-y-5">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                Engagement Type
              </p>
              <div className="flex flex-wrap gap-2">
                {TYPES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveType(t)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                      activeType === t
                        ? 'border-[#00FFB2]/40 bg-[#00FFB2]/10 text-[#00FFB2]'
                        : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                Domain
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => { setActiveDomain('All'); setSearchParams({}); }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                    activeDomain === 'All'
                      ? 'border-[#00FFB2]/40 bg-[#00FFB2]/10 text-[#00FFB2]'
                      : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  All Domains
                </button>
                {domains.map((d) => (
                  <button
                    key={d}
                    onClick={() => { setActiveDomain(d); setSearchParams({ domain: d }); }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                      activeDomain === d
                        ? 'border-[#00FFB2]/40 bg-[#00FFB2]/10 text-[#00FFB2]'
                        : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-sm text-gray-500">
            Showing <span className="text-white font-medium">{filtered.length}</span> service
            {filtered.length !== 1 ? 's' : ''}
          </span>
          {hasFilters && (
            <span className="text-xs text-[#00FFB2] font-mono">— filtered</span>
          )}
        </div>

        {/* Service groups */}
        {Object.keys(grouped).length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-600 text-lg">No services match your search.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-sm text-[#00FFB2] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-14">
            {Object.entries(grouped).map(([domain, domainServices]) => (
              <div key={domain}>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-lg font-bold text-white">{domain}</h2>
                  <span className="px-2 py-0.5 rounded-full bg-[#00FFB2]/10 border border-[#00FFB2]/20 text-[#00FFB2] text-xs font-mono">
                    {domainServices.length}
                  </span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {domainServices.map((s) => (
                    <ServiceCard key={s.id} service={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
