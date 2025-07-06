// // src/components/Carousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";

const prefix = process.env.NODE_ENV === "production" ? "/patti" : "";

const slides = [
  {
    title: "夢想變理想",
    // image: "/images/IMG_3866.jpg",
    image: `${prefix}/out/images/IMG_3866.jpg`,
    href: "https://soler.com.tw/stranger-meetups/",
  },
  // {
  //   title: "打造你的支援技能",
  //   image: "/images/IMG_3726.jpg",
  //   href: "https://soler.com.tw/tokyonomadcafe/",
  // },
  // {
  //   title: "以終為始",
  //   image: "/images/IMG_9107.jpg",
  //   href: "https://soler.com.tw/tokyo-selectshop/",
  // },
  // {
  //   title: "優雅地做自己想做的事情",
  //   image: "/images/IMG_9987.jpg",
  //   href: "https://soler.com.tw/mbti_city/",
  // },
];

export default function Carousel() {
  return (
    <div className="w-full h-[80vh] relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority
                className="brightness-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href={slide.href}
                  className="text-white text-2xl md:text-4xl font-semibold bg-black/40 px-6 py-4 rounded-lg hover:bg-black/60 transition"
                >
                  {slide.title}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";

// const articles = [
//   {
//     title: "數位遊牧到東京！不限時工作咖啡廳 8 選",
//     image: "/images/IMG_3866.jpg",
//     link: "/tokyonomadcafe",
//   },
//   {
//     title: "Timeleft、The Weekend Club 是什麼？",
//     image: "/images/IMG_3726.jpg",
//     link: "/stranger-meetups",
//   },
//   {
//     title: "東京潮流地標：8家必訪東京選物店",
//     image: "/images/IMG_9107.jpg",
//     link: "/tokyo-selectshop",
//   },
//   {
//     title: "用 MBTI 找靈感城市：16 座城市推薦",
//     image: "/images/IMG_9987.jpg",
//     link: "/mbti-city",
//   },
// ];

// export default function Carousel() {
//   return (
//     <div className="w-full px-4 py-8">
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={12}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         loop
//         modules={[Autoplay]}
//       >
//         {articles.map((item, index) => (
//           <SwiperSlide key={index}>
//             <a
//               href={item.link}
//               className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 bg-white">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {item.title}
//                 </h3>
//               </div>
//             </a>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
