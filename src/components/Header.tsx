import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Search, 
  ShoppingCart, 
  User, 
  Gamepad2,
  Cpu,
  Monitor,
  Keyboard,
  Mouse
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: "PC Builder", icon: Cpu, href: "/pc-builder" },
    { name: "Controllers", icon: Gamepad2, href: "/controllers" },
    { name: "Keyboards", icon: Keyboard, href: "/keyboards" },
    { name: "Mice", icon: Mouse, href: "/mice" },
    { name: "Monitors", icon: Monitor, href: "/monitors" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center animate-glow-pulse">
              <Cpu className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                GameTech
              </h1>
              <p className="text-xs text-muted-foreground">Elite Gaming Store</p>
            </div>
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search gaming gear, PC components..."
                className="pl-10 bg-muted/50 border-border focus:border-primary transition-all duration-300 focus:shadow-glow"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex relative">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative group">
              <ShoppingCart className="h-5 w-5 group-hover:text-primary transition-colors" />
              <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-1.5 py-0.5 animate-rgb-pulse">
                3
              </Badge>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-1 pb-4 border-t border-border/50 pt-4">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300 group"
            >
              <category.icon className="h-4 w-4 group-hover:text-primary transition-colors" />
              <span>{category.name}</span>
            </Button>
          ))}
          <div className="flex-1" />
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
            Build Your PC
          </Button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-slide-up">
            {/* Mobile search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search gaming gear..."
                className="pl-10 bg-muted/50 border-border"
              />
            </div>
            
            {/* Mobile navigation */}
            <nav className="space-y-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant="ghost"
                  className="w-full justify-start space-x-2"
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              ))}
              <Button className="w-full mt-4 bg-gradient-primary hover:opacity-90">
                Build Your PC
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;