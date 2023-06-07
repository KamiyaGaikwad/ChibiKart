import { ProductContext } from "..";
import { useContext } from "react";
import { TbCurrencyRupee } from 'react-icons/tb';

export function OrderSummary() {
  const { state: { orderhistory,addresses} } = useContext(ProductContext);
  let date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const formattedOrderDate = date.toLocaleDateString(undefined, options);
  let cartTotal = orderhistory.reduce((acc, { product: { price } }) => acc + price, 0) - 1000 + 499;
  let deliveryDate = new Date(date.getTime() + 1000 * 60 * 60 * 24 * 2);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString(undefined, options);
  return (
    <div className="order-summary-page">
      <div className="order-summary-header">
      <h1>Thank You, John Doe</h1> 
      <p>Your order is placed successfully</p>
      </div>
      <div className="order-summary-container">
      <div className="order-details-container">
      <h2>Order Details</h2>
        <div className="grey-box">
          <p><b>Order date:</b><span>{formattedOrderDate}</span></p>
          <p><b>Order num:</b><span>100gg</span></p>
          <p><b>Order total:</b><span><TbCurrencyRupee className="rupee-icon" />{cartTotal} ({orderhistory.length}{orderhistory.length>1?' items':' item'})</span></p>
        </div>
      </div>
      <div className="order-details-container order-last">
      <h2>Shipment Details</h2>
        <div className="grey-box-two">
          <p className="delivery-estimate"><b>Delivery Estimate:</b><span>{formattedDeliveryDate}</span> </p>
          <div className="order-products-details">
          {orderhistory.map(({product,quantity})=><div className="shipment-details">
            <img src={product?.imageLink} alt={product?.title}/>
            <div>
            <p>{product?.title}</p>
            <p>qty : {quantity}</p>
            </div>
            <p><TbCurrencyRupee className="rupee-icon" />{product?.price}</p>
          </div>)}
          </div>
        </div>
      </div>
      <div className="order-details-container">
      <h2>Payment Information</h2>
        <div className="grey-box">
          <p><b>Payment Method:</b><span>Cash</span></p>
          <p><b>Billing Address:</b> {addresses.map(({name,address,pincode,mobile,chosenAddress})=>chosenAddress?<div><h4>{name}</h4>
        <p> {address}</p>
        <p><b>Pincode:</b> {pincode}</p>
        <p><b>Mobile:</b> {mobile}</p></div>:null)}</p>
        </div>
      </div>
      <div className="order-details-container">
      <h2>Shipping Address</h2>
        <div className="grey-box">
          <p>{addresses.map(({name,address,pincode,mobile,chosenAddress})=>chosenAddress?<div><h4>{name}</h4>
        <p> {address}</p>
        <p><b>Pincode: </b>  {pincode}</p>
        <p><b>Mobile: </b>  {mobile}</p></div>:null)} </p>
        </div>
      </div>
      <div className="order-details-container">
      <h2>Order Summary</h2>
        <div className="order-prices">
          <p><b>Items</b><span><TbCurrencyRupee className="rupee-icon" />{orderhistory.reduce((acc, { product: { price } }) => acc + price, 0)}</span></p>
          <p><b>Discount</b><span>-<TbCurrencyRupee className="rupee-icon" />1000</span></p>
          <p><b>Delivery Charges</b><span><TbCurrencyRupee className="rupee-icon" />499</span></p>
          <h3>Order Total:<span><TbCurrencyRupee className="rupee-icon" />{cartTotal}</span></h3>
        </div>
      </div>
      </div> 
    </div>
  );
}
