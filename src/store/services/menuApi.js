import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuApi = createApi({
  reducerPath: "menuApi",
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
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: (data) => (
        console.log("qr", data),
        {
          url: "meals",
          method: "POST",
          body: data,
        }
      ),
      providesTags: ['menu']
    }),
    getTags: builder.query({
      query: () => "tags",
      providesTags: ['tags']
    }),
  }),
});

export const { useGetMenuQuery, useGetTagsQuery } = menuApi;
