import React from "react"

import * as S from "./styled"

const Gallery = ({ images }) => {
  const [featuredImage, setFeatured] = React.useState(0)

  console.log(featuredImage)

  return (
    <S.GalleryHolder>
      <S.GalleryHighlight image={images[featuredImage]} />
      <S.Holder>
        <S.GalleryThumbnails>
          {images.map((image, index) => (
            <S.Thumbnail
              image={image}
              featured={featuredImage === index}
              onClick={() => setFeatured(index)}
            />
          ))}
        </S.GalleryThumbnails>
      </S.Holder>
    </S.GalleryHolder>
  )
}

export default Gallery
