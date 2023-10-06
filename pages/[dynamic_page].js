import ApexChart from "@/components/Chart/Chart";
import TradingViewWidget from "@/components/Chart/TradingViewWidgets";
import Add from "@/components/Modal/Add";
import CloseMargin from "@/components/Modal/CloseMargin";
import LongShortModal from "@/components/Modal/LongShortModal";
import CardBtn from "@/components/utils/CardBtn";
import TitlePrice from "@/components/utils/TitlePrice";
import { useState } from "react";
import Rodal from "rodal";

export default function Home() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showReduceModal, setShowReduceModal] = useState(false);
  const [showIncreaseModal, setShowIncreaseModal] = useState(false);
  const [showDecreaseModal, setShowDecreaseModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  return (
    <>
      <div className="p-8">
        <div className="flex gap-4 text-white dark:text-black  font-semibold">
          <img
            className="w-[60px] h-[60px]"
            src={`/assets/tezos.png`}
            alt="tezos"
          />
          <div>
            <h2 className="text-2xl">XTZ-PREP</h2>
            <p className="text-xl">Tezos</p>
          </div>
        </div>

        <div className="xl:h-[100px] dark:bg-extra-lite-purple max-xl:flex-wrap max-xl:gap-6 w-full bg-purple-card mt-6 rounded-[19px] px-[45px] py-3 flex items-center xl:justify-between">
          <TitlePrice
            title="Mark price"
            price="1.52 kUSD"
            subtitleColor="text-white dark:text-black"
          />
          <TitlePrice
            title="Index price"
            price="2.52 kUSD"
            subtitleColor="text-white dark:text-black"
          />
          <TitlePrice
            title="Next funding"
            price="16:02"
            subtitleColor="text-white dark:text-black"
          />
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
          <TitlePrice
            title="Ecpected long/Short Rate"
            price="10.0056%/"
            dualColor="-0.0056%"
            subtitleColor="text-red-btn"
          />
        </div>

        <div className="h-[374px] dark:bg-lite-sidebar-bg mt-4 w-full flex items-center justify-center rounded-[34px] bg-black-card">
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
                <p>98.01 kUSD</p>
              </div>
              <div className="flex items-center justify-between">
                <h3>Margin Ratio</h3>
                <p>0.001</p>
              </div>
              <div className="flex items-center justify-between">
                <h3>Liquidation Price</h3>
                <p>98.01 kUSD</p>
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
                  <p className="font-semibold text-[17px] text-white dark:text-black">+59.2152 BTC</p>
                </div>
                <button
                  onClick={() => setShowCloseModal(!showCloseModal)}
                  className="w-[129px] h-[36px] border border-white dark:border-black dark:bg-white/70 bg-lite-black-btn rounded-[18px] dark:text-black  text-white font-semibold text-xs"
                >
                  CLOSE POSITION
                </button>
              </div>
              <div className=" font-semibold text-sm flex flex-col gap-3 w-[450px] ml-10">
                <div className="flex items-center justify-between">
                  <h3>Margin</h3>
                  <p>98.01 kUSD</p>
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
                  <p>98.01 kUSD</p>
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
        <div className=" h-[428px] mt-4 w-full rounded-[34px] overflow-hidden dark:bg-lite-sidebar-bg/40 bg-sidebar-bg py-9 text-white dark:text-black">
          <h2 className="font-bold text-xl mb-5 px-[72px] ">Position Health</h2>
          <table className="lg:w-full max-lg:w-[calc(100vw-100px)] max-lg:!overflow-x-auto lg:!overflow-y-auto">
            <thead className="font-semibold text-sm">
              <tr className="h-16 border-t border-b border-white">
                <th>TIME</th>
                <th>DIRECTION</th>
                <th>SYMBOL</th>
                <th>
                  COLLATERAL
                  <span className="ml-2 px-1.5 h-[17px] rounded-md text-xs dark:text-white bg-lite-purple-btn">
                    USDC
                  </span>
                </th>
                <th>
                  POSITION SIZE{" "}
                  <span className="ml-2 px-1.5 h-[17px] rounded-md text-xs dark:text-white bg-lite-purple-btn">
                    XTZ
                  </span>
                </th>
                <th>
                  REALIZED PNL{" "}
                  <span className="ml-2 px-1.5 h-[17px] rounded-md text-xs bg-lite-purple-btn">
                    XTZ
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="text-center text-sm">
              <tr className="h-12">
                <td>02:00:05</td>
                <td>LONG</td>
                <td>XTZ</td>
                <td>1.60 kUSD</td>
                <td>1 XTZ</td>
                <td>+0.20 kUSD</td>
              </tr>
              <tr className="h-12">
                <td>02:00:05</td>
                <td>LONG</td>
                <td>XTZ</td>
                <td>1.60 kUSD</td>
                <td>1 XTZ</td>
                <td>+0.20 kUSD</td>
              </tr>
              <tr className="h-12">
                <td>02:00:05</td>
                <td>LONG</td>
                <td>XTZ</td>
                <td>1.60 kUSD</td>
                <td>1 XTZ</td>
                <td>+0.20 kUSD</td>
              </tr>
              <tr className="h-12">
                <td>02:00:05</td>
                <td>LONG</td>
                <td>XTZ</td>
                <td>1.60 kUSD</td>
                <td>1 XTZ</td>
                <td>+0.20 kUSD</td>
              </tr>
              <tr className="h-12">
                <td>02:00:05</td>
                <td>LONG</td>
                <td>XTZ</td>
                <td>1.60 kUSD</td>
                <td>1 XTZ</td>
                <td>+0.20 kUSD</td>
              </tr>
              <tr className="h-12">
                <td>02:00:05</td>
                <td>LONG</td>
                <td>XTZ</td>
                <td>1.60 kUSD</td>
                <td>1 XTZ</td>
                <td>+0.20 kUSD</td>
              </tr>
            </tbody>
          </table>
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
