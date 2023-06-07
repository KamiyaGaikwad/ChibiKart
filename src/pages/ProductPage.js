import { useParams,Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "..";
import { FaRegHeart, FaStar, FaShoppingCart,FaHeart } from 'react-icons/fa';
import { TbCurrencyRupee } from 'react-icons/tb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ProductPage() {
  const {productId} = useParams();
  const {state:{products,cart,wishlist},dispatch} = useContext(ProductContext);
  const renderStarIcons = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <FaStar className="star-icon" key={index} />
    ));
  };

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

      const cartAdd = () => toast('🦄 Added to cart!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


  let singleProduct = products.find(({_id})=> _id === productId);
  return (
    <div className="single-product-page">
      <div className="single-product-image">
        <img src={singleProduct?.imageLink} alt={singleProduct?.title} className="product-img" />
        <div className="heart-container" onClick={()=>dispatch({type:'UPDATE_TO_WISHLIST',payload:singleProduct})}>{wishlist.includes(singleProduct)?<FaHeart className="heart-icon-filled" onClick={wishRemove}/>:<FaRegHeart className="heart-icon" onClick={wishAdd} />}</div>
      </div>
      <div className="single-product-content">
        <h2>{singleProduct?.title}</h2>
        <div className="product-pricing"><div><TbCurrencyRupee className="rupee-icon" /><b>{singleProduct?.price}</b> <span className="striked-text"><TbCurrencyRupee className="striked-rupee-icon" />{singleProduct?.original_price}</span></div><span className='discount-price'>{singleProduct?.discount_percent}% OFF</span></div>
        <p><b>Anime: </b>{singleProduct?.anime}</p>
        <p><b>Category: </b>{singleProduct?.categoryName}</p>
        <p className="rating-stars"><b>Rating: </b>{renderStarIcons(singleProduct?.rating)}</p>
        <button style={{background:cart.some((item)=> item.product._id === singleProduct._id)?'#17A2B8':null}} className="add-cart-btn" onClick={()=>dispatch({type:'ADD_TO_CART',payload:singleProduct})}><FaShoppingCart className="cart-icon" />{cart.some((item)=> item.product._id === singleProduct._id)?<Link to="/cart">Go to Cart</Link>:<span onClick={cartAdd}>Add to Cart</span>}</button>
      </div>
    </div>
  );
}
