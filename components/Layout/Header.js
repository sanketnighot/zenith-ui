import Link from "next/link";
import React, { useEffect, useLayoutEffect, useState } from "react";
import IconBtn from "../utils/IconBtn";
import BurgerMenu from "../Svg/BurgerMenu";
import Drawer from "../Drawer/Drawer";
import { useTheme } from "next-themes";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("light");

  useLayoutEffect(() => {
    setCurrentTheme(theme == "dark" ? "light" : "dark");
  }, [theme]);
  return (
    <>
      <nav className="text-white dark:text-black dark:bg-lite-sidebar-bg h-28 border-b border-primary-border flex items-center justify-between w-full font-semibold text-xl max-2xl:px-8 2xl:pr-20">
        <ul className="flex items-center gap-8 ml-14 max-2xl:hidden">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/xtz-usdt"}>
            <li>Trade</li>
          </Link>
          <Link href={"/stake"}>
            <li>Stake</li>
          </Link>
          <Link href={"/leaderboard"}>
            <li>Leaderboard</li>
          </Link>
          <Link href={"/"}>
            <li>Docs</li>
          </Link>
          <Link href={"/"}>
            <li>
              <img src="/assets/discord-logo.png" alt="" />
            </li>
          </Link>
        </ul>
        <div className="flex items-center gap-6">
          <div onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
            <img
              className={`${currentTheme == "light" && "hidden"} w-10`}
              src="/assets/lightmode.png"
              alt=""
            />
            <img
              className={`${currentTheme == "dark" && "hidden"} w-10`}
              src="/assets/nightmode.png"
              alt=""
            />
          </div>
          <IconBtn />
        </div>
        <img
          className="w-[45px] 2xl:hidden"
          src="/assets/zenith-logo.png"
          alt=""
        />
        <p className="text-xl text-white 2xl:hidden">1.60 kUSD</p>
        <div className="2xl:hidden" onClick={() => setIsOpen(!isOpen)}>
          <BurgerMenu className={"2xl:hidden"} />
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="p-4 font-semibold text-xl text-white">
          <div className="bg-purple-card rounded-lg w-full h-fit pb-6">
            <div className="p-6 flex items-center gap-2">
              <img src="/assets/wallet-icon.png" alt="" />
              <p>3Mw1vp.....G6ikCDH4</p>
            </div>
            <div className="flex flex-col gap-8 text-white">
              <div className="flex flex-col">
                <Link href={"/xtz-usdt"}>
                  <p className="px-6 py-3">Trade</p>
                </Link>
                <Link href={"/stake"}>
                  <p className="px-6 py-3">Stake</p>
                </Link>
                <Link href={"/leaderboard"}>
                  <p className="px-6 py-3">Leaderboard</p>
                </Link>
                <hr className="!px-0" />
              </div>
              <div className="px-6 flex flex-col gap-4">
                <Link href={"/"}>
                  <p>Show in explorer</p>
                </Link>
                <Link href={"/"}>
                  <p>Copy address</p>
                </Link>
                <Link href={"/"}>
                  <p>Disconnect</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default Header;
