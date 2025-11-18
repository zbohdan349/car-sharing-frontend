import { Filter } from "../SearchPage/Filter";

export const CarPage = () => {
  return (
    <div className="grid  xl:grid-cols-[360px_1fr] gap-4">
      <div className="hidden xl:block">
        <Filter />
      </div>
      <div className="px-[24px] md:px-[32px] py-[32px]">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="flex flex-col justify-between bg-primary rounded-lg p-[24px] h-[230px] sm:h-[280px] md:h-[360px]">
              <div className="flex flex-col gap-3">
                <span className="text-white text-[16px] sm:text-[20px] md:text-[32px] font-semibold">
                  Sports car with the best design and acceleration
                </span>
                <span className="text-white text-[12px] sm:text-[14px] md:text-[16px]">
                  Safety and comfort while driving a futuristic and elegant
                  sports car
                </span>
              </div>
              <div className="flex justify-center items-center h-[60px] sm:h-[80px] md:h-[120px]">
                <img
                  src="/car1.png"
                  alt="car"
                  className="h-full object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex justify-center items-center">
                <img
                  src="/View1.png"
                  alt="car"
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/View2.png"
                  alt="car"
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/View3.png"
                  alt="car"
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
