import React from "react";

function YoutubeItem(props) {
  return (
    <>
      <h1>sinh dz</h1>
      <img className="image" src={props.image} />
      <p>{props.title}</p>
    </>
  );
}

export default YoutubeItem;
