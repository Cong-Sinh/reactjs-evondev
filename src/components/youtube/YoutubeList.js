import React from "react";
import YoutubeItem from "./YoutubeItem";
import { YoutubeData } from "../../data";

export default function YoutubeList(props) {
  return (
    <>
      {props.children}
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          title={item.title}
          author={item.author}
        />
      ))}
    </>
  );
}
