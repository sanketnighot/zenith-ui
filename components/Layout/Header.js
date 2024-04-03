import Link from "next/link"
import React, { useEffect, useLayoutEffect, useState } from "react"
import IconBtn from "../utils/IconBtn"
import BurgerMenu from "../Svg/BurgerMenu"
import Drawer from "../Drawer/Drawer"
import { useTheme } from "next-themes"
import SideMenuBtn from "../utils/SideMenuBtn"
import { useRouter } from "next/router"
function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme("light")
  const [currentTheme, setCurrentTheme] = useState("light")
  const router = useRouter()
  useLayoutEffect(() => {
    setCurrentTheme(theme == "dark" ? "light" : "dark")
  }, [theme])

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches }) => {
        if (matches) {
          setTheme("dark")
          // console.log("change to dark mode!");
        } else {
          setTheme("light")
          // console.log("change to light mode!");
        }
      })
  }, [])
  return (
    <>
      <nav className="!text-[16px] shadow-xlx text-white dark:text-black dark:bg-lite-sidebar-bg h-28 border-b border-primary-border flex items-center justify-between w-full font-semibold  max-2xl:px-8 2xl:pr-20">
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
          <Link href={"https://docs.payperfi.com"} target="_blank">
            <li>Docs</li>
          </Link>
          <Link href={"https://discord.gg/TZshx3ugbB"} target="_blank">
            <li>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className="fill-white dark:fill-black"
              >
                <path d="M18.9225 5.26675C17.6558 4.67625 16.2844 4.24767 14.8557 4.00004C14.8432 3.99964 14.8308 4.00199 14.8192 4.00693C14.8077 4.01187 14.7974 4.01927 14.7891 4.02862C14.6176 4.34291 14.4176 4.75245 14.2843 5.06674C12.769 4.83816 11.228 4.83816 9.71275 5.06674C9.57941 4.74292 9.37941 4.34291 9.19845 4.02862C9.18893 4.00957 9.16035 4.00004 9.13178 4.00004C7.70317 4.24767 6.34123 4.67625 5.065 5.26675C5.05548 5.26675 5.04595 5.27627 5.03643 5.28579C2.44588 9.16209 1.73158 12.9336 2.08397 16.6671C2.08397 16.6861 2.09349 16.7052 2.11254 16.7147C3.82687 17.9719 5.47454 18.7338 7.10315 19.2386C7.13173 19.2481 7.1603 19.2386 7.16982 19.2195C7.55078 18.6957 7.89365 18.1433 8.1889 17.5623C8.20795 17.5242 8.1889 17.4861 8.1508 17.4766C7.60793 17.2671 7.09363 17.0194 6.58885 16.7337C6.55076 16.7147 6.55076 16.6575 6.57933 16.629C6.68409 16.5528 6.78886 16.4671 6.89362 16.3909C6.91267 16.3718 6.94124 16.3718 6.96029 16.3813C10.2366 17.8766 13.77 17.8766 17.0082 16.3813C17.0272 16.3718 17.0558 16.3718 17.0749 16.3909C17.1796 16.4766 17.2844 16.5528 17.3891 16.6385C17.4272 16.6671 17.4272 16.7242 17.3796 16.7432C16.8844 17.0385 16.3606 17.2766 15.8177 17.4861C15.7796 17.4957 15.7701 17.5433 15.7796 17.5718C16.0844 18.1528 16.4272 18.7052 16.7987 19.229C16.8272 19.2386 16.8558 19.2481 16.8844 19.2386C18.5225 18.7338 20.1702 17.9719 21.8845 16.7147C21.9036 16.7052 21.9131 16.6861 21.9131 16.6671C22.3321 12.3527 21.2178 8.60969 18.9606 5.28579C18.9511 5.27627 18.9416 5.26675 18.9225 5.26675ZM8.68415 14.3908C7.70317 14.3908 6.8841 13.486 6.8841 12.3717C6.8841 11.2574 7.68412 10.3526 8.68415 10.3526C9.6937 10.3526 10.4937 11.2669 10.4842 12.3717C10.4842 13.486 9.68418 14.3908 8.68415 14.3908ZM15.3224 14.3908C14.3414 14.3908 13.5224 13.486 13.5224 12.3717C13.5224 11.2574 14.3224 10.3526 15.3224 10.3526C16.332 10.3526 17.132 11.2669 17.1225 12.3717C17.1225 13.486 16.332 14.3908 15.3224 14.3908Z" />
              </svg>
            </li>
          </Link>
        </ul>
        <div className="flex items-center gap-6">
          <div
            role="button"
            className="cursor-pointer"
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          >
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
        <p className="text-xl text-white 2xl:hidden">1.60 USDt</p>
        <div className="2xl:hidden" onClick={() => setIsOpen(!isOpen)}>
          <BurgerMenu className={"2xl:hidden cursor-pointer"} />
        </div>
      </nav>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="p-4 font-semibold text-[16px] shadow-2xl text-white dark:bg-purple-btn  bg-sidebar-bg ">
          <div className=" dark:bg-lite-sidebar-bg bg-purple-card rounded-xl w-full h-fit pb-6">
            <div className="px-6 pt-4 flex justify-end">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg viewBox="0 0 24 24" width={24} height={24} fill="white">
                  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-3 space-y-3">
              <div className="flex items-center gap-2">
                <img src="/assets/wallet-icon.png" alt="" />
                <p>3Mw1vp.....G6ikCDH4</p>
              </div>

              <div className="flex gap-x-4">
                <button className="flex-1 py-1 rounded-lg cursor-pointer dark:bg-purple-btn bg-sidebar-bg dark:text-white">
                  Copy
                </button>
                <button className="flex-1 py-1 rounded-lg cursor-pointer dark:bg-purple-btn bg-sidebar-bg dark:text-white">
                  Disconnect
                </button>
              </div>
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
              <div className="px-6 flex flex-col gap-y-4 h-[calc(100vh-364px)] overflow-y-auto">
                <Link href={"/xtz-usdt"}>
                  <SideMenuBtn
                    title="Tezos"
                    subtitle="XTZ"
                    icon="tezos.png"
                    alt="tezos"
                    active={router.asPath == "/xtz-usdt"}
                  />
                </Link>
                <Link href={"/btc-usdt"}>
                  <SideMenuBtn
                    title="Bitcoin"
                    subtitle="BTC"
                    icon="bitcoin.png"
                    alt="bitcoin"
                    active={router.asPath == "/btc-usdt"}
                  />
                </Link>
                <Link href={"/eth-usdt"}>
                  <SideMenuBtn
                    title="Ethereum"
                    subtitle="ETH"
                    icon="ethereum.png"
                    alt="ethereum"
                    active={router.asPath == "/eth-usdt"}
                  />
                </Link>
                <Link href={"/sol-usdt"}>
                  <SideMenuBtn
                    title="Solana"
                    subtitle="SOL"
                    icon="solana.png"
                    alt="solana"
                    active={router.asPath == "/sol-usdt"}
                  />
                </Link>
                <Link href={"/matic-usdt"}>
                  <SideMenuBtn
                    title="Polygon"
                    subtitle="MATIC"
                    icon="polygon.png"
                    alt="polygon"
                    active={router.asPath == "/matic-usdt"}
                  />
                </Link>
                <Link href={"/bnb-usdt"}>
                  <SideMenuBtn
                    title="Binance"
                    subtitle="BNB"
                    icon="binance.png"
                    alt="binance"
                    active={router.asPath == "/bnb-usdt"}
                  />
                </Link>
                <Link href={"/avax-usdt"}>
                  <SideMenuBtn
                    title="Avalanche"
                    subtitle="AVAX"
                    icon="avalanche.png"
                    alt="avalanche"
                    active={router.asPath == "/avax-usdt"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Header
