import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  useCreateSubCategoryMutation,
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
} from "../../redux/apiSlice";

const SubCategory = () => {
  const [subCategoryInput, setSubCategoryInput] = useState({
    subCategoryName: "",
    slug: "",
    category: "",
  });
  const { data: categories, isLoading: categoryLoad } = useGetCategoriesQuery();
  const [createSubCategory] = useCreateSubCategoryMutation();
  const { data: subCategories, isLoading: subCategoryLoad } =
    useGetSubCategoriesQuery();

  useEffect(() => {
    console.log(subCategories, subCategoryLoad);
  }, [subCategories, subCategoryLoad]);

  //   handle subCategory input fields
  const handleSubCategoryInput = (e) => {
    let subCategoryInfo = { ...subCategoryInput };
    subCategoryInfo[e.target.name] = e.target.value;
    setSubCategoryInput(subCategoryInfo);
  };

  // handle create subCategory
  const handleCreateSubCategory = async (e) => {
    e.preventDefault();
    try {
      const res = await createSubCategory(subCategoryInput);
    } catch (error) {}
  };
  return (
    <main className="bg-gray-200 mt-6 rounded-lg p-5">
      <section className="space-y-3">
        <h3 className="text-2xl text-primary font-semibold font-inter ">
          Sub-Category
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
              to="/sub-category"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "active"
                    : "text-primary text-base font-normal font-inter leading-[140%] capitalize"
                } `
              }
            >
              Create Sub Category
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="bg-white mt-6 p-5 rounded">
        <form action="">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Sub-Category Name{" "}
                  <sup className="text-secondary font-semibold">*</sup>
                </label>
                <input
                  type="text"
                  placeholder="Enter Sub-Category Name"
                  name="subCategoryName"
                  value={subCategoryInput.subCategoryName}
                  onChange={handleSubCategoryInput}
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
                  value={subCategoryInput.slug}
                  onChange={handleSubCategoryInput}
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-3 w-[45%]">
                <label
                  htmlFor=""
                  className="text-primary text-base font-medium font-inter"
                >
                  Select Category
                </label>
                <select
                  id=""
                  className="w-full outline-none border border-borderColor p-3 rounded-lg"
                  name="category"
                  onChange={handleSubCategoryInput}
                  value={subCategoryInput.category}
                >
                  {!categoryLoad &&
                    categories.data.data.map(({ categoryName, _id, slug }) => (
                      <option value={_id} key={slug}>
                        {categoryName}
                      </option>
                    ))}
                </select>
              </div>
              <div className="bg-secondary px-3 py-2 text-white rounded-lg hover:transition-all hover:duration-300 hover:ease-linear hover:bg-primary">
                <button onClick={handleCreateSubCategory}>
                  Create Sub-Category
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
      <section className="bg-white mt-5 p-4 rounded-lg">
        <h2 className="text-heading font-bold font-inter text-xl pb-3">
          All Sub Categories
        </h2>
        <ul className="w-full flex flex-col gap-y-4">
          {!subCategoryLoad &&
            subCategories?.data.data.map((item, index) => (
              <div
                key={item.slug}
                className="w-full flex items-center justify-between text-center gap-x-2"
              >
                <li className="flex-1 text-base text-primary font-normal font-inter">
                  {index + 1}
                </li>
                <li className="flex-1 text-base text-primary font-normal font-inter capitalize">
                  {item.subCategoryName}
                </li>
                <button className="flex-1 py-2 px-4 bg-orange-400 text-white rounded hover:bg-orange-600">
                  Update
                </button>
                <button
                  className="flex-1 py-2 px-4 bg-red-400 text-white rounded hover:bg-red-600"
                  onClick={() => handleDeleteCategory(item._id)}
                >
                  Delete
                </button>
              </div>
            ))}
        </ul>
      </section>
    </main>
  );
};

export default SubCategory;
