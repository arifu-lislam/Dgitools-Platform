import React from "react";
import user from "../../assets/user.png";
import box from "../../assets/package.png";
import rocket from "../../assets/rocket.png";
import frame1 from "../../assets/Frame 2087326311.png";
import frame2 from "../../assets/Frame 2087326311 (1).png";
import frame3 from "../../assets/Frame 2087326311 (2).png";

const ThreeSteps = () => {
  return (
    <div>
      <div className="bg-[#F9FAFC] pb-40">
        <div className="flex justify-center items-center flex-col pt-15 ">
          <h2 className="text-4xl font-bold text-black">
            Get Started in 3 Steps
          </h2>
          <p className="text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="w-9/12 mx-auto grid grid-cols-3 gap-10 mt-20">
          <div>
            <div className="relative">
              <img src={frame1} alt="" className="absolute top-6 right-0" />
            </div>
            <div className="bg-white py-20 space-y-4 flex justify-center items-center flex-col w-[380px] text-center">
              <img src={user} alt="" />
              <h4 className="text-3xl font-bold">Create Account</h4>
              <p className="text-[#627382]">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>

          <div>
            <div className="relative">
              <img src={frame2} alt="" className="absolute top-6 right-0" />
            </div>
            <div className="bg-white py-20 space-y-4 flex justify-center items-center flex-col w-[380px] text-center">
              <img src={box} alt="" />
              <h4 className="text-3xl font-bold">Choose Products</h4>
              <p className="text-[#627382]">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          <div>
            <div className="relative">
              <img src={frame3} alt="" className="absolute top-6 right-0" />
            </div>
            <div className="bg-white py-20 space-y-4 flex justify-center items-center flex-col w-[380px] text-center">
              <img src={rocket} alt="" />
              <h4 className="text-3xl font-bold">Start Creating</h4>
              <p className="text-[#627382]">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSteps;
