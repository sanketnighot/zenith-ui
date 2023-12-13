import SideMenuBtn from "../utils/SideMenuBtn";
import CardBtn from "../utils/CardBtn";
import Rodal from "rodal";
import LongShortModal from "../Modal/LongShortModal";
import Link from "next/link";
import { useRouter } from "next/router";

function Sidebar({ showLong, setShowLong, showShort, setShowShort }) {
  const router = useRouter();
  return (
    <>
      <div className="max-2xl:hidden 2xl:fixed top-0 left-0 bottom-0 bg-primary-bg dark:bg-white h-full">
        <div className="min-w-[416px] dark:bg-extra-lite-purple max-w-[416px] h-[67%] rounded-tr-2xl rounded-br-2xl bg-sidebar-bg">
          <div className="h-28 dark:bg-lite-purple-btn border-b border-primary-border flex items-center">
            <div className="flex items-center gap-4 ml-4">
              <img className="w-[66px]" src="/assets/zenith-logo.png" alt="" />
              <h2 className=" font-extrabold dark:text-black text-white text-xl">Zenith</h2>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-full mt-8 dark:bg-extra-lite-purple" scrollable>
            <Link href={"/xtz-usdt"}>
              <SideMenuBtn title="Tezos"
                subtitle="XTZ"
                icon="tezos.png"
                alt="tezos"
                active={router.asPath == "/xtz-usdt"} />
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
              <SideMenuBtn title="Solana"
                subtitle="SOL"
                icon="solana.png"
                alt="solana"
                active={router.asPath == "/sol-usdt"} />
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
              <SideMenuBtn title="Avalanche"
                subtitle="AVAX"
                icon="avalanche.png"
                alt="avalanche"
                active={router.asPath == "/avax-usdt"} />
            </Link>
          </div>
        </div>
        <div className="fixed min-w-[416px] max-w-[416px] text-white bg-sidebar-bg dark:text-black dark:bg-lite-sidebar-bg rounded-2xl mt-5 p-10 max-h-[344px] ">
          <div className="flex flex-col h-full gap-20">
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
  );
}

export default Sidebar;
