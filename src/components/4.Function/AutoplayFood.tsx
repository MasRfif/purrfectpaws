"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";

const CarouselFood = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesFood = useMemo(
    () => [
      "https://images.unsplash.com/photo-1707138937176-7926bc3239ec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1558993457-4bc6ec2c3734?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596854331442-3cf47265cefb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1616668983570-a971956d8928?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
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
