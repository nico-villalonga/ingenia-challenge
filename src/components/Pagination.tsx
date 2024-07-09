import React from "react"

export default function Pagination({
  currentPage,
  itemsPerPage,
  totalItems,
  handlePagination,
}: {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  handlePagination: (_: number) => void
}) {
  const paginationNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    paginationNumbers.push(i)
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="list-style-none flex gap-1">
        <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-cyan-50"
            href="#"
          >
            Previous
          </a>
        </li>

        {paginationNumbers.map((pageNumber) => (
          <li
            onClick={() => handlePagination(pageNumber)}
            key={pageNumber}
            className={
              currentPage === pageNumber
                ? "border rounded border-cyan-500 bg-white"
                : ""
            }
          >
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-cyan-50"
              href="#"
            >
              {pageNumber}
            </a>
          </li>
        ))}

        <li>
          <a
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-cyan-50"
            href="#"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}
