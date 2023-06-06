import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subscriptionApi = createApi({
  reducerPath: "subscriptionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    headers: {
      "Content-Type": "application/json",
    },
    prepareHeaders: (headers, { getState }) => {
      //   const token = useSelector((state) => state.auth);
      //   if (token) {
      //     headers.set("authorization", `Bearer ${token}`);
      //   }
      //   return headers;
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
