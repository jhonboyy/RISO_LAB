// src/pages/index.js

import Header from "@/components/Header";
import Canvas from "@/components/Canvas";
import Menu from "@/components/Menu";
import Instructions from "@/components/Instructions";
import Download from "@/components/Download";

export default function Home() {
  return (
    <main>
      <Header />
      <Canvas />
      <section className="menu-wrapper">
        <Menu />
        <Instructions />
      </section>
      <Download />
    </main>
  );
}