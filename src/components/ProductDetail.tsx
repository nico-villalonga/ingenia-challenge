import type { Product } from "@/types"
import { formatReviewDate } from "@/utils/date"
import {
  getProductPrice,
  getProductReviews,
  getProductTags,
  getRatingAsStars,
} from "@/utils/product"

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="w-full mx-auto px-10 py-20">
      <div className="bg-white max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-white max-w-5xl min-w-96 p-8 mx-auto">
          <div className="h-full max-lg:mx-auto max-h-96">
            <img
              src={product.images[0]}
              className="max-lg:mx-auto lg:ml-auto h-full"
            />
          </div>
          <div className="felx max-w-96 justify-self-center md:justify-self-auto xl:justify-start justify-center items-center content-center">
            <div className="flex flex-col w-full max-w-xl gap-4">
              <div className="flex gap-2">{getProductTags(product)}</div>
              <div>
                <h1 className="text-xl leading-none">{product.title}</h1>
                <h2 className="text-sm">{product.brand}</h2>
              </div>
              <div className="flex flex-col flex-wrap">
                {getProductPrice(product)}
                {getProductReviews(product)}
              </div>
              <div className="text-xs">
                <p className="text-sm">
                  {product.stock <= 10 && (
                    <span className="text-red-400 font-bold pr-2">
                      {product.availabilityStatus}
                    </span>
                  )}
                  Available <span className="font-bold">{product.stock}</span>
                </p>
                <p>{product.shippingInformation}</p>
                <p className="text-neutral-400">{product.returnPolicy}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button className="py-2 px-5 rounded-md bg-cyan-100 text-cyan-600 text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-cyan-200">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <section className="p-8 before:border-t before:border-solid before:border-neutral-200 before:content-[''] before:block before:h-px before:w-10/12 before:my-10 before:mx-auto">
            <h3 className="text-lg font-semibold">Specifications:</h3>
            <div className="flex flex-col gap-1 pt-4">
              <p>weight: {product.weight}</p>
              <p>
                dimensions:{" "}
                {`${product.dimensions.height}" x ${product.dimensions.width}" x ${product.dimensions.depth}"`}
              </p>
            </div>
          </section>

          <section className="p-8 before:border-t before:border-solid before:border-neutral-200 before:content-[''] before:block before:h-px before:w-10/12 before:my-10 before:mx-auto">
            <h3 className="text-lg font-semibold">Description:</h3>
            <p className="pt-4">{product.description}</p>
          </section>

          <section className="p-8 before:border-t before:border-solid before:border-neutral-200 before:content-[''] before:block before:h-px before:w-10/12 before:my-10 before:mx-auto">
            <h3 className="text-lg font-semibold">Reviews:</h3>
            <div className="flex flex-col gap-8 pt-4 items-center">
              {product.reviews.map((review, i) => (
                <div key={i}>
                  <div className="flex flex-col items-center">
                    {getRatingAsStars(review.rating)}
                  </div>
                  <p>{review.comment}</p>
                  <div className="pt-2 text-center">
                    <p className="text-sm text-neutral-500 italic font-medium">
                      {review.reviewerName}
                    </p>
                    <p className="text-xs text-neutral-400 italic font-medium">
                      {formatReviewDate(review.date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
