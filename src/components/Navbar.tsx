import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const links = [
    { to: "/", label: "Home" },
    { to: "/marketplace", label: "Marketplace" },
    { to: "/farmer-dashboard", label: "Farmer Portal" },
    { to: "/admin", label: "Admin" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border shadow-[0_2px_12px_hsl(var(--primary)/0.08)]">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
            <Sprout className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-primary">FarmConnect</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-md text-sm font-medium font-body transition-colors ${
                location.pathname === l.to
                  ? "bg-forest-light text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative">
            <Button variant="outline" size="icon" className="border-border">
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-secondary text-secondary-foreground">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="hidden md:inline-flex gradient-primary text-primary-foreground border-0 shadow-green">
              Get Started
            </Button>
          </Link>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card p-4 space-y-1 animate-fade-in">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-muted"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
