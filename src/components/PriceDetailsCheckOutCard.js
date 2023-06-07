import { TbCurrencyRupee, TbMinus } from 'react-icons/tb';
import { ProductContext } from "..";
import { useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export function PriceDetailsCheckOutCard() {
  const { state: { cart,addresses },dispatch } = useContext(ProductContext);
  let cartTotal = cart.reduce((acc, { product: { price } }) => acc + price, 0) - 1000 + 499;
  let date = new Date();
  let deliveryDate = new Date(date.getTime() + 1000 * 60 * 60 * 24 * 2);

  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDeliveryDate = deliveryDate.toLocaleDateString(undefined, options);
  const navigate = useNavigate();


  const chooseAddress = () => toast('🦄 Choose one address!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    const success = () =>
      {navigate('/ordersummary');
      dispatch({type:"PLACED_ORDER"});}

  return (
    <div className="price-details-card">
      <h3>Price Details</h3>
      <hr />
      {cart.map(({ product: { title, price },quantity }) => <p><span>{title} {quantity>1 && `(${quantity})`}</span><span><TbCurrencyRupee className="rupee-icon" />{quantity * price}</span></p>)}
      <p><span>Discount</span><span><TbMinus /><TbCurrencyRupee className="rupee-icon" />1000</span></p>
      <p><span>Delivery Charges</span><span><TbCurrencyRupee className="rupee-icon" />499</span></p>
      <hr />
      <h3><span>Total</span><span><TbCurrencyRupee className="rupee-icon" />{cartTotal}</span></h3>
      <hr />
      <div>You will save <b className="discount-save"><TbCurrencyRupee className="rupee-icon" />1000</b> on this order</div>
      <div className="delivery-data"><b>Delivery By:</b> {formattedDeliveryDate}</div>
      <button className="checkout-btn" onClick={()=>{addresses.find(({chosenAddress})=>chosenAddress)?success():chooseAddress()}}>Place Order</button>
    </div>
  );
}