import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "questions",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  tagTypes: ["Question"],
  endpoints: (builder) => ({
    getQuestion: builder.query({
      query: () => ({}),
    }),
  }),
});
export const { useGetQuestionQuery } = questionApi;
