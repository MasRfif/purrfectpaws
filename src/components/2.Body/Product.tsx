import Image from "next/image";
import { createClient } from "contentful";
import { TypeProductSkeleton, ProductImage } from "../Contentful/types";

export default async function Product() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const response = await client.getEntries<TypeProductSkeleton>({
      content_type: process.env.CONTENTFUL_CONTENT_TYPE_SHOP!,
    });
    const Collection = response.items;

    console.log(Collection);

    return (
      <>
        {" "}
        <div className="absolute w-full h-[790px] flex flex-col items-center justify-center text-center text-white text-6xl font-bold">
          <p>Discover Our Exquisite Collection</p>
        </div>
        <section>
          <div className="carousel  w-full h-[770px]  bg-gradient-to-r from-brown-500 to-brown-300 opacity-50">
            <div
              id="item1"
              className="carousel-item w-full relative top-0 left-0 ">
              <Image
                src="https://images.unsplash.com/photo-1655992117139-54d5e9068ec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={2880}
                height={1100}
                alt="Carousel-1"
                className="w-full object-cover overflow-hidden"
                loading="lazy"
              />
            </div>
            <div id="item2" className="carousel-item w-full relative">
              <Image
                src="https://images.unsplash.com/photo-1638826596253-45c356e832bf?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={2880}
                height={1100}
                alt="Carousel-2"
                className="w-full object-cover h-full"
                loading="lazy"
              />
              <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center"></div>
            </div>
            <div id="item3" className="carousel-item w-full relative">
              <Image
                src="https://images.unsplash.com/photo-1683871297435-10ec1e7a8a4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={2880}
                height={1100}
                alt="Carousel-3"
                className="w-full object-cover h-full"
                loading="lazy"
              />
              <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center"></div>
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 pb-3 mt-[-1.8rem] sm:mt-[-2.5rem] flex items-start gap-2">
            <a href="#item1" className="btn btn-xs bg-[#421608]">
              1
            </a>
            <a href="#item2" className="btn btn-xs bg-[#421608] ">
              2
            </a>
            <a href="#item3" className="btn btn-xs bg-[#421608]  ">
              3
            </a>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[400px_minmax(20px,_0.3fr)_400px]  gap-4 justify-center p-2 m-2 justify-items-center ">
          {Collection.map((prop) => {
            const ProdImage = prop.fields.featuredImage as ProductImage;
            return (
              <div key={prop.sys.id} className="p-4">
                <div className="card w-[300px] h-[400px] bg-white flex flex-col items-center justify-center group ">
                  <Image
                    src={`https:${ProdImage.fields?.file?.url}`}
                    width={280}
                    height={110}
                    alt="Carousel-1"
                    className="w-full h-full object-contain rounded-xl overflow-hidden"
                    loading="lazy"
                  />
                  <div className="text-white text-xl font-bold text-center absolute h-full w-full  opacity-0 group-hover:opacity-100 transition duration-300 ">
                    <div className="text-white text-xl font-bold text-center absolute h-full w-full flex flex-col justify-center items-center opacity-0 rounded-xl group-hover:opacity-100 transition duration-300 group-hover:bg-[#633b24]/50">
                      {typeof prop.fields.productName === "string" && (
                        <h1>{prop.fields.productName}</h1>
                      )}
                      {typeof prop.fields.price === "number" && (
                        <p className="text-sm">
                          Rp {prop.fields.price.toLocaleString()}.000
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {typeof prop.fields.productName === "string" && (
                  <h1 className=" flex justify-center pt-4 font-bold text-white opacity-100 hover:opacity-0 transition duration-300">
                    {prop.fields.productName}
                  </h1>
                )}
              </div>
            );
          })}
        </section>
      </>
    );
  } catch (error) {}
}
