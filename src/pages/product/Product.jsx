import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
} from "../../redux/apiSlice";
import { toast, ToastContainer } from "react-toastify";

const Product = () => {
  const [productInput, setProductInput] = useState({
    title: "",
    slug: "",
    category: "",
    subCategory: "",
    thumbnail: null,
    gallery: [],
  });

  // api
  const { data: category, isLoading: categoryLoading } =
    useGetCategoriesQuery();
  const { data: subCategory, isLoading: subCategoryLoading } =
    useGetSubCategoriesQuery();
  const [createProduct] = useCreateProductMutation();

  // useEffect(() => {
  //   console.log(subCategory);
  // }, [subCategory]);

  //   handle product input fields
  const handleProductInput = (e) => {
    const { name, value, files } = e.target;
    if (name === "thumbnail") {
      setProductInput((prev) => ({ ...prev, thumbnail: files[0] }));
    } else if (name === "gallery") {
      setProductInput((prev) => ({ ...prev, gallery: Array.from(files) }));
    } else {
      setProductInput((preve) => ({ ...preve, [name]: value }));
    }
  };

  // handle create product
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", productInput.title);
    formData.append("slug", productInput.slug);
    formData.append("category", productInput.category);
    formData.append("subCategory", productInput.subCategory);
    formData.append("thumbnail", productInput.thumbnail);

    productInput.gallery.forEach((file) => formData.append("gallery", file));

    try {
      const res = await createProduct(formData).unwrap();
      toast.success("Product Created", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    }
    setProductInput({
      title: "",
      slug: "",
      category: "",
      subCategory: "",
      thumbnail: null,
      gallery: [],
    });
  };
  return (
    <main className="bg-gray-200 mt-6 rounded-lg p-5">
      <section className="space-y-3">
        <ToastContainer />
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
                  Enter Category{" "}
                  <sup className="text-secondary font-semibold">*</sup>
                </label>
                <select
                  id=""
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                  name="category"
                  value={productInput.category}
                  onChange={handleProductInput}
                >
                  <option value="Category-1">Select Category</option>
                  {!categoryLoading &&
                    category?.data.data.map((category) => (
                      <option value={category._id} key={category._id}>
                        {category.categoryName}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Enter Sub-category{" "}
                  <sup className="text-secondary font-semibold">*</sup>
                </label>
                <select
                  id=""
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                  name="subCategory"
                  value={productInput.subCategory}
                  onChange={handleProductInput}
                >
                  <option value="Sub-Category-1">Select Sub-category</option>
                  {!subCategoryLoading &&
                    subCategory?.data.data.map((subCategory) => (
                      <option value={subCategory._id} key={subCategory._id}>
                        {subCategory.subCategoryName}
                      </option>
                    ))}
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
                  name="thumbnail"
                  accept="image/*"
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
                  name="gallery"
                  accept="image/*"
                  multiple
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
