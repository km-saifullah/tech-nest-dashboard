import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { baseUrl } from "../config/config";

export const ecommerce = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: [
    "Category",
    "Profile",
    "SubCategory",
    "Users",
    "Product",
    "Variation",
    "Inventory",
  ],
  endpoints: (builder) => ({
    // ##### User Api Start #####
    getUsers: builder.query({
      query: () => `/users`,
      providesTags: ["Users"],
    }),

    getUserById: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["Profile"],
    }),

    updateProfile: builder.mutation({
      query: (formData) => ({
        url: "/users/update-user",
        method: "POST",
        body: formData,
        headers: {
          Authorization: Cookies.get("accessToken"),
        },
      }),
      invalidatesTags: ["Profile"],
    }),
    // ##### User Api End #####

    // ##### Category Api Start #####
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/categories/add-category",
        method: "POST",
        body: data,
        headers: {
          Authorization: Cookies.get("accessToken"),
        },
      }),
      invalidatesTags: ["Category"],
    }),

    getCategories: builder.query({
      query: () => "/categories",
      providesTags: ["Category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),

    updateCategory: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/categories/${id}`,
        method: "PUT",
        body: data,
        headers: {
          Authorization: Cookies.get("accessToken"),
        },
      }),
      invalidatesTags: ["Category"],
    }),
    // ##### Category Api End #####

    // ##### Sub-category Api Start ####
    createSubCategory: builder.mutation({
      query: (data) => ({
        url: "/sub-categories/add-sub-category",
        method: "POST",
        body: data,
        headers: {
          Authorization: Cookies.get("accessToken"),
        },
      }),
      invalidatesTags: ["SubCategory"],
    }),

    getSubCategories: builder.query({
      query: () => "/sub-categories",
      providesTags: ["SubCategory"],
    }),

    deleteSubCategory: builder.mutation({
      query: (id) => ({
        url: `/sub-categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SubCategory"],
    }),
    // ##### Sub-category Api End ####

    // ##### Product Api Start #####
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
        headers: {
          Authorization: Cookies.get("accessToken"),
        },
      }),
      invalidatesTags: ["Product"],
    }),

    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Product"],
    }),
    // ##### Product Api End #####

    // ##### Variation Api Start #####
    createVariation: builder.mutation({
      query: (data) => ({
        url: "/product-variations",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Variation"],
    }),

    getVariations: builder.query({
      query: () => "/product-variations",
      providesTags: ["Variation"],
    }),

    deleteVariation: builder.mutation({
      query: (id) => ({
        url: `/product-variations/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Variation"],
    }),
    // ##### Variation Api End #####

    // ##### Inventory Api Start #####
    createInventory: builder.mutation({
      query: (data) => ({
        url: "/inventories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Inventory"],
    }),
    // ##### Inventory Api End #####
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useUpdateProfileMutation,
  useGetUserByIdQuery,
  useCreateSubCategoryMutation,
  useGetSubCategoriesQuery,
  useUpdateCategoryMutation,
  useDeleteSubCategoryMutation,
  useGetUsersQuery,
  useCreateProductMutation,
  useGetProductsQuery,
  useCreateVariationMutation,
  useGetVariationsQuery,
  useDeleteVariationMutation,
  useCreateInventoryMutation,
} = ecommerce;
