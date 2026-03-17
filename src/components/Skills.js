import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Brain, Workflow, Cloud, Server, Wrench } from 'lucide-react';
import { Card } from './ui/card';

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const node = sectionRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'Java', 'C', 'SQL', 'HTML5', 'CSS3']
    },
    {
      icon: Server,
      title: 'Frontend',
      skills: ['React', 'D3.js', 'Vanilla JS', 'Bootstrap', 'Responsive Design']
    },
    {
      icon: Database,
      title: 'Backend & Databases',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Authentication', 'PostgreSQL', 'SQLite']
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      skills: ['TensorFlow', 'Scikit-learn', 'PyTorch', 'NumPy', 'Pandas']
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: ['Vercel', 'Railway', 'Cloudinary', 'Multer', 'Git', 'GitHub', 'Linux/Unix']
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: ['UiPath Studio', 'UiPath Cloud', 'Power Automate', 'Power BI', 'Jupyter Notebooks', 'LaTeX']
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-emerald-200 dark:hover:border-emerald-800"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;