import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, MapPin } from "lucide-react";
import { toast } from "sonner";

type Product = {
  id: number;
  name: string;
  price: number;
  unit: string;
  farmer: string;
  location: string;
  category: string;
  stock: number;
  rating: number;
  image: string;
  desc: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, unit: product.unit, farmer: product.farmer, image: product.image });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300 group">
      {/* Emoji image area */}
      <div className="h-36 bg-forest-light flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
        {product.image}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-display font-semibold text-foreground">{product.name}</h3>
          <Badge variant="secondary" className="text-xs bg-harvest-light text-earth ml-2 shrink-0">{product.category}</Badge>
        </div>
        <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{product.desc}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
          <MapPin className="w-3 h-3" />
          <span>{product.location}</span>
          <span className="mx-1">·</span>
          <Star className="w-3 h-3 fill-harvest text-harvest" />
          <span>{product.rating}</span>
        </div>
        <p className="text-xs text-muted-foreground mb-1">{product.farmer}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">₦{product.price.toLocaleString()}</span>
            <span className="text-xs text-muted-foreground ml-1">{product.unit}</span>
          </div>
          <Button size="sm" onClick={handleAdd} className="gradient-primary text-primary-foreground border-0 shadow-green text-xs">
            <ShoppingCart className="w-3 h-3 mr-1" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
