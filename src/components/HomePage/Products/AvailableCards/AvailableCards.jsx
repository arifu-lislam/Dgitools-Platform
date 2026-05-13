import React from "react";
import FeaturesList from "./FeaturesList";

const AvailableCards = ({ products }) => {
  //   console.log(products);
  return (
    <div className="grid grid-cols-3 mt-20">
      {products.map((product) => {
        return (
          <div className="card w-96 bg-base-100 shadow-sm mb-12">
            <div className="card-body">
              <div className="relative">
                <span className="badge badge-warning rounded-full absolute -top-6 -right-3">
                  {product.tagType}
                </span>
              </div>
              <div className="h-[50px] w-[50px] ">
                <img src={product.icon} alt="" />
              </div>
              <div className="">
                <h2 className="text-3xl font-bold">{product.name}</h2>
              </div>
              <p className="text-[#627382]">{product.description}</p>
              <h3 className="text-3xl font-bold">${product.price}</h3>
              <div>
                {product.features.map((feature, index) => (
                  <FeaturesList key={index} feature={feature}></FeaturesList>
                ))}
              </div>
              <div className="mt-6">
                <button className="btn btn-primary w-full rounded-full">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailableCards;
