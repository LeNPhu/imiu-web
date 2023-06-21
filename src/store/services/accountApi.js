import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectToken } from "../authSlice";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "accounts",
    headers: {
      "Content-Type": "application/json",
    },
    prepareHeaders: (headers, { getState }) => {
      const token = selectToken(getState());
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
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
        return url;
      },
      providesTags: ["Account"],
    }),
    getSelected: builder.query({
      query: ({ id, pageNumber, pageSize }) => {
        const url = `/${id}/meal-selections?pageNumber=${pageNumber}&pageSize=${pageSize}&isFavourite=false`;
        return url;
      },
      providesTags: ["Account"],
    }),
    getUserChart: builder.query({
      query: ({ id }) => {
        const url = `/${id}/nutritions`;
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
  useGetUserChartQuery
} = accountApi;
