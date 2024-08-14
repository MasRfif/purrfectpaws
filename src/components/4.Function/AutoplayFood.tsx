"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";

const CarouselFood = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesFood = useMemo(
    () => ["/Food1.avif", "/Food2.avif", "/Food3.avif", "/Food4.avif"],
    []
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imagesFood.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, imagesFood.length]); // Include imagesFood.length in the dependency array
  return (
    <div className="carousel max-h-[450px] rounded-box max-w-[350px]">
      <div className="carousel-inner relative overflow-hidden w-full">
        <div
          className="flex transition duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}>
          {imagesFood.map((image, index) => (
            <div key={index} className="carousel-item w-full">
              <Image
                src={image}
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CarouselFood;
