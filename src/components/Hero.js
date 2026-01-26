import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Linkedin, Mail, Github, Bold } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-8 px-6 bg-gradient-to-br from-white via-gray-50 to-emerald-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-2">
              <p className="text-emerald-600 dark:text-emerald-400 font-medium text-lg">
                Hi, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Jeffrey Hamlin Vinod
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium">
                Data Scientist & Software Engineer
              </h2>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              MSc Computer Science student at Trinity College Dublin, specializing in Data Science. 
              Building intelligent systems that solve real-world problems using machine learning, automation and data analytics with a 
              strong software development foundation. This personal portfolio of mine is still under development, Thank you for taking the time to look into this!
              
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/jeffrey-hamlin-vinod-cv.pdf';
                  link.download = 'Jeffrey_Hamlin_Vinod_CV.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
                onClick={scrollToAbout}
              >
                Learn More
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/jeffrey-hamlin-v"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:jeffreyvhamlin@gmail.com"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/Jeffrey-Hamlin-V"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_67334850-386f-4ef2-a00f-0ca11bbe13e9/artifacts/x37ahqbw_facc222a-4369-4f23-975a-4cd84a32ef1e.JPG"
                alt="Jeffrey Hamlin Vinod"
                className="relative w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;