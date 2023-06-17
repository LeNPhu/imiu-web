import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectToken } from "../authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "auth",
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
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    loginWithGoogle: builder.mutation({
      query: (data) => ({
        url: "/google-login",
        method: "POST",
        body: data,
      }),
    }),
    verify: builder.mutation({
      query: (token) => ({
        url: `/verify-email?token=${token}`,
      }),
    }),
    email: builder.mutation({
      query: (data) => ({
        url: `/email`,
        method: "POST",
        body: data,
      }),
      prepareHeaders: (headers, { getState }) => {
        const token = selectToken(getState());
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
    }),
  })
});

export const { useRegisterMutation, useLoginMutation, useLoginWithGoogleMutation, useVerifyMutation, useEmailMutation } =
  authApi;
