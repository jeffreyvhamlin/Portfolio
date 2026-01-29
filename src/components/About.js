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
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Hi, I'm Jeffrey Hamlin Vinod, an MSc Computer Science (Data Science) student at Trinity College Dublin with a passion for building scalable, data-driven solutions that solve real-world problems. 🚀
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 text-justify">
              I specialize in machine learning, data engineering and full-stack development 🧠 with hands-on experience designing end-to-end systems that bridge the gap between complex data and actionable insights. My expertise spans Python, SQL, machine learning frameworks (TensorFlow, PyTorch), data pipeline architecture and interactive visualization from concept to production deployment. What drives me is the intersection of technology and impact⚡
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 text-justify">
              I've built an AI-resistant CAPTCHA system achieving ~90% accuracy 🤖, optimized and deployed to edge devices (Raspberry Pi) under hardware constraints. I've engineered data platforms processing thousands of transactions to extract spending patterns and behavioral insights📊. I've developed real-time traffic prediction systems reducing congestion by 25%🚦 Each project reflects my commitment to not just solving technical challenges, but delivering systems that scale and matter.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 text-justify">
              Beyond code, I believe in building teams and communities👥 As Chair of the Sports Vertical at Yi Yuva REC, I've led 50+ community programs and inspired multi-team volunteers to drive social impact🌍 I bring this same collaborative mindset of blending technical rigor with clear communication and creative problem-solving to every project and team I join. I'm currently exploring opportunities to grow my career while staying connected to my roots and supporting my family back home🏠 I'm looking to contribute my expertise in ML, data engineering and software development to organizations building transformative products at scale.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 text-justify">
              When I'm not coding, you'll find me mentoring peers in competitive programming, playing football⚽ or exploring how technology can make a tangible difference in people's lives. Let's build something great together. ✨
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;