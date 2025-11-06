import { type FC } from "react";
import { HomeCard } from "../../components/HomeCard";
import { homePageData } from "./staticData";
import { RouteSelect } from "../../components/RouteSelect";

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
    </div>
  );
};
