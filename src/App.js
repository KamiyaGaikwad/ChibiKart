import "./App.css";
import {Routes,Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductListing } from "./pages/ProductListing";
import { ProductPage } from "./pages/ProductPage";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/WishList";
import { Navbar } from "./components/Navbar";
import { ErrorPage } from "./pages/ErrorPage";
import { Logout } from "./pages/Logout";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { useContext } from "react";
import { ProductContext } from "./index";
import {LoadingComponent} from "./components/Loading";
import { Checkout } from "./pages/Checkout";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RequiresAuth } from "./components/RequiresAuth";
import { OrderSummary } from "./pages/OrderSummary";

function App() {
  const {loading,isLoggedIn} = useContext(ProductContext);
  return (
    <div className="App">
      {loading && <LoadingComponent />}
      <header className="App-header">
      <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<RequiresAuth isLoggedIn={isLoggedIn}><Cart /></RequiresAuth>} />
        <Route path="/wishlist" element={<RequiresAuth isLoggedIn={isLoggedIn}><WishList /></RequiresAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ordersummary" element={<OrderSummary />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
