import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
    toast.success("Order placed successfully!");
  };

  if (placed)
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-20 text-center max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold mb-3">Order Placed!</h1>
          <p className="text-muted-foreground mb-2">Your order has been placed successfully. You can track it from the orders page.</p>
          <p className="text-sm font-mono text-primary font-semibold mb-6">Order ID: ORD-{Math.floor(Math.random() * 10000).toString().padStart(4, "0")}</p>
          <div className="flex gap-3 justify-center">
            <Link to="/orders"><Button variant="outline">Track Orders</Button></Link>
            <Link to="/marketplace"><Button className="gradient-primary text-primary-foreground border-0">Continue Shopping</Button></Link>
          </div>
        </div>
        <Footer />
      </div>
    );

  if (items.length === 0) { navigate("/cart"); return null; }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-10 max-w-2xl">
        <h1 className="font-display text-3xl font-bold mb-8">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <h2 className="font-display font-semibold text-lg">Delivery Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>First Name</Label><Input placeholder="Aminu" required /></div>
              <div><Label>Last Name</Label><Input placeholder="Dabo" required /></div>
            </div>
            <div><Label>Phone Number</Label><Input placeholder="+234 800 000 0000" required /></div>
            <div><Label>Delivery Address</Label><Input placeholder="123 Market Road, Abuja" required /></div>
            <div><Label>Email</Label><Input type="email" placeholder="aminu@email.com" required /></div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <h2 className="font-display font-semibold text-lg">Payment Method</h2>
            <div className="space-y-2">
              {["Card Payment", "Bank Transfer", "Pay on Delivery"].map((m) => (
                <label key={m} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted cursor-pointer">
                  <input type="radio" name="payment" defaultChecked={m === "Card Payment"} className="accent-primary" />
                  <span className="text-sm font-medium">{m}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-display font-semibold text-lg mb-4">Order Summary</h2>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm py-1">
                <span className="text-muted-foreground">{item.name} × {item.qty}</span>
                <span className="font-medium">₦{(item.price * item.qty).toLocaleString()}</span>
              </div>
            ))}
            <div className="border-t border-border mt-3 pt-3 flex justify-between font-bold">
              <span>Total (incl. delivery)</span>
              <span className="text-primary">₦{(totalPrice + 500).toLocaleString()}</span>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground border-0 shadow-green">
            Place Order — ₦{(totalPrice + 500).toLocaleString()}
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
