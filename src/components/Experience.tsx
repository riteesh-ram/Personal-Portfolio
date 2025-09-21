// src/components/Experience.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link as LinkIcon, Star, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Little Birdie",
    companyUrl: "https://www.littlebirdie.com/",
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
    companyUrl: "https://www.hughessystique.com/",
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
    companyUrl: "https://www.hughessystique.com/",
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

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From internships to experienced roles, I have consistently advanced in software development, driven by innovation, technical excellence, and tangible impact.
          </p>
        </div>

        <div className="max-w-6xl mx-auto md:grid md:grid-cols-4 md:gap-12">
          {/* Tabs for Desktop */}
          <div className="hidden md:block col-span-1 relative">
            <div
              className="absolute left-0 w-1 h-14 bg-primary rounded-full transition-all duration-300 ease-in-out glow"
              style={{ top: `${selectedIndex * 5.5}rem` }}
            />
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 h-20 flex flex-col justify-center ${
                    selectedIndex === index
                      ? 'bg-primary/10'
                      : 'hover:bg-primary/5'
                  }`}
                >
                  <p className={`font-bold text-lg ${selectedIndex === index ? 'text-primary' : 'text-foreground'}`}>{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Content Panel for Desktop */}
          <div className="hidden md:block md:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-effect glow-hover">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-1">{experiences[selectedIndex].title}</h3>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <a
                          href={experiences[selectedIndex].companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-primary hover:underline transition-colors"
                        >
                          {experiences[selectedIndex].company}
                          <LinkIcon className="w-4 h-4" />
                        </a>
                        <span>&bull;</span>
                        <span>{experiences[selectedIndex].location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{experiences[selectedIndex].description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-4 text-primary flex items-center gap-2"><Star className="w-5 h-5" />Key Achievements</h4>
                      <div className="space-y-3">
                        {experiences[selectedIndex].achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <ChevronRight className="w-4 h-4 text-primary/80 mt-1 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">{ach}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experiences[selectedIndex].technologies.map((tech, i) => (
                          <Badge key={i} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Accordion for Mobile */}
          <div className="md:hidden space-y-4">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="glass-effect overflow-hidden"
                onClick={() => setSelectedIndex(index === selectedIndex ? -1 : index)}
              >
                <div className="p-4 cursor-pointer flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
                <AnimatePresence>
                  {selectedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-primary/20 p-4">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground text-sm">
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 hover:text-primary hover:underline transition-colors"
                            >
                              {exp.company}
                              <LinkIcon className="w-4 h-4" />
                            </a>
                            <span>&bull;</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">{exp.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold mb-3 text-primary flex items-center gap-2"><Star className="w-5 h-5" />Key Achievements</h4>
                          <div className="space-y-3">
                            {exp.achievements.map((ach, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <ChevronRight className="w-4 h-4 text-primary/80 mt-1 flex-shrink-0" />
                                <p className="text-sm text-muted-foreground">{ach}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 text-primary">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
