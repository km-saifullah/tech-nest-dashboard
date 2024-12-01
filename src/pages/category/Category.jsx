import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Category = () => {
  const [categoryInput, setCategoryInput] = useState({
    categoryName: "",
    slug: "",
  });

  //   handle category input fields
  const handleCategoryInput = (e) => {
    let categoryInfo = { ...categoryInput };
    categoryInfo[e.target.name] = e.target.value;
    setCategoryInput(categoryInfo);
  };

  // handle create category
  const handleCreateCategory = async (e) => {
    try {
      e.preventDefault();
      if (categoryInput.categoryName === "") {
        toast.warn("Please enter the ccategory name", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "dark",
        });
      } else {
        // await createCategory(categoryInput);
        toast.success("Category Created", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error.message);
    }

    setCategoryInput({
      categoryName: "",
      slug: "",
    });
  };

  // useEffect(() => {}, [categoryData, isCategoryLoad]);

  return (
    <main className="bg-gray-200 mt-6 rounded-lg p-5">
      <section className="space-y-3">
        <ToastContainer />
        <h3 className="text-2xl text-primary font-semibold font-inter ">
          Category
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
              to="/categories"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "active"
                    : "text-primary text-base font-normal font-inter leading-[140%] capitalize"
                } `
              }
            >
              Create Category
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="bg-white mt-6 p-5 rounded">
        <h2 className="text-heading font-bold font-inter text-xl pb-3">
          Add Category
        </h2>
        <form action="">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-3">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Category Name{" "}
                <sup className="text-secondary font-semibold">*</sup>
              </label>
              <input
                type="text"
                placeholder="Enter Category Name"
                name="categoryName"
                value={categoryInput.categoryName}
                onChange={handleCategoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3">
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
                value={categoryInput.slug}
                onChange={handleCategoryInput}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
              />
            </div>
            <div className="bg-secondary px-3 py-2 text-white rounded-lg hover:transition-all hover:duration-300 hover:ease-linear hover:bg-primary">
              <button onClick={handleCreateCategory}>Create Category</button>
            </div>
          </div>
        </form>
      </section>
      <section className="bg-white mt-5 p-4 rounded-lg">
        <h2 className="text-heading font-bold font-inter text-xl pb-3">
          All Categories
        </h2>
        <ul className="w-full flex flex-col gap-y-4">
          {/* {!isCategoryLoad &&
            categoryData?.data.data.map((category, index) => (
              <div
                key={category.slug}
                className="w-full flex items-center justify-between text-center gap-x-2"
              >
                <li className="flex-1 text-base text-primary font-normal font-inter">
                  {index + 1}
                </li>
                <li className="flex-1 text-base text-primary font-normal font-inter capitalize">
                  {category.categoryName}
                </li>
                <button className="flex-1 py-2 px-4 bg-orange-400 text-white rounded hover:bg-orange-600">
                  Update
                </button>
                <button className="flex-1 py-2 px-4 bg-red-400 text-white rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            ))} */}
        </ul>
      </section>
    </main>
  );
};

export default Category;
