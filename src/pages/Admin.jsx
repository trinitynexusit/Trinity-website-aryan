import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LayoutDashboard, Users, ShieldCheck, TrendingUp, AlertTriangle, CheckCircle2, Clock, FileText, MoreHorizontal, Search, Filter, Download, } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { services, domains } from '../data/services';
const dummyLeads = [
    { id: 1, name: 'James Thornton', email: 'j.thornton@barclays.com', company: 'Barclays', domain: 'VAPT', status: 'New', date: '2025-01-14', size: '1000+' },
    { id: 2, name: 'Priya Sharma', email: 'priya@cloudco.io', company: 'CloudCo', domain: 'Cloud Security', status: 'Contacted', date: '2025-01-13', size: '51–250' },
    { id: 3, name: 'Michael O\'Brien', email: 'm.obrien@nhsdigital.nhs.uk', company: 'NHS Digital', domain: 'Compliance & Risk', status: 'Qualified', date: '2025-01-12', size: '1000+' },
    { id: 4, name: 'Sarah Chen', email: 's.chen@fintech-x.com', company: 'FintechX', domain: 'Application Security', status: 'New', date: '2025-01-11', size: '51–250' },
    { id: 5, name: 'David Müller', email: 'david@shellenergyeu.com', company: 'Shell Energy', domain: 'Network Security', status: 'Proposal Sent', date: '2025-01-10', size: '1000+' },
    { id: 6, name: 'Amara Okafor', email: 'amara@techstartup.io', company: 'TechStartup', domain: 'IAM', status: 'Contacted', date: '2025-01-09', size: '1–50' },
    { id: 7, name: 'Tom Harrison', email: 't.harrison@rolls-royce.com', company: 'Rolls-Royce', domain: 'Red Team Operations', status: 'Qualified', date: '2025-01-08', size: '1000+' },
    { id: 8, name: 'Elena Petrov', email: 'e.petrov@insure-direct.co.uk', company: 'InsureDirect', domain: 'Compliance & Risk', status: 'New', date: '2025-01-07', size: '251–1000' },
];
const statusConfig = {
    New: { color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
    Contacted: { color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
    Qualified: { color: 'text-[#06b6d4]', bg: 'bg-[#06b6d4]/10', border: 'border-[#06b6d4]/20' },
    'Proposal Sent': { color: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20' },
};
const kpiCards = [
    { label: 'Total Leads', value: '8', change: '+3 this week', icon: Users, up: true },
    { label: 'Services Listed', value: '75', change: '12 domains', icon: ShieldCheck, up: null },
    { label: 'Qualified Leads', value: '2', change: '25% conversion', icon: TrendingUp, up: true },
    { label: 'Avg Response', value: '2.1h', change: 'SLA: 4h', icon: Clock, up: true },
];
export default function Admin() {
    const { user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user)
            navigate('/auth');
    }, [user, navigate]);
    if (!user)
        return null;
    return (<main className="min-h-screen bg-[#0f172a] text-white pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <LayoutDashboard size={16} className="text-[#06b6d4]"/>
              <span className="text-[#06b6d4] text-sm font-mono font-medium">Admin Dashboard</span>
            </div>
            <h1 className="text-3xl font-bold text-white">Operations Centre</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse"/>
            <span className="text-xs text-gray-500 font-mono">Logged in as <span className="text-gray-300">{user.email}</span></span>
          </div>
        </div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {kpiCards.map((kpi) => {
            const Icon = kpi.icon;
            return (<div key={kpi.label} className="p-5 rounded-xl border border-white/8 bg-white/[0.02]">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center">
                    <Icon size={16} className="text-[#06b6d4]"/>
                  </div>
                  {kpi.up !== null && (<div className={`flex items-center gap-1 text-xs font-medium ${kpi.up ? 'text-[#06b6d4]' : 'text-red-400'}`}>
                      <TrendingUp size={10} className={kpi.up ? '' : 'rotate-180'}/>
                    </div>)}
                </div>
                <div className="text-3xl font-bold text-white mb-0.5">{kpi.value}</div>
                <div className="text-sm text-gray-500">{kpi.label}</div>
                <div className="text-xs text-gray-700 mt-1">{kpi.change}</div>
              </div>);
        })}
        </div>

        
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="text-lg font-bold text-white">Assessment Leads</h2>
              <p className="text-sm text-gray-500 mt-0.5">{dummyLeads.length} total submissions</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-gray-400 hover:text-white transition-colors">
                <Search size={12}/>
                Search
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-gray-400 hover:text-white transition-colors">
                <Filter size={12}/>
                Filter
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-xs text-gray-400 hover:text-white transition-colors">
                <Download size={12}/>
                Export
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-white/8 bg-white/[0.02] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    {['Name', 'Company', 'Domain Interest', 'Size', 'Status', 'Date', ''].map((col) => (<th key={col} className="text-left text-xs font-semibold text-gray-500 uppercase tracking-widest px-5 py-4">
                        {col}
                      </th>))}
                  </tr>
                </thead>
                <tbody>
                  {dummyLeads.map((lead, i) => {
            const st = statusConfig[lead.status] || statusConfig.New;
            return (<tr key={lead.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                        <td className="px-5 py-4">
                          <div className="text-sm font-medium text-white">{lead.name}</div>
                          <div className="text-xs text-gray-600">{lead.email}</div>
                        </td>
                        <td className="px-5 py-4">
                          <span className="text-sm text-gray-300">{lead.company}</span>
                        </td>
                        <td className="px-5 py-4">
                          <span className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/8">
                            {lead.domain}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <span className="text-xs text-gray-500">{lead.size}</span>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${st.color} ${st.bg} ${st.border}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <span className="text-xs text-gray-600 font-mono">{lead.date}</span>
                        </td>
                        <td className="px-5 py-4">
                          <button className="text-gray-600 hover:text-gray-400 transition-colors">
                            <MoreHorizontal size={15}/>
                          </button>
                        </td>
                      </tr>);
        })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        
        <div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-bold text-white">Services Catalogue</h2>
              <p className="text-white/80 text-sm">
  Across 12 domains
</p>
            </div>
            <Link to="/services" className="text-sm text-[#06b6d4] hover:underline">
              View public catalogue
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {domains.map((domain) => {
            const count = services.filter((s) => s.domain === domain).length;
            const types = [...new Set(services.filter((s) => s.domain === domain).map((s) => s.type))];
            return (<div key={domain} className="p-4 rounded-xl border border-white/8 bg-white/[0.02] flex items-center justify-between group hover:border-[#06b6d4]/20 transition-colors">
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">{domain}</div>
                    <div className="flex items-center gap-2">
                      {types.map((t) => (<span key={t} className="text-xs text-gray-600">{t}</span>))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-[#06b6d4]">{count}</div>
                    <div className="text-xs text-gray-600">services</div>
                  </div>
                </div>);
        })}
          </div>
        </div>
      </div>
    </main>);
}
