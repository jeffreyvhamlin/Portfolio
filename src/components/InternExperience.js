import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const InternExperience = () => {
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

  const workExperience = [
    {
      role: 'Freelance Web Developer',
      company: 'Ananda Stores',
      location: 'Independent',
      period: 'Feb 2026 - Present',
      link: 'https://ananda-stores.vercel.app/',
      github: 'https://github.com/Jeffrey-Hamlin-V/Ananda-Stores',
      description: 'Designed and delivered a full-stack B2B e-commerce platform for a wholesale business — a bilingual (English/Tamil) product catalogue built end-to-end from client requirements to live deployment.',
      achievements: [
        'Built a bilingual (English/Tamil) product catalogue using Vanilla JS, HTML5/CSS3, deployed to Vercel with Edge caching for optimised Core Web Vitals',
        'Engineered a Node.js/Express backend with PostgreSQL, implementing JWT-based stateless authentication, bcrypt password hashing and role-based access control restricting destructive operations to admin accounts',
        'Integrated Cloudinary via Multer for direct image uploads, built real-time inventory analytics and deployed the full stack across Vercel (frontend) and Railway (API + PostgreSQL)'
      ]
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Yi Chennai',
      location: 'Chennai, India',
      period: 'Aug 2023 - Oct 2023',
      link: 'https://sam-verse.github.io/YUVA/',
      github: 'https://github.com/Jeffrey-Hamlin-V/YuvaRec',
      description: 'Collaborated in a four-member team, taking primary responsibility for end-to-end frontend development and deployment of the Yi Yuva website.',
      achievements: [
        'Led frontend development for Yi Yuva website serving 500+ users',
        'Delivered fully responsive design with improved usability',
        'Acquired expertise in responsive web design, HTML, CSS, and Bootstrap',
        'Ensured smooth navigation and optimal user experience'
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Intern Experience
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-12"></div>

          <div className="space-y-8">
            {/* Work Experience */}
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <Card key={index} className="p-6 border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <Briefcase className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {exp.location} • {exp.period}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                            <span className="text-emerald-600 dark:text-emerald-400 mr-2 mt-1">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      {(exp.link || exp.github) && (
                        <div className="flex gap-2">
                          {exp.link && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
                              onClick={() => window.open(exp.link, '_blank')}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </Button>
                          )}
                          {exp.github && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-300 hover:border-emerald-600 hover:text-emerald-600 dark:border-gray-700 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                              onClick={() => window.open(exp.github, '_blank')}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default InternExperience;