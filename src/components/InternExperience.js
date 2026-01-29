import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const workExperience = [
    {
      role: 'Frontend Developer Intern',
      company: 'Yi Chennai',
      location: 'Chennai, India',
      period: 'Aug 2023 - Oct 2023',
      description: 'Collaborated in a four-member team, taking primary responsibility for end-to-end frontend development and deployment of the Yi Yuva website.',
      achievements: [
        'Led frontend development for Yi Yuva website serving 500+ users',
        'Delivered fully responsive design with improved usability',
        'Acquired expertise in responsive web design, HTML, CSS, and Bootstrap',
        'Ensured smooth navigation and optimal user experience'
      ]
    }
  ];

  const workshops = [
    {
      title: 'Deep Learning Concepts Workshop',
      organization: 'University of Texas, Dallas',
      instructor: 'Dr. Richard K. Min',
      period: 'August 2024',
      description: 'Gained foundational knowledge in deep learning covering neural networks, backpropagation and model optimization.',
      achievements: [
        'Completed hands-on training using Iris and Fashion MNIST datasets',
        'Strengthened understanding of advanced ML concepts',
        'Applied practical deep learning techniques to real-world datasets'
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
            <div>
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
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                            <span className="text-emerald-600 dark:text-emerald-400 mr-2 mt-1">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
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