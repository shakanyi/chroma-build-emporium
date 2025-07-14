import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Truck,
  Star,
  Play,
  Cpu,
  Monitor,
  Headphones
} from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";

const Hero = () => {
  const features = [
    { icon: Zap, text: "Lightning Fast Delivery" },
    { icon: Shield, text: "2-Year Warranty" },
    { icon: Truck, text: "Free Shipping $50+" },
  ];

  const quickActions = [
    { 
      icon: Cpu, 
      title: "PC Builder", 
      desc: "Build your dream rig",
      color: "primary"
    },
    { 
      icon: Monitor, 
      title: "Gaming Monitors", 
      desc: "4K & High Refresh",
      color: "secondary"
    },
    { 
      icon: Headphones, 
      title: "Audio Gear", 
      desc: "Pro Gaming Sound",
      color: "accent"
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-slide-up">
              <Badge className="bg-accent/20 text-accent border-accent/30 animate-rgb-pulse">
                <Star className="h-3 w-3 mr-1" />
                #1 Gaming Store 2024
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Build Your
                  <span className="block bg-gradient-hero bg-clip-text text-transparent animate-glow-pulse">
                    Ultimate Setup
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                  Discover premium gaming gear, build custom PCs, and elevate your gaming experience with our cutting-edge technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow group"
                >
                  <Play className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Start Building
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
                >
                  Shop Categories
                </Button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-4 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <div className="w-8 h-8 bg-muted/20 rounded-full flex items-center justify-center">
                      <feature.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="lg:ml-8">
              <div className="grid gap-4">
                <h3 className="text-xl font-semibold mb-4">Quick Access</h3>
                {quickActions.map((action, index) => (
                  <Card 
                    key={index} 
                    className="p-4 bg-gradient-card hover:shadow-hover transition-all duration-300 cursor-pointer group border-border/50 hover:border-primary/30"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        action.color === 'primary' ? 'bg-primary/20 text-primary' :
                        action.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                        'bg-accent/20 text-accent'
                      } group-hover:shadow-glow transition-all duration-300`}>
                        <action.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                          {action.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{action.desc}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;