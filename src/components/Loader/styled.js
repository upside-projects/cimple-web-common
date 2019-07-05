import styled, { css } from "styled-components"

export const divStyle = css`
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.colors.brand.default};

  border-radius: 100%;
  display: inline-block;

  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
`

export const animation = css`
  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`

export const Spinner = styled.div`
  ${animation}
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
`

export const Bounce1 = styled.div`
  ${divStyle}
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
`

export const Bounce2 = styled.div`
  ${divStyle}
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
`

export const Bounce3 = styled.div`
  ${divStyle}
`
