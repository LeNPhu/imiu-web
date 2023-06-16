import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "accounts",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  tagTypes: ["Account"],
  endpoints: (builder) => ({
    mealSelections: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/${id}/meal-selections`,
        method: "PUT",
        body: {
          ...rest,
          isFavourite: false,
        },
        invalidatesTags: ["Account"],
      }),
    }),
    addFavourite: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/${id}/meal-selections`,
        method: "PUT",
        body: {
          ...rest,
          isFavourite: true,
        },
        invalidatesTags: ["Account"],
      }),
    }),
    getFavourite: builder.query({
      query: ({ id, pageNumber, pageSize }) => {
        const url = `/${id}/meal-selections?pageNumber=${pageNumber}&pageSize=${pageSize}&isFavourite=true`;
        console.log("API endpoint:", url); // Log the generated URL
        return url;
      },
      providesTags: ["Account"],
    }),
    getSelected: builder.query({
      query: ({ id, pageNumber, pageSize }) => {
        const url = `/${id}/meal-selections?pageNumber=${pageNumber}&pageSize=${pageSize}&isFavourite=false`;
        console.log("API endpoint:", url); // Log the generated URL
        return url;
      },
      providesTags: ["Account"],
    }),
  }),
});

export const {
  useMealSelectionsMutation,
  useAddFavouriteMutation,
  useGetFavouriteQuery,
  useGetSelectedQuery,
} = accountApi;
