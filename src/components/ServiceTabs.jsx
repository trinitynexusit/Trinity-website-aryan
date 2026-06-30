import { NavLink } from "react-router-dom";

const services = [
  { name: "🌐 Network", path: "/network-security" },
  { name: "💻 Endpoint", path: "/endpoint-security" },
  { name: "☁️ Cloud", path: "/cloud-security" },
  { name: "🎯 VAPT", path: "/vapt" },
  { name: "🚀 DevSecOps", path: "/app-security" },
  { name: "🔑 IAM", path: "/iam" },
  { name: "📋 GRC", path: "/grc" },
  { name: "🛡 MSSP/SOC", path: "/mssp" },
  { name: "🧠 Human Risk", path: "/human-risk" },
  { name: "🏅 vCISO", path: "/vciso" },
  { name: "⚡ Emerging", path: "/emerging-security" },
  { name: "💻 Software Eng", path: "/software-engineering" },
];

export default function ServiceTabs() {
  return (
    <div className="sticky top-16 z-40
    bg-[#0b1625]/70
    backdrop-blur-lg
    border-b border-white/10
    shadow-lg">
      <div className="flex items-center whitespace-nowrap min-w-max px-6">
        {services.map((service) => (
          <NavLink
            key={service.path}
            to={service.path}
            className={({ isActive }) =>
              `px-5 py-2 text-sm transition-all border-b-2 ${
                isActive
                  ? "text-[#00ff99] border-[#00ff99]"
                  : "text-gray-300 border-transparent hover:text-[#00ff99]"
              }`
            }
          >
            {service.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}