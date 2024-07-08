import type { Option } from "@/types"
import { useState } from "react"

interface DropdownProps {
  label: string
  options: Option[]
  handleChange: (value: string) => void
}

export default function Dropdown({
  label,
  options,
  handleChange,
}: DropdownProps) {
  const [selectedValue, setSelectedValue] = useState("")

  return (
    <select
      value={selectedValue}
      onChange={(e) => {
        const value = e.target.value

        setSelectedValue(value)
        handleChange(value)
      }}
      className="text-sm block w-full p-2.5"
    >
      <option disabled={true} value="">
        {label}
      </option>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
