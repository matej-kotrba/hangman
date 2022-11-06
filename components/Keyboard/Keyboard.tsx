import React, { useCallback, useEffect } from "react";
import { useMainContext } from "../../contexts/context";

const KEYS = [
  ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["y", "x", "c", "v", "b", "n", "m"],
];

function Keyboard() {
  const {
    usedKeys,
    setUsedKeys,
    setUsedGuesses,
    maxGuesses,
    usedGuesses,
    wordToGuess,
    setCorrectGuesses,
  } = useMainContext();

  const handleKey = useCallback(
    (key: string) => {
      if (
        key &&
        !usedKeys.some((letter) => key === letter) &&
        usedGuesses < maxGuesses
      ) {
        setUsedKeys((old) => {
          return [...old, key as string];
        });
        // Check if letter is in the word user should guess
        if (!wordToGuess.some((letter) => key === letter)) {
          setUsedGuesses((old) => old + 1);
        } else {
          setCorrectGuesses((old) => [...old, key as string]);
        }
      }
    },
    [
      maxGuesses,
      setCorrectGuesses,
      setUsedGuesses,
      setUsedKeys,
      usedGuesses,
      usedKeys,
      wordToGuess,
    ]
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const key = e?.currentTarget?.dataset?.key;

    if (key) handleKey(key as string);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const key = e?.key;

    if (key) handleKey(key);
  };

  useEffect(() => {
    addEventListener("keypress", handleKeyDown);
    return () => removeEventListener("keypress", handleKeyDown);
  }, [handleKey]);

  const KeyRow = (item: string[]) => {
    const data = item.map((letter: string, index: number) => {
      let bgColor: string = "bg-transparent";
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
         flex flex-col justify-center items-center cursor-pointer select-none hover:scale-105`}
          onClick={(e) => handleClick(e)}
        >
          <span className="text-4xl font-bold uppercase text-white grid text-center">
            {letter}
          </span>
        </div>
      );
    });
    return data;
  };

  return (
    <div className="w-fit mx-auto flex flex-col gap-1">
      {KEYS.map((item: string[], index: number) => {
        return (
          <div key={index} className="flex gap-1 justify-center">
            {KeyRow(item)}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
