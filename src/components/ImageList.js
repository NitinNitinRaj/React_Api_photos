import React from "react"
import ImageShow from "./ImageShow"
import "../styles/ImageList.css"

const ImageList = ({ images }) => {
  const rendredImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />
  })
  return <div className="image-list">{rendredImages}</div>
}
export default ImageList
