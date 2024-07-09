import { Product } from "@/types"

export function getProductDiscount({ price, discountPercentage }: Product) {
  const discountValue = price - Math.round(price * discountPercentage) / 100
  const discountedValue = Number((price - discountValue).toFixed(2))
  const hasDiscount = discountValue !== price
  return { discountValue, discountedValue, hasDiscount }
}
