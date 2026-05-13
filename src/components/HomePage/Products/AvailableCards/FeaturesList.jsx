import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const FeaturesList = ({ feature }) => {
  // console.log(feature);
  return (
    <p className="flex items-center gap-2">
      <FaRegCheckCircle className="text-blue-500" /> {feature}
    </p>
  );
};

export default FeaturesList;
