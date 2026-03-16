"use client";

import { charactersT } from "@/entities/type";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type conttextT = {
  bestScore: number;
  setBestScore: Dispatch<SetStateAction<number>>;
  characters: charactersT;
  setCharacters: Dispatch<SetStateAction<charactersT>>;
  timeLimit: number;
  setTimeLimit: Dispatch<SetStateAction<number>>
};

const bestScoreContext = createContext<conttextT | undefined>(undefined);

interface LayoutClientProviderT {
  children: React.ReactNode;
}
export default function LayoutClientProvider({
  children,
}: LayoutClientProviderT) {
  const [bestScore, setBestScore] = useState(0);
  const [characters, setCharacters] = useState({ correct: 0, incorrect: 0 }); // [정확한문자수, 틀린문자수]
  const [timeLimit, setTimeLimit] = useState(60);

  return (
    <bestScoreContext.Provider
      value={{
        bestScore,
        setBestScore,
        characters,
        setCharacters,
        timeLimit,
        setTimeLimit,
      }}
    >
      {children}
    </bestScoreContext.Provider>
  );
}

export const useScoreContext = () => {
  const context = useContext(bestScoreContext);
  if (!context) throw new Error("Provider 안에서 사용");
  return context;
};
