import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Shield,
  Truck,
  CreditCard,
  HeartHandshake
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        "Controllers",
        "Keyboards", 
        "Gaming Mice",
        "Monitors",
        "PC Components",
        "RGB Accessories",
        "Storage Devices",
        "Cables & Adapters"
      ]
    },
    {
      title: "Support",
      links: [
        "Contact Us",
        "FAQ",
        "Shipping Info",
        "Returns",
        "Warranty",
        "Technical Support",
        "Installation Guide",
        "Build Tutorials"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press Kit",
        "Reviews",
        "Blog",
        "Community",
        "Affiliate Program",
        "Partners"
      ]
    }
  ];

  const trustBadges = [
    { icon: Shield, text: "Secure Payments" },
    { icon: Truck, text: "Fast Shipping" },
    { icon: CreditCard, text: "Easy Returns" },
    { icon: HeartHandshake, text: "Expert Support" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                <Mail className="h-3 w-3 mr-1" />
                Newsletter
              </Badge>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get the latest gaming deals, new product launches, and exclusive PC building tips.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email address"
                  className="bg-background border-border focus:border-primary transition-all duration-300"
                />
                <Button className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center animate-glow-pulse">
                <Cpu className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  GameTech
                </h2>
                <p className="text-xs text-muted-foreground">Elite Gaming Store</p>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-md">
              Your ultimate destination for premium gaming accessories and custom PC builds. 
              We empower gamers with cutting-edge technology and expert support.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">1-800-GAMETECH</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">support@gametech.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-2 pt-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Button key={index} size="icon" variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Button 
                      variant="ghost" 
                      className="h-auto p-0 text-muted-foreground hover:text-primary transition-colors text-sm justify-start"
                    >
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-border/50">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center space-x-2 p-3 bg-muted/20 rounded-lg">
              <badge.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <span>&copy; 2024 GameTech. All rights reserved.</span>
              <div className="flex space-x-4">
                <Button variant="ghost" className="h-auto p-0 text-xs text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Button>
                <Button variant="ghost" className="h-auto p-0 text-xs text-muted-foreground hover:text-primary">
                  Terms of Service
                </Button>
                <Button variant="ghost" className="h-auto p-0 text-xs text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">Powered by</span>
              <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">
                Next-Gen Tech
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;