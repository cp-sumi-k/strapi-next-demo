"use client";
import { useState } from "react";
import STRAPI_URL from "../const";

export default function Services({ data }: any) {
  let services = [
    {
      title: "Industry experts",
      altText: "Industry Expert",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, recusandae nesciunt. Mollitia quidem.",
      image:
        "https://img.freepik.com/free-psd/portrait-woman-using-laptop-computer_23-2150116864.jpg",
    },
    {
      title: "Dedicated Team",
      altText: "Dedicated Team",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, recusandae nesciunt. Mollitia quidem.",
      image:
        "https://img.freepik.com/premium-photo/woman-working-with-cadastral-map-laptop-table-office-isolated-white-background_660230-112439.jpg",
    },
    {
      title: "Outcome focused",
      altText: "Outcome focused",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, recusandae nesciunt. Mollitia quidem.",
      image:
        "https://img.freepik.com/premium-photo/man-holding-smart-phone-white-background_1029679-107259.jpg",
    },
    {
      title: "High Quality Service",
      altText: "High Quality Service",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, recusandae nesciunt. Mollitia quidem.",
      image:
        "https://t3.ftcdn.net/jpg/06/81/42/88/240_F_681428814_ClhjJCgBJgxJ5oTgJIrbHuE5OLBsAwIf.jpg",
    },
    {
      title: "Cyber Security Expert",
      altText: "Cyber Security Expert",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, recusandae nesciunt. Mollitia quidem.",
      image:
        "https://img.freepik.com/premium-psd/woman-sitting-using-laptop-isolated-transparent-background_932772-43719.jpg",
    },
  ];
  const getServices = () => {
    if(data.data) services = [];
    data?.data?.forEach((s: any) => {
      services.push({
        title: s.name,
        content: s.content,
        image: STRAPI_URL + s.image.url,
        altText: s.name,
      });
    });
  };

  getServices();

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-8 lg:space-y-0">
      {/* Left section */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        {/* Red background circle */}
        <div className="z-10 bg-opacity-80 absolute top-0 left-0 bg-red-500 rounded-full p-12 w-[300px] h-[300px] text-white flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold">
            {services[activeIndex]?.title}
          </h3>
          <p className="text-sm text-center mt-4">
            {services[activeIndex]?.content}
          </p>
        </div>
        {/* Image circle */}
        <div className="relative">
          <img
            className="rounded-full w-[300px] h-[300px] z-0 ml-40"
            src={services[activeIndex]?.image}
            alt={services[activeIndex]?.title}
          />
        </div>
      </div>

      {/* Right section */}
      <div className="w-full lg:w-1/3 flex flex-col space-y-4">
        {services.map((s: any, i: number) => (
          <button
            key={i}
            className={`text-left p-4 rounded-l-full ${
              activeIndex === i ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveIndex(i)}
          >
            <span className="mr-2">&lt;</span> {s.title}
          </button>
        ))}
      </div>
    </div>
  );
}
