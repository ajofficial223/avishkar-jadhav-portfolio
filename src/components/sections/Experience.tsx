import React, { useEffect } from 'react';

const experiences = [
  {
    title: "Freelance Graphic Designer",
    organization: "Samyak Sanskrit Classes",
    period: "2022 - Present",
    description: "Created brand identity including logo design that represents the organization's values and educational focus."
  },
  {
    title: "Personal Project",
    organization: "Social Media Campaign Design",
    period: "2021 - 2022",
    description: "Developed visual storytelling, maintained brand consistency, and created eye-catching posts for various social media platforms."
  }
];

const education = [
  {
    degree: "12th Grade (Science)",
    institution: "M.S.G College, Nashik",
    period: "2019 - 2021",
    description: "Focused on academic excellence while developing interest in design and visual communication."
  },
  {
    degree: "Self-taught Graphic Designer",
    institution: "Online Courses & YouTube Tutorials",
    period: "2020 - Present",
    description: "Continuously improving design skills through self-directed learning, online courses, and practical application."
  }
];

const Experience = () => {
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
    <section id="experience" className="py-20 bg-dark-500">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-dark-300 border border-neon-purple/20 text-white/80 text-sm mb-4">
            My Journey
          </span>
          <h2 className="section-title mx-auto">Experience & Education</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-3 h-3 rounded-full bg-neon-purple mr-3"></span>
              Professional Experience
            </h3>
            
            <div className="relative pl-8 border-l border-neon-purple/30 space-y-12">
              {experiences.map((item, index) => (
                <div 
                  key={index} 
                  className="relative"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute -left-[41px] w-6 h-6 rounded-full border-4 border-dark-400 bg-neon-purple"></div>
                  <div className="glass-card p-6 ml-4">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-neon-purple/10 text-neon-purple mb-4">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-white/70 mb-4">{item.organization}</p>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-3 h-3 rounded-full bg-neon-blue mr-3"></span>
              Education
            </h3>
            
            <div className="relative pl-8 border-l border-neon-blue/30 space-y-12">
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="relative"
                  style={{ transitionDelay: `${index * 200 + 400}ms` }}
                >
                  <div className="absolute -left-[41px] w-6 h-6 rounded-full border-4 border-dark-400 bg-neon-blue"></div>
                  <div className="glass-card p-6 ml-4">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-neon-blue/10 text-neon-blue mb-4">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold mb-1">{item.degree}</h4>
                    <p className="text-white/70 mb-4">{item.institution}</p>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
