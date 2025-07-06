// src/components/Card.tsx
interface CardProps {
  title: string;
  image: string;
  link: string;
}

export function Card({ title, image, link }: CardProps) {
  return (
    <a
      href={link}
      className="block shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h3 className="p-4 text-lg font-semibold text-gray-800">{title}</h3>
    </a>
  );
}
