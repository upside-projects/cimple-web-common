import styled from "styled-components"

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;

  background: rgba(0, 0, 0, 0.3);
`

export const Modal = styled.div`
  background: ${({ theme }) => theme.colors.greyscale.white};
  border-radius: ${({ theme }) => theme.radius.small};

  margin: auto;
  padding: 2rem;
  z-index: 9999;
`

export const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  margin: auto;
  z-index: 99;

  display: ${p => (p.isOpen ? "flex" : "none")};
`
