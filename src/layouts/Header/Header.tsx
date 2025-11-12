import { TextInput } from "@mantine/core";
import { SearchNormal1, Setting4, Setting5, User } from "iconsax-reactjs";
import { type FC } from "react";
import "./Header.css";
import { NavButtons, StyledNavButton } from "./components/NavButtons";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate("/");
  };
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <header className="bg-white px-[24px] py-[16px] md:px-[64px] md:py-[40px] border-b border-2 border-secondary-200 ">
      <div className="flex items-center justify-between gap-6">
        <div className="grid grid-cols-2 gap-4 w-full md:flex md:items-center md:gap-6 ">
          <div className="cursor-pointer" onClick={handleHomeNavigation}>
            <img src="/Logo.svg" alt="logo" className="h-[44px] w-[148px]" />
          </div>
          <div className="justify-self-end col-span-1 md:col-span-1 md:hidden">
            <StyledNavButton
              icon={<User variant="Bold" />}
              label="User"
              onClick={() => {}}
            />
          </div>
          <div className="flex flex-1 justify-between col-span-2 gap-4 md:col-span-1">
            <TextInput
              radius="xl"
              className="flex-1 max-w-[500px]"
              leftSection={<SearchNormal1 />}
              placeholder="Search"
              rightSection={isMobile ? null : <Setting4 />}
              classNames={{
                input: "header-input",
              }}
            />
            <div className="md:hidden flex">
              <StyledNavButton
                icon={<Setting5 variant="Bold" />}
                label="Settings"
              />
            </div>
          </div>
        </div>
        <NavButtons />
      </div>
    </header>
  );
};
