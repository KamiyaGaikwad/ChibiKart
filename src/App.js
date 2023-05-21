import "./App.css";
import {Routes,Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductListing } from "./pages/ProductListing";
import { ProductPage } from "./pages/ProductPage";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/WishList";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;
