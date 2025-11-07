import { type FC } from "react";
import { HomeCard } from "../../components/HomeCard";
import { homePageData, popularCarsData } from "./staticData";
import { RouteSelect } from "../../components/RouteSelect";
import { CarCard, ResponsiveCarCard } from "../../components/CarCard";

export const HomePage: FC = () => {
  const [first, second] = homePageData;
  return (
    <div className="bg-background  px-[24px] md:px-[64px]  py-[32px]">
      <div className="flex gap-[32px] mb-[32px]">
        <div className="w-full md:w-1/2">
          <HomeCard
            title={first.title}
            description={first.description}
            image={first.image}
            buttonText={first.buttonText}
            buttonLink={first.buttonLink}
          />
        </div>
        <div className="hidden md:block w-1/2">
          <HomeCard
            title={second.title}
            description={second.description}
            image={second.image}
            buttonText={second.buttonText}
            buttonLink={second.buttonLink}
          />
        </div>
      </div>
      <RouteSelect />

      <div className="mt-[32px] md:mt-[36px]">
        <div className="flex justify-between items-center h-[20px] md:h-[44px]">
          <span className="text-[14px] md:text-[16px] text-secondary-300 font-bold">
            Popular Cars
          </span>
          <span className="text-[12px] md:text-[16px] text-primary font-bold">
            View All
          </span>
        </div>
        <div className="flex mt-[20px] gap-4 justify-between overflow-x-auto min-w-[286px]">
          {popularCarsData.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </div>
      <div className="mb-[16px]" />
      <ResponsiveCarCard />
    </div>
  );
};
