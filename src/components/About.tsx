import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Experienced in both frontend and backend technologies"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Passionate about finding innovative solutions to complex challenges"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication skills and experience working in agile teams"
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always staying updated with the latest technologies and best practices"
    }
  ];

  const interests = [
    "Machine Learning", "Cloud Computing", "Mobile Development", 
    "Open Source", "UI/UX Design", "DevOps", "Blockchain", "IoT"
  ];

  return (
  <section id="about" className="py-20 relative" style={{ backgroundColor: 'black' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software developer with a strong foundation in computer science 
            and hands-on experience building scalable applications. I love turning ideas into 
            reality through clean, efficient code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="animate-slide-left">
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey in software development began during my university years, where I 
                discovered my passion for creating digital solutions that make a real impact. 
                I've since dedicated myself to mastering both the art and science of programming.
              </p>
              <p>
                With a solid foundation in computer science principles and hands-on experience 
                with modern development frameworks, I bring both theoretical knowledge and 
                practical skills to every project I work on.
              </p>
              <p>
                I thrive in collaborative environments and am always eager to learn new 
                technologies, contribute to open-source projects, and mentor fellow developers.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="glass-effect glow-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interests */}
        <Card className="glass-effect animate-fade-up">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Areas of <span className="text-gradient">Interest</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((interest, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="px-4 py-2 text-sm glow-hover"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;