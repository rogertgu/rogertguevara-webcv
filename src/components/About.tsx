import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Shield, Server, Cloud, Database, Lock } from "lucide-react";

const About = () => {
  const specializations = [
    {
      icon: Network,
      title: "Network Architecture",
      description: "Design and implementation of scalable, high-performance network infrastructures"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced threat detection, prevention, and incident response strategies"
    },
    {
      icon: Server,
      title: "Systems Administration",
      description: "Expert management of enterprise servers and virtualized environments"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Migration and optimization of hybrid cloud and multi-cloud architectures"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Database optimization, backup strategies, and disaster recovery planning"
    },
    {
      icon: Lock,
      title: "Security Compliance",
      description: "Implementation of industry standards and regulatory compliance frameworks"
    }
  ];

  const certifications = [
    "CISSP", "CCNP", "MCSE", "AWS Solutions Architect", "VMware VCP", "CompTIA Security+"
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate network and systems expert with over a decade of experience in designing, 
            implementing, and securing enterprise-grade IT infrastructures. I specialize in 
            creating robust, scalable solutions that drive business innovation and ensure 
            operational excellence.
          </p>
        </div>

        {/* Specializations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {specializations.map((spec, index) => (
            <Card 
              key={spec.title}
              className="p-6 bg-card/50 backdrop-blur border-animated hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <spec.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{spec.title}</h3>
                <p className="text-muted-foreground">{spec.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center animate-fade-in-up">
          <h3 className="text-2xl font-semibold mb-6">Certifications & Credentials</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={cert}
                variant="secondary"
                className="px-4 py-2 text-sm bg-secondary/80 hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;