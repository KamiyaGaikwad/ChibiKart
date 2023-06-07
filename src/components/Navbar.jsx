import {NavLink,Link} from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "..";
import { useLocation, useNavigate } from "react-router";
import { FaShoppingCart,FaHeart } from 'react-icons/fa';

export function Navbar(){
  const {filterstate:{searchName},filterdispatch,state:{cart,wishlist}} = useContext(ProductContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(ProductContext);
  // const location = useLocation();
  // const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(false);
    // console.log(location);
    // navigate(location?.state?.from?.pathname);
  };
    return(
        <nav>
        <NavLink to="/" className="logo">ChibiKart</NavLink>
      <Link to="/products" className="search-bar"><input
        type="text"
        className="neumorphic-input"
        placeholder="Search..."
        value={searchName}
        onChange={(e)=>filterdispatch({type:'FILTER_BY_SEARCH',payload:e.target.value})}
      /></Link>
      <div className="links">
        <NavLink to="/products" className="nav-products">Products</NavLink>
        <NavLink to="/cart" className="nav-cart-icon"><FaShoppingCart/>{cart.length>0?<span className="nav-cart-num">{cart.length}</span>:null}</NavLink>
        <NavLink to="/wishlist" className="nav-wish-icon"><FaHeart />{wishlist.length>0?<span className="nav-cart-num">{wishlist.length}</span>:null}</NavLink>
        <button className="add-cart-btn" onClick={handleLogin}>{isLoggedIn ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}</button>
        </div>
      </nav>
    )
}