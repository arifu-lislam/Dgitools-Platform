import React from "react";
import digitool from "../../assets/DigiTools.png";

const Footer = () => {
  return (
    <div className="bg-black  mt-20">
      <div className="w-9/12 mx-auto pt-[120px]">
        <div>
          <img src={digitool} alt="" />
          <p className="text-white">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Product</h3>
          <p className="text-white">Features</p>
          <p className="text-white">Pricing</p>
          <p className="text-white">Templates</p>
          <p className="text-white">Integrations</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
