
// src/components/Achievements.tsx

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal, Users, BookOpen, Code, Zap, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";

// Import Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper's default styles
import 'swiper/css';
import 'swiper/css/navigation';

// --- Data (simplified for clarity) ---
const achievements = [
    {
      title: "Budding Performer Award",
      organization: "Hughes Systique Corporation",
      year: "2023",
      type: "Corporate Recognition",
      description: "Awarded for dedication, adaptability, and significant contributions to the Auditing Framework and J3 service launch.",
      icon: Trophy,
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Birmingham Student Award",
      organization: "University of Birmingham",
      year: "2025", 
      type: "Academic Excellence",
      description: "Recognized for outstanding professional development, leadership, and active engagement in academic and career-building initiatives.",
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Hult Prize Regionals Finalist",
      organization: "Hult Prize Foundation",
      year: "2021",
      type: "Competition Achievement",
      description: "Reached Regional Finalist in Hult Prize 2021 Food for Good competition with FarmlyGo app, promoting sustainable agricultural solutions.",
      icon: Medal,
      color: "from-emerald-400 to-green-600"
    },
    {
      title: "International Conference Publication & Scopus-Indexed Research Recognition",
      organization: "International Conference on Intelligent Systems and Network Security",
      year: "2023",
      type: "Research Publication",
      description: "Published a research paper in CINS 2023 on using AI and machine learning to identify optimal business locations based on geographic and demographic data.",
      icon: BookOpen,
      color: "from-purple-500 to-violet-600"
    },
];

const getTypeColor = (type: string) => {
  switch(type) {
    case "Corporate Recognition": return "bg-amber-500/20 text-amber-400";
    case "Academic Excellence": return "bg-blue-500/20 text-blue-400";
    case "Competition Achievement": return "bg-green-500/20 text-green-400";
    case "Research Publication": return "bg-purple-500/20 text-purple-400";
    default: return "bg-gray-500/20 text-gray-300";
  }
};

const Achievements = () => {
  return (
    <>
      <style>{`
        /* Custom Navigation Button Styling */
        .achievements-carousel .swiper-button-next,
        .achievements-carousel .swiper-button-prev {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .achievements-carousel .swiper-button-next:hover,
        .achievements-carousel .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 1);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .achievements-carousel .swiper-button-next::after,
        .achievements-carousel .swiper-button-prev::after {
          content: '';
        }

        .achievements-carousel .swiper-button-next {
          right: -25px;
        }

        .achievements-carousel .swiper-button-prev {
          left: -25px;
        }

        .achievements-carousel .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .achievements-carousel .swiper-button-disabled:hover {
          transform: none;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .achievements-carousel .swiper-button-next,
          .achievements-carousel .swiper-button-prev {
            width: 40px;
            height: 40px;
          }

          .achievements-carousel .swiper-button-next {
            right: -20px;
          }

          .achievements-carousel .swiper-button-prev {
            left: -20px;
          }
        }

        /* Custom SVG Icons */
        .custom-nav-icon {
          width: 20px;
          height: 20px;
          stroke-width: 2.5px;
        }

        @media (max-width: 768px) {
          .custom-nav-icon {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>

      <section id="achievements" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Achievements & <span className="text-gradient">Recognition</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of my major achievements, awards, and important milestones in academics and career.
            </p>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="relative">
            {/* Custom Previous Button */}
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-3 hover:shadow-xl group">
              <ChevronLeft className="custom-nav-icon text-white/80 group-hover:text-white" />
            </div>

            {/* Custom Next Button */}
            <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-3 hover:shadow-xl group">
              <ChevronRight className="custom-nav-icon text-white/80 group-hover:text-white" />
            </div>

            {/* Swiper Carousel with custom navigation */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="achievements-carousel px-16 md:px-20"
            >
              {achievements.map((achievement, index) => (
                <SwiperSlide key={index}>
                  <Card className="glass-effect glow-hover group h-full">
                    <CardContent className="p-6 flex flex-col h-full" style={{ backgroundColor: '#1e293b', borderRadius: '0.75rem' }}>
                      <div className={`relative mb-4 w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center`}>
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge className={`${getTypeColor(achievement.type)} mb-3 self-start`}>
                        {achievement.type}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                      <div className="text-sm text-primary font-semibold mb-1">{achievement.organization}</div>
                      <div className="text-xs text-muted-foreground mb-3">{achievement.year}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
