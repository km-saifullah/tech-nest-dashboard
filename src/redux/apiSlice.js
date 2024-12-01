import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { baseUrl } from "../config/config";

export const ecommerce = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    // ##### User Api Start
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
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
    }),
    // ##### User Api End

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
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useUpdateProfileMutation,
} = ecommerce;
