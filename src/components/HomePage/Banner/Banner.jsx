import React from "react";
import bannerImg from "../../../assets/banner.png";
import badgeImg from "../../../assets/Group 5.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div>
      <div className="mt-[85px] font-family container mx-auto flex justify-between items-center">
        <div className="space-y-5">
          <h5 className="flex items-center border-2 text-[#4f39f6] bg-[#E1E7FF] p-2 rounded-full w-[300px] ">
            <span>
              <img src={badgeImg} alt="" className="mr-2" />
            </span>
            New: AI-Powered Tools Available
          </h5>
          <h1 className="text-7xl font-bold">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
          <div className="flex items-center">
            <button className="btn btn-primary rounded-full mr-5">
              Explore Products
            </button>
            <button className="btn rounded-full text-[#4f39f6] border border-blue-800 ">
              <CiPlay1 />
              Watch Demo
            </button>
          </div>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
