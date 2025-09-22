// src/components/Education.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, ChevronDown, Trophy, BookOpen, Users, Award, Star } from "lucide-react";

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
      { title: "Executive Committee Member", department: "The Strat-up and Entrepreneurship Club", period: "2019 - 2021", description: "Drove the club's mission by organising entrepreneurial events, workshops, and competitions, while fostering mentorship, networking, and resources to cultivate a thriving startup ecosystem on campus." },
    ]
  }
];

const Education = () => {
  const [openIndex, setOpenIndex] = useState(0); // Keep the first item open by default
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
  <section id="education" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'black' }}>
      {/* Background Enhancement */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Educa<span className="text-gradient">tion</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A strong academic foundation shaped by rigorous coursework and enriched through practical, hands-on experience.
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              layout
              className={`glass-effect rounded-xl overflow-hidden border-2 transition-all duration-500 relative group ${
                hoveredCard === index 
                  ? 'border-primary/40 shadow-2xl shadow-primary/20' 
                  : openIndex === index 
                    ? 'border-primary/30 shadow-lg shadow-primary/10' 
                    : 'border-primary/20 hover:border-primary/30'
              }`}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.01 }}
            >
              {/* Animated Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-xl opacity-0 transition-opacity duration-500 ${
                hoveredCard === index ? 'opacity-100' : ''
              }`} />
              
              {/* Header Section */}
              <motion.div
                layout
                className="flex justify-between items-center p-6 cursor-pointer relative z-10"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Enhanced Icon with Animation */}
                  <motion.div 
                    className="bg-gradient-to-br from-primary/20 to-secondary/20 p-4 rounded-xl relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GraduationCap className="w-7 h-7 text-primary" />
                    {hoveredCard === index && (
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl md:text-2xl font-bold text-foreground mb-1"
                      whileHover={{ color: 'rgb(16, 185, 129)' }}
                      transition={{ duration: 0.2 }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <h4 className="text-lg text-muted-foreground font-medium">{edu.school}</h4>
                  </div>

                  {/* Achievement Badge */}
                  <motion.div
                    className="hidden md:flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{edu.gpa}</span>
                  </motion.div>
                </div>
                
                <motion.div 
                  animate={{ 
                    rotate: openIndex === index ? 180 : 0,
                    scale: hoveredCard === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-primary" />
                </motion.div>
              </motion.div>

              {/* Expanded Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="px-6 pb-6 relative z-10"
                  >
                    <div className="border-t border-primary/20 pt-6 space-y-6">
                      
                      {/* Enhanced Details Section with Better Contrast */}
                      <motion.div 
                        className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <motion.div 
                          className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-2 rounded-full"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.15)' }}
                        >
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="font-medium text-foreground">{edu.location}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-2 rounded-full"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.15)' }}
                        >
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="font-medium text-foreground">{edu.period}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-2 bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/30 px-3 py-2 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Trophy className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-primary">{edu.gpa}</span>
                        </motion.div>
                      </motion.div>

                      <motion.p 
                        className="text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {edu.description}
                      </motion.p>
                      
                      {/* Enhanced Coursework Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen className="w-5 h-5 text-primary" />
                          <h5 className="font-semibold text-lg">Key Coursework</h5>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + (i * 0.05) }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="hover:bg-primary/10 hover:border-primary/50 transition-colors duration-200 cursor-default"
                              >
                                {course}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      
                      {/* Enhanced Positions Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <Users className="w-5 h-5 text-primary" />
                          <h5 className="font-semibold text-lg">Leadership & Involvement</h5>
                        </div>
                        <div className="space-y-4">
                          {edu.positions.map((pos, i) => (
                            <motion.div 
                              key={i} 
                              className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + (i * 0.1) }}
                              whileHover={{ 
                                scale: 1.02, 
                                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.1)' 
                              }}
                            >
                              <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-2">
                                  <Star className="w-4 h-4 text-primary" />
                                  <h6 className="font-semibold text-primary">{pos.title}</h6>
                                </div>
                                <span className="text-xs text-foreground bg-primary/15 border border-primary/20 px-2 py-1 rounded font-medium">
                                  {pos.period}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {pos.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
