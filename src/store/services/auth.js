import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        users: builder.query({
            query: () => '/posts',
            providesTags: ['User']
        }),
        user: builder.query({
            query: (id) => `/users/${ id }`,
            providesTags: ['User']
        }),
        addUser: builder.mutation({
            query: user => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        updateUser: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/users/${ id }`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['User']
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${ id }`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User']
        })
    })
})

export const {
    useUsersQuery,
    useUserQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} = userApi;