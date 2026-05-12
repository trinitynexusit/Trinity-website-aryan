import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'SOC', to: '/services?domain=SOC+%26+Managed+Detection' },
  { label: 'Compliance', to: '/services?domain=Compliance+%26+Risk' },
  { label: 'VAPT', to: '/services?domain=VAPT' },
  { label: 'About', to: '/#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#0f172a]/95 backdrop-blur-md border-b border-[#06b6d4]/10 shadow-lg shadow-black/50'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.svg"
              alt="Trinity Nexus Technologies"
              className="h-10 w-10 lg:h-12 lg:w-12 transition-transform group-hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm lg:text-base tracking-widest">TRINITY</span>
              <span className="text-[#06b6d4] font-bold text-xs lg:text-sm tracking-widest">NEXUS TECHNOLOGIES</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${location.pathname === link.to
                  ? 'text-[#06b6d4] bg-[#06b6d4]/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Admin
                  </Link>
                )}
                <span className="text-sm text-gray-500">
                  {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Login
              </Link>
            )}
            <Link
              to="/assessment"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#06b6d4] text-[#0f172a] text-sm font-semibold rounded-lg hover:bg-[#06b6d4]/90 transition-all hover:shadow-lg hover:shadow-[#06b6d4]/20 active:scale-95"
            >
              Get Assessment
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0f172a]/98 backdrop-blur-md border-t border-[#06b6d4]/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/5 space-y-2">
              {user ? (
                <>
                  {user.role === 'admin' && (
                    <Link to="/admin" className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg">
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/auth" className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg">
                  Login / Signup
                </Link>
              )}
              <Link
                to="/assessment"
                className="block px-4 py-3 text-sm font-semibold text-center bg-[#06b6d4] text-[#0f172a] rounded-lg hover:bg-[#06b6d4]/90"
              >
                Get Free Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
