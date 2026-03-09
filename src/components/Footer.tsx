import { Link } from "react-router-dom";
import { Sprout, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground mt-20">
    <div className="container py-12 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center">
            <Sprout className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg">FarmConnect</span>
        </div>
        <p className="text-sm opacity-70 leading-relaxed">
          Connecting Nigerian farmers directly with consumers for a transparent, profitable agricultural marketplace.
        </p>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm opacity-70">
          {[["Home", "/"], ["Marketplace", "/marketplace"], ["Farmer Portal", "/farmer-dashboard"], ["Admin", "/admin"]].map(([label, to]) => (
            <li key={to}><Link to={to} className="hover:opacity-100 transition-opacity">{label}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-4">For Farmers</h4>
        <ul className="space-y-2 text-sm opacity-70">
          <li><Link to="/register" className="hover:opacity-100">Register as Farmer</Link></li>
          <li><Link to="/farmer-dashboard" className="hover:opacity-100">List Products</Link></li>
          <li><Link to="/orders" className="hover:opacity-100">Track Orders</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-4">Contact</h4>
        <ul className="space-y-2 text-sm opacity-70">
          <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@farmconnect.ng</li>
          <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +234 800 000 0000</li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Abuja, Nigeria</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-light/20 py-4 text-center text-xs opacity-50">
      © 2024 FarmConnect · Farmers' Market Connect System · All rights reserved
    </div>
  </footer>
);

export default Footer;
