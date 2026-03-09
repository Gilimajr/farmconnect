import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
  const { items, updateQty, removeItem, totalPrice, clearCart } = useCart();

  if (items.length === 0)
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-20 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
          <h1 className="font-display text-2xl font-bold mb-2">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Browse our marketplace to find fresh products!</p>
          <Link to="/marketplace"><Button className="gradient-primary text-primary-foreground border-0">Browse Marketplace</Button></Link>
        </div>
        <Footer />
      </div>
    );

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-10 max-w-4xl">
        <h1 className="font-display text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-card border border-border rounded-xl p-4">
              <div className="w-14 h-14 bg-forest-light rounded-lg flex items-center justify-center text-3xl shrink-0">{item.image}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                <p className="text-xs text-muted-foreground">{item.farmer} · ₦{item.price.toLocaleString()} {item.unit}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="outline" className="w-8 h-8" onClick={() => updateQty(item.id, item.qty - 1)}><Minus className="w-3 h-3" /></Button>
                <span className="w-8 text-center font-medium text-sm">{item.qty}</span>
                <Button size="icon" variant="outline" className="w-8 h-8" onClick={() => updateQty(item.id, item.qty + 1)}><Plus className="w-3 h-3" /></Button>
              </div>
              <div className="text-right w-20">
                <div className="font-bold text-primary">₦{(item.price * item.qty).toLocaleString()}</div>
              </div>
              <Button size="icon" variant="ghost" className="text-destructive hover:text-destructive" onClick={() => { removeItem(item.id); toast.info("Item removed"); }}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex justify-between mb-2">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-semibold">₦{totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-muted-foreground">Delivery Fee</span>
            <span className="font-semibold">₦500</span>
          </div>
          <div className="border-t border-border my-4" />
          <div className="flex justify-between text-lg">
            <span className="font-display font-bold">Total</span>
            <span className="font-display font-bold text-primary">₦{(totalPrice + 500).toLocaleString()}</span>
          </div>
          <Link to="/checkout">
            <Button className="w-full mt-6 gradient-primary text-primary-foreground border-0 shadow-green" size="lg">
              Proceed to Checkout <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
