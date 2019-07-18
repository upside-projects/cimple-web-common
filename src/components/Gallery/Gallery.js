import React from "react"

import * as S from "./styled"

const Gallery = () => {
  return (
    <S.GalleryHolder>
      <S.GalleryHighlight image="https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-walnut_1600x.jpg?v=1521917082" />
      <S.GalleryThumbnails>
        <S.Thumbnail image="https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-walnut_1600x.jpg?v=1521917082" />
        <S.Thumbnail image="https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-walnut_1600x.jpg?v=1521917082" />
        <S.Thumbnail image="https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-walnut_1600x.jpg?v=1521917082" />
        <S.Thumbnail image="https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-walnut_1600x.jpg?v=1521917082" />
        <S.Thumbnail image="https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-walnut_1600x.jpg?v=1521917082" />
        <S.Thumbnail image="https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-walnut_1600x.jpg?v=1521917082" />
      </S.GalleryThumbnails>
    </S.GalleryHolder>
  )
}

export default Gallery
