export default function AboutPage() {
  return (
    <>
      <section>
        <div
          className="hero min-h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen shadow-2xl rounded-b-[50px]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          <div className="hero-overlay h-screen dark:bg-[#421608]/65 md:p-5 rounded-b-[50px] bg-gradient-to-t from-transparent/5 via-transparent to-amber-900/95">
            <div className="text-neutral-content p-10  h-full relative">
              <div className="absolute bottom-5 left-5 text-[#f8993f] ">
                <div className="sm:mt-[500px] ">
                  <h1 className="mb-5 mr- text-4xl md:text-7xl md:mb-10 font-bold animate__animated animate__flipInX animate__delay-1s">
                    Story Behind
                  </h1>
                  <p className="mb-9 text-4xl md:text-4xl  animate__animated animate__flipInX animate__delay-2s ">
                    Our Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about-page px-4 py-8 max-w-screen-md mx-auto">
        <section className="story mt-12 px-4 sm:px-0">
          <div className="max-w-screen-md mx-auto">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="mt-4 text-base md:text-2xl ">
              Our journey began in Jakarta, Lebak Bulus No. 36B, where we aimed
              to create a unique and delightful experience for cat lovers. We
              started by offering high-quality toys and food, catering to the
              specific needs of our furry friends. Over time, we expanded our
              product line to include accessories, grooming tools, and even
              cat-themed events. Today, we are proud to serve thousands of
              satisfied customers across Indonesia and beyond.
            </p>
          </div>
        </section>

        <section className="vision-mission mt-12 px-4 sm:px-0">
          <div className="max-w-screen-md mx-auto flex flex-col sm:flex-row">
            <div className="vision sm:w-1/2 sm:pr-4">
              <h3 className="text-4xl font-bold">Vision</h3>
              <p className="mt-4 text-base md:text-2xl">
                To be the leading provider of cat-centric products and services,
                empowering cat lovers to create a happy and healthy living
                environment.
              </p>
            </div>
            <div className="mission sm:w-1/2 sm:pl-4 mt-6 sm:mt-0">
              <h2 className="text-4xl font-bold">Cultural Values</h2>
              <p className="mt-4 text-base md:text-2xl">
                At Cat Shop Indonesia, we believe in creating a welcoming and
                nurturing environment for our furry friends. Our commitment to
                cat care extends beyond providing high-quality products and
                services. We strive to:
              </p>

              <ul className="list-disc mt-4 pl-4 text-base md:text-2xl">
                <li>
                  Provide high-quality products and services tailored to cat
                  needs
                </li>
                <li>Foster a strong community of cat lovers</li>
                <li>Strive for continuous improvement and innovation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="address-history mt-12 px-4 sm:px-0">
          <div className="max-w-screen-md mx-auto flex flex-col sm:flex-row">
            <div className="address sm:w-1/2 sm:pr-4">
              <h3 className="text-4xl font-bold">Address</h3>
              <p className="mt-4 text-2xl">Jakarta, Lebak Bulus No. 36B</p>
            </div>
            <div className="history sm:w-1/2 sm:pl-4 mt-6 sm:mt-0">
              <h3 className="text-4xl font-bold">History</h3>
              <p className="mt-4 text-base md:text-2xl">
                Established in 2022, our company has grown from a small local
                business to a global leader in cat-centric products.
              </p>
            </div>
          </div>
        </section>

        <section className="get-to-know-us py-12 px-4 sm:px-0">
          <div className="about-page px-4 py-8 max-w-screen-md mx-auto rounded-xl  bg-[#5c2410]">
            <h2 className="text-4xl font-bold text-[#f8993f]">
              Give a FeedBack
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-[#f8993f]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#ea8616] focus:border-[#ea8616] sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-[#f8993f]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#ea8616] focus:border-[#ea8616] sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-base font-medium text-[#f8993f]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#ea8616] focus:border-[#ea8616] sm:text-sm"></textarea>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
