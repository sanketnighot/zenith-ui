import ApexChart from "@/components/Chart/Chart";
import TradingViewWidget from "@/components/Chart/TradingViewWidgets";
import Add from "@/components/Modal/Add";
import CloseMargin from "@/components/Modal/CloseMargin";
import LongShortModal from "@/components/Modal/LongShortModal";
import CardBtn from "@/components/utils/CardBtn";
import TitlePrice from "@/components/utils/TitlePrice";
import { useEffect, useState } from "react";
import Rodal from "rodal";
import { usePathname } from "next/navigation";
export default function Home(a, b) {
  const pathName = usePathname();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showReduceModal, setShowReduceModal] = useState(false);
  const [showIncreaseModal, setShowIncreaseModal] = useState(false);
  const [showDecreaseModal, setShowDecreaseModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [filterPathName, setFilterPathName] = useState(["",""]);


  useEffect(() => {
    if (pathName) {
      let pathNameFilter = pathName.replace("/", "").split("-");
      setFilterPathName([...pathNameFilter]);
    }
  }, [pathName]);

  let data = {
    "xtz":{
      chainName:"Tezos",
      chainLogo:"tezos.png"
    },
    "btc":{
      chainName:"Bitcoin",
      chainLogo:"bitcoin.png"
    },
    "eth":{
      chainName:"Ethereum",
      chainLogo:"ethereum.png"    
    },
    "sol":{
      chainName:"Solana",
      chainLogo:"solana.png"
    },
    "matic":{
      chainName:"Polygon",
      chainLogo:"polygon.png"
    },
    "bnb":{
      chainName:"Binance",
      chainLogo:"binance.png"
    },
    "avax":{
      chainName:"Avalanche",
      chainLogo:"avalanche.png"
    },
  }
  
  return (
    <>
      <div className="text-[16px] p-8">
        <div className="flex gap-4 text-white dark:text-black  font-semibold">
          <img
            className="w-[60px] aspect-square object-contain"
            src={`/assets/`+ data[filterPathName[0]]?.chainLogo}
            alt={data[filterPathName[0]]?.chainName}
          />
          <div>
            <h2 className="text-2xl uppercase">
              {filterPathName[0]}-{filterPathName[1]}
            </h2>
            <p className="text-xl">{data[filterPathName[0]]?.chainName}</p>
          </div>
        </div>

        <div className="dark:bg-extra-lite-purple max-xl:flex-wrap w-full bg-purple-card mt-6 rounded-[19px] px-8 py-3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-8">
          {/* <div className="flex justify-between items-center flex-[40]"> */}
          <TitlePrice
            title="Mark price"
            price="1.52 USDt"
            subtitleColor="text-white dark:text-black"
          />
          <TitlePrice
            title="Index price"
            price="2.52 USDt"
            subtitleColor="text-white dark:text-black"
          />
          <TitlePrice
            title="Next funding"
            price="16:02"
            subtitleColor="text-white dark:text-black"
          />
          {/* </div> */}
          {/* <div className="flex justify-between items-center flex-[40]"> */}
          <TitlePrice
            title="Long funding rate"
            price="0.0056%"
            subtitleColor="text-green-btn"
          />
          <TitlePrice
            title="Short funding rate"
            price="-0.0056%"
            subtitleColor="text-red-btn"
          />
          {/* <TitlePrice
            title="Ecpected long/Short Rate"
            price="10.0056%/"
            dualColor="-0.0056%"
            subtitleColor="text-red-btn"
          /> */}
          {/* </div> */}
        </div>

        <div className="h-[500px] dark:bg-lite-sidebar-bg mt-4 w-full flex items-center justify-center rounded-[34px] bg-black-card">
          {/* <ApexChart /> */}
          <TradingViewWidget />
        </div>
        {/* position health */}
        <div className="flex gap-4 max-[1279px]:flex-wrap">
          <div className="h-[337px] mt-4 min-[1780px]:min-w-[569px] min-[1780px]:max-w-[569px] max-[1779px]:w-full rounded-[34px] bg-purple-card dark:bg-lite-sidebar-bg/70 dark:text-black text-white py-10 px-[74px] flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-xl">Position Health</h2>
              <div className="bg-[#096340] h-5 border-2 border-green-btn rounded-l-full rounded-r-full flex items-center px-1">
                <div className="bg-green-btn w-[40%] h-2.5 rounded-l-full rounded-r-full"></div>
              </div>
            </div>
            <div className=" font-semibold text-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3>Margin</h3>
                <p>98.01 USDt</p>
              </div>
              <div className="flex items-center justify-between">
                <h3>Margin Ratio</h3>
                <p>0.001</p>
              </div>
              <div className="flex items-center justify-between">
                <h3>Liquidation Price</h3>
                <p>98.01 USDt</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CardBtn
                onClick={() => setShowAddModal(!showAddModal)}
                title={"+ADD"}
                color={"bg-green-btn"}
              />
              <CardBtn
                onClick={() => setShowReduceModal(!showReduceModal)}
                title={"-REDUCE"}
                color={"bg-red-btn"}
              />
            </div>
          </div>
          {/* position status */}
          <div className="lg:h-[337px] mt-4 w-full rounded-[34px] bg-purple-card text-white py-10 px-[54px] flex flex-col gap-4 dark:bg-lite-sidebar-bg/70 dark:text-black">
            <h2 className="font-bold text-xl">Position Status</h2>
            <div className="flex w-full max-lg:flex-col max-lg:gap-10 lg:justify-between">
              <div className="flex lg:flex-col h-full justify-between">
                <div className="flex flex-col items-center gap-3">
                  <button className="w-[129px] h-[36px] border border-white bg-lite-black-btn rounded-[18px] text-white font-semibold text-md">
                    Long
                  </button>
                  <p className="font-semibold text-[17px] text-white dark:text-black">
                    +59.2152 BTC
                  </p>
                </div>
                <button
                  onClick={() => setShowCloseModal(!showCloseModal)}
                  className="w-[129px] h-[36px] border border-white dark:border-black dark:bg-white/70 bg-lite-black-btn rounded-[18px] dark:text-black  text-white font-semibold text-xs"
                >
                  CLOSE POSITION
                </button>
              </div>
              <div className=" font-semibold text-sm flex flex-col gap-3 w-full xl:max-w-[450px] max-[1279px]:w-[450px] max-lg:w-full lg:ml-10">
                <div className="flex items-center justify-between">
                  <h3>Margin</h3>
                  <p>98.01 USDt</p>
                </div>
                <div className="flex items-center justify-between">
                  <h3>Margin Ratio</h3>
                  <p>0.001</p>
                </div>
                <div className="flex items-center justify-between">
                  <h3>Margin Ratio</h3>
                  <p>0.001</p>
                </div>
                <div className="flex items-center justify-between">
                  <h3>Margin Ratio</h3>
                  <p>0.001</p>
                </div>
                <div className="flex items-center justify-between">
                  <h3>Liquidation Price</h3>
                  <p>98.01 USDt</p>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <CardBtn
                    onClick={() => setShowIncreaseModal(!showIncreaseModal)}
                    title={"+INCREASE"}
                    color={"bg-green-btn"}
                  />
                  <CardBtn
                    onClick={() => setShowDecreaseModal(!showDecreaseModal)}
                    title={"-DECREASE"}
                    color={"bg-red-btn"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative  mt-4 rounded-[34px]  dark:bg-lite-sidebar-bg/40 bg-sidebar-bg border-8 dark:border-lite-sidebar-bg/10 border-sidebar-bg  text-white dark:text-black">
          <h2 className="sticky top-0 rounded-t-[34px]  font-bold text-xl px-8 py-4 bg-sidebar-bg dark:bg-[#dec3ff]">
            Position History
          </h2>{" "}
          <div className="overflow-y-auto block max-h-[428px] ">
            <table className="w-full">
              <thead className="sticky top-0 dark:bg-[#d0aaff] bg-[#1c163a]">
                <tr className=" align-top">
                  <th className="py-5 min-w-[80px]">TIME</th>
                  <th className="py-5">DIRECTION</th>
                  <th className="py-5">SYMBOL</th>
                  <th className="py-5">
                    COLLATERAL
                    <span className="block md:inline w-fit mx-auto md:ml-2 px-1.5 h-[17px] rounded-md text-xs dark:text-white bg-lite-purple-btn">
                      USDC
                    </span>
                  </th>
                  <th className="py-5">
                    POSITION SIZE{" "}
                    <span className="block md:inline w-fit mx-auto md:ml-2 px-1.5 h-[17px] rounded-md text-xs dark:text-white bg-lite-purple-btn">
                      {filterPathName[0]}
                    </span>
                  </th>
                  <th className="py-5">
                    REALIZED PNL{" "}
                    <span className="block md:inline w-fit mx-auto md:ml-2 px-1.5 h-[17px] rounded-md text-xs dark:text-white bg-lite-purple-btn">
                      {filterPathName[0]}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="max-h-[428px] overflow-y-auto text-center text-sm ">
                <tr className="h-12">
                  <td className="min-w-[80px]">02:00:05</td>
                  <td className="min-w-[90px]">LONG</td>
                  <td className="min-w-[85px] uppercase">
                    {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">1.60 USDt</td>
                  <td className="min-w-[160px] uppercase">
                    1 {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">+0.20 USDt</td>
                </tr>
                <tr className="h-12">
                  <td className="min-w-[80px]">02:00:05</td>
                  <td className="min-w-[90px]">LONG</td>
                  <td className="min-w-[85px] uppercase">
                    {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">1.60 USDt</td>
                  <td className="min-w-[160px] uppercase">
                    1 {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">+0.20 USDt</td>
                </tr>
                <tr className="h-12">
                  <td className="min-w-[80px]">02:00:05</td>
                  <td className="min-w-[90px]">LONG</td>
                  <td className="min-w-[85px] uppercase">
                    {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">1.60 USDt</td>
                  <td className="min-w-[160px] uppercase">
                    1 {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">+0.20 USDt</td>
                </tr>
                <tr className="h-12">
                  <td className="min-w-[80px]">02:00:05</td>
                  <td className="min-w-[90px]">LONG</td>
                  <td className="min-w-[85px] uppercase">
                    {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">1.60 USDt</td>
                  <td className="min-w-[160px] uppercase">
                    1 {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">+0.20 USDt</td>
                </tr>
                <tr className="h-12">
                  <td className="min-w-[80px]">02:00:05</td>
                  <td className="min-w-[90px]">LONG</td>
                  <td className="min-w-[85px] uppercase">
                    {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">1.60 USDt</td>
                  <td className="min-w-[160px] uppercase">
                    1 {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">+0.20 USDt</td>
                </tr>
                <tr className="h-12">
                  <td className="min-w-[80px]">02:00:05</td>
                  <td className="min-w-[90px]">LONG</td>
                  <td className="min-w-[85px] uppercase">
                    {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">1.60 USDt</td>
                  <td className="min-w-[160px] uppercase">
                    1 {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">+0.20 USDt</td>
                </tr>
                <tr className="h-12">
                  <td className="min-w-[80px]">02:00:05</td>
                  <td className="min-w-[90px]">LONG</td>
                  <td className="min-w-[85px] uppercase">
                    {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">1.60 USDt</td>
                  <td className="min-w-[160px] uppercase">
                    1 {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">+0.20 USDt</td>
                </tr>
                <tr className="h-12">
                  <td className="min-w-[80px]">02:00:05</td>
                  <td className="min-w-[90px]">LONG</td>
                  <td className="min-w-[85px] uppercase">
                    {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">1.60 USDt</td>
                  <td className="min-w-[160px] uppercase">
                    1 {filterPathName[0]}
                  </td>
                  <td className="min-w-[160px]">+0.20 USDt</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Rodal
        customStyles={{
          backgroundColor: "transparent",
        }}
        // width={442}
        height={407}
        showCloseButton={true}
        visible={showAddModal}
        onClose={() => setShowAddModal(!showAddModal)}
      >
        <Add
          marginName={"Position Margin"}
          title={"Add Margin"}
          btnName={"ADD"}
          btnColor={"bg-green-btn"}
        />
      </Rodal>
      <Rodal
        customStyles={{
          backgroundColor: "transparent",
        }}
        // width={442}
        height={407}
        showCloseButton={true}
        visible={showReduceModal}
        onClose={() => setShowReduceModal(!showReduceModal)}
      >
        <Add
          marginName={"Position Margin"}
          title={"Reduce Margin"}
          btnName={"Reduce"}
          btnColor={"bg-red-btn"}
        />
      </Rodal>
      <Rodal
        customStyles={{
          backgroundColor: "transparent",
        }}
        // width={442}
        height={407}
        showCloseButton={true}
        visible={showReduceModal}
        onClose={() => setShowReduceModal(!showReduceModal)}
      >
        <Add
          marginName={"Position Margin"}
          title={"Reduce Margin"}
          btnName={"Reduce"}
          btnColor={"bg-red-btn"}
        />
      </Rodal>
      <Rodal
        customStyles={{
          backgroundColor: "transparent",
        }}
        width={432}
        height={407}
        showCloseButton={true}
        visible={showCloseModal}
        onClose={() => setShowCloseModal(!showCloseModal)}
      >
        <CloseMargin />
      </Rodal>
      <Rodal
        customStyles={{
          backgroundColor: "transparent",
        }}
        width={442}
        height={748}
        showCloseButton={true}
        visible={showIncreaseModal}
        onClose={() => setShowIncreaseModal(!showIncreaseModal)}
      >
        <LongShortModal positon={"Position"} title={"Increase"} />
      </Rodal>
      <Rodal
        customStyles={{
          backgroundColor: "transparent",
        }}
        width={442}
        height={748}
        showCloseButton={true}
        visible={showDecreaseModal}
        onClose={() => setShowDecreaseModal(!showDecreaseModal)}
      >
        <LongShortModal positon={"Position"} title={"Decrease"} />
      </Rodal>
    </>
  );
}
