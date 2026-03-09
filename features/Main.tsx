"use client";

import Image from "next/image";
import { useState } from "react";

export default function Main() {
  const dd =
    'Constitutional scholars continue debating the "counter-majoritarian difficulty": how can judicial review—whereby unelected judges overturn legislation passed by democratic representatives—be reconciled with popular sovereignty? Some argue courts protect minority rights against tyrannical majorities; others contend this reasoning masks ideological preferences in neutral-sounding jurisprudence. The tension, perhaps, is irresolvable; democratic systems must balance competing values rather than optimize for any single principle.';
  const [start, setStart] = useState(false);
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
          {dd}
        </p>
        {!start && (
          <div className="absolute text-white font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <button
              id="main-typing_test_start"
              className="bg-blue-500 py-3 px-7 rounded-2xl cursor-pointer flex-none"
              onClick={() => setStart(true)}
            >
              Start Typing Test
            </button>
            <p className="py-5">Or Click the text and start typing</p>
          </div>
        )}
      </main>
      {start && (
        <button className="bg-zinc-800 px-5 py-3 text-white font-semibold rounded-[15px] flex gap-2 cursor-pointer mt-8">
          Restart Test
          <Image src="/images/icon-restart.svg" alt="" width={18} height={18} />
        </button>
      )}
    </div>
  );
}
