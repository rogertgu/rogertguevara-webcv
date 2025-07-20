import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Network Solutions Engineer",
      company: "OmniAccess",
      location: "Remote",
      period: "Nov 2021 - Present",
      type: "Full-time (Promoted from Service Delivery Network Engineer)",
      achievements: [
        "Technical design and implementation of client network solutions, focusing on optimization and security",
        "Creation of internal tools to improve the deployment of network services and applications",
        "Analysis and evaluation of complex services, ensuring compliance with technical requirements",
        "Technical escalation point for resolving complex network and system incidents"
      ],
      technologies: ["FortiGate", "MikroTik", "Ubiquiti", "Python", "Ansible", "Network Automation"]
    },
    {
      role: "NOC L2",
      company: "SAMPOL DIGITAL SL",
      location: "Spain",
      period: "Jun 2020 - Nov 2021",
      type: "Full-time",
      achievements: [
        "Management, maintenance, and monitoring of multi-vendor networks (Ethernet, IPTV, VoIP, Wireless)",
        "Resolution of L2 incidents, administration of WLCs (Cisco, Huawei) and advanced switching configuration",
        "Core network management using Cisco and MikroTik (RouterOS), including GPON network provisioning",
        "Administration of virtualization environments with Proxmox"
      ],
      technologies: ["Cisco", "Huawei", "MikroTik", "Proxmox", "GPON", "WLC Management"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of delivering innovative network and systems solutions 
            across diverse industries and enterprise environments.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={`${exp.company}-${exp.period}`}
              className="p-8 bg-card/50 backdrop-blur border-animated hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left side - Role & Company */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-gradient font-medium mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div 
                        key={achIndex}
                        className="flex items-start gap-2 animate-slide-in-right"
                        style={{ animationDelay: `${(index * 0.1) + (achIndex * 0.05)}s` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="text-xs border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 animate-scale-in"
                        style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.03)}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;