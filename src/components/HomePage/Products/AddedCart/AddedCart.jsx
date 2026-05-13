import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const AddedCart = ({ selectedCart, setSelectedCart }) => {
  const totalPrice = selectedCart.reduce(
    (sum, ImageSelect) => sum + ImageSelect.price,
    0,
  );
  console.log(selectedCart, "selectedCart");
  const deleteCart = (ImageSelect) => {
    // console.log(ImageSelect, "ImageSelect");
    const filterCart = selectedCart.filter(
      (select) => select.name !== ImageSelect.name,
    );
    setSelectedCart(filterCart);
    toast(`${ImageSelect.name} is removed`);
  };
  const deleteAllData = () => {
    setSelectedCart([]);
  };
  return (
    <div>
      <h1 className="text-5xl font-bold">Your Cart</h1>
      {selectedCart.length === 0 ? (
        <div className="border-2 border-gray-300 shadow-sm flex justify-center items-center flex-col mt-3 py-30 space-y-3">
          <h2 className="text-4xl font-bold">No Product added in Cart</h2>
          <p className="text-[#627382]">
            Go to the product section to add the Cart
          </p>
        </div>
      ) : (
        selectedCart.map((ImageSelect) => {
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
        })
      )}
      <div className="flex justify-between items-center border-2 bg-black text-white py-5 rounded-lg px-4 mt-4">
        <h2 className="text-3xl font-bold ">Total</h2>
        <p className="text-3xl font-bold ">${totalPrice}</p>
      </div>
      <div className="">
        <button
          onClick={deleteAllData}
          className="btn w-full bg-blue-600 rounded-lg text-white text-3xl py-9 mt-10"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default AddedCart;
