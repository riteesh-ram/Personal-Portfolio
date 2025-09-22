import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "Software Developer",
    "Full Stack Engineer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index <= currentRole.length) {
        setDisplayedText(currentRole.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-left">
              Welcome.{" "}
              <span className="text-gradient">Riteesh Ram Chander</span>
            </h1>
            
            <div className="text-2xl md:text-3xl mb-8 h-12 text-left">
              <span className="text-muted-foreground">I'm a </span>
              <span className="text-primary font-semibold typewriter">
                {displayedText}
              </span>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0 text-justify">
              With 3 years of proven expertise in full-stack development, I engineer sleek, scalable, and impactful digital solutions. My passion lies in fusing cutting-edge software with the power of AI to transform the way technology is built and experienced. I thrive in dynamic, collaborative environments where innovation, curiosity, and technical excellence drive every decision. I am driven to join a mission-focused team that is shaping breakthrough products and setting new benchmarks in the industry. Whether contributing to the agility of a fast-growing startup or the scale of a global enterprise, I bring relentless commitment, vision, and execution. Above all, I am dedicated to building technology that leaves a lasting impact and delivers meaningful experiences to its users.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
              <Button
                size="lg"
                className="glow-hover animate-glow bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                onClick={() => scrollToSection("experience")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-effect glow-hover"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links removed as requested */}
          </div>

          {/* Profile Image - moved down with additional margin */}
          <div className="flex justify-center animate-fade-up mt-8 md:mt-16" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 glow">
                <img
                  src={profileImage}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                  style={{ transform: 'scale(1.8)', objectPosition: 'center 100%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator removed and bottom spacing adjusted for cleaner layout */}
        <div className="pt-8" />
      </div>
    </section>
  );
};

export default Hero;
