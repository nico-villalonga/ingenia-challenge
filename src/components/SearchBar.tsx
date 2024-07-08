"use client"

import { useGetProductCategoriesQuery } from "@/store/api/products.api"
import { useAppDispatch } from "@/store/hooks"
import { setCategory, setQuery } from "@/store/slices/search.slice"
import Dropdown from "./Dropdown"
import Input from "./Input"
import type { Option } from "@/types"

export default function SearchBar() {
  const dispatch = useAppDispatch()
  const { data, isSuccess } = useGetProductCategoriesQuery()

  let categories: Option[] = []

  if (isSuccess) {
    categories = data.map((category) => ({
      label: category.name,
      value: category.slug,
    }))
  }

  function handleCategorySelect(value: string) {
    dispatch(setCategory({ category: value }))
  }

  function handleSearchPerform(value: string) {
    dispatch(setQuery({ query: value }))
  }

  return (
    <div className="flex items-center p-2 space-x-2 md:space-x-6 bg-white rounded-xl shadow-lg">
      <Input handleChange={handleSearchPerform} />
      <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
        <Dropdown
          label="All categories"
          options={categories}
          handleChange={handleCategorySelect}
        />
      </div>
    </div>
  )
}
