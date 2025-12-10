import { Button, Rating } from "@mantine/core";
import type { FC } from "react";

type CarDetailsProps = {
  dailyPriceWithDiscount?: number;
  dailyPrice: number;
};

export const CarDetails: FC<CarDetailsProps> = ({
  dailyPriceWithDiscount,
  dailyPrice,
}) => {
  return (
    <div className="flex flex-col gap-8 justify-between bg-white rounded-lg p-[16px] md:p-[24px]">
      <div>
        <section>
          <h3 className="text-[20px] md:text-[32px] font-bold text-secondary-500">
            Nissan GT - R
          </h3>
          <div className="flex items-center gap-2">
            <Rating defaultValue={2} />
            <span className="text-[16px] text-secondary-300">440+ Reviews</span>
          </div>
        </section>
        <p className="text-[12px] md:text-[16px] lg:text-[20px] text-secondary-300 md:text-secondary-400 mt-4 md:mt-8">
          NISMO has become the embodiment of Nissan's outstanding performance,
          inspired by the most unforgiving proving ground, the "race track".
        </p>
        <section className="grid grid-cols-2 gap-y-4 gap-x-8 text-[12px] md:text-[16px] lg:text-[20px] mt-8">
          <div className="flex justify-between">
            <span className=" text-secondary-300">Type Car</span>
            <span className=" text-secondary-500">Sport</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-secondary-300">Capacity</span>
            <span className=" text-secondary-500">2 Person</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-secondary-300">Steering</span>
            <span className=" text-secondary-500">Manual</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-secondary-300">Gasoline</span>
            <span className=" text-secondary-500">70 L</span>
          </div>
        </section>
      </div>
      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col">
          <div className="flex items-end gap-1">
            <span className="text-[16px] md:text-[20px] font-medium">
              ${dailyPriceWithDiscount ?? dailyPrice}/
            </span>
            <span className="text-secondary-300 text-[12px] md:text-[14px] font-medium pb-[2px]">
              day
            </span>
          </div>
          {dailyPriceWithDiscount && (
            <span className="text-secondary-300 text-[12px] md:text-[14px] font-medium line-through">
              ${dailyPrice}
            </span>
          )}
        </div>

        <div className="self-end">
          <Button miw={140} h={56}>
            Rental Now
          </Button>
        </div>
      </div>
    </div>
  );
};
