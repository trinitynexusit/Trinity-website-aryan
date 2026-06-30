import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Menu, X, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
const menuItems = [
  { title: "Home", path: "/" },

  {
    title: "Services",
    submenu: [
  "Network Security",
  "Endpoint & Device Security",
  "Cloud Security",
  "VAPT",
  "Application Security & DevSecOps",
  "Identity & Access Management",
  "GRC & Compliance",
  "Managed Security (MSSP/MSP)",
  "Human Risk Management",
  "vCISO & Strategic Advisory",
  "Emerging & Specialised",
  "Software Engineering & Digital Solutions",
],
  },

  

  {
    title: "Industries",
    path: "#industries",
  },

  {
    title: "About Us",
    path: "#about",
  },

  {
    title: "Clients",
    path: "#clients",
  },

  {
    title: "Bulletin",
    path: "#bulletin",
  },

  {
    title: "Contact",
    path: "#contact",
  },

];

const serviceRoutes = {
  "Network Security": "/network-security",
  "Endpoint & Device Security": "/endpoint-security",
  "Cloud Security": "/cloud-security",
  "VAPT": "/vapt",
  "Application Security & DevSecOps": "/app-security",
  "Identity & Access Management": "/iam",
  "GRC & Compliance": "/grc",
  "Managed Security (MSSP/MSP)": "/mssp",
  "Human Risk Management": "/human-risk",
  "vCISO & Strategic Advisory": "/vciso",
  "Emerging & Specialised": "/emerging-security",
  "Software Engineering & Digital Solutions": "/software-engineering",
};
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const handleScroll = (id) => {
  if (location.pathname !== "/") {
    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  } else {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
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
    return (<header
  className="fixed top-0 left-0 right-0 z-50 bg-[#081420] border-b border-white/10"
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex items-center justify-between h-16">
  <div className="flex items-center">
         
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Trinity Nexus Technologies" className="h-10 w-10 lg:h-12 lg:w-12 object-contain transition-transform group-hover:scale-110"/>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm lg:text-base tracking-widest">TRINITY</span>
              <span className="font-bold text-xs lg:text-sm tracking-widest">
  <span className="text-[#00ff99]">NEXUS</span>
  <span className="text-white"> TECHNOLOGIES</span>
</span>

            </div>
          </Link>
          </div>
          {open && (
  <div className="absolute top-16 left-0 w-64 h-screen bg-black/60 backdrop-blur-xl border-r border-[#00ff99]/20 shadow-lg">
    <div className="flex flex-col p-4 space-y-4">
      <Link
  to="/"
  onClick={() => setOpen(false)}
  className="text-white hover:text-[#00ff99]"
>
  Home
</Link>

<button
  onClick={() => setServicesOpen(!servicesOpen)}
  className="text-white hover:text-[#00ff99] text-left"
>
  Services {servicesOpen ? "▲" : "▼"}
</button>

{servicesOpen && (
  <div className="ml-4 flex flex-col gap-3">
    <Link
  to="/services?domain=Network+Security"
  onClick={() => setOpen(false)}
  className="text-gray-300 hover:text-[#00ff99]"
>
  Network Security
</Link>

<Link
  to="/services?domain=Cloud+Security"
  onClick={() => setOpen(false)}
  className="text-gray-300 hover:text-[#00ff99]"
>
  Cloud Security
</Link>

<Link
  to="/services?domain=Red+Team+Operations"
  onClick={() => setOpen(false)}
  className="text-gray-300 hover:text-[#00ff99]"
>
  Red Team
</Link>
    <Link
      to="/services?domain=SOC+%26+Managed+Detection"
      onClick={() => setOpen(false)}
      className="text-gray-300 hover:text-[#00ff99]"
    >
      SOC
    </Link>

    <Link
      to="/services?domain=Compliance+%26+Risk"
      onClick={() => setOpen(false)}
      className="text-gray-300 hover:text-[#00ff99]"
    >
      Compliance
    </Link>

    <Link
      to="/services?domain=VAPT"
      onClick={() => setOpen(false)}
      className="text-gray-300 hover:text-[#00ff99]"
    >
      VAPT
    </Link>
  </div>
)}

<Link
  to="/about"
  onClick={() => setOpen(false)}
  className="text-white hover:text-[#00ff99]"
>
  About
</Link>
    </div>
  </div>
)}
          <nav className="hidden lg:flex items-center gap-8">

 {menuItems.map((item, index) => (
  <div key={index} className="relative group">

   {item.path ? (
  <button
    onClick={() => {
     if (item.title === "Home") {
  if (location.pathname === "/") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    navigate("/");
  }
}

       else if (item.path === "#industries") {
  handleScroll("industries");

} else if (item.path === "#about") {
  handleScroll("about");

} else if (item.path === "#clients") {
  handleScroll("clients");

} else if (item.path === "#bulletin") {
  handleScroll("bulletin");

} else if (item.path === "#contact") {
  handleScroll("contact");

} else {
  navigate(item.path);
}
    }}
    className="text-white hover:text-[#00ff99] transition"
 

    
  >
    {item.title}
  </button>
) : (
      <>
        <button className="flex items-center gap-1 text-white hover:text-[#00ff99] transition">
          {item.title}
          <ChevronRight size={14} className="rotate-90" />
        </button>

        <div className="absolute left-0 top-full mt-2
    w-72
    max-h-[420px]
    overflow-y-auto
    bg-[#041827]
    border border-[#00ff99]/20
    rounded-xl
    opacity-0 invisible
    group-hover:opacity-100 group-hover:visible
    transition-all duration-300
    z-50">

          {item.submenu?.map((sub, i) => (
  <Link
    key={i}
    to={serviceRoutes[sub]}
    className="block px-4 py-2 text-sm text-gray-300 hover:text-[#00ff99] hover:bg-[#0b2238]"
  >
    {sub}
  </Link>
))}

        </div>
      </>
    )}

  </div>
))}

          

</nav>
  


          
         <div className="hidden lg:flex items-center gap-3">
  {user && (
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
  )}
</div>
  
           
          

          
          
        </div>
      </div>

      
      {open && (<div className="lg:hidden bg-[#0f172a]/98 backdrop-blur-md border-t border-[#06b6d4]/10">
          <div className="px-4 py-4 space-y-1">
           <Link
  to="/"
  className="block px-4 py-3 text-white hover:text-[#00ff99]"
>
  Home
</Link>

<div className="px-4">
  <button
    onClick={() => setServicesOpen(!servicesOpen)}
    className="w-full text-left py-3 text-white hover:text-[#00ff99]"
  >
    Services {servicesOpen ? "▲" : "▼"}
  </button>

  {servicesOpen && (
  <div className="ml-4 flex flex-col gap-3">

    <Link
     to="/network-security"
      className="text-gray-300 hover:text-[#00ff99]"
    >
      Network Security
    </Link>

    <Link
      to="/cloud-security"
      className="text-gray-300 hover:text-[#00ff99]"
    >
      Cloud Security
    </Link>

    <Link
      to="/red-team"
      className="text-gray-300 hover:text-[#00ff99]"
    >
      Red Team
    </Link>

    <Link
      to="/soc-managed-detection"
      className="text-gray-300 hover:text-[#00ff99]"
    >
      SOC
    </Link>

    <Link
      to="/compliance-risk"
      className="text-gray-300 hover:text-[#00ff99]"
    >
      Compliance
    </Link>

      <Link
  to="/vapt"
  className="text-gray-300 hover:text-[#00ff99]"
>
  VAPT
</Link>

  </div>
  )}
</div>

<Link
  to="/#about"
  className="block px-4 py-3 text-white hover:text-[#00ff99]"
>
  About
</Link>
            <div className="pt-3 border-t border-white/5 space-y-2">
              {user ? (<>
                  {user.role === 'admin' && (<Link to="/admin" className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg">
                      Admin Dashboard
                    </Link>)}
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg">
                    Logout
                  </button>
                </>) : (<Link to="/auth" className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg">
                  Login / Signup
                </Link>)}
              <Link to="/assessment" className="block px-4 py-3 text-sm font-semibold text-center bg-[#06b6d4] text-[#0f172a] rounded-lg hover:bg-[#06b6d4]/90">
                Get Free Assessment
              </Link>
            </div>
          </div>
        </div>
        )}
    </header>);
}
