// src/app/page.tsx
import { Hero } from "../components/Hero";
import { TopicNav } from "../components/TopicNav";
import { CardGrid } from "../components/CardGrid";
import Carousel from "../components/Carousel";

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
