import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddedCart = ({ selectedCart, setSelectedCart }) => {
  console.log(selectedCart, "selectedCart");
  const deleteCart = (ImageSelect) => {
    // console.log(ImageSelect, "ImageSelect");
    const filterCart = selectedCart.filter(
      (select) => select.name !== ImageSelect.name,
    );
    setSelectedCart(filterCart);
  };
  return (
    <div>
      {selectedCart.map((ImageSelect) => {
        // console.log(ImageSelect, "ImageSelect");
        return (
          <div className="">
            <div className="flex justify-between items-center border-gray-500 py-4 px-5 shadow-sm mb-5">
              <div className="flex justify-between items-center gap-3">
                <img
                  src={ImageSelect.icon}
                  alt=""
                  className="h-[75px] rounded-xl"
                />
                <div>
                  <h3 className="text-xl font-bold ">{ImageSelect.name}</h3>
                  <p className="text-[#627382]">${ImageSelect.price}</p>
                </div>
              </div>
              <button onClick={() => deleteCart(ImageSelect)} className="btn">
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddedCart;
