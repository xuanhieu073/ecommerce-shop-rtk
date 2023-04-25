import { Product } from '@models/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `/category/women's clothing`,
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetProductByIdQuery, useGetProductsQuery } = productApi;
