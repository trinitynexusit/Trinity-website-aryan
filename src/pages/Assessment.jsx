import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Loader2,
  Building2,
  Mail,
  User,
  MessageSquare,
  Phone,
} from 'lucide-react';

const domainOptions = [
  'Network Security',
  'Cloud Security',
  'Application Security',
  'Identity & Access Management',
  'Endpoint Security',
  'Compliance & Risk',
  'VAPT',
  'Incident Response',
  'Other',
];

export default function Assessment() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    size: '',
    domains: [],
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.company.trim()) e.company = 'Company is required';
    if (!form.message.trim()) e.message = 'Please describe your needs';
    return e;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const toggleDomain = (domain) => {
    setForm((prev) => ({
      ...prev,
      domains: prev.domains.includes(domain)
        ? prev.domains.filter((d) => d !== domain)
        : [...prev.domains, domain],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 flex items-center justify-center mx-auto mb-6 animate-[pulse_2s_ease-in-out_infinite]">
            <CheckCircle2 size={36} className="text-[#06b6d4]" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Request Received</h1>
          <p className="text-gray-400 leading-relaxed mb-6">
            Thank you, <strong className="text-white">{form.name}</strong>. Our security consultants
            will review your submission and contact you within{' '}
            <strong className="text-[#06b6d4]">4 business hours</strong> to schedule your free
            risk assessment.
          </p>
          <div className="p-4 rounded-xl border border-white/8 bg-white/[0.02] text-left mb-8">
            <div className="space-y-2.5">
              {[
                { label: 'Name', value: form.name },
                { label: 'Email', value: form.email },
                { label: 'Company', value: form.company },
                { label: 'Areas of concern', value: form.domains.join(', ') || 'Not specified' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-sm">
                  <span className="text-gray-600">{row.label}</span>
                  <span className="text-gray-300 text-right max-w-xs">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#06b6d4] text-[#0f172a] font-semibold rounded-lg hover:bg-[#06b6d4]/90 transition-all"
          >
            Return to Homepage <ChevronRight size={15} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f172a] text-white pt-24 pb-20">
      {/* Background */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#06b6d4]/20 bg-[#06b6d4]/5 text-[#06b6d4] text-xs font-mono mb-6">
            <Shield size={11} />
            FREE — NO COMMITMENT
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Free Risk Assessment
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tell us about your organisation and areas of concern. Our senior consultants will
            deliver a personalised risk briefing within 48 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* What you get */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">
              What you receive
            </h3>
            {[
              { title: 'Threat Profile', desc: 'Industry-specific threat landscape relevant to your organisation.' },
              { title: 'Top 5 Risk Areas', desc: 'Prioritised exposure areas based on your profile.' },
              { title: 'Quick Wins', desc: 'Immediate actions you can take before formal engagement.' },
              { title: 'Service Recommendation', desc: 'Tailored recommendations from our 192-service catalogue.' },
              { title: 'No Sales Pressure', desc: 'Honest advisory with zero obligation to proceed.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-white/8 bg-white/[0.02]">
                <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/25 flex items-center justify-center">
                  <CheckCircle2 size={11} className="text-[#06b6d4]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{item.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-white/8 bg-white/[0.02] space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  icon={User}
                  label="Full Name"
                  placeholder="Jane Smith"
                  value={form.name}
                  error={errors.name}
                  onChange={(v) => handleChange('name', v)}
                />
                <Field
                  icon={Mail}
                  label="Work Email"
                  type="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  error={errors.email}
                  onChange={(v) => handleChange('email', v)}
                />
                <Field
                  icon={Building2}
                  label="Company"
                  placeholder="Acme Corp"
                  value={form.company}
                  error={errors.company}
                  onChange={(v) => handleChange('company', v)}
                />
                <Field
                  icon={Phone}
                  label="Phone (optional)"
                  type="tel"
                  placeholder="+44 7700 900000"
                  value={form.phone}
                  onChange={(v) => handleChange('phone', v)}
                />
              </div>

              {/* Company size */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2.5">
                  Organisation Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {['1–50', '51–250', '251–1000', '1000+'].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => handleChange('size', sz)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${form.size === sz
                        ? 'border-[#06b6d4]/40 bg-[#06b6d4]/10 text-[#06b6d4]'
                        : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                        }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Domains of concern */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2.5">
                  Areas of Concern (select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {domainOptions.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => toggleDomain(d)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${form.domains.includes(d)
                        ? 'border-[#06b6d4]/40 bg-[#06b6d4]/10 text-[#06b6d4]'
                        : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                        }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2.5">
                  <span className="flex items-center gap-1.5">
                    <MessageSquare size={11} />
                    Describe Your Needs
                  </span>
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us about your current security challenges, recent incidents, upcoming compliance requirements, or anything else relevant..."
                  className={`w-full bg-white/[0.04] border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#06b6d4]/40 focus:bg-[#06b6d4]/[0.03] transition-all resize-none ${errors.message ? 'border-red-500/50' : 'border-white/10'
                    }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={11} /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#06b6d4] text-[#0f172a] font-bold rounded-lg hover:bg-[#06b6d4]/90 transition-all hover:shadow-lg hover:shadow-[#06b6d4]/20 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Request Free Assessment
                    <ChevronRight size={16} />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-600 text-center">
                By submitting, you agree to our{' '}
                <a href="#" className="text-gray-500 hover:text-gray-400 underline">
                  Privacy Policy
                </a>
                . We will never sell your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

function Field({ icon: Icon, label, type = 'text', placeholder, value, error, onChange }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        <span className="flex items-center gap-1.5">
          <Icon size={11} />
          {label}
        </span>
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-white/[0.04] border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#06b6d4]/40 focus:bg-[#06b6d4]/[0.03] transition-all ${error ? 'border-red-500/50' : 'border-white/10'
          }`}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  );
}
