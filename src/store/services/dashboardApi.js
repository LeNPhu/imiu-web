import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectToken } from "../authSlice";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "dashboards",
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
  tagTypes: ["Dashboard"],
  endpoints: (builder) => ({
    getCustomer: builder.query({
      query: () => ({
        method: "GET",
        url: `/customer`,
      }),
    }),
    getYearRevenue: builder.query({
      query: (data) => ({
        method: "GET",
        url: `/year-revenue?year=${data}`,
      }),
    }),
    getMonthRevenue: builder.query({
      query: (data) => ({
        method: "GET",
        url: `/revenue?month=${data.month}&year=${data.year}`,
      }),
    }),
  }),
});
export const {
  useGetCustomerQuery,
  useGetYearRevenueQuery,
  useGetMonthRevenueQuery,
} = dashboardApi;
