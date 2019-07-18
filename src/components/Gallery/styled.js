import styled from "styled-components"

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
  grid-template-columns: repeat(6, calc(36% - 40px));
  grid-template-rows: minmax(110px, 1fr);
  padding: 0;

  overflow-x: scroll;
  scroll-snap-type: x proximity;
`

export const Thumbnail = styled.div`
  background-image: url(${p => p.image});
  background-size: cover;

  &:last-child {
    margin-right: 20px;
  }
`
