import React, { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Certifications = () => {
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

  const certifications = [
    {
      title: 'Deep Learning Concepts Workshop',
      issuer: 'University of Texas, Dallas',
      description: 'Hands‑on workshop covering core deep learning concepts, including neural network architectures, backpropagation, regularization, and optimization techniques for computer vision and predictive modeling tasks. Emphasized practical implementation using modern deep learning frameworks and best practices for evaluating and tuning models.',
      credentialUrl: null, // Add your credential URL here
      skills: ['CNN', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'Entrepreneurship',
      issuer: 'NPTEL',
      description: 'Certification focused on the foundations of entrepreneurship, covering opportunity identification, market analysis, business model design and basics of startup finance and growth strategy. Included case‑based assignments on validating ideas, designing value propositions and preparing basic business plans.',
      credentialUrl: null, // Add your credential URL here
    },
    {
      title: 'Automation Explorer Training',
      issuer: 'UiPath',
      date: 'July 2024',
      description: 'Training program introducing end‑to‑end automation development on the UiPath Studio, from building the first automation to handling variables, arguments, control flow and Excel/UI automation. Covered designing robust workflows, orchestrating robots and applying RPA to real‑world business processes',
      credentialUrl: null, // Add your credential URL here
      skills: ['RPA', 'UiPath Studio']
    },
    {
      title: 'Control Flow in Studio',
      issuer: 'UiPath',
      date: 'July 2024',
      description: 'Focused module on control flow in UiPath Studio, covering the design of logical execution paths using sequences, flowcharts and state machines. Trained to implement robust decision‑making, loops, and exception‑aware flows to build maintainable and scalable automations.',
      credentialUrl: null, // Add your credential URL here
      skills: ['UiPath Studio', 'Control Flow']
    },
    // Add more certifications as needed
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-emerald-200 dark:hover:border-emerald-800"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.date}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>

                {/* Skills */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="flex items-center gap-1 px-3 py-1 text-xs bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full"
                        >
                          <CheckCircle className="h-3 w-3" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Credential Link */}
                {cert.credentialUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
                    onClick={() => window.open(cert.credentialUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Credential
                  </Button>
                )}
              </Card>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default Certifications;