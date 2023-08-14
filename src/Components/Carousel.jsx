import React from "react";
import { shortList, list, longList } from "../data";
import { useState } from "react";

export const Carousel = () => {
  const [myShortList, setMyshortList] = useState(shortList);
  const [myList, setList] = useState(list);
  const [myLongList, setMyLongList] = useState(longList);

  console.log(myShortList);
  console.log(list);
  console.log(myLongList);
  return (
    <>
      <section className="slider-container">
        {shortList.map((person) => {
          const { id, image, name, title, quote } = person;
          return <article className="slide" key={id}></article>;
        })}
      </section>
      <div>
        <button onClick={() => console.log("Preview")}>Prev</button>
        <button onClick={() => console.log("Next")}>Next</button>
      </div>
    </>
  );
};
