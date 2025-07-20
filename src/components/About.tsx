import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Shield, Server, Cloud, Database, Lock } from "lucide-react";

const About = () => {
  const specializations = [
    {
      icon: Network,
      title: "Network Solutions",
      description: "Technical design and implementation of robust network infrastructures with MikroTik and Cisco"
    },
    {
      icon: Shield,
      title: "Perimeter Security",
      description: "FortiGate NGFW implementation and advanced security policy management"
    },
    {
      icon: Server,
      title: "Virtualization",
      description: "Proxmox cluster design and high-availability system administration"
    },
    {
      icon: Cloud,
      title: "Modern Networking",
      description: "SDN solutions with ZeroTier, Tailscale, and VPN technologies (WireGuard, IPsec, OpenVPN)"
    },
    {
      icon: Database,
      title: "Wireless Solutions",
      description: "High-capacity Ubiquiti deployments and wireless controller management"
    },
    {
      icon: Lock,
      title: "Automation",
      description: "Python and Bash scripting with Infrastructure as Code concepts using Ansible"
    }
  ];

  const certifications = [
    "BeyondTrust PRA Administrator", "Huawei HCNA Access", "MikroTik Certified", "FortiGate Specialist", "Proxmox Expert", "Docker Enthusiast"
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My approach is practical: I choose the best tool for each challenge. I enjoy designing robust networks with MikroTik, 
            implementing perimeter security with FortiGate, and deploying high-capacity wireless solutions with Ubiquiti.
            My passion for technology extends into my hobbies - designing virtualization clusters with Proxmox, 
            containerizing applications with Docker, and exploring modern networking solutions like ZeroTier and Tailscale.
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