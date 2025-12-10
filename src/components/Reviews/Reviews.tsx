import { Avatar, Button, Rating } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";
import { ArrowDown2 } from "iconsax-reactjs";
import { useMemo, useState } from "react";

export const Reviews = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShow = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="p-[16px] bg-white rounded-lg">
      <div className="flex gap-3 text-secondary text-[20px]">
        <span>Reviews</span>
        <span className="bg-primary text-white text-[14px] font-bold px-3 py-1.5 rounded-lg">
          13
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-6">
        <Review />
        <Review />
        <Review />
      </div>
      <div className="mt-8 flex justify-center content-center gap-6">
        <Button
          variant="white"
          color="gray"
          onClick={toggleShow}
          rightSection={
            <div
              className={clsx(
                "flex justify-center content-center transition-all transform w-4 h-4",
                showAll ? "rotate-180" : "rotate-0"
              )}
            >
              <ArrowDown2 size={16} />
            </div>
          }
        >
          {showAll ? "Show All" : "Show less"}
        </Button>
      </div>
    </div>
  );
};

const Review = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const SIGNS_COUNT = 160;
  const fullText = `We are very happy with the service from the MORENT App. Morent has a
            low price and also a large variety of cars with good and comfortable
            facilities. In addition, the service provided by the officers is
            also very friendly and very polite.`;

  const [truncated, setTruncated] = useState(true);

  const text = useMemo(() => {
    if (isMobile)
      return truncated
        ? fullText.slice(0, SIGNS_COUNT) +
            (fullText.length > SIGNS_COUNT ? "..." : "")
        : fullText;

    return fullText;
  }, [truncated, fullText, isMobile]);

  const toggleTruncated = () => {
    setTruncated(!truncated);
  };

  return (
    <div className="flex gap-4">
      <Avatar radius="xl" size={isMobile ? 44 : 56} />
      <div className="flex flex-col flex-7/8">
        <div className="flex justify-between gap-2 content-between">
          <div className="flex flex-col">
            <span className="font-semibold text-secondary text-[16px] md:text-[20px]">
              Alex Stanton
            </span>
            <span className="text-secondary-300 text-[12px] md:text-[14px]">
              CEO at Bukalapak
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex justify-end text-secondary-300 text-[12px] md:text-[14px]">
              21 July 2022
            </span>
            <Rating defaultValue={4} size={isMobile ? "xs" : "md"} />
          </div>
        </div>
        <div className="mt-4 md:mt-3" onClick={toggleTruncated}>
          <p className="text-secondary-300 md:text-secondary-400 text-[14px]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
