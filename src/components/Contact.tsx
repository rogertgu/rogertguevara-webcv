import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "inforogert@gmail.com",
      link: "mailto:inforogert@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Available upon request",
      link: null
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote / Spain",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/rogert-guevara-uzcategui",
      color: "hover:text-[#0077B5]"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(
      serviceId,
      templateId,
      e.target as HTMLFormElement,
      publicKey
    ).then(
      (result) => {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
      },
      (error) => {
        alert('Error al enviar el mensaje. Intenta de nuevo.');
      }
    );
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got an interesting challenge? Let's connect and explore 
            how we can build robust network solutions together.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className="flex items-center gap-4 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-secondary rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-glow ${social.color} animate-scale-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <Button 
              className="bg-gradient-secondary hover:shadow-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card/30 backdrop-blur border-animated animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-2">
                    Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-2">
                    Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-medium block mb-2">
                  Subject
                </label>
                <Input 
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  className="bg-background/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium block mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or requirements..."
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Send Message
              </Button>
              {sent && (
                <div className="mt-4 text-green-600 text-center animate-fade-in-up">
                  Thank you for your message! I will get back to you soon.
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;