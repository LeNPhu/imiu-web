import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const customerAnswerApi = createApi({
  reducerPath: "customerAnswerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "customer-answers",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  tagTypes: ["CustomerAnswer"],
  endpoints: (builder) => ({
    createAnswer: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data.answer,
        url: `/update?accountId=${data.id}`,
      }),
    }),
    getAnswer: builder.query({
      query: (data) => ({
        url: `/get?id=${data}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useCreateAnswerMutation, useGetAnswerQuery } = customerAnswerApi;
