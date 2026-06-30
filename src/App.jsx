import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Assessment = lazy(() => import('./pages/Assessment'));
const Auth = lazy(() => import('./pages/Auth'));
const Admin = lazy(() => import('./pages/Admin'));
const About = lazy(() => import('./pages/About'));
const NetworkSecurity = lazy(() => import('./pages/NetworkSecurity'));
const EndpointSecurity = lazy(() => import('./pages/EndpointSecurity'));
const CloudSecurity = lazy(() => import('./pages/CloudSecurity'));
const VAPT = lazy(() => import('./pages/VAPT'));
const AppSecurity = lazy(() => import('./pages/AppSecurity'));
const IAM = lazy(() => import('./pages/IAM'));  
const GRC = lazy(() => import('./pages/GRC'));
const MSSP = lazy(() => import('./pages/MSSP'));
const HumanRisk = lazy(() => import('./pages/HumanRisk'));
const VCISO = lazy(() => import('./pages/VCISO'));
const EmergingSecurity = lazy(() => import('./pages/EmergingSecurity'));
const SoftwareEngineering = lazy(() => import('./pages/SoftwareEngineering'));
function PageLoader() {
    return (<div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-[#06b6d4]/20 border-t-[#06b6d4] animate-spin"/>
        <span className="text-xs text-gray-600 font-mono">Loading...</span>
      </div>
    </div>);
}
export default function App() {
    return (<AuthProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>

            <Route
  path="/endpoint-security"
  element={<EndpointSecurity />}
/>

            <Route path="/" element={<Home />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/services/:id" element={<ServiceDetail />}/>
            <Route path="/about" element={<About />} />
            <Route path="/assessment" element={<Assessment />}/>
            <Route path="/auth" element={<Auth />}/>
            <Route path="/admin" element={<Admin />}/>
            <Route path="/network-security" element={<NetworkSecurity />} />
            
<Route path="/endpoint-security" element={<EndpointSecurity />} />
<Route path="/cloud-security" element={<CloudSecurity />} />
<Route path="/vapt" element={<VAPT />} />
<Route path="/app-security" element={<AppSecurity />} />
<Route path="/iam" element={<IAM />} />
<Route path="/grc" element={<GRC />} />
<Route path="/mssp" element={<MSSP />} />
<Route path="/human-risk" element={<HumanRisk />} />
<Route path="/vciso" element={<VCISO />} />
<Route path="/emerging-security" element={<EmergingSecurity />} />
<Route path="/software-engineering" element={<SoftwareEngineering />} />

          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </AuthProvider>);
}
