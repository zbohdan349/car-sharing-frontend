import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

type HomeCardProps = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink?: string;
};

export const HomeCard: FC<HomeCardProps> = ({
  title,
  description,
  image = "public/car.png",
  buttonText = "View",
  buttonLink = "/",
}) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="flex flex-col justify-between bg-information rounded-lg p-[24px] w-full h-full md:h-[360px]">
      <div className="flex flex-col gap-[16px] w-[240px] md:w-[284px] pb-[32px] md:pb-0">
        <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
        <p className="text-sm md:text-base text-white">{description}</p>
        <Button
          w={isMobile ? 124 : 120}
          h={isMobile ? 44 : 40}
          onClick={() => navigate(buttonLink)}
        >
          {buttonText}
        </Button>
      </div>
      <div className="flex justify-center items-end">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};
