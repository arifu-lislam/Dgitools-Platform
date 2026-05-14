import React from "react";

const StateSection = () => {
  return (
    <div className="mt-[85px] font-family bg-[#4F39F6] py-12">
      <div className=" text-white grid grid-cols-1 text-center  lg:grid-cols-3 gap-80 w-9/12 mx-auto">
        <div>
          <h2 className="text-5xl font-bold mb-5">50K+</h2>
          <p>Active Users</p>
        </div>
        {/* <div className="divider bg-white"></div> */}
        <div>
          <h2 className="text-5xl font-bold mb-5">200+</h2>
          <p>Premium Tools</p>
        </div>
        {/* <div className="divider bg-white"></div> */}
        <div>
          <h2 className="text-5xl font-bold mb-5">4.9</h2>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
