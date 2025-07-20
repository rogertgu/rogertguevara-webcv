import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Networking & Security",
      skills: [
        { name: "FortiGate NGFW", level: 92 },
        { name: "MikroTik RouterOS", level: 95 },
        { name: "Ubiquiti Wireless", level: 90 },
        { name: "VPN Technologies (WireGuard, IPsec, OpenVPN)", level: 88 },
        { name: "SDN (ZeroTier, Tailscale)", level: 85 }
      ]
    },
    {
      category: "Virtualization & Systems",
      skills: [
        { name: "Proxmox", level: 93 },
        { name: "Docker Containerization", level: 90 },
        { name: "High Availability Cluster Design", level: 87 },
        { name: "Linux Administration", level: 92 },
        { name: "SSO Implementation", level: 85 }
      ]
    },
    {
      category: "Network Operations",
      skills: [
        { name: "Multi-vendor Network Management", level: 94 },
        { name: "WLC Administration (Cisco, Huawei)", level: 89 },
        { name: "Advanced Switching Configuration", level: 91 },
        { name: "GPON Network Provisioning", level: 86 },
        { name: "L2 Incident Resolution", level: 93 }
      ]
    },
    {
      category: "Automation & Scripting",
      skills: [
        { name: "Python Scripting", level: 85 },
        { name: "Bash Scripting", level: 88 },
        { name: "Ansible (IaC Concepts)", level: 82 },
        { name: "Network Automation", level: 84 },
        { name: "Service Deployment Tools", level: 86 }
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across network infrastructure, systems administration, 
            cloud technologies, and cybersecurity domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.category}
              className="p-6 bg-card/30 backdrop-blur border-animated hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-gradient">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="animate-slide-in-right"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary/50"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional tech stack */}
        <div className="mt-16 text-center animate-fade-in-up">
          <h3 className="text-2xl font-semibold mb-8">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "FortiGate", "MikroTik", "Ubiquiti", "Proxmox", "Docker", "ZeroTier",
              "Tailscale", "WireGuard", "Cisco", "Huawei", "Python", "Ansible"
            ].map((tech, index) => (
              <div 
                key={tech}
                className="p-4 bg-secondary/30 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;