import { Checkbox, Slider } from "@mantine/core";
import { filterData } from "./staticData";
import { useState } from "react";

export const Filter = () => {
  const [priceRange, setPriceRange] = useState(0);
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
          <div className="flex flex-col gap-[32px] mt-[28px]">
            {options.map((option) => (
              <Checkbox
                size="md"
                key={option.value}
                value={option.value}
                label={
                  <span className="text-secondary-400 font-semibold text-[20px]">
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
  return (
    <div className="flex flex-col">
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
