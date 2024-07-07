import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed w-full z-10 bg-black h-16">
      <div className="flex flex-1 items-center justify-between px-14 h-full">
        <Image src="/logo.webp" alt="Logo Image" width={100} height={100} />
        <div className="relative">
          <p className="absolute left-3.5 bottom-3 flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2.5 text-xs text-white">
            3
          </p>
          <Image src="/cart.svg" alt="Cart" width={22} height={22} />
        </div>
      </div>
    </header>
  )
}
