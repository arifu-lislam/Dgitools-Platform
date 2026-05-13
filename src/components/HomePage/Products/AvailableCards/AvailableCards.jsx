import React from "react";
import PartOfUi from "../../../partOfUi/PartOfUi";

const AvailableCards = ({ products, selectedCart, setSelectedCart }) => {
  //   console.log(products);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-20">
      {products.map((product, index) => {
        return (
          <PartOfUi
            key={index}
            product={product}
            selectedCart={selectedCart}
            setSelectedCart={setSelectedCart}
          ></PartOfUi>
        );
      })}
    </div>
  );
};

export default AvailableCards;
