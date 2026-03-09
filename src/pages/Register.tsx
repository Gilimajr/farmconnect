import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Sprout, UserPlus } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"farmer" | "consumer">("farmer");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`${role === "farmer" ? "Farmer" : "Consumer"} registered successfully!`);
    navigate(role === "farmer" ? "/farmer-dashboard" : "/marketplace");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-10 max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold">Join FarmConnect</h1>
          <p className="text-muted-foreground mt-2">Create an account to get started</p>
        </div>

        <div className="flex bg-muted rounded-lg p-1 mb-6">
          {(["farmer", "consumer"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${role === r ? "bg-card shadow text-primary font-semibold" : "text-muted-foreground"}`}
            >
              {r === "farmer" ? "🌱 Farmer" : "🛒 Consumer"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><Label>First Name</Label><Input required /></div>
            <div><Label>Last Name</Label><Input required /></div>
          </div>
          <div><Label>Email</Label><Input type="email" required /></div>
          <div><Label>Phone</Label><Input required /></div>
          <div><Label>Password</Label><Input type="password" required /></div>
          {role === "farmer" && (
            <>
              <div><Label>Farm Name</Label><Input required /></div>
              <div><Label>Farm Location (State)</Label><Input required /></div>
            </>
          )}
          {role === "consumer" && (
            <div><Label>Delivery Address</Label><Input required /></div>
          )}
          <Button type="submit" className="w-full gradient-primary text-primary-foreground border-0 shadow-green" size="lg">
            Create Account
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
