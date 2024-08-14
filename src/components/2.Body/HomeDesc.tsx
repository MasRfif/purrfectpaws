"use client";

import CarouselFood from "../4.Function/AutoplayFood";
import CarouselToys from "../4.Function/AutoplayToys";
import Testimony from "./Testimoney";
import { Provider } from "react-redux";
import { store } from "@/app/Store";
import Image from "next/image";
export default function Desc() {
  return (
    <>
      <Provider store={store}>
        <section className="py-10 hidden sm:block">
          <div className="carousel w-full h-96 rounded-3xl ">
            <div id="item1" className="carousel-item w-full">
              <Image
                src="https://images.unsplash.com/photo-1712075828221-2362a4d069e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Carousel Image 1"
                className="w-full object-cover"
                width={4500}
                height={300}
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <Image
                src="https://images.unsplash.com/photo-1712603257810-9cbe9dfec9cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Carousel Image 2"
                className="w-full object-cover"
                width={4500}
                height={500}
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <Image
                src="https://images.unsplash.com/photo-1722267432520-24755f9e218d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Carousel Image 3"
                className="w-full object-cover"
                width={4500}
                height={5500}
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <Image
                src="https://images.unsplash.com/photo-1683871287535-c6197104f402?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Carousel Image 4"
                className="w-full object-cover"
                width={4550}
                height={300}
              />
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </section>
        <section className="  pb-10 flex w-full flex-col justify-center items-center gap-5 2xl:flex-row xl:flex-col md:flex-col sm:gap-9 sm:flex-row ">
          <div className="flex flex-col items-center sm:flex-row">
            <CarouselToys />
            <div className="p-5 pr-5 max-w-md ">
              <h1 className="text-2xl p-2 font-bold text-[#ead19f]">
                Toy Product
              </h1>
              <p>
                Discover our wide variety of toys, including interactive
                puzzles, educational toys, and soft plush animals. Our
                collection caters to all ages and interests, ensuring your
                little ones have fun and learn at the same time.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center sm:flex-row-reverse ">
            <CarouselFood />
            <div className="p-5 pr-5 max-w-md text-right">
              <h1 className="text-2xl p-2 font-bold text-[#ead19f] sm:font-bold sm:text-[#ead19f]">
                Food Product
              </h1>
              <p>
                Cats need a balanced diet to stay healthy. Our cat food provides
                essential nutrients, using high-quality ingredients like
                organic, non-GMO, and gluten-free options. We offer a range of
                flavors and textures to suit different tastes and dietary needs.
                With eco-friendly packaging and strict safety standards, our
                products ensure your cat enjoys a nutritious, delicious meal
                that supports their overall well-being.
              </p>
            </div>
          </div>
        </section>

        <section>
          <Testimony />
        </section>
      </Provider>
    </>
  );
}
