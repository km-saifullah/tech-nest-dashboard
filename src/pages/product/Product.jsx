import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Product = () => {
  const [productInput, setProductInput] = useState({
    title: "",
    slug: "",
    category: "",
    subCategory: "",
    thumbnail: "",
    gallery: "",
  });

  //   handle product input fields
  const handleProductInput = (e) => {
    let productInfo = { ...productInput };
    productInfo[e.target.name] = e.target.value;
    setProductInput(productInfo);
  };

  // handle create product
  const handleCreateProduct = (e) => {
    e.preventDefault();
    console.log(productInput);
    setProductInput({
      title: "",
      slug: "",
      category: "",
      subCategory: "",
      thumbnail: "",
      gallery: "",
    });
  };
  return (
    <main className="bg-gray-200 mt-6 rounded-lg p-5">
      <section className="space-y-3">
        <h3 className="text-2xl text-primary font-semibold font-inter ">
          Product
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
              to="/products"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "active"
                    : "text-primary text-base font-normal font-inter leading-[140%] capitalize"
                } `
              }
            >
              Create Product
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
                  Title <sup className="text-secondary font-semibold">*</sup>
                </label>
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  name="title"
                  value={productInput.title}
                  onChange={handleProductInput}
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Slug
                </label>
                <input
                  type="text"
                  placeholder="Enter Slug"
                  name="slug"
                  value={productInput.slug}
                  onChange={handleProductInput}
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Select Category{" "}
                  <sup className="text-secondary font-semibold">*</sup>
                </label>
                <select
                  id=""
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                  name="category"
                  value={productInput.category}
                  onChange={handleProductInput}
                >
                  <option value="Category-1">Category-1</option>
                  <option value="Category-2">Category-2</option>
                </select>
              </div>
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Select Sub-Category{" "}
                  <sup className="text-secondary font-semibold">*</sup>
                </label>
                <select
                  id=""
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                  name="subCategory"
                  value={productInput.subCategory}
                  onChange={handleProductInput}
                >
                  <option value="Sub-Category-1">Sub-Category-1</option>
                  <option value="Sub-Category-2">Sub-Category-2</option>
                </select>
              </div>
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Thumbnail{" "}
                  <sup className="text-secondary font-semibold">*</sup>
                </label>
                <input
                  type="file"
                  placeholder="Enter Product Thumbnail"
                  name="thumbnail"
                  value={productInput.thumbnail}
                  onChange={handleProductInput}
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Product Gallery
                </label>
                <input
                  type="file"
                  multiple
                  placeholder="Enter Product Gallery"
                  name="gallery"
                  value={productInput.gallery}
                  onChange={handleProductInput}
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                />
              </div>
              <div className="bg-secondary px-3 py-2 text-white rounded-lg hover:transition-all hover:duration-300 hover:ease-linear hover:bg-primary">
                <button onClick={handleCreateProduct}>Create Product</button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Product;
