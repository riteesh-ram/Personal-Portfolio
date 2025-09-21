// src/components/Education.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, ChevronDown, Trophy } from "lucide-react";


// --- Data remains the same ---
const educationData = [
  {
    degree: "Master's in Advanced Computer Science",
    school: "University of Birmingham",
    location: "Birmingham, UK",
    period: "2024 - 2025",
    gpa: "Distinction",
    description: "Completed a research-led MSc in Advanced Computer Science, specialising in cutting-edge computing technologies, AI innovation, secure software design, and Generative AI–driven software development.",
    coursework: ["AI-Driven & Smart Software Development", "Secure Software Design & Cybersecurity Practices", "Scalable & Cloud-Based Systems", "Mobile & IoT Application Development", "User Experience & Interface Design", "Enterprise Networking & Connectivity Solutions"],
    positions: [
      { title: "Student Representative", department: "CS Department", period: "2024 - 2025", description: "Advocated for students by driving feedback-based improvements, collaborating with university leadership, and enhancing the academic experience through proactive initiatives." },
    ]
  },
  {
    degree: "Bachelor's in Computer Science",
    school: "BML Munjal University",
    location: "Gurgaon, India",
    period: "2018 - 2022",
    gpa: "8.1/10",
    description: "Completed Bachelor's in Computer Science & Engineering at BML Munjal University, combining solid theoretical foundations with hands-on expertise in AI, Data Structures & Algorithms, and Operating Systems to excel in tech industry and research roles.",
    coursework: ["AI & Machine Learning Solutions", "Data Analytics & Big Data Insights", "Cloud Architecture & Services", "Blockchain & Distributed Ledger Applications", "Full-Stack Web Development", "Mobile & Cross-Platform App Development", "Software Design & Development Practices", "Database Design & Management", "Networking & Connectivity Solutions", "Algorithms & Data Optimization"],
    positions: [
      { title: "Executive Committee Member", department: "The Strat-up and Entrepreneurship Club", period: "2019 - 2021", description: "Drove the club’s mission by organising entrepreneurial events, workshops, and competitions, while fostering mentorship, networking, and resources to cultivate a thriving startup ecosystem on campus." },
    ]
  }
];


const Education = () => {
  const [openIndex, setOpenIndex] = useState(0); // Keep the first item open by default


  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Educa<span className="text-gradient">tion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A strong academic foundation shaped by rigorous coursework and enriched through practical, hands-on experience.
          </p>
        </div>


        <div className="space-y-6 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              layout
              className="glass-effect rounded-lg overflow-hidden border border-primary/20 glow-hover"
              initial={{ borderRadius: 8 }}
            >
              <motion.div
                layout
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <h4 className="text-lg text-muted-foreground">{edu.school}</h4>
                  </div>
                </div>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                  <ChevronDown className="w-6 h-6 text-primary" />
                </motion.div>
              </motion.div>


              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-primary/20 pt-6 space-y-6">
                      
                      {/* --- Location, Timeline, and GPA Details --- */}
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary/70" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary/70" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-primary/70" />
                          <span className="font-medium">{edu.gpa}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground">{edu.description}</p>
                      
                      {/* --- Collapsible Details --- */}
                      <div>
                        <h5 className="font-semibold text-lg mb-3">Coursework</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <Badge key={i} variant="outline">{course}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-lg mb-3">University Positions</h5>
                        <div className="space-y-4">
                          {edu.positions.map((pos, i) => (
                            <div key={i} className="p-4 bg-primary/5 rounded-md">
                              <div className="flex justify-between items-center mb-1">
                                <h6 className="font-medium text-primary">{pos.title}</h6>
                                <span className="text-xs text-muted-foreground">{pos.period}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{pos.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Education;
