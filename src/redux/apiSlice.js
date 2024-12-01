import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { baseUrl } from "../config/config";

export const ecommerce = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Category", "Profile", "SubCategory"],
  endpoints: (builder) => ({
    // ##### User Api Start #####
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
    // ##### Sub-category Api End ####
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useUpdateProfileMutation,
  useGetUserByIdQuery,
  useCreateSubCategoryMutation,
  useGetSubCategoriesQuery
} = ecommerce;
