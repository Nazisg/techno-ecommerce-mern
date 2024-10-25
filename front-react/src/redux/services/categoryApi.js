import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:4000/api"

export const categorySlice = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/category` }), 
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/all', 
    }),
  }),
});

export const { useGetCategoriesQuery } = categorySlice;
