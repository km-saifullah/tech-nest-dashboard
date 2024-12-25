import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
} from "../../redux/apiSlice";

const Category = () => {
  const [categoryInput, setCategoryInput] = useState({
    categoryName: "",
    slug: "",
  });
  const [createCategory] = useCreateCategoryMutation();
  const { data: getCategories, isLoading: isCategoryLoading } =
    useGetCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updateCategory] = useUpdateCategoryMutation();

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

      if (categoryInput.categoryName.trim() === "") {
        toast.warn("Please enter the category name", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "dark",
        });
        return;
      }
      const response = await createCategory(categoryInput);
      if (response.error) {
        toast.error(
          response.error.data.message || "Failed to create category",
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
          }
        );
      } else {
        toast.success("Category Created", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "dark",
        });
        setCategoryInput({
          categoryName: "",
          slug: "",
        });
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Error creating category:", error.message);
      toast.error("An unexpected error occurred", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
    }
  };

  // handle delete category
  const handleDeleteCategory = async (id) => {
    try {
      const result = await deleteCategory(id).unwrap();
      toast.success("Category deleted successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
    } catch (error) {
      toast.error(error.data?.message || "Failed to delete category", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
    }
  };

  // Handle edit category
  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setCategoryInput({
      categoryName: category.categoryName,
      slug: category.slug,
    });
    setIsModalOpen(true);
  };

  // handle update category
  const handleUpdateCategory = async (id, updatedData) => {
    // e.preventDefault();
    try {
      // const updatedData = { ...categoryInput, id: selectedCategory._id };
      const response = await updateCategory({ id, ...updatedData }).unwrap();
      if (response.error) {
        toast.error(
          response.error.data.message || "Failed to update category",
          {
            position: "top-right",
            autoClose: 2000,
            theme: "dark",
          }
        );
      } else {
        toast.success("Category updated successfully", {
          position: "top-right",
          autoClose: 1500,
          theme: "dark",
        });
        setIsModalOpen(false);
        setSelectedCategory(null);
      }
    } catch (error) {
      console.error("Error updating category:", error.message);
      toast.error("An unexpected error occurred", {
        position: "top-right",
        autoClose: 2500,
        theme: "dark",
      });
    }
  };

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
          {!isCategoryLoading &&
            getCategories?.data.data.map((category, index) => (
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
                <button
                  className="flex-1 py-2 px-4 bg-orange-400 text-white rounded hover:bg-orange-600"
                  onClick={() => handleEditCategory(category._id)}
                >
                  Update
                </button>
                <button
                  className="flex-1 py-2 px-4 bg-red-400 text-white rounded hover:bg-red-600"
                  onClick={() => handleDeleteCategory(category._id)}
                >
                  Delete
                </button>
              </div>
            ))}
        </ul>
      </section>

      {/* Modal for editing */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg space-y-4">
            <h3 className="text-lg font-bold">Edit Category</h3>
            <form onSubmit={handleUpdateCategory}>
              <div className="flex flex-col space-y-3">
                <label className="text-primary font-medium">
                  Category Name
                </label>
                <input
                  type="text"
                  name="categoryName"
                  value={categoryInput.categoryName}
                  onChange={handleCategoryInput}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col space-y-3">
                <label className="text-primary font-medium">Slug</label>
                <input
                  type="text"
                  name="slug"
                  value={categoryInput.slug}
                  onChange={handleCategoryInput}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex justify-end space-x-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Category;
