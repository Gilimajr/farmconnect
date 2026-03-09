export const PRODUCTS = [
  { id: 1, name: "Fresh Tomatoes", price: 800, unit: "per kg", farmer: "Emeka Farms", location: "Kano", category: "Vegetables", stock: 120, rating: 4.8, image: "🍅", desc: "Ripe, juicy tomatoes straight from the farm." },
  { id: 2, name: "Yam Tubers", price: 2500, unit: "per bag", farmer: "Bello Agro", location: "Benue", category: "Tubers", stock: 60, rating: 4.9, image: "🍠", desc: "Premium size yam tubers, freshly harvested." },
  { id: 3, name: "Plantain", price: 1200, unit: "per bunch", farmer: "Green Valley Farm", location: "Oyo", category: "Fruits", stock: 80, rating: 4.7, image: "🍌", desc: "Sweet ripe plantains, perfect for frying." },
  { id: 4, name: "Red Peppers", price: 600, unit: "per kg", farmer: "Emeka Farms", location: "Kano", category: "Vegetables", stock: 200, rating: 4.6, image: "🌶️", desc: "Hot and flavorful red peppers." },
  { id: 5, name: "Cassava Flour", price: 1500, unit: "per 5kg", farmer: "Sunny Roots Co", location: "Enugu", category: "Grains", stock: 90, rating: 4.5, image: "🌾", desc: "Finely milled cassava flour, gluten-free." },
  { id: 6, name: "Garden Eggs", price: 500, unit: "per basket", farmer: "Fatima Farms", location: "Kaduna", category: "Vegetables", stock: 150, rating: 4.4, image: "🥚", desc: "Fresh garden eggs, great for soups." },
  { id: 7, name: "Groundnuts", price: 1800, unit: "per kg", farmer: "Sahel Agro", location: "Kebbi", category: "Nuts", stock: 70, rating: 4.7, image: "🥜", desc: "Shelled, roasted-ready groundnuts." },
  { id: 8, name: "Watermelon", price: 2000, unit: "each", farmer: "Delta Farms", location: "Delta", category: "Fruits", stock: 45, rating: 4.9, image: "🍉", desc: "Large, sweet watermelons, farm-fresh." },
  { id: 9, name: "Spinach", price: 400, unit: "per bundle", farmer: "Green Valley Farm", location: "Oyo", category: "Vegetables", stock: 300, rating: 4.6, image: "🥬", desc: "Tender, dark-green organic spinach." },
  { id: 10, name: "Palm Oil", price: 3500, unit: "per 5L", farmer: "Bello Agro", location: "Rivers", category: "Oils", stock: 55, rating: 4.8, image: "🫙", desc: "Pure, unrefined red palm oil." },
  { id: 11, name: "Oranges", price: 1000, unit: "per dozen", farmer: "Citrus King", location: "Plateau", category: "Fruits", stock: 200, rating: 4.7, image: "🍊", desc: "Juicy, vitamin-rich plateau oranges." },
  { id: 12, name: "Onions", price: 700, unit: "per kg", farmer: "Sahel Agro", location: "Sokoto", category: "Vegetables", stock: 180, rating: 4.5, image: "🧅", desc: "Large, pungent Sokoto red onions." },
];

export const FARMERS = [
  { id: 1, name: "Emeka Chukwu", farm: "Emeka Farms", location: "Kano State", joined: "Jan 2024", products: 8, sales: 312, revenue: 480000, rating: 4.8, status: "Active" },
  { id: 2, name: "Musa Bello", farm: "Bello Agro", location: "Benue State", joined: "Mar 2024", products: 5, sales: 195, revenue: 620000, rating: 4.9, status: "Active" },
  { id: 3, name: "Fatima Aliyu", farm: "Fatima Farms", location: "Kaduna State", joined: "Feb 2024", products: 6, sales: 142, revenue: 280000, rating: 4.4, status: "Active" },
  { id: 4, name: "Chidinma Eze", farm: "Green Valley Farm", location: "Oyo State", joined: "Apr 2024", products: 10, sales: 420, revenue: 750000, rating: 4.7, status: "Active" },
  { id: 5, name: "Ibrahim Musa", farm: "Sahel Agro", location: "Kebbi State", joined: "May 2024", products: 4, sales: 98, revenue: 195000, rating: 4.6, status: "Pending" },
];

export const ORDERS = [
  { id: "ORD-001", consumer: "Aminu Dabo", items: "Tomatoes x2kg, Onions x1kg", total: 2300, date: "2024-11-10", status: "Delivered", payment: "Paid" },
  { id: "ORD-002", consumer: "Ngozi Obi", items: "Yam Tubers x1 bag", total: 2500, date: "2024-11-11", status: "In Transit", payment: "Paid" },
  { id: "ORD-003", consumer: "Tunde Rasheed", items: "Palm Oil 5L, Plantain x2", total: 5900, date: "2024-11-12", status: "Processing", payment: "Pending" },
  { id: "ORD-004", consumer: "Blessing Udo", items: "Watermelon x1, Oranges x2dz", total: 4000, date: "2024-11-13", status: "Delivered", payment: "Paid" },
  { id: "ORD-005", consumer: "Yakubu Hassan", items: "Groundnuts 2kg, Spinach x3", total: 4800, date: "2024-11-14", status: "Cancelled", payment: "Refunded" },
];

export const CATEGORIES = ["All", "Vegetables", "Fruits", "Tubers", "Grains", "Nuts", "Oils"];
