import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "payments",
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
  tagTypes: ["payment"],
  endpoints: (builder) => ({
    getQrCode: builder.query({
      query: (data) => ({
        url: "/qr-code",
        method: "POST",
        body: data,
      }),
    }),
    payment: builder.mutation({
      query: (data) => ({
        url: "/plans",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetQrCodeQuery, usePaymentMutation } = paymentApi;
