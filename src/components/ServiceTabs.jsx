import { NavLink } from "react-router-dom";

const services = [
  { name: "Network", path: "/network-security" },
  { name: "Endpoint", path: "/endpoint-security" },
  { name: "Cloud", path: "/cloud-security" },
  { name: "VAPT", path: "/vapt" },
  { name: "DevSecOps", path: "/app-security" },
  { name: "IAM", path: "/iam" },
  { name: "GRC", path: "/grc" },
  { name: "MSSP/SOC", path: "/mssp" },
  { name: "Human Risk", path: "/human-risk" },
  { name: "vCISO", path: "/vciso" },
  { name: "Emerging", path: "/emerging-security" },
  { name: "Software Eng", path: "/software-engineering" },
];

export default function ServiceTabs() {
  return (
    <div className="sticky top-16 z-40 w-full overflow-x-auto bg-[#0b1625]/70 backdrop-blur-lg border-b border-white/10 shadow-lg scrollbar-hide">
      <div className="flex items-center whitespace-nowrap min-w-max px-4">
        {services.map((service) => (
<NavLink
  key={service.path}
  to={service.path}
  className={({ isActive }) =>
    `flex-shrink-0 flex items-center gap-2 px-5 py-3 text-sm border-b-2 transition-all duration-300 ${
      isActive
        ? "text-[#00ff99] border-[#00ff99]"
        : "text-gray-300 border-transparent hover:text-white"
    }`
  }
>
  {({ isActive }) => (
    <>
      <span
        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
          isActive ? "bg-[#00ff99]" : "bg-white"
        }`}
      ></span>

      <span>{service.name}</span>
    </>
  )}
</NavLink>
        ))}
      </div>
    </div>
  );
}