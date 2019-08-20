/* global document */
import React from "react"
import ReactDOM from "react-dom"

import * as S from "./styled"

const Modal = ({ children, isOpen, onClose, ...props }) => {
  if (isOpen) {
    return ReactDOM.createPortal(
      <React.Fragment>
        <S.Content isOpen={isOpen}>
          <S.Modal {...props}>{children}</S.Modal>
          <S.Wrapper onClick={onClose} />
        </S.Content>
      </React.Fragment>,
      document.body
    )
  }

  return null
}

export default Modal
