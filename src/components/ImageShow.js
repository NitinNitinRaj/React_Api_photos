import React from "react"

const ImageShow = ({ image }) => {
  return (
    <div>
      <img alt={image.description} src={image.urls.regular} />
    </div>
  )
}

export default ImageShow
