import React from "react";
import { shortList, list, longList } from "../data";
import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

export const Carousel = () => {
  const [myShortList, setMyshortList] = useState(shortList);
  const [myList, setList] = useState(list);
  const [myLongList, setMyLongList] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(null);

  console.log(myShortList);
  console.log(list);
  console.log(myLongList);

  function PrevieSlide() {
    console.log("Previious");
  }

  function NextSlide() {
    console.log("NextSlide");
  }
  return (
    <>
      <section className="slider-container">
        {myList.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          return (
            <article
              className="slide next-slide"
              style={{ transform: `translate(${100 * personIndex}%)` }}
              key={id}
            >
              <img src={image} alt={title} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <div>
          <button className="prev" onClick={PrevieSlide}>
            <FiChevronsLeft />
          </button>
          <button className="next" onClick={NextSlide}>
            <FiChevronsRight />
          </button>
        </div>
      </section>
    </>
  );
};
