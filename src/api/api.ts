import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://jsonplaceholder.typicode.com/';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (searchTerm) => `posts?title_like=${searchTerm}`,
        }),
        getPostById: builder.query({
            query: (id) => `posts/${id}`,
        }),
    }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = api;