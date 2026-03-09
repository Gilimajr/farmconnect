import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, ShieldCheck, TrendingUp, Users, Star, Truck } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/mockData";

const features = [
  { icon: Leaf, title: "Farm-Fresh Products", desc: "Directly from local farms, no middlemen, always fresh." },
  { icon: ShieldCheck, title: "Secure Payments", desc: "Safe, encrypted transactions with multiple payment options." },
  { icon: TrendingUp, title: "Better Income", desc: "Farmers earn more by connecting directly with buyers." },
  { icon: Truck, title: "Order Tracking", desc: "Track your orders from farm to doorstep in real-time." },
];

const stats = [
  { value: "2,500+", label: "Farmers Registered" },
  { value: "15,000+", label: "Orders Fulfilled" },
  { value: "36", label: "States Covered" },
  { value: "₦45M+", label: "Farmer Earnings" },
];

const Index = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Fresh farm products" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      <div className="relative container py-24 md:py-36">
        <div className="max-w-2xl space-y-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur">
            <Leaf className="w-3 h-3" /> Farmers' Market Connect
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight">
            Farm-Fresh Products,<br />Delivered to <span className="text-harvest">You</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-lg leading-relaxed">
            Connecting Nigerian farmers directly with consumers. No middlemen — just fair prices, fresh food, and transparent transactions.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/marketplace">
              <Button size="lg" className="gradient-amber text-secondary-foreground font-semibold border-0 shadow-amber text-base px-8">
                Browse Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" className="bg-white text-secondary-foreground font-semibold border border-white hover:bg-transparent hover:text-white text-base px-8 transition-colors">
                Join as Farmer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="container -mt-8 relative z-10">
      <div className="bg-card rounded-2xl shadow-[var(--shadow-lg)] border border-border p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl md:text-3xl font-display font-bold text-primary">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="container py-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why FarmConnect?</h2>
        <p className="text-muted-foreground leading-relaxed">
          A transparent agricultural marketplace that works for both farmers and consumers.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="p-6 rounded-xl bg-card border border-border hover:shadow-[var(--shadow-md)] transition-shadow text-center group">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:shadow-green transition-shadow">
              <f.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Featured products */}
    <section className="bg-forest-light py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div>
        <h2 className="font-display text-3xl font-bold text-foreground">Featured Products</h2>
            <p className="text-muted-foreground mt-2">Fresh from local farms across Nigeria</p>
          </div>
          <Link to="/marketplace">
            <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="container py-20">
      <h2 className="font-display text-3xl font-bold text-center mb-10">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Chidinma Eze", role: "Farmer, Oyo State", text: "FarmConnect doubled my revenue. I now reach customers all over Nigeria directly!", stars: 5 },
          { name: "Aminu Dabo", role: "Consumer, Abuja", text: "Fresh products at fair prices — I love knowing exactly where my food comes from.", stars: 5 },
          { name: "Fatima Aliyu", role: "Farmer, Kaduna State", text: "The platform is so easy to use, even for someone not tech-savvy. Very empowering!", stars: 4 },
        ].map((t) => (
          <div key={t.name} className="p-6 bg-card rounded-xl border border-border">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-harvest text-harvest" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">"{t.text}"</p>
            <div>
              <div className="font-semibold text-sm text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="container pb-20">
      <div className="rounded-2xl gradient-primary p-10 md:p-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Join thousands of farmers and consumers on Nigeria's fastest-growing agricultural marketplace.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/register"><Button size="lg" className="gradient-amber text-secondary-foreground font-semibold border-0 shadow-amber">Register as Farmer</Button></Link>
          <Link to="/marketplace"><Button size="lg" className="bg-white text-secondary-foreground font-semibold border border-white hover:bg-transparent hover:text-white transition-colors">Start Shopping</Button></Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
