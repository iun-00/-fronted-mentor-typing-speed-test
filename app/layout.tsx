import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "typing speed test",
  description: "타이핑 스피드 입력 테스트 입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
