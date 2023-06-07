import { useContext } from "react";
import { ProductContext } from "..";
import cutewishimg from "../assets/levi_clean.gif";
import { Wishcard} from "../components/Wishcard";

export function WishList() {
  const {state:{wishlist}} = useContext(ProductContext);
  return (
    <div className="wish-page">
      <h1>My WishList ({wishlist.length})</h1>
      {wishlist.length>0?(<div className="wish-container">{wishlist.map((wishproduct)=><Wishcard product={wishproduct} />)}</div>):(<div className="wish-content"><img src={cutewishimg} alt="cute-empty-wish-img" /><h2>Your WishList is Empty</h2></div>)}
    </div> 
  );
}
