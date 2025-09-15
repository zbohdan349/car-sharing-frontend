import { Avatar } from "@mantine/core";
import { Heart, Notification, Setting2, User } from "iconsax-reactjs";
import { StyledNavButton } from "./NavButton";

export const NavButtons = () => {
  return (
    <div className="items-center gap-4 hidden md:flex">
      <StyledNavButton icon={<Heart variant="Bold" />} label="Heart" />
      <StyledNavButton
        icon={<Notification variant="Bold" />}
        label="Notification"
      />
      <StyledNavButton icon={<Setting2 variant="Bold" />} label="Settings" />
      <Avatar
        src="avatar.png"
        alt="it's me"
        style={{ width: "44px", height: "44px" }}
      >
        <User variant="Bold" />
      </Avatar>
    </div>
  );
};
