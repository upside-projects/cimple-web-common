import React from "react"

import * as S from "./styled"

const Gallery = ({ images }) => {
  const [featuredImage, setFeatured] = React.useState(0)

  return (
    <S.GalleryHolder>
      <S.GalleryHighlight image={images[featuredImage]} />
      <S.Holder>
        <S.GalleryThumbnails>
          {images.map(image => (
            <S.Thumbnail image={image} onClick={() => setFeatured(1)} />
          ))}
        </S.GalleryThumbnails>
      </S.Holder>
    </S.GalleryHolder>
  )
}

export default Gallery
