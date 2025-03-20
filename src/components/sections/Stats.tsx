
import React, { useEffect } from 'react';

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "—", label: "Completed Projects" },
  { value: "—", label: "Happy Clients" },
];

const Stats = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="py-16 bg-dark-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-card px-6 py-8 flex flex-col items-center justify-center reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-5xl font-bold mb-2 text-gradient">{stat.value}</span>
              <span className="text-white/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
