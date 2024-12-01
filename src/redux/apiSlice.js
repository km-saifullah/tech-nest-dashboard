import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { baseUrl } from "../config/config";

export const ecommerce = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
//   tagTypes: ["Category"],
  endpoints: (builder) => ({
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
    }),
    getCategories: builder.query({
      query: () => "/categories",
    //   providesTags: "Category",
    }),
    // ##### Category Api End #####
  }),
});

export const { useCreateCategoryMutation, useGetCategoriesQuery } = ecommerce;
