import React from "react"

import * as S from "./styled"

const Loader = () => {
  return (
    <S.Spinner>
      <S.Bounce1 />
      <S.Bounce2 />
      <S.Bounce3 />
    </S.Spinner>
  )
}

export default Loader
