import React, { use, useState } from "react";
import AvailableCards from "./AvailableCards/AvailableCards";

const Products = ({ fetchPromise }) => {
  const products = use(fetchPromise);
  //   console.log(products, "products");
  const [changeState, setChangeState] = useState("products");
  console.log(changeState, "changeState");
  return (
    <div className="mt-[120px] font-family w-9/12 mx-auto">
      <div className="space-y-4 text-center">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div>
          <button
            onClick={() => setChangeState("products")}
            className={`btn ${changeState === "products" ? "bg-blue-500" : ""} rounded-full `}
          >
            Products
          </button>
          <button
            onClick={() => setChangeState("cart")}
            className={`btn rounded-full ${changeState === "cart" ? "bg-blue-500" : ""}`}
          >
            Cart(2)
          </button>
        </div>
      </div>
      <AvailableCards products={products}></AvailableCards>
    </div>
  );
};

export default Products;
