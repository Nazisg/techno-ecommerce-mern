import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:4000/api"

export const productSlice = createApi({
    reducerPath: 'product',
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/product` }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/all',
        }),
        getProduct: builder.query({
            query: (id) => `/${id}`, 
        }),
    }),
});

export const { useGetProductsQuery, useGetProductQuery } = productSlice;
