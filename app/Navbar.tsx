"use client";

import { Flex, Text } from "@radix-ui/themes";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./components";
import PopoverDemo from "./components/popOver";
import React, { useState, Dispatch, SetStateAction } from "react";


// Login And Signup Pages
import Register from "./components/register/Register";

const Navbar = () => {
  const [activeLogin, setActiveLogin] = useState<Boolean>(false);
  return (
    <>
      <nav className="mb-5 px-3 h-14 py-2 shadow-[0_-8px_20px_rgba(0,0,0,0.35)]">
        <Flex justify="between" align="center">
          <UsdtWarsLogo />
          <CoinAmount value="10, 150,000" />
          <NavLinks setActiveLogin={setActiveLogin} activeLogin={activeLogin} />
        </Flex>
      </nav>
      {activeLogin && (
        <div className="flex justify-center fixed inset-0 w-screen h-screen bg-[#20374496]" >
          <Register />
        </div>
      )}
    </>
  );
};

interface MyComponentProps {
  setActiveLogin: Dispatch<SetStateAction<Boolean>>;
  activeLogin: Boolean;
}
const NavLinks: React.FC<MyComponentProps> = ({
  setActiveLogin,
  activeLogin,
}) => {
  const links = [
    { label: "Sign in", href: "/auth/signin" },
    { label: "Register", href: "/auth/signup" },
  ];

  return true ? (
    <ul className="flex space-x-3">
      {links.map((link) => (
        <Flex key={link.href} justify="center" align="center">
          <li key={link.href}>
            <Link
              href={"/signIn"}
              onClick={() => {
                setActiveLogin(!activeLogin);
              }}
              className={classnames({
                "nav-link text-white": true,
                "": link.href === "/auth/signin",
                "w-[3.75rem] h-7  bg-button_primary_website rounded font-[300] px-3 py-2":
                  link.href === "/auth/signup",
              })}
            >
              {link.label}
            </Link>
          </li>
        </Flex>
      ))}
    </ul>
  ) : (
    <Flex gap={"2"} align={"center"} justify={"between"}>
      <Image
        src="/icons/profile.png"
        width={25}
        height={25}
        className="w-[25px] h-[25px]"
        alt="Profile"
      />
      <PopoverDemo />
    </Flex>
  );
};

// CoinAmount
const CoinAmount = ({ value }: { value: string }) => {
  return (
    <Card
      Pad={true}
      className="bg-background_secondary_website  overflow-hidden"
    >
      <Flex align="center">
        <Image
          src={"/icons/coin.png"}
          width={16}
          height={16}
          alt="Coin"
          className="mx-2  "
        />
        <Text className="pr-2 text-font_primary_website">{value}</Text>
        <Flex
          justify="center"
          className="bg-button_primary_website p-2 h-full w-12 m-auto my-0 "
        >
          <Image
            className=""
            src={"/icons/basket.png"}
            width={16}
            height={16}
            alt="Coin"
          />
        </Flex>
      </Flex>
    </Card>
  );
};

// LOGO
const UsdtWarsLogo = () => {
  return (
    <div className="text-center">
      <span className="text-green-500 lg:text-[28px] text-[18px]  font-black font-['Proxima Nova Condensed']">
        USDT
      </span>
      <span className="text-white lg:text-[28px] text-[18px] font-black font-['Proxima Nova Condensed']">
        WARS
      </span>
    </div>
  );
};
export default Navbar;
