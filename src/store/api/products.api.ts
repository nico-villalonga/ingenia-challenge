import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Product } from "@/types"

interface ProductsApiResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

interface Category {
  slug: string
  name: string
  url: string
}

type ProductsCategoriesApiResponse = Category[]

export const productsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  reducerPath: "productsApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["Products"],
  endpoints: (build) => ({
    getAllProducts: build.query<
      ProductsApiResponse,
      { limit: number; skip: number }
    >({
      query: ({ limit = 30, skip = 0 }) => `?limit=${limit}&skip=${skip}`,
      // `providesTags` determines which 'tag' is attached to the cached data returned by the query.
      providesTags: (_result, _error, params) => [
        { type: "Products", ...params },
      ],
    }),

    getProductCategories: build.query<ProductsCategoriesApiResponse, void>({
      query: () => "/categories",
    }),

    getProductsByCategories: build.query<ProductsCategoriesApiResponse, string>(
      {
        query: (category: string) => `/category/${category}`,
        providesTags: (_result, _error, category) => [
          { type: "Products", category },
        ],
      }
    ),

    searchProducts: build.query<ProductsApiResponse, string>({
      query: (q: string) => `/search?q=${q}`,
      providesTags: (_result, _error, term) => [{ type: "Products", term }],
    }),
  }),
})

/**
 * Hooks are auto-generated by RTK-Query
 * Same as `productsApiSlice.endpoints.getAlProducts.useQuery`
 */
export const {
  useGetAllProductsQuery,
  useGetProductCategoriesQuery,
  useGetProductsByCategoriesQuery,
  useSearchProductsQuery,
} = productsApiSlice
