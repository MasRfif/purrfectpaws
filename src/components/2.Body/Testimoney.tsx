"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/app/Feature/userSlice";
import { useEffect, useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Team() {
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
  const results = useSelector((state: any) => state.user.users);

  const testimonials = [
    {
      job: "Product Executive",
      testimonial:
        "From the moment I met the PurrfectPaws team, I knew they were the perfect fit for my busy life as a cat mom. Their innovative cat toys and accessories have made my kittens' lives so much more enjoyable. I can't wait to introduce them to my friends and family, and I'm confident that Whisker World will continue to be the purr-fect place for all your feline needs. i like this place more than the other",
    },
    {
      job: "Designer",
      testimonial:
        "As a Designer, I've always been passionate about creating products that not only look great but also have a positive impact on the world. PurrfectPaws's attention to detail and commitment to cat welfare is truly inspiring. Their cat toys and accessories are not just functional, but also feel like a gift to my kitty, Luna. I'm so proud to be part of their team and I can't wait to see what they come up with next!",
    },
    {
      job: "Copywriter",
      jobTitle: "Copywriter",
      testimonial:
        "As a Copywriter, I love crafting compelling stories that resonate with people. PurrfectPaws's commitment to cat welfare and adoption is a story that I'm proud to be a part of. Their website and social media content are filled with heartwarming stories and inspiring images of cats in loving homes. I'm excited to see how they continue to tell the story of cat welfare and adoption, and I'm confident that they'll keep up the amazing work!",
    },
  ];

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(results);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center items-center overflow-hidden ">
      <div className="flex justify-between items-center mt-4">
        <button
          className="p-2 rounded-full hidden md:flex bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          onClick={handlePrevious}>
          <i className="fa fa-angle-left text-gray-700">
            <IoIosArrowBack />
          </i>
        </button>
        <Carousel
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          className="p-4 w-96 sm:w-full "
          selectedItem={currentIndex}
          onChange={setCurrentIndex}>
          {results.slice(0, 3).map((user: any, index: any) => (
            <div
              key={user.id}
              className="bg-[#84361c] justify-center md:items-center rounded-xl shadow-md p-6 flex flex-wrap">
              <div className="  ">
                <Image
                  src={user.picture.large}
                  alt={user.name.first}
                  width={600}
                  height={600}
                  className="rounded-full "
                />
              </div>
              <div className="w-3/3">
                <p className="text-white p-2">
                  {testimonials[index].testimonial}
                </p>
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl font-bold mb-2">
                    {user.name.first} {user.name.last}
                  </h3>
                  <p className="text-sm font-italic italic text-white mb-2">
                    - {testimonials[index].job}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <button
          className="p-2 rounded-full hidden md:flex bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          onClick={handleNext}>
          <i className="fa fa-angle-right text-gray-700">
            <IoIosArrowForward />
          </i>
        </button>
      </div>
    </div>
  );
}
