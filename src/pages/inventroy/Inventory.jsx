import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Inventory = () => {
  const [inventoryInput, setInventoryInput] = useState({
    product: "",
    productVariation: "",
    purchasePrice: "",
    sellingPrice: "",
    discountPrice: "",
    discountType: "",
    quantity: "",
  });

  //   handle inventory input fields
  const handleInventoryInput = (e) => {
    let inventoryInfo = { ...inventoryInput };
    inventoryInfo[e.target.name] = e.target.value;
    setInventoryInput(inventoryInfo);
  };

  // handle create inventory
  const handleCreateInventory = (e) => {
    e.preventDefault();
    console.log(inventoryInput);
    setInventoryInput({
      product: "",
      productVariation: "",
      purchasePrice: "",
      sellingPrice: "",
      discountPrice: "",
      discountType: "",
      quantity: "",
    });
  };
  return (
    <main className="bg-gray-200 mt-6 rounded-lg p-5">
      <section className="space-y-3">
        <h3 className="text-2xl text-primary font-semibold font-inter ">
          Inventory
        </h3>
        <ul className="flex items-center gap-x-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "active"
                    : "text-primary text-base font-normal font-inter leading-[140%] capitalize"
                }  `
              }
            >
              Home
            </NavLink>
          </li>
          <li>/</li>
          <li>
            <NavLink
              to="/inventories"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "active"
                    : "text-primary text-base font-normal font-inter leading-[140%] capitalize"
                } `
              }
            >
              Create Inventory
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="bg-white mt-6 p-5 rounded">
        <form action="">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Select Product{" "}
                  <sup className="text-secondary font-semibold">*</sup>
                </label>
                <select
                  id=""
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                  name="product"
                  value={inventoryInput.product}
                  onChange={handleInventoryInput}
                >
                  <option value="Product-1">Product-1</option>
                  <option value="Product-2">Product-2</option>
                </select>
              </div>
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Select Product Varitaion{" "}
                  <sup className="text-secondary font-semibold">*</sup>
                </label>
                <select
                  id=""
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                  name="productVariation"
                  value={inventoryInput.productVariation}
                  onChange={handleInventoryInput}
                >
                  <option value="Variation-1">Variation-1</option>
                  <option value="Variation-2">Variation-2</option>
                </select>
              </div>
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Purchase Price{" "}
                  <sup className="text-secondary font-semibold">*</sup>
                </label>
                <input
                  type="text"
                  placeholder="Enter Purchase Price"
                  name="purchasePrice"
                  value={inventoryInput.purchasePrice}
                  onChange={handleInventoryInput}
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Selling Price{" "}
                  <sup className="text-secondary font-semibold">*</sup>
                </label>
                <input
                  type="text"
                  placeholder="Enter Selling Price"
                  name="sellingPrice"
                  value={inventoryInput.sellingPrice}
                  onChange={handleInventoryInput}
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Discount Price
                </label>
                <input
                  type="text"
                  placeholder="Enter Discount Price"
                  name="discountPrice"
                  value={inventoryInput.discountPrice}
                  onChange={handleInventoryInput}
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Select Discount Type
                </label>
                <select
                  id=""
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                  name="discountType"
                  value={inventoryInput.discountType}
                  onChange={handleInventoryInput}
                >
                  <option value="ammount">Ammount</option>
                  <option value="percentage">Percentage</option>
                </select>
              </div>
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  placeholder="Enter Product Quantity"
                  name="quantity"
                  value={inventoryInput.quantity}
                  onChange={handleInventoryInput}
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                />
              </div>
              <div className="bg-secondary px-3 py-2 text-white rounded-lg hover:transition-all hover:duration-300 hover:ease-linear hover:bg-primary">
                <button onClick={handleCreateInventory}>
                  Create Inventory
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Inventory;
