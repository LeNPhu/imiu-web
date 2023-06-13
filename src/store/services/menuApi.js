import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API + "meals",
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
  tagTypes: ["menu"],
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: (data) => (
        console.log("data", data),
        {
          url: "",
          method: "POST",
          body: data,
        }
      ),
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;
