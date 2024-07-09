"use client"

import Link from "next/link"
import Image from "next/image"
import { useAppSelector } from "@/store/hooks"
import { selectTotalQuantity } from "@/store/slices/cart.slice"

export default function Header() {
  const quantityProducts = useAppSelector(selectTotalQuantity)

  return (
    <header className="fixed w-full z-10 bg-black h-16">
      <div className="flex flex-1 items-center justify-between px-14 h-full">
        <Link href="/">
          <Image src="/favicon.ico" alt="Logo Image" width={25} height={25} />
        </Link>
        <div className="relative">
          <p className="absolute left-3.5 bottom-3 flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2.5 text-xs text-white">
            {quantityProducts}
          </p>
          <Link href="/cart">
            <Image src="/cart.svg" alt="Cart" width={22} height={22} />
          </Link>
        </div>
      </div>
    </header>
  )
}
