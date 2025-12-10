import { ActionIcon, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Aave, GasStation, Heart, Profile2User } from "iconsax-reactjs";
import { useState, type FC } from "react";
import clsx from "clsx";
import type { RentalCar } from "../../types/rentalCar";
import { useNavigate } from "react-router-dom";

export const CarCard: FC<RentalCar> = ({
  id,
  vehicleBrand,
  vehicleBodyType,
  dailyPriceWithDiscount,
  dailyPrice,
  image,
  fuelCapacity,
  transmission,
  passengerCapacity,
}) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleRentalNow = () => {
    navigate(`/car/${id}`);
  };

  return (
    <div
      className={clsx(
        "flex flex-col justify-between",
        "bg-white rounded-lg p-[16px] md:p-[24px] min-w-[240px] w-[240px] md:min-w-[304px] md:w-[304px] min-h-[286px] md:min-h-[388px] md:h-[388px]"
      )}
    >
      <div>
        <div className="flex gap-2 justify-between mb-1">
          <span>{vehicleBrand}</span>
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
        <span className="text-sm text-secondary-300 ">{vehicleBodyType}</span>
      </div>

      <div className={clsx("flex flex-col")}>
        <div
          className={clsx(
            "flex flex-col justify-center min-h-[120px] items-center"
          )}
        >
          <img
            src={image}
            className="h-full w-full object-contain"
            alt={vehicleBrand}
          />
        </div>
        <div
          className={clsx(
            "flex gap-1 md:gap-2 text-secondary-300 font-medium justify-between text-[12px] md:text-[14px] mt-[32px] md:mt-[37px]"
          )}
        >
          <p className="flex items-center gap-1">
            <GasStation variant="Bold" size={isMobile ? "14" : "24"} />
            <span>{fuelCapacity}L</span>
          </p>
          <p className="flex items-center gap-1">
            <Aave variant="Bold" size={isMobile ? "14" : "24"} />
            <span>{transmission}</span>
          </p>
          <p className="flex items-center gap-1">
            <Profile2User variant="Bold" size={isMobile ? "14" : "24"} />
            <span>{passengerCapacity} People</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 mt-[28px] md:mt-[24px]">
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
          <Button
            miw={isMobile ? 100 : 116}
            h={isMobile ? 36 : 44}
            onClick={handleRentalNow}
          >
            Rental Now
          </Button>
        </div>
      </div>
    </div>
  );
};
