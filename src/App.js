import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

const foods = [
  { 
    name: "Pizza Margherita", 
    desc: "Classic Italian pizza with tomato, mozzarella & basil.",
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=400&q=80"
 
  },
  { 
    name: "Sushi Platter", 
    desc: "Fresh salmon, tuna & shrimp sushi assortment.", 
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    name: "Cheeseburger", 
    desc: "Juicy beef patty with cheddar, lettuce & tomato.", 
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    name: "Pasta Carbonara", 
    desc: "Creamy pasta with pancetta, egg & parmesan.", 
    img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    name: "Salad Bowl", 
    desc: "Fresh greens, avocado, chickpeas & dressing.", 
    img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=80" 
  }
];

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px", backgroundColor: "#fff8f0" }}>
      <h1 style={{ textAlign: "center", color: "#d35400" }}>🍴 Foodie Paradise</h1>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", width: "60%" }}
        />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {filteredFoods.map((food, idx) => (
          <div key={idx} style={{
            border: "1px solid #eee",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
          }}>
            <img src={food.img} alt={food.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <div style={{ padding: "15px" }}>
              <h2 style={{ color: "#e67e22" }}>{food.name}</h2>
              <p style={{ fontSize: "14px", color: "#555" }}>{food.desc}</p>
              <button style={{
                marginTop: "10px",
                padding: "10px",
                width: "100%",
                backgroundColor: "#e67e22",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                cursor: "pointer"
              }}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

