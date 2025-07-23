import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { Search, Filter, Grid, List } from "lucide-react";

// Sample product data
const products = [
  {
    id: "1",
    name: "Razer DeathAdder V3 Pro Wireless Gaming Mouse",
    price: 149.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    rating: 4.8,
    reviews: 1247,
    category: "Gaming Mice",
    isNew: false,
    isOnSale: true,
  },
  {
    id: "2",
    name: "Corsair K95 RGB Platinum Mechanical Gaming Keyboard",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
    rating: 4.6,
    reviews: 892,
    category: "Keyboards",
    isNew: true,
    isOnSale: false,
  },
  {
    id: "3",
    name: "Xbox Wireless Controller - Electric Volt",
    price: 64.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400",
    rating: 4.7,
    reviews: 2156,
    category: "Controllers",
    isNew: false,
    isOnSale: true,
  },
  {
    id: "4",
    name: "ASUS ROG Swift PG279QM 27'' Gaming Monitor",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    rating: 4.9,
    reviews: 567,
    category: "Monitors",
    isNew: true,
    isOnSale: false,
  },
  {
    id: "5",
    name: "Samsung 980 PRO 2TB NVMe SSD",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400",
    rating: 4.8,
    reviews: 1834,
    category: "Storage",
    isNew: false,
    isOnSale: true,
  },
  {
    id: "6",
    name: "Philips Hue Play Light Bar - 2 Pack",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400",
    rating: 4.4,
    reviews: 678,
    category: "RGB Accessories",
    isNew: false,
    isOnSale: false,
  },
];

const categories = ["All", "Gaming Mice", "Keyboards", "Controllers", "Monitors", "Storage", "RGB Accessories"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return 0;
      }
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Gaming Products</h1>
        <p className="text-muted-foreground">
          Discover premium gaming gear and PC components for the ultimate gaming experience.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* View Mode */}
          <div className="flex gap-1">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing {filteredProducts.length} of {products.length} products
        </p>
        {(searchTerm || selectedCategory !== "All") && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
          >
            Clear filters
          </Button>
        )}
      </div>

      {/* Products grid */}
      <div className={`grid gap-6 ${
        viewMode === "grid" 
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
          : "grid-cols-1"
      }`}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search or filter criteria
          </p>
          <Button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Products;