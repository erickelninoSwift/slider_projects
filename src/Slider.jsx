import { React } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { list } from "./data";
import { FaQuoteRight } from "react-icons/fa";

export const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  console.log(list);
  return (
    <section className="slick-carousel">
      <Slider {...settings}>
        {list.map((person) => {
          const { id, image, name, title, quote } = person;
          return (
            <article className="" key={id}>
              <img
                src={image}
                alt={title}
                className="person-img"
                style={{ display: "inline-block" }}
              />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};
