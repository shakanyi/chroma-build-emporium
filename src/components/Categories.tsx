import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Gamepad2, 
  Keyboard, 
  Mouse, 
  Monitor, 
  Cable,
  Palette,
  HardDrive,
  Fan,
  ArrowRight
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Controllers",
      icon: Gamepad2,
      description: "Wired & wireless gaming controllers",
      count: "150+ products",
      color: "primary",
      image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=200&fit=crop"
    },
    {
      name: "Keyboards",
      icon: Keyboard,
      description: "Mechanical & RGB gaming keyboards",
      count: "200+ products", 
      color: "secondary",
      image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&h=200&fit=crop"
    },
    {
      name: "Gaming Mice",
      icon: Mouse,
      description: "High-precision gaming mice",
      count: "120+ products",
      color: "accent",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=200&fit=crop"
    },
    {
      name: "Cables & Adapters",
      icon: Cable,
      description: "HDMI, USB, DisplayPort cables",
      count: "80+ products",
      color: "primary",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=200&fit=crop"
    },
    {
      name: "Wall Art & Décor",
      icon: Palette,
      description: "Gaming-themed decorations",
      count: "50+ products",
      color: "secondary",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop"
    },
    {
      name: "RGB Accessories",
      icon: Fan,
      description: "LED strips, fans, lighting kits",
      count: "90+ products",
      color: "accent",
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=200&fit=crop"
    },
    {
      name: "Gaming Monitors",
      icon: Monitor,
      description: "4K, curved, high-refresh displays",
      count: "75+ products",
      color: "primary",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=200&fit=crop"
    },
    {
      name: "Storage Devices",
      icon: HardDrive,
      description: "SSDs, HDDs, external drives",
      count: "110+ products",
      color: "secondary",
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=200&fit=crop"
    },
    {
      name: "PC Components",
      icon: Cpu,
      description: "CPU, GPU, motherboard, RAM",
      count: "300+ products",
      color: "accent",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=200&fit=crop"
    }
  ];

  const CategoryCard = ({ category }: { category: typeof categories[0] }) => (
    <Card className="group bg-gradient-card hover:shadow-hover transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden cursor-pointer animate-slide-up">
      <div className="relative">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Icon overlay */}
        <div className={`absolute top-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center ${
          category.color === 'primary' ? 'bg-primary/80 text-primary-foreground' :
          category.color === 'secondary' ? 'bg-secondary/80 text-secondary-foreground' :
          'bg-accent/80 text-accent-foreground'
        } backdrop-blur-sm group-hover:shadow-glow transition-all duration-300`}>
          <category.icon className="h-5 w-5" />
        </div>

        {/* Product count badge */}
        <Badge className="absolute top-3 right-3 bg-background/80 text-foreground backdrop-blur-sm">
          {category.count}
        </Badge>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {category.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary">
            Shop Now
          </span>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-4">
            <Gamepad2 className="h-3 w-3 mr-1" />
            Product Categories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From controllers to complete PC builds, find everything you need to elevate your gaming experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow"
          >
            Explore PC Builder Tool
            <Cpu className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;