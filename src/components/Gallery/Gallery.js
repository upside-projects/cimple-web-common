import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Gallery = ({ images }) => {
  const [featuredImage, setFeatured] = React.useState(0)

  if (images.length > 1) {
    return (
      <S.GalleryHolder>
        <S.GalleryHighlight image={images[featuredImage]} />
        <S.Holder>
          <S.GalleryThumbnails>
            {images.map((image, index) => (
              <S.Thumbnail
                key={image.index}
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

  if (images.length === 1) {
    return (
      <S.GalleryHolder>
        <S.GalleryHighlight image={images[featuredImage]} />
      </S.GalleryHolder>
    )
  }

  return (
    <S.GalleryHolder>
      <S.GalleryHighlight
        image="https://cimple-static-assets.s3-eu-west-1.amazonaws.com/emptyState.png"
        isEmpty
      />
    </S.GalleryHolder>
  )
}

export default Gallery

Gallery.defaultProps = {
  images:
    "https://cimple-static-assets.s3-eu-west-1.amazonaws.com/emptyState.png"
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
}
