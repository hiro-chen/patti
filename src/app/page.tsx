// src/app/page.tsx
"use client"; // ✅ 建議加上這行，強制整頁 client-only（或見方案 B）

import dynamic from "next/dynamic";

// ✅ 改用動態載入方式，防止 SSR
const Carousel = dynamic(() => import("../components/Carousel"), { ssr: false });

// import { Hero } from "../components/Hero";
import { TopicNav } from "../components/TopicNav";
import { CardGrid } from "../components/CardGrid";
// import Carousel from "../components/Carousel";

export default function HomePage() {
  return (
    <main>
      <Carousel />
      {/* <Hero /> */}
      <section className="container mx-auto px-4 py-12">
        <TopicNav />
        <CardGrid />
      </section>
    </main>
  );
}