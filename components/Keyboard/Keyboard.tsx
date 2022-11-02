import React from "react";
import { useMainContext } from "../../contexts/context";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function Keyboard() {
  const {
    usedKeys,
    setUsedKeys,
    setUsedGuesses,
    maxGuesses,
    usedGuesses,
    wordToGuess,
  } = useMainContext();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const key = e.currentTarget.dataset.key;

    // Check if:
    // key was already guessed
    // user has any tries left
    if (
      !usedKeys.some((letter) => key === letter) &&
      usedGuesses < maxGuesses
    ) {
      setUsedKeys((old) => {
        return [...old, key as string];
      });
      // Check if letter is in the word user should guess
      if (!wordToGuess.some((letter) => key === letter))
        setUsedGuesses((old) => old + 1);
    }
  };

  return (
    <div className="flex gap-2 flex-wrap w-[700px] justify-center m-auto">
      {KEYS.map((letter: string, index: number) => {
        let bgColor = "bg-transparent";
        if (usedKeys.some((item) => item === letter)) {
          if (wordToGuess.some((item) => item === letter)) {
            bgColor = "bg-blue-500";
          } else bgColor = "bg-gray-700";
        }

        return (
          <div
            key={index}
            data-key={letter}
            className={`w-[70px] aspect-[2/3] ${bgColor} border-4 border-black rounded-md
             flex flex-col justify-center items-center cursor-pointer select-none`}
            onClick={(e) => handleClick(e)}
          >
            <span className="text-4xl font-bold uppercase text-white grid text-center">
              {letter}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
