// Hero.tsx
export function Hero() {
  return (
    <div className="bg-[url('/hero.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">成為自由創作者</h1>
        <button className="bg-green-500 px-6 py-3 rounded-lg">了解更多</button>
      </div>
    </div>
  );
}
