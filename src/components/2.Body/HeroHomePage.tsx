import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen shadow-2xl rounded-b-[50px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url(Lobby.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="hero-overlay dark:bg-[#421608]/65 md:p-5 rounded-b-[50px] bg-gradient-to-t from-transparent/5 via-transparent to-amber-900/95  h-full">
          <div className="p-10 max-w-full h-full text-[#f8993f] rounded-xl flex flex-col place-items-start justify-center">
            <div className="my-40 sm:my-64 text-right md:my-80 lg:my-100 flex place-items-start flex-col ">
              <h1 className="mb-5 mr-0 text-4xl md:text-5xl lg:text-3xlxl md:mb-10 font-bold animate__animated animate__flipInX animate__delay-1s ">
                Hey there Did you Know?
              </h1>
              <p className="mb-9 text-left text-md md:text-2xl lg:text-2xl animate__animated animate__flipInX animate__delay-2s ">
                Cats love toys! They provide mental stimulation and help develop
                problem-solving skills. A well-chosen toy can make your cat feel
                loved and secure. In fact, research has shown that toys can even
                improve a cats memory and cognitive abilities. Some popular toy
                types for cats include interactive toys like feather boas, rope
                toys, and tug toys. These toys can help keep your cat engaged
                and entertained, while also providing them with the mental
                stimulation they need.
              </p>
              <button className="btn text-[#fffbeb] bg-[#904210] text-md sm:text-xl md:text-2xl lg:text-md animate__animated animate__zoomInLeft animate__delay-4s ">
                <Link href={"/Product"}>curious ? lets start buying</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
