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

  return (
    <section id="about" ref={sectionRef} className="py-16 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-12"></div>

          <Card className="p-8 bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-800 dark:to-emerald-900/10 border-2 mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              I'm Jeffrey Hamlin Vinod, an MSc Computer Science (Data Science) candidate at Trinity College Dublin. I build end-to-end systems — from data pipelines and REST APIs to interactive dashboards — with a focus on clean, maintainable code that ships to production.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 text-justify">
              My dissertation explores reinforcement learning agent convergence. Alongside that, I designed and deployed Ananda Stores — a full-stack B2B e-commerce platform — solo, from client requirements to live deployment on Vercel and Railway.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 text-justify">
              I care about writing clean code, building well-structured REST APIs, and creating D3.js dashboards that turn raw data into decisions. Whether it's a machine learning pipeline or a frontend feature, I aim for clarity and correctness over cleverness.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 text-justify">
              Outside of engineering, I led 50+ community events as Chair of the Sports Vertical at Yi Yuva REC — coordinating volunteers, managing logistics, and driving social impact across placement guidance, fundraisers, and awareness campaigns.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 text-justify">
              I'm actively seeking graduate software engineering or data science roles in Dublin, where I can contribute to products that matter while continuing to grow as an engineer.
            </p>
          </Card>

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
                  <p className="text-gray-500 dark:text-gray-500 text-xs">2025 - Present</p>
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
                  <span>MSc TCD - on track for First Class Honours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>Shipped Ananda Stores - full-stack B2B platform, solo end-to-end</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>Completed NeetCode 75</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>Frontend Developer Intern - Yi Chennai</span>
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
                  <span>Systems Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>Competitive Programming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>Fitness Technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                  <span>Open Source & Side Projects</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;