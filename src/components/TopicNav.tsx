// src/components/TopicNav.tsx
const categories = ["最新文章", "影音專區", "品牌故事", "合作計畫"];

export function TopicNav() {
  return (
    <nav className="flex gap-4 overflow-x-auto py-4">
      {categories.map((cat) => (
        <button
          key={cat}
          className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap"
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}
