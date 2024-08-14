import { createClient } from "contentful";
import Image from "next/image";
import { TypeTeamsSkeleton, TeamImage } from "../Contentful/types";
export default async function Teams() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const response = await client.getEntries<TypeTeamsSkeleton>({
      content_type: process.env.CONTENTFUL_CONTENT_TYPE_TEAMS!,
    });
    const Collection = response.items;

    console.log(Collection);

    return (
      <>
        {" "}
        <div className="hero bg-base-200 min-h-screen dark:bg-[#421608]/65 md:p-5 rounded-b-[50px] bg-gradient-to-t from-transparent/5 via-transparent to-amber-900/95 ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Meet The Purrfectionist</h1>
              <p className="py-6">
                The heart and soul behind PurrfectPaws, dedicated to selecting
                and curating the finest products for your feline friends.
              </p>
            </div>
          </div>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[400px_minmax(20px,_0.3fr)_400px]  gap-4 justify-center p-2 m-2 justify-items-center ">
          {Collection.map((Prop) => {
            const TeamPic = Prop.fields.photoProfile as TeamImage;
            return (
              <div className="p-4" key={Prop.sys.id}>
                <div className="card w-[300px] h-[400px] bg-[#6a4124] flex flex-col items-center p-5 overflow-hidden group ">
                  <div className="relative w-full  h-[250px]">
                    <Image
                      src={`https:${TeamPic.fields?.file.url}`}
                      width={300}
                      height={250}
                      alt="Card Image"
                      className="w-full h-full object-cover rounded-lg bg-black"
                    />
                  </div>

                  <div className="pt-3">
                    <h1 className="text-white text-2xl rounded-xl font-bold text-center  ">
                      {Prop.fields.teamName?.toString()}
                    </h1>

                    <p className="text-white text-base pt-2 text-center text-base-lg font-semibold ">
                      {Prop.fields.jobTitle?.toString()}
                    </p>
                    <p className="text-white text-base text-center text-base-sm ">
                      {Prop.fields.jobDesc?.toString()}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </>
    );
  } catch (error) {}
}
