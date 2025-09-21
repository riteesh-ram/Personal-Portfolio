import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of impactful projects that highlight my technical expertise, innovative mindset, and ability to solve complex problems across diverse technologies.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 glass-effect glow-hover"
            onClick={prevProject}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 glass-effect glow-hover"
            onClick={nextProject}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Project Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-8">
                  <Card className="glass-effect glow-hover overflow-hidden animate-fade-up">
                    {/* Project Visual */}
                    <div className="relative h-64 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/30">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4">💻</div>
                          <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                        </div>
                      </div>
                      
                      {/* Floating elements */}
                      <div className="absolute top-6 left-6 w-12 h-12 bg-primary/20 rounded-full animate-bounce"></div>
                      <div className="absolute bottom-6 right-6 w-8 h-8 bg-secondary/30 rounded-full animate-pulse"></div>
                      <div className="absolute top-1/2 right-12 w-6 h-6 bg-primary/40 rounded-full animate-ping"></div>
                    </div>

                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{project.description}</p>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-primary">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                              <span className="text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="outline" 
                              className="px-3 py-1 glow-hover"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex justify-center">
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="glass-effect glow-hover"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-5 h-5 mr-3" />
                          View Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                onClick={() => goToProject(index)}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 bg-primary/20 rounded-full h-1 overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-500 ease-in-out"
              style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up">
          <p className="text-muted-foreground mb-6 text-lg">
            Want to see more of my work or discuss a potential collaboration?
          </p>
          <Button 
            size="lg" 
            className="glow-hover animate-glow"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;