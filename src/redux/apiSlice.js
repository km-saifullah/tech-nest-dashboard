import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../config/config";
import Cookies from "js-cookie";

export const ecommerce = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["Category", "ProfilePhoto"],
  // categories api
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories/",
      providesTags: ["Category"],
    }),
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

    // user apis
    getProfile: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["ProfilePhoto"],
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        const formData = new FormData();
        formData.append("profileImage", data);
        return {
          url: "/users/update-user",
          method: "POST",
          body: formData,
          headers: {
            Authorization: Cookies.get("accessToken"),
          },
        };
      },
    }),
    invalidatesTags: ["ProfilePhoto"],
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useUpdateProfileMutation,
  useGetProfileQuery,
} = ecommerce;
