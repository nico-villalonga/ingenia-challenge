"use client"

import { ProductPreview } from "./ProductPreview"
import { useEffect, useState } from "react"
import type { Product } from "@/types"

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => {
        console.error("Error fetching products:", err)
      })
  }, [])

  return (
    <div className="flex flex-col gap-2 mx-auto">
      {products.map((product) => {
        return <ProductPreview key={product.id} {...product} />
      })}
    </div>
  )
}
