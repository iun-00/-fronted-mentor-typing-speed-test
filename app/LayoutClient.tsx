"use client";

import { difficultyT, modeT } from "@/entities/type";
import Header from "@/features/Header";
import Main from "@/features/Main";
import Nav from "@/features/Nav";
import { useState } from "react";

export default function LayoutClient() {
  const [difficulty, setDifficulty] = useState<difficultyT>("easy");
  const [mode, setMode] = useState<modeT>("timed");
  const [timer, setTimer] = useState(60);
  return (
    <div className="bg-zinc-950 h-screen px-30 py-10">
      <Header />
      <Nav
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        mode={mode}
        setMode={setMode}
        timer={timer}
      />
      <Main difficulty={difficulty} mode={mode} timer={timer} setTimer={setTimer}/>
    </div>
  );
}
