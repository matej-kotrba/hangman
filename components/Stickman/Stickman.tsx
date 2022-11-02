import React from "react";
import { useMainContext } from "../../contexts/context";

const HEAD = (index: number) => {
  return (
    <div
      key={index}
      className="w-[80px] aspect-square border-8 border-black border-solid rounded-full
      absolute right-[4px] top-[40px] translate-x-[50%]"
    ></div>
  );
};

const BODY = (index: number) => {
  return (
    <div
      key={index}
      className="w-[8px] h-[70px] bg-black absolute right-0 top-[120px]"
    ></div>
  );
};

const LEFT_HAND = (index: number) => {
  return (
    <div
      key={index}
      className="w-[60px] h-[8px] bg-black absolute right-0 top-[130px]"
    ></div>
  );
};

const RIGHT_HAND = (index: number) => {
  return (
    <div
      key={index}
      className="w-[60px] h-[8px] bg-black absolute right-[-60px] top-[130px]"
    ></div>
  );
};

const LEFT_LEG = (index: number) => {
  return (
    <div
      key={index}
      className="w-[8px] h-[70px] bg-black absolute right-0 top-[190px] rotate-[30deg] origin-top"
    ></div>
  );
};

const RIGHT_LEG = (index: number) => {
  return (
    <div
      key={index}
      className="w-[8px] h-[70px] bg-black absolute right-0 top-[190px] rotate-[-30deg] origin-top"
    ></div>
  );
};

const BODY_PARTS = [HEAD, BODY, LEFT_HAND, RIGHT_HAND, LEFT_LEG, RIGHT_LEG];

function Stickman() {
  const { usedGuesses } = useMainContext();

  return (
    <div className="relative w-fit mt-[20px] m-auto">
      <div className="w-[200px] h-[8px] ml-[96px] bg-black"></div>
      <div className="w-[8px] h-[40px] absolute bg-black right-0"></div>
      <div className="w-[8px] h-[300px] ml-[96px] bg-black"></div>
      <div className="w-[200px] h-[8px] bg-black"></div>
      {/* Hangman */}
      {BODY_PARTS.map((item, index) => {
        if (index >= usedGuesses) return;
        return item(index);
      })}
    </div>
  );
}

export default Stickman;
