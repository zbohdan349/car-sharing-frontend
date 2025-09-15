import { Link } from "react-router-dom";

const aboutList = [
  { label: "How it works", href: "/" },
  { label: "Featured", href: "/" },
  { label: "Partnership", href: "/" },
  { label: "Bussiness Relation", href: "/" },
];

const communityList = [
  { label: "Events", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Podcast", href: "/" },
  { label: "Invite a friend", href: "/" },
];

const socialsList = [
  { label: "Discord", href: "/" },
  { label: "Instagram", href: "/" },
  { label: "Twitter", href: "/" },
  { label: "Facebook", href: "/" },
];
export const Footer = () => {
  const FooterList = (
    title: string,
    list: { label: string; href: string }[]
  ) => {
    return (
      <div className="flex flex-col gap-4">
        <span className="text-sm text-gray-500 font-bold">{title}</span>
        <ul className="flex flex-col gap-3">
          {list.map((item) => (
            <li
              key={item.label}
              className="text-sm text-secondary-300 hover:text-secondary-500"
            >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <footer className="bg-background lg:bg-white px-[24px] pb-[48px] md:p-[60px]">
      <div className="flex flex-col lg:flex-row  items-center justify-between gap-6 pb-[48px] lg:border-b lg:border-gray-200">
        <div className="flex flex-col justify-start gap-4 w-full  lg:w-[300px] ">
          <img src="/Logo.svg" alt="logo" className="h-[44px] w-[148px]" />
          <span className="text-sm text-gray-500">
            Our vision is to provide convenience and help increase your sales
            business.
          </span>
        </div>
        <div className="flex flex-row gap-[60px] flex-wrap justify-between lg:justify-end w-full lg:w-1/2">
          {FooterList("About", aboutList)}
          {FooterList("Community", communityList)}
          {FooterList("Socials", socialsList)}
        </div>
      </div>
      <div className="flex flex-row flex-wrap-reverse gap-8 justify-between w-full pt-[36px]">
        <div>
          <span className="text-secondary font-bold">
            ©2022 MORENT. All rights reserved
          </span>
        </div>
        <div className="flex flex-row  justify-between w-full lg:w-auto">
          <span className="text-sm text-secondary font-bold">
            Privacy & Policy
          </span>
          <span className="text-sm text-secondary font-bold">
            Terms & Condition
          </span>
        </div>
      </div>
    </footer>
  );
};
