"use client";

import Logo from "../Logo-icon";
import Link from "next/link";
import { useState, useEffect } from "react";
import "animate.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "Home" },
    { name: "Product", href: "/Product" },
    { name: "About", href: "/About" },
    { name: "Teams", href: "/Teams" },
  ];

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-amber-900/20 fixed top-0 left-0 right-0 z-20 mx-auto max-w-screen-xl px-4 py-2 backdrop-blur rounded-xl animate__animated animate__zoomInDown animate_delay animate__delay-2s">
        <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo className="h-10" />
            <span className="self-center text-base md:text-2xl font-semibold whitespace-nowrap dark:text-[#fffbeb]">
              PurrfectPaws
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-[#fffbeb] bg-orange-950 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-950 dark:hover:bg-amber-700 dark:focus:ring-yellow-900">
              Login
            </button>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-amber-950 dark:focus:ring-gray-600"
              onClick={() => setIsOpen(!isOpen)}>
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`
    ${isOpen && scrollY < 10 ? "opacity-100 h-[160px]" : "opacity-0 h-0"}
    transition-all duration-500 ease-out md:hidden
    absolute left-0 top-full z-10 mt-2 h-[171px] w-[350px]
    rounded-md bg-amber-800 shadow-lg ring-1 
    focus:outline-none overflow-hidden overflow-y-auto
    sm:left-auto sm:right-0 sm:ml-auto sm:mr-0
  `}>
              <div role="none">
                <ul className="block font-medium dropdown-content rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row  md:border-0 bg-transparent">
                  {navLinks.map((menu, index) => (
                    <li key={index} className="flex items-center">
                      <Link
                        href={menu.href}
                        className={`py-2 px-3 md:p-0 text-white md:bg-transparent md:text-white md:dark:text-white hover:bg-transparent hover:text-yellow-950 transition duration-300 ease-in-out`}>
                        {menu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col font-medium dropdown-content p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
              {navLinks.map((menu, index) => (
                <li key={index} className="flex items-center">
                  <Link
                    href={menu.href}
                    className={`py-2 px-3 md:p-0 text-white md:bg-transparent md:text-white md:dark:text-white hover:bg-transparent hover:text-yellow-950 transition duration-300 ease-in-out`}>
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
