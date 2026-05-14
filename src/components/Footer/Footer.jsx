import React from "react";
import digitool from "../../assets/DigiTools.png";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black  mt-20">
      <div className="w-9/12 mx-auto pt-[120px] grid grid-cols-5  pb-[120px]">
        <div>
          <img src={digitool} alt="" />
          <p className="text-white mt-3">
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
        <div>
          <h3 className="text-2xl font-bold text-white">Company</h3>
          <p className="text-white">About</p>
          <p className="text-white">Blog</p>
          <p className="text-white">Careers</p>
          <p className="text-white">Press</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Resources</h3>
          <p className="text-white">Documentation</p>
          <p className="text-white">Help Center</p>
          <p className="text-white">Community</p>
          <p className="text-white">Contact</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Social Links</h3>
          <div className="flex gap-4 mt-3">
            <span className="bg-white">
              <FaFacebook />
            </span>
            <span className="bg-white">
              <FaInstagram />
            </span>
            <span className="bg-white">
              <FaGoogle />
            </span>
          </div>
        </div>
      </div>
      <div className="w-9/12 h-[1px] bg-white  mx-auto -mt-20"></div>
      <div className="flex justify-between items-center w-9/12 mx-auto pb-20 mt-3">
        <div>
          <p className="text-white">© 2026 Digitools. All rights reserved.</p>
        </div>
        <div className="flex gap-3">
          <p className="text-white">Privacy Policy</p>
          <p className="text-white">Terms Of Service</p>
          <p className="text-white">Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
