import styled, { css } from "styled-components"

export const GalleryHolder = styled.div`
  width: 100%;
  max-width: 26rem;
`

export const GalleryHighlight = styled.div`
  background-image: url(${p => p.image});
  background-size: cover;

  height: 26rem;
  width: 100%;
`

export const GalleryThumbnails = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(6, calc(36% - 2rem));
  grid-template-rows: minmax(110px, 1fr);

  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;

  margin-top: 1rem;
`

export const Holder = styled.div`
  position: relative;
`

export const GalleryThumbnailsFade = styled.div`
  position: absolute;
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(255, 255, 255, 0.6)
  );

  width: 100%;
  height: 6.8rem;

  z-index: 99;
`

export const Thumbnail = styled.div`
  background-image: url(${p => p.image});
  background-size: cover;

  ${p =>
    !p.featured &&
    css`
      opacity: 0.6;
    `}
`
