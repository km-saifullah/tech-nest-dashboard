import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
  const handleCreateCategory = (e) => {
    e.preventDefault();

    if (categoryInput.categoryName === "") {
      alert("Category Name is Required");
    }

    setCategoryInput({
      categoryName: "",
      slug: "",
    });
  };

  return (
    <main className="bg-gray-200 mt-6 rounded-lg p-5">
      <section className="space-y-3">
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
    </main>
  );
};

export default Category;
