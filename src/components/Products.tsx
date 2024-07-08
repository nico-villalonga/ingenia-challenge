"use client"

import { useGetAllProductsQuery } from "@/store/api/products.api"
import ProductPreview from "./ProductPreview"

export const Products = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery({
    limit: 2,
    skip: 0,
  })

  if (!data?.products.length) return

  return (
    <div className="flex flex-col gap-2 mx-auto">
      {data.products.map((product) => {
        return <ProductPreview key={product.id} {...product} />
      })}
    </div>
  )
}
