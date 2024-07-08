"use client"

import { skipToken } from "@reduxjs/toolkit/query/react"
import ProductsList from "@/components/ProductsList"
import SearchBar from "@/components/SearchBar"
import { useAppSelector } from "@/store/hooks"
import { selectCategory, selectQuery } from "@/store/slices/search.slice"
import {
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
  useSearchProductsQuery,
} from "@/store/api/products.api"
import { Product } from "@/types"

export default function Home() {
  const selectedCategory = useAppSelector(selectCategory)
  const query = useAppSelector(selectQuery)

  const { data: allProducts, isSuccess } = useGetAllProductsQuery({
    limit: 30,
    skip: 0,
  })
  const { data: searchProducts } = useSearchProductsQuery(query || skipToken)
  const { data: categoryProducts } = useGetProductsByCategoryQuery(
    selectedCategory || skipToken
  )

  let products: Product[] = []

  // By default use get all products
  if (isSuccess) {
    products = allProducts.products || []
  }

  /**
   * If there is a category selected then get its products
   * If there is a query search on the input then filter the fetched products with it
   * There is no query param available for filtering products from a category
   */
  if (selectedCategory && categoryProducts) {
    products = categoryProducts.products

    if (query) {
      products.filter((product) => product.title.includes(query))
    }
  } else if (query && searchProducts) {
    /**
     * If there is no category selected but there is a search term input
     * Then need to perform the search endpoint with the term applied
     */
    products = searchProducts.products
  }

  return (
    <main className="flex min-h-screen flex-col items-center py-20 gap-8">
      <SearchBar />
      <ProductsList products={products} />
    </main>
  )
}
