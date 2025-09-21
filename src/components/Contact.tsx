import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_127twnp',
        'template_t669fkt',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'riteeshram.krishna@gmail.com'
        },
        'eZQl_QSOV1CvVqXcq'
      );

      toast({
        title: "Message sent successfully! ✨",
        description: "Thank you for reaching out. I'll get back to you soon!",
        className: "border-success/20 bg-success/10 text-success"
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message 😔",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just have a conversation about technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <Card className="glass-effect animate-fade-up mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">Send a Message</h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50"
                      required
                    />
                    <Input
                      name="email"
                      placeholder="Your email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50"
                      required
                    />
                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 min-h-24"
                      required
                    />
                    <Button type="submit" className="w-full glow-hover" disabled={isSubmitting}>
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>riteeshram.krishna@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+44 7887133389</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Available for Hybrid/Remote opportunities</span>
                    </div>
                  </div>

                  {/* Social Links */}
<div className="mt-8">
  <h4 className="font-semibold mb-4">Connect on Social</h4>
  <div className="flex space-x-4">
    <a 
      href="https://github.com/riteesh-ram" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Button variant="outline" size="sm" className="glow-hover">
        <Github className="w-4 h-4 mr-2" />
        GitHub
      </Button>
    </a>
    <a 
      href="https://www.linkedin.com/in/riteesh-ram-chander-bollavaram-golla-25b71b1a2" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Button variant="outline" size="sm" className="glow-hover">
        <Linkedin className="w-4 h-4 mr-2" />
        LinkedIn
      </Button>
    </a>
  </div>
</div>


                  {/* Available Status */}
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-success/20 text-success px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="font-medium">Available for opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;