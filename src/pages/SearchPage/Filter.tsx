import { Checkbox, Slider, Button } from "@mantine/core";
import { filterData } from "./staticData";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { CloseCircle } from "iconsax-reactjs";
import { useFilterStore } from "../../stores/filterStore";

export const Filter = () => {
  const [priceRange, setPriceRange] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { isFilterOpen, closeFilter } = useFilterStore();

  useEffect(() => {
    if (isMobile) {
      closeFilter();
    }
  }, [isMobile, closeFilter]);

  const renderFilterBlock = ({
    title,
    options,
  }: {
    title: string;
    options: { label: string; value: string }[];
  }) => {
    return (
      <div className="flex flex-col not-first:mt-[28px]">
        <span className="text-secondary-300 text-[12px] font-bold">
          {title}
        </span>
        <Checkbox.Group>
          <div className="flex flex-col gap-[20px] md:gap-[32px] mt-[28px]">
            {options.map((option) => (
              <Checkbox
                size="md"
                key={option.value}
                value={option.value}
                label={
                  <span className="text-secondary-400 font-semibold text-[16px] md:text-[20px]">
                    {option.label}
                    <span className="text-secondary-300 font-normal">
                      {" "}
                      (10)
                    </span>
                  </span>
                }
              />
            ))}
          </div>
        </Checkbox.Group>
      </div>
    );
  };

  if (isMobile) {
    if (!isFilterOpen) return null;

    return (
      <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
        <div className="flex flex-col p-[32px] h-full relative">
          <div className="absolute top-5 right-0">
            <Button
              variant="transparent"
              onClick={closeFilter}
              className="p-0 min-w-0 w-auto h-auto"
            >
              <CloseCircle size={24} className="text-secondary-400" />
            </Button>
          </div>
          <div className="flex flex-col flex-1">
            {filterData.map((filter) => renderFilterBlock(filter))}
            <div className="flex flex-col gap-4 mt-[28px]">
              <span className="text-secondary-300 text-[12px] semibold">
                Price Range
              </span>
              <Slider
                min={0}
                max={100}
                step={1}
                value={priceRange}
                onChange={setPriceRange}
                marks={[
                  { value: 0, label: "0" },
                  { value: 100, label: "100" },
                ]}
              />
              <span className="text-secondary-400 font-semibold text-[16px] md:text-[20px]">
                Max. $100
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-[32px]">
      {filterData.map((filter) => renderFilterBlock(filter))}
      <div className="flex flex-col gap-4 mt-[28px]">
        <span className="text-secondary-300 text-[12px] semibold">
          Price Range
        </span>
        <Slider
          min={0}
          max={100}
          step={1}
          value={priceRange}
          onChange={setPriceRange}
          marks={[
            { value: 0, label: "0" },
            { value: 100, label: "100" },
          ]}
        />
        <span className="text-secondary-400 font-semibold text-[20px]">
          Max. $100
        </span>
      </div>
    </div>
  );
};
