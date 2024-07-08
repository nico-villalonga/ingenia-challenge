"use client"

import ProductPreview from "./ProductPreview"
import type { Product } from "@/types"

export default function ProductsList({ products }: { products: Product[] }) {
  if (!products.length) return <div>No products</div>

  return (
    <div className="flex flex-col gap-2 mx-auto">
      {products.map((product) => {
        return <ProductPreview key={product.id} product={product} />
      })}
    </div>
  )
}
