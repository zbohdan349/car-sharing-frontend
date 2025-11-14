import { RouteSelect } from "../../components/RouteSelect";
import { RecommendedCars } from "../HomePage/RecommendedCars";
import { recommendedCarsData } from "../HomePage/staticData";
import { Filter } from "./Filter";

export const SearchPage = () => {
  return (
    <div className="grid md:grid-cols-[240px_1fr] xl:grid-cols-[360px_1fr] gap-4">
      <Filter />
      <div className="bg-background px-[24px] md:px-[32px] py-[32px]">
        <RouteSelect />
        <RecommendedCars cars={recommendedCarsData} onShowMore={() => {}} />
      </div>
    </div>
  );
};
