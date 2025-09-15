import { ActionIcon } from "@mantine/core";
import { type FC } from "react";
import "./NavButton.css";

type NavButtonProps = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

export const StyledNavButton: FC<NavButtonProps> = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <ActionIcon
      onClick={onClick}
      variant="default"
      radius="xl"
      aria-label={label}
      classNames={{
        root: "nav-button",
      }}
    >
      {icon}
    </ActionIcon>
  );
};
