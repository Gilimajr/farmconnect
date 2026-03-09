import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FARMERS, ORDERS, PRODUCTS } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Users, Package, ShoppingBag, TrendingUp, DollarSign, BarChart3 } from "lucide-react";

const AdminDashboard = () => {
  const totalRevenue = FARMERS.reduce((s, f) => s + f.revenue, 0);
  const totalOrders = ORDERS.length;
  const totalFarmers = FARMERS.length;
  const totalProducts = PRODUCTS.length;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-10">
        <h1 className="font-display text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground mb-8">System overview and management</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Users, label: "Farmers", value: totalFarmers, color: "bg-forest-light text-primary" },
            { icon: ShoppingBag, label: "Products", value: totalProducts, color: "bg-harvest-light text-earth" },
            { icon: Package, label: "Orders", value: totalOrders, color: "bg-forest-light text-primary" },
            { icon: DollarSign, label: "Revenue", value: `₦${(totalRevenue / 1000).toFixed(0)}K`, color: "bg-harvest-light text-earth" },
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

        {/* Farmers Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-border flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <h2 className="font-display font-semibold">Registered Farmers</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted text-muted-foreground">
                <tr>
                  {["Farmer", "Farm", "Location", "Products", "Sales", "Revenue", "Rating", "Status"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FARMERS.map((f) => (
                  <tr key={f.id} className="border-t border-border hover:bg-muted/50">
                    <td className="px-4 py-3 font-medium text-foreground">{f.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{f.farm}</td>
                    <td className="px-4 py-3 text-muted-foreground">{f.location}</td>
                    <td className="px-4 py-3">{f.products}</td>
                    <td className="px-4 py-3">{f.sales}</td>
                    <td className="px-4 py-3 font-semibold text-primary">₦{f.revenue.toLocaleString()}</td>
                    <td className="px-4 py-3">⭐ {f.rating}</td>
                    <td className="px-4 py-3">
                      <Badge className={f.status === "Active" ? "bg-forest-light text-forest" : "bg-harvest-light text-earth"}>{f.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center gap-2">
            <Package className="w-4 h-4 text-primary" />
            <h2 className="font-display font-semibold">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted text-muted-foreground">
                <tr>
                  {["Order ID", "Consumer", "Items", "Total", "Date", "Status", "Payment"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ORDERS.map((o) => (
                  <tr key={o.id} className="border-t border-border hover:bg-muted/50">
                    <td className="px-4 py-3 font-mono font-medium text-primary">{o.id}</td>
                    <td className="px-4 py-3">{o.consumer}</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{o.items}</td>
                    <td className="px-4 py-3 font-semibold">₦{o.total.toLocaleString()}</td>
                    <td className="px-4 py-3 text-muted-foreground">{o.date}</td>
                    <td className="px-4 py-3"><Badge variant="outline">{o.status}</Badge></td>
                    <td className="px-4 py-3"><Badge className={o.payment === "Paid" ? "bg-forest-light text-forest" : "bg-muted text-muted-foreground"}>{o.payment}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
