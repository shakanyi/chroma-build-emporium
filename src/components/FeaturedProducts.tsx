import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Eye,
  Zap,
  Award,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "RGB Mechanical Gaming Keyboard",
      category: "Keyboards",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&h=300&fit=crop",
      badges: ["Best Seller", "RGB"],
      features: ["Cherry MX Blue", "Full RGB", "USB-C"]
    },
    {
      id: 2,
      name: "Wireless Gaming Mouse Pro",
      category: "Mice",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.9,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
      badges: ["New", "Wireless"],
      features: ["25,600 DPI", "Wireless", "RGB Lighting"]
    },
    {
      id: 3,
      name: "27\" 4K Gaming Monitor",
      category: "Monitors",
      price: 599.99,
      originalPrice: 799.99,
      rating: 4.7,
      reviews: 634,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
      badges: ["4K", "144Hz"],
      features: ["4K UHD", "144Hz", "HDR10"]
    },
    {
      id: 4,
      name: "Gaming Headset Elite",
      category: "Audio",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.6,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=300&fit=crop",
      badges: ["7.1 Surround"],
      features: ["7.1 Surround", "Noise Cancel", "RGB"]
    }
  ];

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <Card className="group bg-gradient-card hover:shadow-hover transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden animate-slide-up">
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Action buttons overlay */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Button size="icon" variant="secondary" className="h-8 w-8 shadow-lg">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="h-8 w-8 shadow-lg">
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {product.badges.map((badge, index) => (
              <Badge 
                key={index} 
                className={`text-xs ${
                  badge === "Best Seller" ? "bg-accent text-accent-foreground animate-rgb-pulse" :
                  badge === "New" ? "bg-primary text-primary-foreground" :
                  "bg-secondary text-secondary-foreground"
                }`}
              >
                {badge === "Best Seller" && <Award className="h-3 w-3 mr-1" />}
                {badge === "New" && <Zap className="h-3 w-3 mr-1" />}
                {badge === "4K" && <TrendingUp className="h-3 w-3 mr-1" />}
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <Badge variant="outline" className="text-xs mb-2">
            {product.category}
          </Badge>
          <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1">
          {product.features.map((feature, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-muted/50 rounded-full text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price and action */}
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg text-primary">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <Badge className="bg-accent/20 text-accent text-xs">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </Badge>
            )}
          </div>
          
          <Button 
            size="sm" 
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow group"
          >
            <ShoppingCart className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
            <Star className="h-3 w-3 mr-1" />
            Featured Products
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top Gaming Gear
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular gaming accessories, chosen by pro gamers and enthusiasts worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
          >
            View All Products
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;