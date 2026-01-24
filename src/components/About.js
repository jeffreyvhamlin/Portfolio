import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Heart } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-emerald-200 dark:hover:border-emerald-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">MSc Computer Science - Data Science</p>
                  <p className="text-gray-600 dark:text-gray-400">Trinity College Dublin</p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs">2025 - 2026</p>
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <p className="font-semibold text-gray-900 dark:text-white">B.E. Computer Science</p>
                  <p className="text-gray-600 dark:text-gray-400">Rajalakshmi Engineering College</p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs">2021 - 2025</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-emerald-200 dark:hover:border-emerald-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Achievements</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>90%+ accuracy in Traffic AI system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>25% reduction in traffic wait time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>70%+ efficiency gain in automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>Led 150+ member team at Recharge Fest</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-emerald-200 dark:hover:border-emerald-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Heart className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Interests</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>Machine Learning & AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>Data Visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>Community Leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>Football (Galloping Stallions)</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-800 dark:to-emerald-900/10 border-2">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am an MSc Computer Science (Data Science) student at <span className="font-semibold text-emerald-600 dark:text-emerald-400">Trinity College Dublin</span> with hands-on experience in data analytics, automation, machine learning and applied AI supported by a solid foundation in software development. I am a curious and quick learner who thrives in collaborative environments, adapting easily to new challenges through clear communication and teamwork.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              I have built practical, data-driven solutions using <span className="font-semibold text-emerald-600 dark:text-emerald-400">Python, Power BI and UiPath Studio</span>, applying analytical thinking and structured problem-solving to real-world use cases. Beyond technical skills, I value giving back to the community and bring a collaborative, reliable and people-oriented approach shaped through extensive volunteering and leadership experiences.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;