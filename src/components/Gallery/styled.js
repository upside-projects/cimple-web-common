import styled, { css } from "styled-components"

export const GalleryHolder = styled.div`
  width: 100%;
  max-width: 26rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

export const GalleryHighlight = styled.div`
  background-image: url(${p => p.image});
  background-size: cover;

  -webkit-transition: background-image 0.2s ease-in-out;
  transition: background-image 0.2s ease-in-out;

  height: 26rem;
  width: 100%;

  @media only screen and (max-width: 768px) {
    height: 16rem;
    background-size: cover;
  }

  ${p =>
    p.isEmpty &&
    css`
      background-image: url(${p.image});
      background-size: 20% 20%;
      background-repeat: no-repeat;
      background-position: center center;
      background-color: ${({ theme }) => theme.colors.greyscale.lighter};
    `}
`

export const GalleryThumbnails = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(6, calc(32% - 2rem));
  grid-template-rows: minmax(6.2rem, 1fr);

  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;

  margin-top: 1rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(6, calc(34% - 2rem));
    grid-template-rows: minmax(4.6rem, 1fr);
  }
`

export const Holder = styled.div`
  position: relative;
`

export const Thumbnail = styled.div`
  background-image: url(${p => p.image});
  background-position: center center;
  background-size: cover;
  opacity: 1;

  transition: ${({ theme }) => theme.transition.ease()}
    ${p =>
      !p.featured &&
      css`
        opacity: 0.6;
      `};
`
