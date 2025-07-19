import { Button } from "@/components/ui/button";
import { ArrowDown, Network, Shield, Server } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 bg-network-pattern" />
      </div>

      {/* Floating network elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 animate-float">
          <Network className="w-8 h-8 text-electric-blue animate-network-pulse" />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <Shield className="w-6 h-6 text-cyber-teal animate-network-pulse" />
        </div>
        <div className="absolute bottom-32 left-40 animate-float" style={{ animationDelay: '2s' }}>
          <Server className="w-7 h-7 text-tech-purple animate-network-pulse" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 px-4 max-w-5xl mx-auto">
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold">
            <span className="text-gradient">Network & Systems</span>
            <br />
            <span className="text-foreground">Expert</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Architecting robust network infrastructures and secure systems solutions 
            for the digital age
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-medium"
            onClick={scrollToAbout}
          >
            Explore My Work
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
          >
            Download CV
          </Button>
        </div>

        {/* Tech stats */}
        <div className="grid grid-cols-3 gap-8 pt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient">10+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient">500+</div>
            <div className="text-sm text-muted-foreground">Networks Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Achieved</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;