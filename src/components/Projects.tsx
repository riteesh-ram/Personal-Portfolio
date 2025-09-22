import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  ChevronLeft, 
  ChevronRight, 
  Code2, 
  Zap, 
  Star
} from "lucide-react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

 const projects = [
    {
      title: "AI-Driven Automated Test Generation System",
      description: "Developed LLM TestGen, an AI-driven testing solution that automates Python test generation, improving software reliability and cutting debugging time. Built to be scalable and resilient, it transforms testing into a faster, smarter, and more efficient process.",
      technologies: ["Python", "Generative AI", "Agentic AI", "Google Gemini", "Pytest", "Evolutionary Algorithms", "Mutation Testing", "AST", "Code Analysis", "Pynguin Testing Tool", "CSV", "JSON", "HTML"],
      features: [
        "Automatically generates high-quality, context-aware Python test suites.",
        "Optimises test coverage and effectiveness using evolutionary algorithms.", 
        "Validates test robustness with mutation testing and targeted “killer” tests.",
        "Repairs and standardises broken or failing tests automatically.",
        "Provides detailed test reports and metrics for actionable insights.",
        "Seamlessly manages multi-environment pipeline execution for reliability."
      ],
      githubUrl: "https://github.com/riteesh-ram/LLM-EA-Mutation-Based-Unit-Test-Generation"
    },
    {
      title: "Microsoft Regionals Birmingham 2025 Intelligent Form Assistant",
      description: "Developed an AI-powered Intelligent Form Assistant for Birmingham City Council, enabling citizens to complete government forms using voice commands and real-time AI guidance. Integrated speech-to-text, GPT-4 AI, and smart form search to simplify civic service submissions, reduce errors, and improve accessibility.",
      technologies: ["Python", "Flask", "Azure OpenAI", "AI/ML", "Speech Processing", "SQLite", "Rest API's"],
      features: [
        "Complete forms using voice commands",
        "Provide real-time AI guidance",
        "Search and suggest relevant forms",
        "Support multiple government form types"
      ],
      githubUrl: "https://github.com/riteesh-ram/Microsoft-Regionals-Birmingham-2025-Intelligent-Form-Assistant"
    },
    {
      title: "DinoBLE - Mobile Fitness App with Wearable Integration",
      description: "DinoBLE is an innovative, gesture-controlled mobile game that harnesses TinyML on Arduino Nano 33 BLE to accurately detect user movements and execute real-time actions in a Flutter-based Dino game.",
      technologies: ["Microcontrollers", "Embedded AI", "Machine Learning", "C++", "Python", "Dart", "Flutter", "Android", "Bluetooth Low Energy (BLE)"],
      features: [
        "Real-time jump gesture detection",
        "Low-latency Bluetooth signal transfer",
        "Seamless Flutter game integration",
        "TinyML-powered motion recognition"
      ],
      githubUrl: "https://github.com/riteesh-ram/DinoBLE-Game/tree/main"
    },
    {
      title: "Decentralized Finance Group Insurance Application",
      description: "Developed a decentralized insurance dApp on Ethereum that empowers users to create and join insurance groups, pool premiums securely, and ensure full transparency through smart contracts. Seamlessly integrated MetaMask and Web3.js with a responsive, user-friendly frontend.",
      technologies: ["Ethereum", "Blockchain", "Solidity", "JavaScript", "Smart Contracts", "Truffle Suite", "MetaMask Digital Wallet", "Web3.js", "Node.js", "HTML5", "CSS3", "Bootstrap 5"],
      features: [
        "Launch and manage insurance groups",
        "Securely join existing groups",
        "Automate premium collection via smart contract",
        "Seamless MetaMask wallet integration",
        "Transparent, tamper-proof fund tracking",
        "Simulate blockchain on local Ethereum network"
      ],
      githubUrl: "https://github.com/riteesh-ram/DeFi-Group-Insurance"
    },
    {
      title: "News Article Recommender System",
      description: "News Article Recommender System leverages hybrid AI algorithms to deliver highly personalized news by analyzing user behavior and article content. It features a clean, responsive, and scalable web interface for seamless user engagement.",
      technologies: ["HTML5", "CSS", "Bootstrap 4", "jQuery", "JavaScript", "Recommendation Algorithms", "Natural Language Processing", "AI/ML", "Version Control", "Git"],
      features: [
        "Deliver personalized hybrid news recommendations",
        "Analyse user behavior for engagement",
        "Combine content-based and collaborative filtering",
        "Intuitive, responsive, and interactive interface",
        "Manage user sessions seamlessly"
      ],
      githubUrl: "https://github.com/riteesh-ram/News-Article-Recommender-System"
    },
    {
      title: "FarmlyGo Android Application",
      description: "FarmlyGo is an innovative Android application that empowers farmers to sell products, track market prices, and connect with local representatives seamlessly, leveraging secure cloud technology and an intuitive mobile interface. Demonstrating interest in user-centric design to deliver real-world agricultural solutions.",
      technologies: ["Java", "Android Studio", "Android SDK", "UI/UX", "Firebase Cloud Services", "Firebase Authentication", "Firebase Firestore", "Gradle", "XML"],
      features: [
        "Secure and seamless user login",
        "Real-time profile management with cloud sync", 
        "Effortless product posting and tracking",
        "Comprehensive state-wise market price lookup",
        "Instant access to local representatives",
        "One-tap support and app sharing"
      ],
      githubUrl: "https://github.com/riteesh-ram/FarmlyGo-Android-Application"
    },
    {
      title: "OneSpot E-commerce Platform",
      description: "OneSpot is a cutting-edge MERN stack e-commerce platform that delivers seamless, secure, and dynamic shopping experiences. It empowers customers with real-time product browsing, cart management, and secure payments, while giving administrators full control over products, orders, and user management through a responsive, intuitive interface.",
      technologies: ["React.js", "Redux", "Bootstrap", "Node.js", "Express.js", "Rest API", "MongoDB", "Mongoose", "JWT", "Stripe", "Emailing Services", "Postman", "Git"],
      features: [
        "Robust user authentication & security",
        "Intelligent product browsing & search", 
        "Real-time, dynamic shopping cart",
        "Seamless Stripe payment integration",
        "Comprehensive order management system",
        "Powerful admin dashboard controls"
      ],
      githubUrl: "https://github.com/riteesh-ram/OneSpot-E-commerce-Platform"
    },
    {
      title: "WhatsApp Business Chatbot",
      description: "WhatsApp Business Chatbot is an AI-powered solution that automates customer support and sales via WhatsApp, leveraging NLP and machine learning to understand queries, provide instant responses, and process product orders efficiently. It ensures seamless interaction, conversation tracking, and scalable business engagement.",
      technologies: ["Python", "Flask", "TensorFlow", "Natural Language Processing", "Deep Learning", "Neural Networks", "Twilio API", "SQLite database", "Heroku Cloud", "Git"],
      features: [
        "Intelligently automates customer interactions",
        "Seamlessly handles product orders", 
        "Securely logs conversations for insights",
        "Delivers instant AI-powered responses"
      ],
      githubUrl: "https://github.com/riteesh-ram/WhatsApp-Business-Chatbot"
    },
    {
      title: "FluShot: H1N1 and Seasonal Vaccine Prediction Platform",
      description: "FluShot is a machine learning platform that predicts individual's likelihood of receiving H1N1 and seasonal flu vaccines, enabling healthcare providers to optimize vaccine distribution and public health strategies. It leverages automated data preprocessing, dual predictive analytics, and an interactive dashboard to deliver actionable insights with precision and scalability.",
      technologies: ["Angular", "TypeScript", "Python", "FastAPI", "Machine Learning", "MongoDB", "API"],
      features: [
        "Predict H1N1 and flu uptake",
        "Real-time batch and individual analysis", 
        "Interactive dashboard with insights",
        "Automated intelligent data preprocessing"
      ],
      githubUrl: "https://github.com/riteesh-ram/FluShot-H1N1-Seasonal-Vaccine-Prediction"
    },
    {
      title: "Heart Disease Prediction Project",
      description: "A predictive machine learning platform that accurately forecasts heart disease risk using real patient data, enabling early detection, data-driven healthcare decisions, and actionable insights for medical professionals.",
      technologies: ["Python", "Data Analysis & Visualization", "Machine Learning", "Jupyter Notebook"],
      features: [
        "Predicts heart disease risk accurately",
        "Analyzes patient data patterns", 
        "Compares multiple ML models",
        "Visualizes insights with clarity"
      ],
      githubUrl: "https://github.com/riteesh-ram/Heart-Disease-Prediction-Project"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, isHovered, projects.length]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden min-h-screen"
      style={{
        backgroundColor: 'black',
      }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
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
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A showcase of impactful projects that highlight my technical expertise, innovative mindset, and ability to solve complex problems across diverse technologies.
          </motion.p>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div 
          className="relative max-w-6xl mx-auto"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 glass-effect glow-hover border-2 border-primary/30 hover:border-primary/50 transition-all duration-300"
              onClick={prevProject}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 glass-effect glow-hover border-2 border-primary/30 hover:border-primary/50 transition-all duration-300"
              onClick={nextProject}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Project Cards */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="w-full"
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <div className="px-8">
                  <Card className="glass-effect glow-hover overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 relative">
                    {/* Enhanced Project Visual */}
                    <motion.div 
                      className="relative h-64 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/30 overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-4 left-4 z-10"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                          {projects[currentIndex].category}
                        </Badge>
                      </motion.div>

                      {/* Main Content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          className="text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="text-6xl mb-4">
                            {projects[currentIndex].icon}
                          </div>
                          <h3 className="text-2xl font-bold text-primary mb-2">
                            {projects[currentIndex].title}
                          </h3>
                        </motion.div>
                      </div>
                      
                      {/* Enhanced Floating elements */}
                      <motion.div 
                        className="absolute top-6 left-6 w-12 h-12 bg-primary/20 rounded-full"
                        animate={{ 
                          y: [0, -10, 0],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div 
                        className="absolute bottom-6 right-6 w-8 h-8 bg-secondary/30 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.5
                        }}
                      />
                      <motion.div 
                        className="absolute top-1/2 right-12 w-6 h-6 bg-primary/40 rounded-full"
                        animate={{ 
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: 1
                        }}
                      />
                    </motion.div>

                    <CardContent className="p-8">
                      <motion.h3 
                        className="text-2xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {projects[currentIndex].title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-muted-foreground mb-6 text-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {projects[currentIndex].description}
                      </motion.p>

                      {/* Enhanced Key Features */}
                      <motion.div 
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <Zap className="w-5 h-5 text-primary" />
                          <h4 className="text-lg font-semibold text-primary">Key Features</h4>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {projects[currentIndex].features.map((feature, featureIndex) => (
                            <motion.div 
                              key={featureIndex} 
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.7 + (featureIndex * 0.05) }}
                              whileHover={{ scale: 1.02, x: 5 }}
                            >
                              <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm font-medium leading-relaxed">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Enhanced Technologies */}
                      <motion.div 
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <Code2 className="w-5 h-5 text-primary" />
                          <h4 className="text-lg font-semibold text-primary">Technologies Used</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {projects[currentIndex].technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.9 + (techIndex * 0.03) }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="px-3 py-1 glow-hover hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 cursor-default"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Enhanced Action Button */}
                      <motion.div 
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                      >
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="glass-effect glow-hover border-2 border-primary/30 hover:border-primary/50 transition-all duration-300"
                          onClick={() => window.open(projects[currentIndex].githubUrl, '_blank')}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5 mr-3" />
                          View Code
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Dots Indicator */}
          <motion.div 
            className="flex justify-center mt-8 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {projects.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                onClick={() => goToProject(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                layoutId={index === currentIndex ? "activeIndicator" : undefined}
              />
            ))}
          </motion.div>

          {/* Enhanced Progress Bar */}
          <motion.div 
            className="mt-6 bg-primary/20 rounded-full h-2 overflow-hidden relative"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-primary to-secondary h-full rounded-full relative overflow-hidden"
              style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
              layoutId="progressBar"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </motion.div>
          </motion.div>

          {/* Project Counter */}
          <motion.div 
            className="text-center mt-4 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span className="text-primary font-semibold">{currentIndex + 1}</span> of {projects.length} projects
          </motion.div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p 
            className="text-muted-foreground mb-6 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Want to see more of my work or discuss a potential collaboration?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="glow-hover animate-glow bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
