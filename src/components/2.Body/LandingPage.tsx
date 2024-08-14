import Image from "next/image";
import "animate.css";
import Logo from "../Logo-icon";
import Link from "next/link";

function Opening() {
  return (
    <section id="hero" className="w-full h-screen  self-center overflow-hidden">
      <Image
        className="top-0 left-0 fixed object-cover"
        src="/Landing.avif"
        alt="/"
        fill={true}
      />
      <div className="bg-orange-950/80 absolute h-[100vh] top-0 left-0 w-full" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-slate-100">
        <div className="max-w-[1100px] absolute p-4 m-4 flex flex-col items-center">
          <Link
            href="/Home"
            className="flex items-center space-x-3 m-10 sm:m-2 rtl:space-x-reverse  animate__animated animate__backInDown ">
            <Logo className="h-10" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              PurrfectPaws
            </span>
          </Link>
          <h1 className="font-bold text-center text-4xl drop-shadow-2xl rounded-br-[20rem] sm:text-left animate__animated animate__backInDown animate__delay-1s">
            <span className="text-orange-500 cursor-pointer hover:underline">
              Cat
            </span>{" "}
            Product Exploration
          </h1>

          <p className="max-w-[800px] text-center drop-shadow-2xl pb-3 py-2 text-xl leading-loose animate__animated animate__fadeIn animate__delay-2s">
            Discover the world of{" "}
            <span className="font-semibold text-orange-500">feline</span>{" "}
            products, from toys to accessories, all made with{" "}
            <span className="text-orange-500">love</span> and{" "}
            <span className="text-orange-500">care</span>.
          </p>
          <Link
            href={"/Home"}
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#fddaab] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#451a03] group animate__animated animate__backInUp animate__delay-3s">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#d87607] group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-[#c0490e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-[#451a03]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Start Scratchin!
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
export { Opening };
