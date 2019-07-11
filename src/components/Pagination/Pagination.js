import React, { useState } from "react"

import Icons from "../Icons/index"

import * as S from "./styled"

const Pagination = ({ current, total }) => {
  const [currentPage, setCurrent] = useState(current)
  const [totalPages, setTotal] = useState(total)
  const [paginationSize, setSize] = useState(5)

  const pages = [...Array(total).keys()].map(x => x + 1)

  const getPages = () => {
    if (totalPages < paginationSize) {
      return pages
    }

    if (currentPage < Math.ceil(paginationSize / 2)) {
      return pages.slice(0, paginationSize)
    }

    if (currentPage >= totalPages - Math.floor(paginationSize / 2)) {
      return pages.slice(0, paginationSize)
    }

    return pages.slice(
      currentPage - Math.ceil(paginationSize / 2),
      currentPage + Math.floor(paginationSize / 2)
    )
  }

  return (
    <S.PageHolder>
      <S.PageButton
        disabled={currentPage <= 1}
        onClick={() => setCurrent(currentPage - 1)}
      >
        <Icons.ArrowSmall />
      </S.PageButton>
      {getPages(pages).map(page => (
        <S.Holder>
          <S.PageButton active={page === currentPage} key={page}>
            {page}
          </S.PageButton>
        </S.Holder>
      ))}
      <S.PageButton
        disabled={currentPage >= totalPages}
        onClick={() => setCurrent(currentPage + 1)}
      >
        <Icons.ArrowSmall />
      </S.PageButton>
    </S.PageHolder>
  )
}

export default Pagination
