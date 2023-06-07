import { useContext } from "react";
import { ProductContext } from "..";
import { TbCurrencyRupee } from 'react-icons/tb';
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegHeart, FaStar, FaShoppingCart,FaHeart } from 'react-icons/fa';


export function CartCard({ cartItem }) {
  const { state:{wishlist},dispatch } = useContext(ProductContext);
  const moveWish = () => toast('🦄 Moved to wishlist!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    const removeCart = () => toast('🦄 Removed from Cart!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      const wishRemove = () => toast('🦄 Removed from wishlist!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        const wishAdd = () => toast('🦄 Added to wishlist!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
  return (
    <div className="cart-card">
      <div className="cart-card-left">
        <img className='product-img' src={cartItem?.product?.imageLink} alt={cartItem?.product.title} />
        <div className="heart-container" onClick={()=>dispatch({type:'UPDATE_TO_WISHLIST',payload:cartItem?.product})}>{wishlist.includes(cartItem?.product)?<FaHeart className="heart-icon-filled" onClick={wishRemove} />:<FaRegHeart className="heart-icon"  onClick={wishAdd} />}</div>
        <div className="star-rating-container"><FaStar className="star-icon" />{cartItem?.product?.rating}</div>
      </div>
      <div className="cart-card-right">
        <p className="product-title">{cartItem?.product.title}</p>
        <div className="product-pricing"><div><TbCurrencyRupee className="rupee-icon" />{cartItem?.product.price} <span className="striked-text"><TbCurrencyRupee className="striked-rupee-icon" />{cartItem?.product.original_price}</span></div><h4>{cartItem?.product.discount_percent}% OFF</h4></div>
        <div className="quantity-div">Quantity: <><HiMinusCircle onClick={() => dispatch({ type: 'DEC_QTY_FROM_CART', payload: cartItem })} className="minus-icon" /><span className="quantity-value">{cartItem?.quantity}</span><HiPlusCircle onClick={() => dispatch({ type: 'INC_QTY_OF_CART', payload: cartItem })} className="plus-icon" /></></div>
        <button className="add-cart-btn" onClick={() => {dispatch({ type: 'REMOVE_FROM_CART', payload: cartItem });removeCart()}}>Remove from Cart</button>
        <button className="add-cart-btn move-wish" onClick={() => {dispatch({ type: 'MOVE_TO_WISHLIST', payload: cartItem });moveWish()}}>Move to WishList</button>
      </div>
    </div>
  );
}
