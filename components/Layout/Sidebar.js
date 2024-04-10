import SideMenuBtn from "../utils/SideMenuBtn"
import CardBtn from "../utils/CardBtn"
import Rodal from "rodal"
import LongShortModal from "../Modal/LongShortModal"
import Link from "next/link"
import { useRouter } from "next/router"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

function Sidebar({ showLong, setShowLong, showShort, setShowShort }) {
  const router = useRouter()
  const pathName = usePathname()
  const [isValidPage, setValidPage] = useState(false)

  useEffect(() => {
    const _page = ["/", "/leaderboard", "/stake", "/trade"].includes(pathName)

    setValidPage(_page)
  }, [pathName])

  return (
    <>
      <div className="max-2xl:hidden 2xl:fixed top-0 left-0 bottom-0 bg-primary-bg dark:bg-white h-full">
        <div className="min-w-[416px]  max-w-[416px] rounded-tr-2xl rounded-br-2xl ">
          <div className="h-28 dark:bg-lite-purple-btn border-b border-primary-border flex items-center">
            <div className="flex items-center gap-4 ml-4">
              <img className="w-[66px]" src="/assets/zenith-logo.png" alt="" />
              <h2 className=" font-extrabold dark:text-black text-white text-xl">
                Zenith
              </h2>
            </div>
          </div>
          <div
            className={`rounded-br-3xl flex flex-col gap-4  overflow-y-auto ${
              isValidPage ? `h-[calc(100vh-125px)]` : `h-[calc(100vh-360px)]`
            } w-full p-6  bg-sidebar-bg dark:bg-extra-lite-purple`}
          >
            <Link href={"/xtz-usdt"}>
              <SideMenuBtn
                title="Tezos"
                subtitle="XTZ"
                icon="tezos.png"
                alt="tezos"
                active={router.asPath == "/xtz-usdt"}
                amount="0.92"
              />
            </Link>
            <Link href={"/btc-usdt"}>
              <SideMenuBtn
                title="Bitcoin"
                subtitle="BTC"
                icon="bitcoin.png"
                alt="bitcoin"
                active={router.asPath == "/btc-usdt"}
                amount="69442.43"
              />
            </Link>
            <Link href={"/eth-usdt"}>
              <SideMenuBtn
                title="Ethereum"
                subtitle="ETH"
                icon="ethereum.png"
                alt="ethereum"
                active={router.asPath == "/eth-usdt"}
                amount="3540.43"
              />
            </Link>
            <Link href={"/sol-usdt"}>
              <SideMenuBtn
                title="Solana"
                subtitle="SOL"
                icon="solana.png"
                alt="solana"
                active={router.asPath == "/sol-usdt"}
                amount="169.31"
              />
            </Link>
            <Link href={"/matic-usdt"}>
              <SideMenuBtn
                title="Polygon"
                subtitle="MATIC"
                icon="polygon.png"
                alt="polygon"
                active={router.asPath == "/matic-usdt"}
                amount="0.90"
              />
            </Link>
            <Link href={"/bnb-usdt"}>
              <SideMenuBtn
                title="Binance"
                subtitle="BNB"
                icon="binance.png"
                alt="binance"
                active={router.asPath == "/bnb-usdt"}
                amount="606.22"
              />
            </Link>
            <Link href={"/avax-usdt"}>
              <SideMenuBtn
                title="Avalanche"
                subtitle="AVAX"
                icon="avalanche.png"
                alt="avalanche"
                active={router.asPath == "/avax-usdt"}
                amount="48.13"
              />
            </Link>
          </div>
        </div>

        {!isValidPage && (
          <div className="fixed min-w-[416px] max-w-[416px] text-white bg-sidebar-bg dark:text-black dark:bg-lite-sidebar-bg rounded-r-3xl mt-5 p-10 max-h-[344px] ">
            <div className="flex flex-col h-full gap-10">
              <h3 className="font-semibold text-xl text-center">
                By adding Long position, you <br /> can earn 350.54 % APR
              </h3>
              <div className="flex items-center justify-between">
                <CardBtn
                  onClick={() => setShowLong(!showLong)}
                  title={"Long"}
                  color={"bg-green-btn"}
                />
                <CardBtn
                  onClick={() => setShowShort(!showShort)}
                  title={"Short"}
                  color={"bg-red-btn"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <Rodal
        customStyles={{
          backgroundColor: "transparent",
        }}
        width={442}
        height={748}
        showCloseButton={false}
        visible={showLong}
        onClose={() => setShowLong(!showLong)}
      >
        <LongShortModal title={"Long"} />
      </Rodal>
      <Rodal
        customStyles={{
          backgroundColor: "transparent",
        }}
        width={442}
        height={748}
        showCloseButton={false}
        visible={showShort}
        onClose={() => setShowShort(!showShort)}
      >
        <LongShortModal title={"Short"} />
      </Rodal>
    </>
  )
}

export default Sidebar
