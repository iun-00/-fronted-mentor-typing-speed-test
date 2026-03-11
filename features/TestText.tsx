"use client";

const TEXT_STYLE = {
  color: {
    match: "oklch(69.6% 0.17 162.48)",
    missMatch: "oklch(70.4% 0.191 22.216)",
    undefind: "oklch(70.5% 0.015 286.067)",
  },
  textDecoration: {
    match: "",
    missMatch: "underline",
    undefind: "",
  },
};

interface TestTextT {
  text: string;
  typingText: string;
}

export default function TestText({ text, typingText }: TestTextT) {
  function getStyle(style: "color" | "textDecoration", index: number): string {
    if (text[index] === typingText[index]) {
      return TEXT_STYLE[style]["match"];
    } else if (!typingText[index]) {
      return TEXT_STYLE[style]["undefind"];
    } else {
      return TEXT_STYLE[style]["missMatch"];
    }
  }

  return (
    <>
      {text.split("").map((item, idx) => {
        return (
          <span
            key={idx}
            style={{
              color: getStyle("color", idx),
              textDecoration: getStyle("textDecoration", idx),
            }}
          >
            {item}
          </span>
        );
      })}
    </>
  );
}
