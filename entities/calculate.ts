import { charactersT } from "./type";

export function getWPM(correct: number, time: number): number {
  return Math.floor(correct / 5 / time);
}

export function getAccuracy(correct: number, incorrect: number): number {
  const result = Math.floor((correct / (correct + incorrect)) * 100)
  return result || 0;
}

export function getCharacters(text: string, typing: string): charactersT {
  const correct = text.split("").reduce((acc: number, _, idx: number) => {
    return text[idx + 1] === typing[idx + 1] ? acc + 1 : acc;
  }, 0);
  const incorrect = text.length - correct;
  return {
    correct,
    incorrect,
  };
}
