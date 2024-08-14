"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";

const CarouselToys = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToys = useMemo(
    () => ["/Toys1.avif", "/Toys2.avif", "/Toys3.avif", "/Toys4.avif"],
    []
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imagesToys.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex, imagesToys.length]); // Include 'imagesToys.length' in the dependency array

  return (
    <div className="carousel max-h-[450px] rounded-box max-w-[350px]">
      <div className="carousel-inner relative overflow-hidden w-full">
        <div
          className="flex transition duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}>
          {imagesToys.map((image, index) => (
            <div key={index} className="carousel-item w-full">
              <Image
                src={`${image}`}
                className="w-full"
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
export default CarouselToys;
