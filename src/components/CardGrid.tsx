// src/components/CardGrid.tsx
import { Card } from "./Card";

const items = [
  {
    title: "品牌故事：從熱情開始",
    image: "/card1.jpg",
    link: "#",
  },
  {
    title: "線上課程｜創作者營收術",
    image: "/card2.jpg",
    link: "#",
  },
  {
    title: "合作提案表單下載",
    image: "/card3.jpg",
    link: "#",
  },
];

export function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {items.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  );
}
