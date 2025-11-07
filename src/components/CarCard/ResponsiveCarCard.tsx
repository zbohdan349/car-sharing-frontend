import { ActionIcon, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Aave, GasStation, Heart, Profile2User } from "iconsax-reactjs";
import { useState, type FC } from "react";
import clsx from "clsx";

export const ResponsiveCarCard: FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className={clsx("bg-white rounded-lg p-[16px] max-h-[240px] w-full")}>
      <div className="flex gap-2 justify-between">
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
      <span className="text-[12px] text-secondary-300 mt-1 ">
        Car Description
      </span>
      <div className={clsx("flex gap-2 max-h-[70px] h-full mt-[12px]")}>
        <div className={clsx("flex flex-col justify-center items-center")}>
          <img src="/car.png" alt="car" />
        </div>
        <div
          className={clsx(
            "flex text-secondary-300 justify-between gap-2 text-[12px] md:text-[14px] font-medium",
            "flex-col h-full min-w-[70px] "
          )}
        >
          <p className="flex items-center gap-2">
            <GasStation variant="Bold" size="14" />
            <span>90L</span>
          </p>
          <p className="flex items-center gap-2">
            <Aave variant="Bold" size="14" />
            <span>Manual</span>
          </p>
          <p className="flex items-center gap-2">
            <Profile2User variant="Bold" size="14" />
            <span>4 People</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 mt-[36px]">
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
