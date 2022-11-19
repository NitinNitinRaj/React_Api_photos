import React from "react"
import ImageShow from "./ImageShow"

const ImageList = ({ images }) => {
  const rendredImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />
  })
  return <div>{rendredImages}</div>
}
export default ImageList
