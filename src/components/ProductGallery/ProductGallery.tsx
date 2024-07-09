"use client"

import React from "react"
import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { NextButton, PrevButton, usePrevNextButtons } from "./GalleryButtons"

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="relative flex touch-pan-y touch-pinch-zoom max-h-96">
          {slides.map((img, i) => (
            <div className="gallery-slide" key={i}>
              <img
                className="w-full h-full max-h-96 object-contain"
                src={img}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-2/4 flex justify-between gap-2.5 w-full">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  )
}

export default EmblaCarousel
