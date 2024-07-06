import type { Product } from "@/types"
import { getProductPrice, getProductReviews } from "@/utils/product"

export function ProductPreview(product: Product) {
  return (
    <article className="flex flex-col sm:flex-row gap-8 md:gap-6 border border-neutral-400 p-10 bg-white max-w-2xl">
      <div className="flex justify-center">
        <div className="size-40">
          <img
            src="https://pagedone.io/asset/uploads/1700471600.png"
            alt={product.title}
            className="m-auto h-full"
          />
        </div>
      </div>
      <div className="w-full h-full xl:justify-start justify-center flex items-center">
        <div className="flex flex-col gap-4 w-full h-full max-w-xl">
          <div className="">
            <h3 className="text-xl leading-none">{product.title}</h3>
            <h4 className="text-sm">{product.brand}</h4>
          </div>
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
            <p>{product.shippingInformation}</p>
            <p className="text-neutral-400 text-xs">{product.returnPolicy}</p>
          </div>

          <div className="w-full sm:w-32 h-8">
            <button className="py-4 px-5 rounded-full bg-indigo-100 text-indigo-600 font-semibold text-md w-full h-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-200">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
