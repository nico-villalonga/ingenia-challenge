import { ProductDetail } from "@/components/ProductDetail"
import type { Product } from "@/types"

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`)
  const product: Product = await response.json()

  return <ProductDetail {...product} />
}
