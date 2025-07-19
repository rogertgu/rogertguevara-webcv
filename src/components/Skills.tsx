import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Network Technologies",
      skills: [
        { name: "Cisco Technologies", level: 95 },
        { name: "Network Security", level: 90 },
        { name: "Load Balancing", level: 88 },
        { name: "VPN & Remote Access", level: 92 },
        { name: "Network Monitoring", level: 87 }
      ]
    },
    {
      category: "Systems & Virtualization",
      skills: [
        { name: "Windows Server", level: 93 },
        { name: "Linux Administration", level: 89 },
        { name: "VMware vSphere", level: 91 },
        { name: "Hyper-V", level: 85 },
        { name: "Container Technologies", level: 82 }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 88 },
        { name: "Azure", level: 85 },
        { name: "Infrastructure as Code", level: 83 },
        { name: "CI/CD Pipelines", level: 80 },
        { name: "Kubernetes", level: 78 }
      ]
    },
    {
      category: "Security & Compliance",
      skills: [
        { name: "Firewall Management", level: 94 },
        { name: "Incident Response", level: 91 },
        { name: "Risk Assessment", level: 88 },
        { name: "Compliance Frameworks", level: 86 },
        { name: "Penetration Testing", level: 83 }
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
              "Cisco", "VMware", "Microsoft", "AWS", "Linux", "Docker",
              "Kubernetes", "Ansible", "Terraform", "Palo Alto", "Fortinet", "Splunk"
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