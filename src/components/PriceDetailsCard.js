import { useContext } from "react";
import { ProductContext } from "..";
import { TbCurrencyRupee, TbMinus } from 'react-icons/tb';
import { Link } from "react-router-dom";


export function PriceDetailsCard() {
  const { state: { cart } } = useContext(ProductContext);
  let cartTotal = cart.reduce((acc, { product: { price } }) => acc + price, 0) - 1000 + 499;
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
      <div>You will save <span className="discount-save"><TbCurrencyRupee className="rupee-icon" />1000</span> on this order</div>
      <button className="checkout-btn"><Link to="/checkout">Checkout</Link></button>
    </div>
  );
}
