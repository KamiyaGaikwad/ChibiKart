import {NavLink} from "react-router-dom";

export function Navbar(){
    return(
        <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/wishlist">WishList</NavLink>
      </nav>
    )
}