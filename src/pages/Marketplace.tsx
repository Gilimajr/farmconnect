import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Marketplace = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = category === "All" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.farmer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-10">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Farm Marketplace</h1>
          <p className="text-muted-foreground">Browse fresh products from verified farmers across Nigeria</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search products or farmers..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === c
                    ? "gradient-primary text-primary-foreground shadow-green"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{filtered.length} products found</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">No products match your search.</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
