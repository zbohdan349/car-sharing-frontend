import { Reviews } from "../../components/Reviews";
import { Filter } from "../SearchPage/Filter";
import { CarDetails } from "./components/CarDetails";
import { CarView } from "./components/CarView";

export const CarPage = () => {
  const dailyPriceWithDiscount = 80;
  const dailyPrice = 100;

  return (
    <div className="grid  xl:grid-cols-[360px_1fr] gap-4">
      <div className="hidden xl:block">
        <Filter />
      </div>
      <div className="px-[24px] md:px-[32px] py-[32px]">
        <section className="grid md:grid-cols-2 gap-8 ">
          <CarView />
          <CarDetails
            dailyPrice={dailyPrice}
            dailyPriceWithDiscount={dailyPriceWithDiscount}
          />
        </section>
        <section className="mt-8">
          <Reviews />
        </section>
      </div>
    </div>
  );
};
