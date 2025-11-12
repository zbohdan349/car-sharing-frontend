import { RouteSelect } from "../../components/RouteSelect";
import { Filter } from "./Filter";

export const SearchPage = () => {
  return (
    <div className="grid md:grid-cols-[240px_1fr] xl:grid-cols-[360px_1fr] gap-4">
      <div className="hidden md:flex flex-col gap-4 p-[32px]">
        <Filter />
      </div>
      <div className="bg-background px-[24px] md:px-[32px] py-[32px]">
        <RouteSelect />
      </div>
    </div>
  );
};
