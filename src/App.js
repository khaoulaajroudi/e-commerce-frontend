import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import Details from "./Components/Details";

function App() {
  const [products, setproducts] = useState([
    {
      id:1,
      category: "TV",
      name: "Plasma TV set",
      price: 567.99,
      originalPrice: 699.0,
      discount: "19% off",
      rating: 4.5,
      reviews: 81,
      image: "https://www.tunisianet.com.tn/14793-large/televiseur-samsung-plasma-51-serie-4.jpg",
    },
    {
      id:2,
      category: "Phone",
      name: "Phone",
      price: 101.99,
      originalPrice: 123.0,
      discount: "18% off",
      rating: 4.0,
      reviews: 62,
      image: "https://m.media-amazon.com/images/I/61Fo5cwt0uL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id:3,
      category: "Appliances",
      name: "Appliances",
      price: 42.0,
      originalPrice: 50.0,
      discount: "18% off",
      rating: 4.5,
      reviews: 72,
      image: "https://travelifestaybetter.com/wp-content/uploads/2022/02/set-of-contemporary-house-appliances-isolated-on-white-picture-id1174598609.jpg",
    },
    {
      id:4,
      category: "Photo & Video",
      name: "Photo & Video",
      price: 320.0,
      originalPrice: 390.0,
      discount: "18% off",
      rating: 4.5,
      reviews: 81,
      image: "https://cdn.lesnumeriques.com/optim/produits/31/40269/nikon-d850_81a4e72f6b53fc31__1200_1200__overflow.jpg",
    },
    {
      id:5,
      category: "Gaming Consoles",
      name: "Gaming consoles",
      price: 85.0,
      originalPrice: 104.0,
      discount: "18% off",
      rating: 4.5,
      reviews: 81,
      image: "https://s.yimg.com/uu/api/res/1.2/LBRgeGZAwDPBCBk3gvRlvw--~B/Zmk9c3RyaW07aD03MjA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2023-05/5a95e9e0-edae-11ed-9efe-f952d9118102",
    },
    {
      id:6,
      category: "Air Conditioning",
      name: "Air conditioning",
      price: 92.0,
      originalPrice: 112.0,
      discount: "18% off",
      rating: 4.5,
      reviews: 81,
      image: "https://m.media-amazon.com/images/I/61rM0HzuVHL.jpg",
    },
    {
      id:7,
      category: "Audio",
      name: "Audio",
      price: 42.0,
      originalPrice: 50.0,
      discount: "18% off",
      rating: 4.5,
      reviews: 72,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84vwq-s6OWLhE_KyVVRAkheI8ipdDAND8zw&s",
    },
  ]);
  const addproduit=(x)=>{
    return (setproducts([x,...products]))
  }
  return (
  <div className="App">

<Routes>
  <Route path='/' element={<Home data={products} fnct={addproduit}/>}></Route>
  <Route path="/add" element={<AddProduct/>}></Route>
  <Route path="/detail/:id" element={<Details data={products} />}></Route>
</Routes>


  </div>
  )
}

export default App;
