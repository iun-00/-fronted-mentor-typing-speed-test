"use client";

const TEXT_STYLE = {
  color: {
    match: "#4DD77B",
    missMatch: "#C9515D",
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
