// src/components/Experience.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Link as LinkIcon, 
  Star, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Building2, 
  Briefcase,
  Code2,
  Trophy,
  ChevronDown
} from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Little Birdie",
    companyUrl: "https://www.littlebirdie.co.uk/",
    location: "Remote, United Kingdom",
    period: "Jul 2025 - Present",
    type: "Part-time",
    description: "Little Birdie is a UK fintech platform that helps consumers save on subscriptions and empowers businesses to boost engagement through smart payment management.",
    achievements: [
      "Built ‘Smart Suggest’, an API-driven recommendation engine providing personalised, cost-saving subscription options and increasing user engagement.",
      "Led UI/UX enhancements, marketing automation, and push notifications, boosting user engagement and retention by 30%."
    ],
    technologies: ["React Native", "TypeScript", "JavaScript", "AWS Services", "Server-less Architecture", "GraphQL", "Firebase", "iOS", "Agile", "AI/ML", "CI/CD", "Docker", "Kubernetes", "Attlassian Suite"]
  },
  {
    title: "Software Engineer",
    company: "Hughes Systique Corporation",
    companyUrl: "https://www.hsc.com/",
    location: "Bengaluru, India",
    period: "July 2022 - Aug 2024",
    type: "Full-time",
    description: "Contributed to Hughes Systique Corporation’s JUPITER™ System, a flagship satellite internet platform delivering high-performance, scalable connectivity solutions globally.",
    achievements: [
      "Streamlined transaction logging for 7+ microservices and 3 legacy systems with BigQuery, cutting debugging time by 60%.",
      "Developed a Spring microservice with API integration, enabling multi-SIM LTE support.",
      "Migrated 100+ database tables and procedures from Oracle to PostgreSQL, enhancing reliability and stability.",
      "Redesigned UI/UX and managed access tokens, boosting system speed by 20%.",
      "Implemented Node.js monitors with scheduled retries, improving automated request processing.",
      "Executed unit, integration, and API testing via CI/CD pipelines, delivering bug-free releases.",
      "Resolved critical production issues, reducing downtime by 40% and strengthening platform stability."
    ],
    technologies: ["Java", "JavaScript", "SpringBoot", "Node.js", "Angular", "PostgreSQL", "Oracle", "MongoDB", "Google Cloud Platform", "Web APIs", "REST", "Jest", "Junit", "Agile", "CI/CD", "Docker", "Kubernetes", "Attlassian Suite"]
  },
  {
    title: "Graduate Trainee Engineer",
    company: "Hughes Systique Corporation",
    companyUrl: "https://www.hsc.com/",
    location: "Gurgaon, India",
    period: "Jan 2022 - June 2022",
    type: "Full-time",
    description: "Graduated from Hughes Systique’s Trainee program, mastering SDLC, advanced technologies, and mentorship to deliver impactful software solutions.",
    achievements: [
      "Mastered MERN stack and CI/CD pipelines through intensive hands-on training.",
      "Built a secure Visitor Management System with API integration to track office movements.",
      "Developed a 7-page Node.js/React e-commerce demo, applying full SDLC for end-to-end functionality."
    ],
    technologies: ["MongoDB", "Express.js", "Node.js", "React", "JavaScript", "Web APIs", "REST"]
  },
  {
    title: "Summer Intern - AI & Web Development",
    company: "Rann Lab Technologies",
    companyUrl: "https://rannlab.com/",
    location: "Noida, India",
    period: "May 2020 - June 2020",
    type: "Internship",
    description: "Rannlab Technologies delivers custom software, web/mobile apps, and AI- and Blockchain-powered solutions to drive digital transformation and business growth.",
    achievements: [
      "Developed a WhatsApp chatbot with a deep learning model, achieving 90% intent recognition and reducing customer response time by 40%."
    ],
    technologies: ["Python", "Flask", "SQLite", "Deep Learning", "Natural Language Processing", "Machine Learning"]
  }
];

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
  <section id="experience" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'black' }}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/8 rounded-full blur-3xl opacity-30"></div>
      
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
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From internships to experienced roles, I have consistently advanced in software development, driven by innovation, technical excellence, and tangible impact.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto md:grid md:grid-cols-4 md:gap-12">
          {/* Enhanced Tabs for Desktop */}
          <motion.div 
            className="hidden md:block col-span-1 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Enhanced Active Indicator */}
            <motion.div
              className="absolute left-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full transition-all duration-500 ease-out shadow-lg shadow-primary/50"
              style={{ 
                height: '4rem',
                top: `${selectedIndex * 5.5 + 0.5}rem`,
              }}
              layoutId="activeTab"
            />
            
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.button
                  key={index}
                  variants={tabVariants}
                  onClick={() => setSelectedIndex(index)}
                  onHoverStart={() => setHoveredTab(index)}
                  onHoverEnd={() => setHoveredTab(null)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 h-20 flex flex-col justify-center relative group ${
                    selectedIndex === index
                      ? 'bg-gradient-to-r from-primary/15 to-secondary/10 border border-primary/30'
                      : 'hover:bg-primary/8 border border-transparent hover:border-primary/20'
                  }`}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Enhanced Company Name and Period */}
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className={`w-4 h-4 ${selectedIndex === index ? 'text-primary' : 'text-muted-foreground'}`} />
                    <p className={`font-bold text-base ${selectedIndex === index ? 'text-primary' : 'text-foreground'} truncate`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">{exp.period}</p>
                  </div>
                  
                  {/* Hover Effect */}
                  {hoveredTab === index && selectedIndex !== index && (
                    <motion.div
                      className="absolute inset-0 bg-primary/5 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Content Panel for Desktop */}
          <div className="hidden md:block md:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <Card className="glass-effect glow-hover border-2 border-primary/20 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                  
                  <CardContent className="p-8">
                    {/* Enhanced Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <motion.h3 
                            className="text-2xl font-bold mb-2 text-foreground"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            {experiences[selectedIndex].title}
                          </motion.h3>
                          
                          {/* Enhanced Company and Location Info */}
                          <motion.div 
                            className="flex flex-wrap items-center gap-4 text-sm mb-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <motion.div 
                              className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full"
                              whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.15)' }}
                            >
                              <Building2 className="w-4 h-4 text-primary" />
                              <a
                                href={experiences[selectedIndex].companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                              >
                                {experiences[selectedIndex].company}
                                <LinkIcon className="w-3 h-3" />
                              </a>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full"
                              whileHover={{ scale: 1.05 }}
                            >
                              <MapPin className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground">{experiences[selectedIndex].location}</span>
                            </motion.div>

                            <motion.div 
                              className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Calendar className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground">{experiences[selectedIndex].period}</span>
                            </motion.div>
                          </motion.div>
                        </div>

                        {/* Type Badge */}
                        <motion.div
                          className="bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/30 px-3 py-1 rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <span className="text-sm font-medium text-primary flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            {experiences[selectedIndex].type}
                          </span>
                        </motion.div>
                      </div>
                    </div>

                    <motion.p 
                      className="text-muted-foreground mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {experiences[selectedIndex].description}
                    </motion.p>

                    {/* Enhanced Achievements Section */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Trophy className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-primary text-lg">Key Achievements</h4>
                      </div>
                      <div className="space-y-3">
                        {experiences[selectedIndex].achievements.map((ach, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-200"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + (i * 0.1) }}
                            whileHover={{ scale: 1.01, backgroundColor: 'rgba(16, 185, 129, 0.08)' }}
                          >
                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground leading-relaxed">{ach}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Enhanced Technologies Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Code2 className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-primary text-lg">Technologies Used</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {experiences[selectedIndex].technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + (i * 0.03) }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <Badge 
                              variant="outline" 
                              className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Accordion for Mobile */}
          <motion.div 
            className="md:hidden space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={tabVariants}
                className={`glass-effect rounded-xl overflow-hidden border-2 transition-all duration-500 ${
                  selectedIndex === index 
                    ? 'border-primary/30 shadow-lg shadow-primary/10' 
                    : 'border-primary/20 hover:border-primary/30'
                }`}
              >
                <motion.div
                  className="p-4 cursor-pointer flex justify-between items-center"
                  onClick={() => setSelectedIndex(index === selectedIndex ? -1 : index)}
                  whileHover={{ backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-primary">{exp.company}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: selectedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {selectedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-primary/20 p-4 space-y-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                          
                          {/* Enhanced Mobile Info Pills */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-2 py-1 rounded-full text-xs">
                              <MapPin className="w-3 h-3 text-primary" />
                              <span className="font-medium text-foreground">{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-2 py-1 rounded-full text-xs">
                              <Briefcase className="w-3 h-3 text-primary" />
                              <span className="font-medium text-foreground">{exp.type}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Trophy className="w-4 h-4 text-primary" />
                            <h4 className="font-semibold text-primary">Key Achievements</h4>
                          </div>
                          <div className="space-y-2">
                            {exp.achievements.map((ach, i) => (
                              <div key={i} className="flex items-start gap-2 p-2 bg-primary/5 rounded-lg">
                                <ChevronRight className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                                <p className="text-xs text-muted-foreground leading-relaxed">{ach}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Code2 className="w-4 h-4 text-primary" />
                            <h4 className="font-semibold text-primary">Technologies</h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs hover:bg-primary/10">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
