import { FaRegHeart, FaStar, FaShoppingCart,FaHeart } from 'react-icons/fa';
import { TbCurrencyRupee } from 'react-icons/tb';
import { useContext } from 'react';
import { ProductContext } from '..';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function ProductCard({ product }) {
  const {state:{cart,wishlist},dispatch} = useContext(ProductContext);
  const notify = () => toast('🦄 Added to cart!', {
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
  return (
    <>
    {product?<div className="product-card" key={product?._id}>
      <div className="img-container">
      <Link to={`/products/product/${product?._id}`}><img src={product?.imageLink} alt={product?.title} className="product-img" /></Link>
        <div className="heart-container" onClick={()=>dispatch({type:'UPDATE_TO_WISHLIST',payload:product})}>{wishlist.includes(product)?<FaHeart className="heart-icon-filled" onClick={wishRemove}/>:<FaRegHeart className="heart-icon"  onClick={wishAdd} />}</div>
        <Link to={`/products/product/${product?._id}`}><div className="star-rating-container"><FaStar className="star-icon" />{product?.rating}</div></Link>
      </div>
      <div className="product-content">
      <Link to={`/products/product/${product._id}`}><p className="product-title">{product?.title}</p>
        <div className="product-pricing"><div><TbCurrencyRupee className="rupee-icon" /><b>{product?.price}</b> <span className="striked-text"><TbCurrencyRupee className="striked-rupee-icon" />{product?.original_price}</span></div><span className='discount-price'>{product?.discount_percent}% OFF</span></div></Link>
        <button style={{background:cart.some((item)=> item.product._id === product._id)?'#17A2B8':null}} className="add-cart-btn" onClick={()=>dispatch({type:'ADD_TO_CART',payload:product})}><FaShoppingCart className="cart-icon" />{cart.some((item)=> item.product._id === product._id)?<Link to="/cart">Go to Cart</Link>:<span onClick={()=>notify()}>Add to Cart</span>}</button>
        {/* <ToastContainer /> */}
      </div>
    </div>:null}
    </>
  );
}
