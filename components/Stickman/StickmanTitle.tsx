import { useEffect, useCallback } from "react";
import { useMainContext } from "../../contexts/context";

async function fetchWord() {
  // Fetches word from api and returns first word in an array
  const json = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1&length=6"
  );
  const data = await json.json();
  return data[0];
}

function StickmanTitle() {
  const {
    wordToGuess,
    setWordToGuess,
    usedKeys,
    setUsedGuesses,
    setUsedKeys,
    usedGuesses,
    maxGuesses,
    setCorrectGuesses,
  } = useMainContext();

  const handleNewWord = useCallback(async () => {
    const word: string = await fetchWord();
    setWordToGuess(word.split(""));
    setUsedGuesses(0);
    setUsedKeys([]);
    setCorrectGuesses([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setWordToGuess]);

  useEffect(() => {
    handleNewWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="relative my-14 w-fit mx-auto flex gap-4">
        {usedGuesses >= maxGuesses && (
          <p className="text-red-600 uppercase text-[4rem]">{wordToGuess}</p>
        )}
        {!(usedGuesses >= maxGuesses) &&
          wordToGuess.map((letter, index) => {
            return (
              <div
                key={index}
                className="border-b-8 border-black border-solid w-[50px] text-center text-[4rem] uppercase"
              >
                <span className="text-white">
                  {usedKeys.some((pom) => pom === letter) ? letter : "?"}
                </span>
              </div>
            );
          })}
      </div>
      <button
        type="button"
        onClick={handleNewWord}
        className="fixed left-2 top-2 bg-blue-500 text-white p-6 font-bold rounded-md hover:bg-blue-600 overflow-hidden
        before:content-[''] before:absolute before:w-12 before:h-[300%] before:bg-reflectionEffect before:top-[10%] before:origin-center
        before:left-[-40%] before:translate-y-[-50%] before:rotate-[45deg] hover:before:left-[110%] hover:before:top-[110%]
        hover:before:duration-700 before:ease duration-200"
      >
        Generate new word!
      </button>
    </>
  );
}

export default StickmanTitle;
