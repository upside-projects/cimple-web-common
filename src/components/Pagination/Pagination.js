import React from "react"
import { PropTypes } from "prop-types"

import Icons from "../Icons/index"

import * as S from "./styled"

const Pagination = ({ current, onChange, paginationSize, total }) => {
  const pages = [...Array(total).keys()].map(x => x + 1)

  const getPages = () => {
    if (total < paginationSize) {
      return pages
    }

    if (current < Math.ceil(paginationSize / 2)) {
      return pages.slice(0, paginationSize)
    }

    if (current >= total - Math.floor(paginationSize / 2)) {
      return pages.slice(0, paginationSize)
    }

    return pages.slice(
      current - Math.ceil(paginationSize / 2),
      current + Math.floor(paginationSize / 2)
    )
  }

  return (
    <S.PageHolder>
      <S.PageButton
        disabled={current <= 1}
        onClick={() => onChange(current - 1)}
      >
        <Icons.Prev />
      </S.PageButton>
      {getPages(pages).map(page => (
        <S.Holder>
          <S.PageButton
            active={page === current}
            onClick={() => onChange(page)}
            key={page}
          >
            {page}
          </S.PageButton>
        </S.Holder>
      ))}
      <S.PageButton
        disabled={current >= total}
        onClick={() => onChange(current + 1)}
      >
        <Icons.Next />
      </S.PageButton>
    </S.PageHolder>
  )
}

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  paginationSize: PropTypes.number,
  onChange: PropTypes.func
}

Pagination.defaultProps = {
  paginationSize: 5,
  onChange: () => {}
}

export default Pagination
