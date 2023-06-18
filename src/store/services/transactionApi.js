import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectToken } from "../authSlice";
export const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "transactions",
    headers: {
      "Content-Type": "application/json",
    },
    prepareHeaders: (headers, { getState }) => {
      const token = selectToken(getState());
      console.log("token", token);
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Transaction"],
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => ({}),
    }),
    updateTransactions: builder.mutation({
      query: (data) => ({
        url: `?transactionId=${data.id}&status=${data.status}`,
        method: "PUT",
      }),
    }),
  }),
});
export const { useGetTransactionsQuery, useUpdateTransactionsMutation } =
  transactionApi;
