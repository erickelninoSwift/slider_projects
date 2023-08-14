import React from "react";
import { shortList, list, longList } from "../data";

export const Carousel = () => {
  const [myShortList, setMyshortList] = useState(shortList);
  const [myList, setList] = useState(list);
  const [myLongList, setMyLongList] = useState(longList);

  console.log(myShortList);
  console.log(list);
  console.log(myLongList);
  return (
    <>
      <h2>Hello my friend</h2>
    </>
  );
};
