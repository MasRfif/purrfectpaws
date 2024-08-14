"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";

const CarouselToys = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToys = useMemo(
    () => [
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1655992096196-3e2e12868dce?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
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
