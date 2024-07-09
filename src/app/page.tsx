"use client"

import Pagination from "@/components/Pagination"
import ProductsList from "@/components/ProductsList"
import SearchBar from "@/components/SearchBar"
import {
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
  useSearchProductsQuery,
} from "@/store/api/products.api"
import { useAppSelector } from "@/store/hooks"
import { selectCategory, selectQuery } from "@/store/slices/search.slice"
import { Product } from "@/types"
import { useState } from "react"

export default function Home() {
  /**
   * TODO: This limit would be nice to be selected from a dropdown
   * Default value is 30 to map the default limit from dummyjson API
   */
  const limit = 30
  const [currentPage, setCurrentPage] = useState(1)
  const [skip, setSkip] = useState(0)
  const selectedCategory = useAppSelector(selectCategory)
  const query = useAppSelector(selectQuery)

  function handlePagination(pageNumber: number) {
    setCurrentPage(pageNumber)
    setSkip(pageNumber * limit - limit)
  }

  /**
   * TODO: This needs some refactoring
   */
  const { data: allProducts, isSuccess } = useGetAllProductsQuery({
    limit,
    skip,
  })
  const { data: searchProducts } = useSearchProductsQuery(
    {
      limit,
      skip,
      query,
    },
    { skip: !query }
  )
  const { data: categoryProducts } = useGetProductsByCategoryQuery(
    {
      category: selectedCategory,
      limit,
      skip,
    },
    { skip: !selectedCategory }
  )

  let totalProducts = 0
  let products: Product[] = []

  // By default use get all products
  if (isSuccess) {
    products = allProducts.products || []
    totalProducts = allProducts.total
  }

  /**
   * If there is a category selected then get its products
   * If there is a query search on the input then filter the fetched products with it
   * There is no query param available for filtering products from a category
   */
  if (selectedCategory && categoryProducts) {
    products = categoryProducts.products
    totalProducts = categoryProducts.total

    if (query) {
      products.filter((product) => product.title.includes(query))
    }
  } else if (query && searchProducts) {
    /**
     * If there is no category selected but there is a search term input
     * Then need to perform the search endpoint with the term applied
     */
    products = searchProducts.products
    totalProducts = searchProducts.total
  }

  return (
    <main className="flex min-h-screen flex-col items-center py-20 gap-8">
      <SearchBar />
      <ProductsList products={products} />
      <Pagination
        itemsPerPage={limit}
        totalItems={totalProducts}
        handlePagination={handlePagination}
        currentPage={currentPage}
      />
    </main>
  )
}
