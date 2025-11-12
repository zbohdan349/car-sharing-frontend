import { type FC } from "react";
import { HomeCard } from "../../components/HomeCard";
import {
  homePageData,
  popularCarsData,
  recommendedCarsData,
} from "./staticData";
import { RouteSelect } from "../../components/RouteSelect";
import { CarCard, ResponsiveCarCard } from "../../components/CarCard";
import clsx from "clsx";
import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
  const [first, second] = homePageData;
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleShowMoreCars = () => {
    navigate("/search");
  };
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

      <div className="mt-[32px] md:mt-[36px]">
        <div className="flex justify-between items-center h-[20px] md:h-[44px]">
          <span className="text-[14px] md:text-[16px] text-secondary-300 font-bold">
            Recomendation Car
          </span>
        </div>
        <div className="flex flex-col gap-4 sm:hidden flex-wrap mt-[20px]">
          {recommendedCarsData.map((car) => (
            <ResponsiveCarCard key={car.id} {...car} />
          ))}
        </div>
        <div
          className={clsx(
            "hidden sm:grid grid-cols-[repeat(auto-fit,minmax(286px,1fr))] gap-4 place-items-center mt-[20px]",
            "md:grid-cols-[repeat(auto-fit,minmax(304px,1fr))]"
          )}
        >
          {recommendedCarsData.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
        <div className="flex justify-center mt-[64px] relative">
          <Button
            size={isMobile ? "xs" : "md"}
            w={isMobile ? 120 : 156}
            h={isMobile ? 36 : 44}
            onClick={handleShowMoreCars}
          >
            Show More Cars
          </Button>
          <div className="absolute top-1/2 -translate-y-1/2 right-1">
            <span className="text-[14px] text-secondary-300">120 Cars</span>
          </div>
        </div>
      </div>
    </div>
  );
};
