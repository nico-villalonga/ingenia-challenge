import { useState } from "react"

export default function Input({
  handleChange,
}: {
  handleChange: (value: string) => void
}) {
  const [value, setValue] = useState("")

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleChange(value)
    }
  }

  return (
    <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
      <div className="cursor-pointer" onClick={() => handleChange(value)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        className="bg-gray-100 outline-none"
        type="text"
        placeholder="Looking for?"
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => handleKeyDown(e)}
      />
    </div>
  )
}
