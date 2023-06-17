import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: (data) => (
        {
          url: "meals",
          method: "POST",
          body: data,
        }
      ),
      providesTags: ["menu"],
    }),
    getTags: builder.query({
      query: () => "tags",
      providesTags: ["tags"],
    }),
    getMealDetail: builder.query({
      query: (id) => ({
        url: `meals?mealId=${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMenuQuery, useGetTagsQuery, useGetMealDetailQuery } =
  menuApi;
