import React, { useState, createContext, useContext } from "react";

interface initalStateInterface {
  maxGuesses: number;
  usedGuesses: number;
  setUsedGuesses: React.Dispatch<((old: number) => number) | number>;
  usedKeys: string[];
  setUsedKeys: React.Dispatch<((old: string[]) => string[]) | string[]>;
  wordToGuess: string[];
  setWordToGuess: React.Dispatch<string[]>;
}

const MainContext = createContext<initalStateInterface>(
  {} as initalStateInterface
);

function ContextWrapper({ children }: { children: React.ReactElement }) {
  const [maxGuesses, setMaxGuesses] = useState<number>(6);
  const [usedGuesses, setUsedGuesses] = useState<number>(0);
  const [usedKeys, setUsedKeys] = useState<string[]>([]);
  const [wordToGuess, setWordToGuess] = useState<string[]>([]);

  return (
    <MainContext.Provider
      value={{
        maxGuesses,
        usedGuesses,
        setUsedGuesses,
        usedKeys,
        setUsedKeys,
        wordToGuess,
        setWordToGuess,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default ContextWrapper;

export const useMainContext = () => useContext(MainContext);
