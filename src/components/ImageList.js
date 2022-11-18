import React from "react";
import "../styles/App.css";

const ImageList = (props) => {
  const images = props.images.map(({ id, url, desc }) => (
    <img className="ui medium image" alt={desc} src={url} key={id} />
  ));

  return <div className="ui segment images-container ">{images}</div>;
};

export default ImageList;
