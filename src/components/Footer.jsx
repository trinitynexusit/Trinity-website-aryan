import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
const footerLinks = {
    Services: [
        { label: 'Network Security', to: '/services?domain=Network+Security' },
        { label: 'Cloud Security', to: '/services?domain=Cloud+Security' },
        { label: 'VAPT', to: '/services?domain=VAPT' },
        { label: 'Red Team', to: '/services?domain=Red+Team+Operations' },
        { label: 'Compliance & Risk', to: '/services?domain=Compliance+%26+Risk' },
        { label: 'SOC', to: '/services?domain=SOC+%26+Managed+Detection' },
    ],
    Company: [
        { label: 'About Us', to: '/#about' },
        { label: 'Clients', to: '/#clients' },
        { label: 'Careers', to: '#' },
        { label: 'Blog', to: '#' },
        { label: 'Press', to: '#' },
    ],
    Legal: [
        { label: 'Privacy Policy', to: '#' },
        { label: 'Terms of Service', to: '#' },
        { label: 'Cookie Policy', to: '#' },
        { label: 'Responsible Disclosure', to: '#' },
    ],
};
export default function Footer() {
    return (<footer id="contact" className="bg-[#020810] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src="/logo.png" alt="Trinity Nexus Technologies" className="h-10 w-10 object-contain transition-transform hover:scale-110"/>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs tracking-widest">TRINITY</span>
                <span className="text-[#00ff99] font-bold text-xs tracking-widest">NEXUS TECHNOLOGIES</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Enterprise-grade cybersecurity services protecting critical infrastructure,
              financial institutions, and high-value targets across 12 security domains.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:connect@trinitynexus.org" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#06b6d4] transition-colors">
                <Mail size={14}/>
                connect@trinitynexus.org
              </a>
              <span className="flex items-start gap-2 text-sm text-gray-500">
  <MapPin size={14} className="mt-0.5 flex-shrink-0" />

  <a
    href="https://www.google.com/maps/search/?api=1&query=Assotech+Business+Cresterra+Tower+4+Sector+135+Noida+201305"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#00ff99] transition-colors"
  >
    Assotech Business Cresterra, 1115, Tower 4, Sector 135, Noida (UP), India, 201305
  </a>
</span>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.facebook.com/share/17RrCqigEB/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#06b6d4] hover:border-[#06b6d4]/30 transition-all" title="Follow us on Facebook">
                <Facebook size={14}/>
              </a>
              <a href="https://www.linkedin.com/company/trinitynexus/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#06b6d4] hover:border-[#06b6d4]/30 transition-all" title="Follow us on LinkedIn">
                <Linkedin size={14}/>
              </a>
              <a href="https://www.instagram.com/trinitynexusofficial" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#06b6d4] hover:border-[#06b6d4]/30 transition-all" title="Follow us on Instagram">
                <Instagram size={14}/>
              </a>
            </div>
          </div>

          
          {Object.entries(footerLinks).map(([section, links]) => (<div key={section}>
              <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (<li key={link.label}>
                    <Link to={link.to} className="text-gray-500 text-sm hover:text-[#06b6d4] transition-colors">
                      {link.label}
                    </Link>
                  </li>))}
              </ul>
            </div>))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Trinity Nexus Technologies Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse"/>
            <span className="text-xs text-[#00ff99] font-mono">SOC OPERATIONAL — 24x7</span>
          </div>
        </div>
      </div>
    </footer>);
}
