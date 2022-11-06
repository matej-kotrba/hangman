import React from "react";
import { useMainContext } from "../../contexts/context";

function Notification() {
  const { maxGuesses, usedGuesses, correctGuesses, wordToGuess } =
    useMainContext();

  let isVictory = true;

  for (let i of wordToGuess) {
    if (!correctGuesses.some((letter) => letter === i)) {
      isVictory = false;
      break;
    }
  }

  return (
    <div
      className={`fixed left-[50%] top-3 bg-gray-700 text-white py-6 px-12 z-10
    rounded-md duration-500 ease-spring text-xl text-center ${
      isVictory ? "text-green-600" : "text-red-500"
    }`}
      style={{
        translate: `
          -50%
        ${usedGuesses >= maxGuesses || isVictory ? "0" : "-200%"}`,
      }}
    >
      {isVictory ? (
        <p>
          Good job!
          <br />
          You have guessed the word.
        </p>
      ) : (
        <p>Unfortunately you havent guessed the word!</p>
      )}
    </div>
  );
}

export default Notification;
