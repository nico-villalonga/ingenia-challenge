"use client"

import Link from "next/link"
import { useAppDispatch } from "@/store/hooks"
import { getProductPrice, getProductReviews } from "./utils/product"
import type { Product } from "@/types"
import { addProduct } from "@/store/slices/cart.slice"

export default function ProductPreview({ product }: { product: Product }) {
  const dispatch = useAppDispatch()

  return (
    <article className="flex flex-col sm:flex-row gap-8 md:gap-6 p-10 bg-white max-w-2xl">
      <div className="flex justify-center">
        <div className="size-40">
          <Link href={`/products/${product.id}`}>
            <img
              src={product.thumbnail}
              alt="Product thumbnail image"
              className="m-auto h-full"
            />
          </Link>
        </div>
      </div>
      <div className="w-full h-full xl:justify-start justify-center flex items-center">
        <div className="flex flex-col gap-4 w-full h-full max-w-xl">
          <Link href={`/products/${product.id}`}>
            <div>
              <h3 className="text-xl leading-none">{product.title}</h3>
              <h4 className="text-sm">{product.brand}</h4>
            </div>
          </Link>
          <div className="flex flex-col flex-wrap">
            {getProductPrice(product)}
            {getProductReviews(product)}
          </div>
          <div>
            {product.stock <= 10 && (
              <p className="text-xs text-red-400 font-bold">
                {product.availabilityStatus}
              </p>
            )}
          </div>

          <div>
            <p className="text-xs text-neutral-400">
              {product.shippingInformation}
            </p>
            <div className="w-full sm:w-32 h-8">
              {/* TODO: Refactor button into component and reuse on other pages */}
              <button
                onClick={() =>
                  dispatch(addProduct({ ...product, quantity: 1 }))
                }
                className="py-4 px-5 rounded-md bg-cyan-100 text-cyan-600 text-sm w-full h-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-cyan-200"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
