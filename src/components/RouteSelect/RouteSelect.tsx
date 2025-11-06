import { Button, Radio } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  ArrowDown2,
  ArrowSwapHorizontal,
  ArrowSwapVertical,
} from "iconsax-reactjs";
import { StyledDateTimePicker, StyledRouteSelect } from "./styled";

export const RouteSelect = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const renderSwapButton = () => {
    if (!isMobile) {
      return (
        <div className="flex items-center justify-center gap-4">
          <Button w="60px" h="60px" radius="md">
            <>
              <ArrowSwapHorizontal />
            </>
          </Button>
        </div>
      );
    }
    return (
      <div className="absolute  top-1/2 -translate-y-1/2  right-1/2 translate-x-1/2 ">
        <Button w="60px" h="60px" radius="md">
          <>
            <ArrowSwapVertical />
          </>
        </Button>
      </div>
    );
  };
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[44px] gap-[32px] w-full relative">
      <div className="flex flex-1 flex-col gap-2 bg-white rounded-lg p-[16px] md:px-[48px] py-[24px]">
        <Radio label="Pick - Up" variant="outline" checked />
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-end">
          <StyledRouteSelect
            label="Location"
            data={["Route 1", "Routeeeeeee 2", "Route 3"]}
            placeholder="Select Route"
            w="100%"
            rightSection={<ArrowDown2 size="12" />}
          />
          <div className="min-h-[60px] w-px bg-gray-300 self-stretch" />
          <StyledDateTimePicker
            label="Date & Time"
            placeholder="Select Date & Time"
            w="100%"
            rightSection={<ArrowDown2 size="12" />}
          />
        </div>
      </div>
      {renderSwapButton()}

      <div className="flex flex-1 flex-col gap-2 bg-white rounded-lg p-[16px] md:px-[48px] py-[24px]">
        <Radio label="Drop - Off" variant="outline" checked />
        <div className="grid grid-cols-[1fr_auto_1fr] gap-5 items-end">
          <StyledRouteSelect
            label="Location"
            data={["Route 1", "Routeeeeeee 2", "Route 3"]}
            placeholder="Select Route"
            rightSection={<ArrowDown2 size="12" />}
          />
          <div className="min-h-[60px] w-px bg-gray-300 self-stretch" />
          <StyledDateTimePicker
            label="Date & Time"
            placeholder="Select Date & Time"
            rightSection={<ArrowDown2 size="12" />}
          />
        </div>
      </div>
    </div>
  );
};
