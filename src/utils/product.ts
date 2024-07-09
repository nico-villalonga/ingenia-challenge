import { Product } from "@/types"

export function roundPrice(value: number) {
  return Number(value.toFixed(2))
}
export function getProductPricing({ price, discountPercentage }: Product) {
  const discountValue = price - Math.round(price * discountPercentage) / 100
  const discountedValue = roundPrice(price - discountValue)
  const hasDiscount = discountValue !== price
  return { discountValue, discountedValue, hasDiscount }
}
