// src/components/Skills.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Lightbulb, Wifi, Library, Users, Activity
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

const SkillCard = ({ category }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

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
    borderRadius: '12px',
    transition: 'all 0.3s ease',
  };

  const cardHoverStyle = isHovering ? {
    borderColor: '#10b981',
    boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
    transform: 'translateY(-4px)',
  } : {};

  if (!category || !category.skills) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="relative w-full h-[320px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 w-full h-full p-6 flex items-center justify-center flex-col"
          style={{
            ...cardBaseStyle,
            ...cardHoverStyle,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <div className="text-emerald-400 w-12 h-12 mb-4">
            {category.icon && React.cloneElement(category.icon, { size: '3rem' })}
          </div>
          <h3 className="text-2xl font-bold text-center text-white">{category.name}</h3>
        </div>

        {/* Back */}
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
          <h3 className="text-xl font-bold mb-4 text-center text-white">{category.name}</h3>
          <div className="flex flex-wrap gap-3 justify-center overflow-y-auto h-[calc(100%-3rem)] max-h-[240px]">
            {category.skills && category.skills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center gap-2 p-2 rounded-lg text-sm h-fit"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const gradientText = {
    background: 'linear-gradient(135deg, #10b981, #34d399)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden min-h-screen"
      style={{
        backgroundColor: '#0f172a',
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52, 211, 153, 0.1) 0%, transparent 50%)',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={`${category.name}-${index}`} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
