import { Filters } from "../components/Filters";
import { ProductContext } from "..";
import { useContext } from "react";
import { ProductCard } from "../components/ProductCard";

export function ProductListing() {
  const {state} = useContext(ProductContext);
  const {filterstate, filterdispatch} = useContext(ProductContext);
  const {filteredproducts} = filterstate;
  return (
    <div className="product-list-container">
      <Filters />
      <div className="products-container">
        {filteredproducts.length>0?(filteredproducts.map(product=><ProductCard product={product} />)):<h1>No Products Found</h1>}
      </div>
    </div>
  );
}
