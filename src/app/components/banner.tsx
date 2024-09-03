"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@headlessui/react";

const Banner = () => {
  const [activeItem, setActiveItem] = useState({
    prevItem: 0,
    currItem: 1,
    nextItem: 2,
    maxItems: 6,
  });
  const [isHidden, setIsHidden] = useState(false);

  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timeoutId.current) {
      //console.log("clearing timeout id: ", timeoutId.current);
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      clickRight();
    }, 5000);
  }, [activeItem]);

  const clickLeft = () => {
    setActiveItem((prev) => {
      const nextActiveState = { ...prev };
      nextActiveState.currItem =
        prev.prevItem <= 0 ? nextActiveState.maxItems : prev.prevItem;
      nextActiveState.prevItem =
        nextActiveState.currItem - 1 <= 0
          ? nextActiveState.maxItems
          : nextActiveState.currItem - 1;
      nextActiveState.nextItem = prev.currItem;
      return nextActiveState;
    });
  };

  const clickRight = () => {
    setActiveItem((prev) => {
      const nextActiveState = { ...prev };
      nextActiveState.nextItem =
        prev.nextItem >= nextActiveState.maxItems ? 1 : prev.nextItem + 1;
      nextActiveState.currItem = prev.nextItem;
      nextActiveState.prevItem = prev.currItem;
      return nextActiveState;
    });
  };

  return (
    <div id="banner" className="relative my-5 px-5 w-full ">
      <div id="carousel" className={`w-full relative z-10`}>
        {Array.from({ length: 6 }, (v, k) => k + 1).map((num, index) => {
          return (
            <div
              id="carousel_item"
              key={index}
              className={`group top-0 w-full ${
                activeItem.currItem == num ? "active relative" : ""
              } ${activeItem.prevItem == num ? "prev absolute" : ""} ${
                activeItem.nextItem == num ? "next absolute" : ""
              } ${
                activeItem.currItem != num &&
                activeItem.prevItem != num &&
                activeItem.nextItem != num
                  ? "hide relative"
                  : ""
              }`}
            >
              <div
                id="item"
                className={`opacity-0 group-[.active]:opacity-100 transition-opacity ease-in-out duration-500 bg-[url('https://www.henchman.com.au/documents/slideshow/slideshow_${num}.jpg')] bg-cover bg-center w-full`}
              >
                <Image
                  id={`item${num}_image`}
                  src={`https://www.henchman.com.au/documents/slideshow/slideshow_${num}.jpg`}
                  alt={`Henchman slide show item ${num}`}
                  sizes="100vw"
                  width={500}
                  height={100}
                  className={`w-full h-auto opacity-0 group-[.active]:opacity-100 group-[.hide]:hidden transition-all ease-in-out duration-500`}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div
        id="banner_controls_left"
        className={`z-20 w-[5%] text-center absolute top-1/2 mt-[-20px] ml-6 left-0 bottom-0 opacity-50 text-xl`}
      >
        <Button onClick={() => clickLeft()}>
          <FontAwesomeIcon icon={faChevronLeft} className={`fa fa-2x`} />
        </Button>
      </div>
      <div
        id="banner_controls_right"
        className={`z-20 w-[5%] text-center absolute top-1/2 mt-[-20px] mr-6 left-auto right-0 bottom-0 opacity-50 text-xl`}
      >
        {/* absolute w-[5%] h-full top-1/2 right-0  */}
        <Button onClick={() => clickRight()}>
          <FontAwesomeIcon icon={faChevronRight} className="fa fa-2x" />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
