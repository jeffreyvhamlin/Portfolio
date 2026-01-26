import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Award, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
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

  const featuredProjects = [
    {
      title: 'Personal Finance Tracker',
      description: 'A full-stack personal finance analytics platform that ingests real-world bank transaction statements, classifies noisy transaction descriptions using NLP-based machine learning, detects spending anomalies, and generates interactive dashboards. Designed with a scalable backend, database persistence, and API-first architecture to support both single-file analysis and long-term financial insights.',
      tags: ['FastAPI','PostgreSQL','Machine Learning','NLP','System Design','Data Visualization','D3.js'],
      impact: ['88%+ Classification Accuracy','100× Faster Inference vs Tree Models','Multi-Month Financial Insights','Scalable API-First Architecture'],
      type: 'End-to-End Software Project',
      link: null,
      github: null
    },
    {
      title: 'EAFC 26 Footballers Rating Dashboard',
      description: 'Interactive data visualization dashboard analyzing metrics of 17,000+ football players including ratings, potential, and market value using D3.js.',
      tags: ['D3.js', 'Data Visualization', 'JavaScript', 'Data Analytics', 'Interactive Design'],
      impact: ['17,000+ Players Analyzed', 'Interactive Visualizations', 'Real-time Filtering'],
      type: 'Personal Project',
      link: 'https://jeffrey-hamlin-v.github.io/vinodauj-DataVisualization_Dashboard-EAFC26/',
      github: 'https://github.com/Jeffrey-Hamlin-V/vinodauj-DataVisualization_Dashboard-EAFC26'
    },
    {
      title: 'Scalable AI CAPTCHA Systems',
      description: 'Two-phase project: Phase 1 - CRNN-based CAPTCHA recognition on edge devices (Raspberry Pi). Phase 2 - Human-vs-AI CAPTCHA using behavioral and semantic scoring.',
      tags: ['CRNN', 'TensorFlow Lite', 'Edge Computing', 'Raspberry Pi', 'Behavioral Analysis'],
      impact: ['Edge Device Deployment', 'AI-Resistant Design', 'Behavioral Telemetry'],
      type: 'Academic Project',
      link: null,
      github: null
    }
  ];

  const otherProjects = [
    
    {
      title: 'Real-Time Traffic Prediction & Signaling System',
      description: 'AI-powered traffic management system using YOLOv8 and LSTM, achieving >90% detection accuracy and reducing traffic waiting time by ~25% through real-time adaptive signaling.',
      tags: ['YOLOv8', 'LSTM', 'Django', 'SUMO', 'Computer Vision', 'Deep Learning'],
      impact: ['90%+ Detection Accuracy', '25% Wait Time Reduction', 'Real-time Processing'],
      type: 'Final Year Project',
      link: null,
      github: null
    },
    {
      title: 'WhatsApp Message Automation',
      description: 'UiPath bot for sending personalized WhatsApp messages to multiple recipients from cloud queues, improving HR communication efficiency by 70%+.',
      tags: ['UiPath Studio', 'RPA', 'Automation', 'Cloud Queues'],
      impact: '70%+ Efficiency Gain'
    },
    {
      title: 'Sentiment Analysis for College Reviews',
      description: 'Analyzed placement-related reviews from Shiksha with automated sentiment classification and personalized response generation.',
      tags: ['NLP', 'Sentiment Analysis', 'Python', 'Text Classification'],
      impact: 'Enhanced Student Engagement'
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-12"></div>

          {/* Featured Projects */}
          <div className="space-y-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-emerald-200 dark:hover:border-emerald-800 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <Badge variant="outline" className="mb-3 border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400">
                      {project.type}
                    </Badge>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {(project.link || project.github) && (
                    <div className="flex gap-2">
                      {project.link && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-300 hover:border-emerald-600 hover:text-emerald-600 dark:border-gray-700 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  )}
                </div>

                {/* Impact Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.impact.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg"
                    >
                      <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-emerald-200 dark:hover:border-emerald-800"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {project.impact}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
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

export default Projects;