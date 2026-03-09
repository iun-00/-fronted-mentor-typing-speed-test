"use client";

import { useState } from "react";

export default function Nav() {
  type difficultyT = "easy" | "medium" | "hard";
  type modeT = "timed" | "passage";

  const [difficulty, setDifficulty] = useState<difficultyT>("easy");
  const [mode, setMode] = useState<modeT>("timed");

  const buttonStyleClass =
    "border border-zinc-500 text-zinc-300 px-2 py-0.5 rounded-[5px] cursor-pointer hover:border-blue-400 hover:text-blue-400";
  function getButtonStyle(type: "difficulty" | "mode", text: difficultyT | modeT) {
    if (type === "difficulty") return {
      color:
        difficulty === text
          ? "oklch(70.7% 0.165 254.624)"
          : "oklch(87.1% 0.006 286.286)",
      borderColor:
        difficulty === text
          ? "oklch(70.7% 0.165 254.624)"
          : "oklch(87.1% 0.006 286.286)",
      cursor: difficulty === text ? "default" : "pointer",
    }
    else return {
      color:
        mode === text
          ? "oklch(70.7% 0.165 254.624)"
          : "oklch(87.1% 0.006 286.286)",
      borderColor:
        mode === text
          ? "oklch(70.7% 0.165 254.624)"
          : "oklch(87.1% 0.006 286.286)",
      cursor: mode === text ? "default" : "pointer",
    }
  }
  return (
    <nav id="nav" className="flex items-center py-5 mt-12">
      <section id="view" className="flex text-zinc-600 font-bold text-[18px]">
        <p id="view-wpm" className="border-r border-zinc-800 px-8">
          WPM: <span className="text-white font-black text-2xl">{0}</span>
        </p>
        <p id="view-accuracy" className="border-r border-zinc-800 px-8">
          Accuracy:{" "}
          <span className="text-white font-black text-2xl">{100}%</span>
        </p>
        <p id="view-time" className="border-zinc-800 px-8">
          Time:{" "}
          <span className="text-white font-black text-2xl">
            {0}:{60}
          </span>
        </p>
      </section>
      <section id="options" className="flex text-zinc-600 ml-auto">
        <div
          id="options-difficulty"
          className="flex items-center gap-1 border-r border-zinc-800 px-5"
        >
          <p className="pr-2">Difficulty: </p>
          <button
            id="options-difficulty_easy"
            className={buttonStyleClass}
            style={getButtonStyle("difficulty", "easy")}
            onClick={() => {
              setDifficulty("easy");
            }}
          >
            Easy
          </button>
          <button
            id="options-difficulty_medium"
            className={buttonStyleClass}
            style={getButtonStyle("difficulty", "medium")}
            onClick={() => {
              setDifficulty("medium");
            }}
          >
            Medium
          </button>
          <button
            id="options-difficulty_hard"
            className={buttonStyleClass}
            style={getButtonStyle("difficulty", "hard")}
            onClick={() => {
              setDifficulty("hard");
            }}
          >
            Hard
          </button>
        </div>
        <div id="options-mode" className="flex items-center gap-1 px-5">
          <p className="pr-2">Mode: </p>
          <button
            id="options-mode_timed"
            className={buttonStyleClass}
            style={getButtonStyle("mode", "timed")}
            onClick={() => {
              setMode("timed");
            }}
          >
            Timed (60s)
          </button>
          <button
            id="options-mode_passage"
            className={buttonStyleClass}
            style={getButtonStyle("mode", "passage")}
            onClick={() => {
              setMode("passage");
            }}
          >
            Passage
          </button>
        </div>
      </section>
    </nav>
  );
}
