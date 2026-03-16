"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import TestText from "./TestText";
import { difficultyT, modeT } from "@/entities/type";
import data from "@/entities/data.json";
import { useScoreContext } from "@/app/LayoutClient";
import { getCharacters } from "@/entities/calculate";
import { useRouter } from "next/navigation";

interface MainT {
  difficulty: difficultyT;
  mode: modeT;
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
}

export default function Main({ difficulty, mode, timer, setTimer }: MainT) {
  const { setCharacters } = useScoreContext();

  const router = useRouter();

  const [start, setStart] = useState(false);
  const [testText, setTestText] = useState("");
  const [typingText, setTypingText] = useState("");

  function startTimer() {
    const intervalId = setInterval(() => {
      setTimer((v) => {
        if (v <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return v - 1;
      });
    }, 1000);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!start) {
        setStart(true);
        startTimer();
        return;
      }
      if (e.key.length === 1) {
        setTypingText((v) => v + e.key);
      } else if (e.key === "Backspace") {
        setTypingText((v) => v.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [start]);

  useEffect(() => {
    setTestText(data[difficulty][Math.floor(Math.random() * 10)].text);
  }, [difficulty]);

  useEffect(() => {
    if (mode === "passage") {
      setTimer(61); // passage 옵션
    } else {
      setTimer(60);
    }
  }, [mode]);

  useEffect(() => {
    if (!typingText.length) return;
    if (!timer || typingText.length === testText.length) {
      setCharacters(getCharacters(testText, typingText));
      router.push("/completion");
    }
  }, [timer, typingText]);

  return (
    <div className="flex flex-col justify-center items-center">
      <main
        id="main"
        className="relative border-zinc-800 pt-8 pb-12 border-t border-b"
      >
        <p
          id="main-typing_text"
          className="text-zinc-400 text-3xl font-medium leading-14"
          style={start ? {} : { filter: "blur(4px)" }}
        >
          <TestText text={testText} typingText={typingText} />
        </p>
        {!start && (
          <div className="absolute text-white font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <button
              id="main-typing_test_start"
              className="bg-blue-500 py-3 px-7 rounded-2xl cursor-pointer flex-none"
              onClick={() => {
                setStart(true);
                startTimer();
              }}
            >
              Start Typing Test
            </button>
            <p className="py-5">Or Click the text and start typing</p>
          </div>
        )}
      </main>
      {start && (
        <button
          className="bg-zinc-800 px-5 py-3 text-white font-semibold rounded-[15px] flex gap-2 cursor-pointer mt-8"
          onClick={() => {
            setTypingText("");
          }}
        >
          Restart Test
          <Image src="/images/icon-restart.svg" alt="" width={18} height={18} />
        </button>
      )}
    </div>
  );
}
