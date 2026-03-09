import Header from "@/features/Header";
import Main from "@/features/Main";
import Nav from "@/features/Nav";

export default function Home() {
  return (
    <div className="bg-zinc-950 h-screen px-30 py-10">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}
