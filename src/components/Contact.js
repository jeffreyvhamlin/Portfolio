import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:jeffreyvhamlin@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening your email client...",
      description: "Please send the message from your email app to complete.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jeffreyvhamlin@gmail.com',
      link: 'mailto:jeffreyvhamlin@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+353 089 440 9273',
      link: 'tel:+353894409273'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dublin, Ireland',
      link: null
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-emerald-400/[0.07] dark:bg-emerald-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities in Software Engineering and Analytics.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="max-w-5xl mx-auto">
            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-emerald-200 dark:hover:border-emerald-800 flex flex-col items-center text-center dark:bg-gray-800/50">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mb-4">
                      <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-900 dark:text-white font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/jeffrey-hamlin-v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/Jeffrey-Hamlin-V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;