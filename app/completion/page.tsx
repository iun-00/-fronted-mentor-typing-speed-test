import { RotateCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const aa = {
  
}

export default function CompletionPage() {
  return (
    <div className="text-white flex flex-col justify-center items-center gap-15 relative">
      <div className="relative w-32.5 h-32.5">
        <Image
          src={"/images/icon-completed.svg"}
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
          width={70}
          height={70}
        />
        <div className="absolute bg-[#4DD77B]/50 w-25 h-25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full"></div>
        <div className="absolute bg-[#4DD77B]/20 w-32.5 h-32.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-black mb-5">Test Complete!</h1>
        <p className="text-zinc-400">
          solid run. Keep pushing to beat your high score.
        </p>
      </div>
      <div className="flex gap-6 text-zinc-400">
        <div className="border border-zinc-700 rounded-[10px] p-4 w-32">
          <p>WPM:</p>
          <p className="text-2xl font-bold text-white">85</p>
        </div>
        <div className="border border-zinc-700 rounded-[10px] p-4 w-32">
          <p>Accuracy:</p>
          <p className="text-2xl font-bold">90%</p>
        </div>
        <div className="border border-zinc-700 rounded-[10px] p-4 w-32">
          <p>Characters:</p>
          <p className="text-2xl font-bold">
            120<span>/</span>
            <span>5</span>
          </p>
        </div>
      </div>
      <Link href={"/"} className="bg-white p-3 rounded-[10px] text-black flex gap-2 cursor-pointer">
        <p className="font-bold">Go Again</p>
        <RotateCcw />
      </Link>
      <Image
        src={"/images/pattern-star-1.svg"}
        alt=""
        className="absolute right-2 bottom-3"
        width={60}
        height={60}
      />
      <Image
        src={"/images/pattern-star-2.svg"}
        alt=""
        className="absolute left-10 top-30"
        width={30}
        height={30}
      />
    </div>
  );
}
