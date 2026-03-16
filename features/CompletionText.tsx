"use client";

import { useScoreContext } from "@/app/LayoutClient";
import { getAccuracy, getWPM } from "@/entities/calculate";

export default function CompletionText() {
  const { characters, timeLimit } = useScoreContext();

  return (
    <div className="flex gap-6 text-zinc-400">
      <div className="border border-zinc-700 rounded-[10px] p-4 w-32">
        <p>WPM:</p>
        <p className="text-2xl font-bold text-white">
          {getWPM(characters.correct, timeLimit)}
        </p>
      </div>
      <div className="border border-zinc-700 rounded-[10px] p-4 w-32">
        <p>Accuracy:</p>
        <p className="text-2xl font-bold">
          {getAccuracy(characters.correct, characters.incorrect)}%
        </p>
      </div>
      <div className="border border-zinc-700 rounded-[10px] p-4 w-32">
        <p>Characters:</p>
        <p className="text-2xl font-bold">
          <span>{characters.correct}</span>/<span>{characters.incorrect}</span>
        </p>
      </div>
    </div>
  );
}
