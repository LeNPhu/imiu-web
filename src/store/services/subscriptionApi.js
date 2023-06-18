import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subscriptionApi = createApi({
  reducerPath: "subscriptionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  tagTypes: ["subscription"],
  endpoints: (builder) => ({
    subscriptions: builder.query({
      query: () => 'subscriptions',
    }),
  }),
});

export const { useSubscriptionsQuery } = subscriptionApi;
