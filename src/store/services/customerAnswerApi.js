import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectToken } from "../authSlice";

export const customerAnswerApi = createApi({
  reducerPath: "customerAnswerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "customer-answers",
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
  tagTypes: ["CustomerAnswer"],
  endpoints: (builder) => ({
    createAnswer: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data.answer,
        url: `?accountId=${data.id}`,
      }),
    }),
    getAnswer: builder.query({
      query: (data) => ({
        url: `?id=${data}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useCreateAnswerMutation, useGetAnswerQuery } = customerAnswerApi;
