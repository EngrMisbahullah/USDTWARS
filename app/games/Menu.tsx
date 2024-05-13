import { Flex, Heading, Text } from "@radix-ui/themes";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

const Menu = () => {
  const links = [
    { label: "About", href: "/games/profile" },
    { label: "Fairness", href: "/games/fairness" },
    { label: "Support", href: "/games/support" },
    { label: "Affiliate", href: "/games/affiliate" },
    { label: "Settings", href: "/games/settings" },
    { label: "Wallet", href: "/games/wallet" },
  ];
  return (
    <Flex
      className="rounded-tl-md rounded-tr-md overflow-hidden text-center"
      direction="column"
      align="center"
    >
      <Text
        className="bg-background_secondary_website text-font_primary_website w-full py-1.5 font-[900]"
        as="label"
        size="6"
      >
        MENU
      </Text>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={classNames({
            "nav-link text-font_tertiary_website bg-font_primary_website border-b border-slate-950 w-full py-0.5 font-[500] text-lg":
              true,
            "": link.href === "/games/settings",
          })}
        >
          {link.label}
        </Link>
      ))}
    </Flex>
  );
};

export default Menu;
