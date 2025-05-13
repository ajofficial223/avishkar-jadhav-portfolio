import React, { useEffect } from 'react';

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

  const stats = [
    { value: '5+', label: 'Years of Experience' },
    { value: '100+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' }
  ];

  return (
    <section className="py-20 bg-dark-400">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-card p-8 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl font-bold mb-2 text-gradient">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
