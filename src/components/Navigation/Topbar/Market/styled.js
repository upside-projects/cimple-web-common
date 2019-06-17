import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    margin-left: 100px;
  }
`

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1.25rem 2rem;
  width: 100vw;

  border-bottom: 1px solid ${({ theme }) => theme.colors.greyscale.lighter};
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > * {
    margin-right: 16px;
  }
`
