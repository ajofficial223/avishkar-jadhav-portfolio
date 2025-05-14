
import React, { useEffect } from 'react';
import { Bot, Webflow } from 'lucide-react';

const skills = [
  { 
    name: "Adobe Photoshop", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
    level: 90
  },
  { 
    name: "Adobe Illustrator", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png",
    level: 85
  },
  { 
    name: "Canva", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/1200px-Canva_icon_2021.svg.png",
    level: 95
  },
  { 
    name: "Figma", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png",
    level: 80
  },
  { 
    name: "AI-Powered Visuals", 
    icon: "https://cdn-icons-png.flaticon.com/512/8649/8649595.png",
    level: 85
  },
  { 
    name: "AI Agent Development", 
    isLucideIcon: true,
    iconComponent: Bot,
    level: 82
  },
  { 
    name: "Webflow", 
    isLucideIcon: true,
    iconComponent: Webflow,
    level: 88
  }
];

const Skills = () => {
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
    <section id="skills" className="py-20 bg-dark-400">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-dark-300 border border-neon-purple/20 text-white/80 text-sm mb-4">
            Expertise
          </span>
          <h2 className="section-title mx-auto">My Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover-glow reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-300 p-2 mr-4">
                  {skill.isLucideIcon ? (
                    <skill.iconComponent className="w-8 h-8" />
                  ) : (
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-8 h-8 object-contain"
                    />
                  )}
                </div>
                <h3 className="text-xl font-medium">{skill.name}</h3>
              </div>
              
              <div className="w-full bg-dark-300 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-purple-blue rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%`, transitionDelay: `${index * 100 + 300}ms` }}
                ></div>
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-white/60 text-sm">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
