// src/components/Skills.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaJava, FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaHtml5, FaCss3, FaLinux
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiC, SiSolidity, SiSpringboot, SiAndroidstudio,
  SiPostgresql, SiOracle, SiMongodb, SiAmazondynamodb, SiGooglecloud, SiJenkins,
  SiJira, SiKubernetes, SiFlask, SiSqlite, SiApachekafka, SiApachemaven, SiSonarqube,
  SiGooglepubsub, SiGooglebigquery, SiApache
} from 'react-icons/si';
import {
  Server, Database, CloudCog, BrainCircuit, Bot, Code2, Cpu, MessageSquare, Briefcase,
  Network, ShieldCheck, HardDrive, TestTube2, Recycle, BarChart3, Puzzle, Brain, BookOpen, 
  Lightbulb, Wifi, Library, Users, Activity, MousePointer
} from 'lucide-react';

const skillCategories = [
  {
    name: "Programming & Scripting",
    icon: <Code2 />,
    skills: [
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
      { name: 'Python', icon: <FaPython className="text-blue-400" /> },
      { name: 'C', icon: <SiC className="text-blue-600" /> },
      { name: 'Solidity', icon: <SiSolidity className="text-gray-400" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3 className="text-blue-600" /> },
    ]
  },
  {
    name: "Full Stack & Databases",
    icon: <Server />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'React Native', icon: <FaReact className="text-cyan-500" /> },
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
      { name: 'Android Studio', icon: <SiAndroidstudio className="text-green-400" /> },
      { name: 'Flask', icon: <SiFlask className="text-gray-300" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
      { name: 'Oracle', icon: <SiOracle className="text-red-600" /> },
      { name: 'SQLite', icon: <SiSqlite className="text-sky-600" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'DynamoDB', icon: <SiAmazondynamodb className="text-blue-500" /> },
      { name: 'BigQuery', icon: <SiGooglebigquery className="text-blue-400" /> },
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: <CloudCog />,
    skills: [
      { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
      { name: 'GCP', icon: <SiGooglecloud className="text-blue-400" /> },
      { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
      { name: 'CI/CD', icon: <SiJenkins className="text-gray-500" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-700" /> },
      { name: 'Jira', icon: <SiJira className="text-blue-600" /> },
      { name: 'Agile/SDLC', icon: <Recycle className="text-green-400" /> },
      { name: 'Software Testing', icon: <TestTube2 className="text-emerald-400" /> },
    ]
  },
  {
    name: "AI, ML & Data",
    icon: <BrainCircuit />,
    skills: [
      { name: 'Generative AI', icon: <Bot className="text-purple-400" /> },
      { name: 'LLMs', icon: <MessageSquare className="text-cyan-400" /> },
      { name: 'NLP', icon: <Lightbulb className="text-yellow-400" /> },
      { name: 'Machine Learning', icon: <Brain className="text-pink-400" /> },
      { name: 'Deep Learning', icon: <Cpu className="text-orange-500" /> },
      { name: 'SQL Querying', icon: <Database className="text-indigo-400" /> },
      { name: 'Data Analytics & Visualization', icon: <BarChart3 className="text-green-400" /> },
    ]
  },
  {
    name: "Tools & Technologies",
    icon: <Briefcase />,
    skills: [
      { name: 'Sonar', icon: <SiSonarqube className="text-yellow-500" /> },
      { name: 'JMeter', icon: <Activity className="text-red-500" /> },
      { name: 'Kafka', icon: <SiApachekafka className="text-black" /> },
      { name: 'Pub/Sub', icon: <SiGooglepubsub className="text-blue-500" /> },
      { name: 'Maven', icon: <SiApachemaven className="text-red-400" /> },
      { name: 'CRM Tools', icon: <Users className="text-cyan-400" /> },
      { name: 'Linux', icon: <FaLinux className="text-black" /> },
    ]
  },
  {
    name: "CS Core",
    icon: <BookOpen />,
    skills: [
      { name: 'Operating Systems', icon: <HardDrive className="text-gray-400" /> },
      { name: 'Data Structures & Algorithms', icon: <Puzzle className="text-blue-400" /> },
      { name: 'Computer Networking', icon: <Network className="text-purple-400" /> },
      { name: 'Distributed Systems', icon: <Server className="text-indigo-400" /> },
      { name: 'System Design & Architecture', icon: <Library className="text-orange-400" /> },
      { name: 'Software Security', icon: <ShieldCheck className="text-red-500" /> },
      { name: 'IoT', icon: <Wifi className="text-sky-400" /> },
    ]
  },
];

const SkillCard = ({ category, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    if (!isHovering) {
      setIsHovering(true);
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsFlipped(false);
  };

  const cardBaseStyle = {
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '16px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  };

  const cardHoverStyle = isHovering ? {
    borderColor: '#10b981',
    boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2), 0 0 30px rgba(16, 185, 129, 0.1)',
    transform: 'translateY(-8px) scale(1.02)',
  } : {};

  if (!category || !category.skills) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] 
      }}
      className="relative w-full h-[320px] group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
    >
      {/* Flip Animation Container */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full p-8 flex items-center justify-center flex-col"
          style={{
            ...cardBaseStyle,
            ...cardHoverStyle,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {/* Floating Icon Animation */}
          <motion.div 
            className="text-emerald-400 w-16 h-16 mb-6 relative"
            animate={isHovering ? { 
              scale: [1, 1.1, 1], 
              rotate: [0, 5, -5, 0] 
            } : { 
              y: [0, -4, 0] 
            }}
            transition={{
              duration: isHovering ? 0.6 : 2,
              repeat: isHovering ? 0 : Infinity,
              ease: "easeInOut"
            }}
          >
            {category.icon && React.cloneElement(category.icon, { size: '4rem' })}
            
            {/* Sparkle Effects */}
            {isHovering && (
              <>
                <motion.div
                  className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{ scale: [0, 1, 0], rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full"
                  animate={{ scale: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                />
              </>
            )}
          </motion.div>

          <h3 className="text-2xl font-bold text-center text-white mb-4">
            {category.name}
          </h3>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full p-6"
          style={{
            ...cardBaseStyle,
            ...cardHoverStyle,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-emerald-400 w-6 h-6">
              {category.icon && React.cloneElement(category.icon, { size: '1.5rem' })}
            </div>
            <h3 className="text-xl font-bold text-center text-white">
              {category.name}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center overflow-y-auto h-[calc(100%-4rem)] max-h-[240px] custom-scrollbar">
            {category.skills && category.skills.map((skill, skillIndex) => (
              <motion.div
                key={`${skill.name}-${skillIndex}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: skillIndex * 0.05,
                  ease: "easeOut"
                }}
                className="flex items-center gap-2 p-2.5 rounded-lg text-sm h-fit hover:scale-105 transition-transform duration-200"
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                }}
              >
                <div className="w-5 h-5 flex-shrink-0">
                  {skill.icon || <div className="w-5 h-5 bg-gray-400 rounded" />}
                </div>
                <span className="font-medium whitespace-nowrap text-gray-200">
                  {skill.name || 'Unknown Skill'}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div 
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 -z-10 ${
          isHovering ? 'opacity-20' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
    </motion.div>
  );
};

const Skills = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden min-h-screen"
      style={{
        backgroundColor: 'black',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            A comprehensive overview of my technical expertise across various domains of software development.
          </motion.p>
          
          {/* Single Interactive Hint - Clean UX */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-3 text-emerald-400 text-lg font-medium"
          >
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <MousePointer size={20} />
            </motion.div>
            <span>Hover over cards to explore skills</span>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={`${category.name}-${index}`} 
              category={category} 
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .custom-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
};

export default Skills;
