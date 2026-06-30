import { useEffect, useRef, useState } from 'react';
const stats = [
    { value: 192, suffix: '+', label: 'Security Services', description: 'Across 12 domains' },
    { value: 12, suffix: '', label: 'Security Domains', description: 'End-to-end coverage' },
    { value: 24, suffix: 'x7', label: 'SOC Coverage', description: 'Round the clock' },
    { value: 4, suffix: 'hr', label: 'Response SLA', description: 'Guaranteed time' },
];
function useCountUp(target, duration = 2000, started = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!started)
            return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            }
            else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, started]);
    return count;
}
function StatItem({ value, suffix, label, description, started }) {
    const count = useCountUp(value, 1500, started);
    return (<div className="text-center group">
      <div className="text-4xl lg:text-5xl font-bold mb-1">
        <span className="text-white">{count}</span>
        <span className="text-[#00ff99]">{suffix}</span>
      </div>
      <div className="text-sm font-semibold text-white mb-0.5">{label}</div>
      <div className="text-xs text-gray-600">{description}</div>
    </div>);
}
export default function Stats() {
    const ref = useRef(null);
    const [started, setStarted] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting)
                setStarted(true);
        }, { threshold: 0.3 });
        if (ref.current)
            observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return (<div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {stats.map((s) => (<StatItem key={s.label} {...s} started={started}/>))}
    </div>);
}
