import type { Product } from "@/types"

export function getProductTags({ tags }: Product) {
  if (!tags.length) return null

  return tags.map((tag, i) => (
    <p
      key={`${tag}-${i}`}
      className="text-xs text-white leading-none bg-orange-400 p-1 rounded-md"
    >
      {tag}
    </p>
  ))
}

export function getProductPrice({ price, discountPercentage }: Product) {
  const discountValue = price - Math.round(price * discountPercentage) / 100
  const hasDiscount = discountValue !== price
  const discountLabel = hasDiscount && (
    <p>
      <span className="font-semibold">${discountValue.toFixed(2)}</span>
      <span className="text-green-600 text-xs font-normal pl-2">
        {discountPercentage}% OFF
      </span>
    </p>
  )
  let priceLabel = hasDiscount ? (
    <span className="text-xs text-neutral-400 leading-none line-through">
      ${price}
    </span>
  ) : (
    <span>${price}</span>
  )

  return (
    <div className="flex flex-col text-lg">
      {priceLabel}
      {discountLabel}
    </div>
  )
}

export function getProductReviews({ rating, reviews }: Product) {
  if (!reviews.length) return null
  // TODO: calculate correct star values
  return (
    <div className="flex items-center gap-2 text-gray-500 text-xs">
      <span>{rating}</span>
      <div className="flex gap-1 w-20">
        <div>
          <svg
            style={{ width: 0, height: 0 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <defs>
              <mask id="half">
                <rect x="0" y="0" width="32" height="32" fill="white" />
                <rect x="50%" y="0" width="32" height="32" fill="grey" />
              </mask>

              <symbol
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                id="star"
              >
                <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
              </symbol>
            </defs>
          </svg>
        </div>

        <p className="flex gap-0.5" aria-label="4.5 stars out of 5">
          <svg fill="#FBBF24" width="13" height="13" viewBox="2 2 32 32">
            <use xlinkHref="#star"></use>
          </svg>
          <svg fill="#FBBF24" width="13" height="13" viewBox="2 2 32 32">
            <use xlinkHref="#star"></use>
          </svg>
          <svg fill="#FBBF24" width="13" height="13" viewBox="2 2 32 32">
            <use xlinkHref="#star"></use>
          </svg>
          <svg fill="#FBBF24" width="13" height="13" viewBox="2 2 32 32">
            <use xlinkHref="#star" mask="url('#half')"></use>
          </svg>
          <svg fill="#FDDF9D" width="13" height="13" viewBox="2 2 32 32">
            <use xlinkHref="#star"></use>
          </svg>
        </p>
      </div>
      <span>{reviews.length} reviews</span>
    </div>
  )
}
