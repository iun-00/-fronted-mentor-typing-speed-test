"use Client";

import Image from "next/image";

export default function Header() {
  return (
    <header id="header" className="flex">
      <Image src="/images/logo-large.svg" alt="" width={284} height={48} />
      <div id="personal-bast" className="flex items-center gap-2 ml-auto">
        <Image
          src="/images/icon-personal-best.svg"
          alt=""
          width={27}
          height={27}
        />
        <p className="text-zinc-600">Personal Bast:</p>
        <p id="personal-bast-score" className="text-zinc-300">
          WPM
        </p>
      </div>
    </header>
  );
}
