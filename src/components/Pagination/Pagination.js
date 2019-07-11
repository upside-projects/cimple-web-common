import React, { useState } from "react"
import { PropTypes } from "prop-types"

import Icons from "../Icons/index"

import * as S from "./styled"

const Pagination = ({ current, total }) => {
  const [currentPage, setCurrent] = useState(current)
  const totalPages = total
  const paginationSize = 5

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
        <Icons.Prev />
      </S.PageButton>
      {getPages(pages).map(page => (
        <S.Holder>
          <S.PageButton
            active={page === currentPage}
            onClick={() => setCurrent(page)}
            key={page}
          >
            {page}
          </S.PageButton>
        </S.Holder>
      ))}
      <S.PageButton
        disabled={currentPage >= totalPages}
        onClick={() => setCurrent(currentPage + 1)}
      >
        <Icons.Next />
      </S.PageButton>
    </S.PageHolder>
  )
}

export default Pagination

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}
