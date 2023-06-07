import { useContext } from "react";
import { ProductContext } from "..";
import { FaRegHeart, FaShoppingCart,FaHeart } from 'react-icons/fa';
import { TbCircleMinus,TbCirclePlus } from 'react-icons/tb';
import cutecartimg from "../assets/404cute.png";
import { PriceDetailsCard } from "../components/PriceDetailsCard";
import { CartCard } from "../components/CartCard";

export function Cart() {
  const {state:{cart}} = useContext(ProductContext);
  return (
    <div className="cart-page">
      <h1>My Cart ({cart.length})</h1>
      {cart.length>0?(<div className="cart-container">
      <div className="cart-content-container">
      {cart.map((cartItem)=><CartCard cartItem={cartItem}/>)}
      </div>
      <PriceDetailsCard />
      </div>):(<div className="cart-content"><img src={cutecartimg} alt="cute-empty-cart-img" /><h2>Your Cart is Empty</h2></div>)}
    </div>
  );
}
