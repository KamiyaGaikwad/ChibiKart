import { Address } from "../components/Address";
import { ProductContext } from "..";
import { useContext } from "react";
import { PriceDetailsCheckOutCard } from "../components/PriceDetailsCheckOutCard";
import ModalForm from "../components/AddressForm";


export function Checkout() {
  const {state:{addresses}} = useContext(ProductContext);
  return (
    <div className="checkout-page">  
    <div>
    <h2 className="address-header">Address Details</h2>
      {addresses.map((item)=><Address  {...item} />)}
      <ModalForm />
    </div>
    <PriceDetailsCheckOutCard />
    </div>
  );
}


