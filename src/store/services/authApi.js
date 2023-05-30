import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-hot-toast";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "accounts",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => {
        if (response.error) {
          toast.error(response.error.message);
          throw response.error;
        } else {
          toast.success("Registration successful!");
          return response.data;
        }
      },
      invalidatesTags: ["Auth"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    verify: builder.mutation({
      query: (token) => ({
        url: `/verify-email?token=${token}`,
      }),
      transformResponse: (response) => {
        if (response.error) {
          toast.error("error", response.error.message);
          throw response.error;
        } else {
          toast.success("Verify successfully!");
          return response.data;
        }
      },
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useVerifyMutation } =
  authApi;
