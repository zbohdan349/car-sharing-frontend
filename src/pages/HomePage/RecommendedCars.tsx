import { type FC } from "react";
import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";
import { CarCard, ResponsiveCarCard } from "../../components/CarCard";
import type { RentalCar } from "../../types/rentalCar";

type RecommendedCarsProps = {
  cars: RentalCar[];
  onShowMore: () => void;
};

export const RecommendedCars: FC<RecommendedCarsProps> = ({
  cars,
  onShowMore,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="mt-[32px] md:mt-[36px]">
      <div className="flex justify-between items-center h-[20px] md:h-[44px]">
        <span className="text-[14px] md:text-[16px] text-secondary-300 font-bold">
          Recomendation Car
        </span>
      </div>
      <div className="flex flex-col gap-4 sm:hidden flex-wrap mt-[20px]">
        {cars.map((car) => (
          <ResponsiveCarCard key={car.id} {...car} />
        ))}
      </div>
      <div
        className={clsx(
          "hidden sm:grid grid-cols-[repeat(auto-fit,minmax(286px,1fr))] gap-4 place-items-center mt-[20px]",
          "md:grid-cols-[repeat(auto-fit,minmax(304px,1fr))]"
        )}
      >
        {cars.map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
      <div className="flex justify-center mt-[64px] relative">
        <Button
          size={isMobile ? "xs" : "md"}
          w={isMobile ? 120 : 156}
          h={isMobile ? 36 : 44}
          onClick={onShowMore}
        >
          Show More Cars
        </Button>
        <div className="absolute top-1/2 -translate-y-1/2 right-1">
          <span className="text-[14px] text-secondary-300">120 Cars</span>
        </div>
      </div>
    </div>
  );
};
