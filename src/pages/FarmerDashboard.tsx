import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCTS, ORDERS } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Package, Plus, BarChart3, ShoppingBag, Star, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const myProducts = PRODUCTS.filter((p) => p.farmer === "Emeka Farms");
const myOrders = ORDERS.slice(0, 3);

const FarmerDashboard = () => {
  const [showAdd, setShowAdd] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAdd(false);
    toast.success("Product listed successfully!");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold">Farmer Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Emeka Chukwu · Emeka Farms</p>
          </div>
          <Button onClick={() => setShowAdd(!showAdd)} className="gradient-primary text-primary-foreground border-0 shadow-green">
            <Plus className="w-4 h-4 mr-2" /> List Product
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: ShoppingBag, label: "Products", value: "8", color: "bg-forest-light text-primary" },
            { icon: Package, label: "Orders", value: "312", color: "bg-harvest-light text-earth" },
            { icon: TrendingUp, label: "Revenue", value: "₦480K", color: "bg-forest-light text-primary" },
            { icon: Star, label: "Rating", value: "4.8", color: "bg-harvest-light text-earth" },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-5 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg ${s.color} flex items-center justify-center`}>
                <s.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-display font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Add product form */}
        {showAdd && (
          <div className="bg-card border border-border rounded-xl p-6 mb-8 animate-fade-up">
            <h2 className="font-display font-semibold text-lg mb-4">Add New Product</h2>
            <form onSubmit={handleAdd} className="grid md:grid-cols-2 gap-4">
              <div><Label>Product Name</Label><Input placeholder="e.g. Fresh Tomatoes" required /></div>
              <div><Label>Category</Label><Input placeholder="e.g. Vegetables" required /></div>
              <div><Label>Price (₦)</Label><Input type="number" placeholder="800" required /></div>
              <div><Label>Unit</Label><Input placeholder="e.g. per kg" required /></div>
              <div><Label>Stock Quantity</Label><Input type="number" placeholder="100" required /></div>
              <div><Label>Location</Label><Input placeholder="Kano" required /></div>
              <div className="md:col-span-2"><Label>Description</Label><Textarea placeholder="Describe your product..." required /></div>
              <div className="md:col-span-2 flex gap-2">
                <Button type="submit" className="gradient-primary text-primary-foreground border-0">Add Product</Button>
                <Button type="button" variant="outline" onClick={() => setShowAdd(false)}>Cancel</Button>
              </div>
            </form>
          </div>
        )}

        <Tabs defaultValue="products">
          <TabsList className="bg-muted">
            <TabsTrigger value="products">My Products</TabsTrigger>
            <TabsTrigger value="orders">Recent Orders</TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="mt-4">
            <div className="space-y-3">
              {myProducts.map((p) => (
                <div key={p.id} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
                  <div className="text-3xl">{p.image}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.category} · {p.stock} in stock</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">₦{p.price.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{p.unit}</div>
                  </div>
                  <Badge className="bg-forest-light text-forest">Active</Badge>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="orders" className="mt-4">
            <div className="space-y-3">
              {myOrders.map((o) => (
                <div key={o.id} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
                  <div className="flex-1">
                    <div className="font-semibold text-foreground text-sm">{o.id}</div>
                    <div className="text-xs text-muted-foreground">{o.consumer} · {o.date}</div>
                  </div>
                  <div className="font-bold text-primary">₦{o.total.toLocaleString()}</div>
                  <Badge variant="outline">{o.status}</Badge>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default FarmerDashboard;
