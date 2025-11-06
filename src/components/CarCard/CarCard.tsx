import { ActionIcon, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Aave, GasStation, Heart, Profile2User } from "iconsax-reactjs";
import { useState } from "react";
import clsx from "clsx";

export const CarCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="bg-white rounded-lg p-[16px] md:p-[24px] max-w-[240px] md:max-w-[304px]">
      <div className="flex gap-2 justify-between mb-1">
        <span>Car Name</span>
        <ActionIcon
          variant="transparent"
          color="red"
          aria-label="Settings"
          onClick={handleLike}
        >
          <Heart
            size="24"
            color="#ED3F3F"
            variant={isLiked ? "Bold" : "Outline"}
          />
        </ActionIcon>
      </div>
      <span className="text-sm text-secondary-300 ">Car Description</span>
      <div className="flex flex-col">
        <div
          className={clsx(
            "flex flex-col justify-center items-center",
            isMobile ? "py-[32px]" : "py-[64px]"
          )}
        >
          <img src="/car.png" alt="car" />
        </div>
        <div className="flex gap-2 text-secondary-300 justify-between text-[12px] md:text-[14px] font-medium">
          <p className="flex items-center gap-2">
            <GasStation variant="Bold" size={isMobile ? "14" : "24"} />
            <span>90L</span>
          </p>
          <p className="flex items-center gap-2">
            <Aave variant="Bold" size={isMobile ? "14" : "24"} />
            <span>Manual</span>
          </p>
          <p className="flex items-center gap-2">
            <Profile2User variant="Bold" size={isMobile ? "14" : "24"} />
            <span>4 People</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 mt-[28px] md:mt-[24px]">
        <div className="flex flex-col">
          <div className="flex items-end gap-1">
            <span className="text-[16px] md:text-[20px] font-medium">
              $100.00/
            </span>
            <span className="text-secondary-300 text-[12px] md:text-[14px] font-medium pb-[2px]">
              day
            </span>
          </div>
          <span className="text-secondary-300 text-[12px] md:text-[14px] font-medium line-through">
            $120.00
          </span>
        </div>

        <Button miw={isMobile ? 100 : 116} h={isMobile ? 36 : 44}>
          Rental Now
        </Button>
      </div>
    </div>
  );
};
