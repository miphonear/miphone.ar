// app/components/BrandsCarousel.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const marcas = [
  { name: "Apple",     src: "/images/brands/apple-logo.webp",     tag: "iPhone" },
  { name: "Xiaomi",    src: "/images/brands/xiaomi-logo.webp",    tag: "Xiaomi" },
  { name: "Samsung",   src: "/images/brands/galaxy-logo.webp",    tag: "Samsung" },
  { name: "Pixel",     src: "/images/brands/pixel-logo.webp",     tag: "Pixel" },
  { name: "Realme",    src: "/images/brands/realme-logo.webp",    tag: "Realme" },
  { name: "PlayStation", src: "/images/brands/playstation-logo.webp", tag: "PlayStation" },
  { name: "Nintendo",  src: "/images/brands/nintendo-logo.webp",  tag: "Nintendo" },
  { name: "Xbox",      src: "/images/brands/xbox-logo.webp",      tag: "Xbox" },
  { name: "Meta",      src: "/images/brands/meta-logo.webp",      tag: "Meta" },
  { name: "GoPro",     src: "/images/brands/gopro-logo.webp",     tag: "GoPro" },
  { name: "Insta360",  src: "/images/brands/insta360-logo.webp",  tag: "Insta360" },
  { name: "Canon",     src: "/images/brands/canon-logo.webp",     tag: "Canon" },
  { name: "Nikon",     src: "/images/brands/nikon-logo.webp",     tag: "Nikon" },
  { name: "Sony",      src: "/images/brands/sony-logo.webp",      tag: "Sony" },
  { name: "Sigma",     src: "/images/brands/sigma-logo.webp",     tag: "Sigma" },
];

export default function BrandsCarousel() {
  const containerRef = useRef(null);
  const scrollAmount = 240;

  const handleScroll = (direction) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-transparent">
      <div className="max-w-xl md:max-w-3xl mx-auto px-2 md:px-4 relative">
        {/* Botón izquierdo */}
        <button
          onClick={() => handleScroll("left")}
          aria-label="Anterior"
          className="
            hidden md:block absolute left-0 -translate-x-full 
            top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow
            hover:transition group z-10
          "
        >
          <ChevronLeft
            className="
              w-6 h-6 text-gray-600 transition-colors
              group-hover:text-[#ff8000]
            "
          />
        </button>

        {/* Carrusel */}
        <div
          ref={containerRef}
          className="
            flex gap-4 md:gap-12 overflow-x-auto 
            px-1 md:px-2 no-scrollbar snap-x snap-mandatory scroll-smooth
          "
        >
          {marcas.map((m) => (
            <div key={m.name} className="flex-shrink-0 snap-center">
              <Image
                src={m.src}
                alt={m.name}
                width={120}
                height={32}
                loading="lazy"
                className="
                  h-[36px] w-auto
                  sm:h-[46px] md:h-[55px]
                  filter grayscale opacity-60
                  transition duration-200
                  hover:filter-none hover:opacity-100
                  transform hover:scale-110
                  max-w-[90px] sm:max-w-[110px] md:max-w-[140px]
                "
              />
            </div>
          ))}
        </div>

        {/* Botón derecho */}
        <button
          onClick={() => handleScroll("right")}
          aria-label="Siguiente"
          className="
            hidden md:block absolute right-0 translate-x-full
            top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow
            hover: transition group z-10
          "
        >
          <ChevronRight
            className="
              w-6 h-6 text-gray-600 transition-colors
              group-hover:text-[#ff8000]
            "
          />
        </button>
      </div>
    </div>
  );
}