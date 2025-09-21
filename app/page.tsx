"use server";
import React from "react";

const Page = () => {
  const skins = [
    { src: "/valorant/Luke2Fprime_vandal_rare_valorant_skins_rifles_1689950129015.avif", name: "Prime Vandal" },
    { src: "/valorant/vandal-champions-2021-skin-valorant.avif", name: "Champions 2021 Vandal" },
    {
      src: "/valorant/phantom-champions-2022-valorant.avif",
      name: "Champoions 2022 Phantom",
    },
    {
      src: "/valorant/image_processing20240405-1-14gwclm.webp",
      name: "Champions 2023 Vandal",
    },
  ];

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      <img
        src=" /valorant/dx7rtr7pfwq41.png"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        alt="Background"
      />

      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <h1 className="valo-font valo-text-shadow text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 leading-tight">
          Click here to get free Valorant Skins (Not Clickbait) !!!
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-[1500px]">
          {skins.map((skin, i) => (
            <a
              href="https://gravitas.vit.ac.in/events/3df08aa2-22c9-42ff-8640-de501218780f"
              target="_blank"
              key={i}
              rel="noopener noreferrer"
            >
              <div
                key={i}
                className="relative group cursor-pointer rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-xl w-full"
              >
                <div className="w-full aspect-[5/2]">
                  <img
                    src={skin.src}
                    alt={skin.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 flex items-center justify-center transition duration-300">
                  <span className="text-white valo-font-clean text-3xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                    {skin.name}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
