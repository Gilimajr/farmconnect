import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ORDERS } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Package, Truck, CheckCircle, Clock, XCircle } from "lucide-react";

const statusConfig: Record<string, { color: string; icon: React.ElementType }> = {
  Delivered: { color: "bg-forest-light text-forest", icon: CheckCircle },
  "In Transit": { color: "bg-harvest-light text-earth", icon: Truck },
  Processing: { color: "bg-muted text-muted-foreground", icon: Clock },
  Cancelled: { color: "bg-destructive/10 text-destructive", icon: XCircle },
};

const Orders = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="container py-10 max-w-4xl">
      <h1 className="font-display text-3xl font-bold mb-2">Order Tracking</h1>
      <p className="text-muted-foreground mb-8">Monitor your orders from processing to delivery</p>
      <div className="space-y-4">
        {ORDERS.map((o) => {
          const sc = statusConfig[o.status] || statusConfig.Processing;
          return (
            <div key={o.id} className="bg-card border border-border rounded-xl p-5 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-lg bg-forest-light flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{o.id}</div>
                  <div className="text-xs text-muted-foreground">{o.consumer} · {o.date}</div>
                </div>
              </div>
              <div className="flex-1 text-sm text-muted-foreground">{o.items}</div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="font-bold text-primary">₦{o.total.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">{o.payment}</div>
                </div>
                <Badge className={`${sc.color} flex items-center gap-1 font-medium`}>
                  <sc.icon className="w-3 h-3" /> {o.status}
                </Badge>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <Footer />
  </div>
);

export default Orders;
