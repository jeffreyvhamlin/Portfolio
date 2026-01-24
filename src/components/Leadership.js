import React, { useEffect, useRef, useState } from 'react';
import { Users, Award } from 'lucide-react';
import { Card } from './ui/card';

const Leadership = () => {
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

  const leadership = [
    {
      role: 'Chair - Sports Vertical',
      organization: 'Yi Yuva REC',
      period: '2025',
      progression: 'Human Resource team member (2022) → Chair (2025)',
      description: 'Demonstrated leadership, team-management and communication skills through organizing community-focused initiatives.',
      achievements: [
        'Organized and executed 50+ community-focused events',
        'Coordinated volunteers and managed logistics for large-scale initiatives',
        'Maintained commitment to diversity and inclusion',
        'Events: placement guidance, autism-awareness, fundraisers, animal welfare'
      ]
    },
    {
      role: 'Core Leadership Role',
      organization: 'Recharge - National Intercollegiate Cultural Fest',
      period: '2025',
      progression: 'Content Team (2023) → Promotions & Sponsor (2024) → Core Leadership (2025)',
      description: 'Demonstrated strategic planning, decision-making and organizational abilities for large-scale cultural initiatives.',
      achievements: [
        'Led and coordinated a 150+ member crew',
        'Managed event promotion and created engaging social media content',
        'Prepared celebrity bytes and handled sponsor contracts',
        'Fostered teamwork, communication, and seamless event execution'
      ]
    },
    {
      role: 'Member & Football Player',
      organization: 'VDP Trinity College Dublin',
      period: '2025 - Present',
      description: "Member of Trinity Vincent de Paul (VDP), Ireland's largest student charity and player for its social football club - Galloping Stallions.",
      achievements: [
        'Active member of largest student charity in Ireland',
        'Balances academics, community engagement, and sporting passion',
        'Contributes to community service initiatives'
      ]
    }
  ];

  return (
    <section id="leadership" ref={sectionRef} className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Leadership & Volunteering
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-12"></div>

          <div className="space-y-6">
            {leadership.map((exp, index) => (
              <Card key={index} className="p-6 border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                      {exp.organization}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {exp.period}
                    </p>
                    {exp.progression && (
                      <div className="mb-3 p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                        <p className="text-sm text-emerald-700 dark:text-emerald-300">
                          <Award className="h-4 w-4 inline mr-1" />
                          <strong>Progression:</strong> {exp.progression}
                        </p>
                      </div>
                    )}
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
    </section>
  );
};

export default Leadership;