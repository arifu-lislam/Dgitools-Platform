import React, { use } from "react";
import AvailableCards from "./AvailableCards/AvailableCards";

const Products = ({ fetchPromise }) => {
  const products = use(fetchPromise);
  //   console.log(products, "products");
  return (
    <div className="mt-[120px] font-family w-9/12 mx-auto">
      <div className="space-y-4 text-center">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div>
          <button className="btn btn-primary rounded-full">Products</button>
          <button className="btn rounded-full">Cart(2)</button>
        </div>
      </div>
      <AvailableCards products={products}></AvailableCards>
    </div>
  );
};

export default Products;
