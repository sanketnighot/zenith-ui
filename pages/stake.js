import Claiming from "@/components/Stack/Claiming"
import Stacking from "@/components/Stack/Stacking"
import Unstaking from "@/components/Stack/Unstaking"
import StakeBtn from "@/components/utils/StakeBtn"
import { useState } from "react"
import Head from "next/head"

export default function Home() {
  const [selectStack, setSelectedStack] = useState(1)
  return (
    <div className="text-[16px] p-8 w-[1071px] max-2xl:w-full">
      <Head>
        <title>Zenith | Staking</title>
      </Head>
      <div className="h-[390px] max-lg:h-fit flex flex-col gap-16 text-white w-full rounded-[18px] p-8 bg-purple-card dark:bg-lite-sidebar-bg dark:text-black">
        <div>
          <h2 className="font-extrabold text-[52px]">Staking</h2>
          <p className="font-semibold text-xl">Total in staking 106852 PPR</p>
        </div>
        <div className="flex items-center gap-14 max-2xl:flex-wrap">
          <div className="flex flex-col gap-8 text-xl">
            <div className="text-mute-text dark:text-black/80 font-semibold ">
              Available to stake
            </div>
            <div className="font-bold text-white dark:text-black">1039 PPR</div>
          </div>
          <div className="flex flex-col gap-8 text-xl">
            <div className="text-mute-text font-semibold dark:text-black/80">
              Staked balance
            </div>
            <div className="font-bold text-white dark:text-black">2000 PPR</div>
          </div>
          <div className="flex flex-col gap-8 text-xl">
            <div className="text-mute-text font-semibold dark:text-black/80">
              APY
            </div>
            <div className="font-bold text-white dark:text-black">7.81%</div>
          </div>
          <div className="flex flex-col gap-8 text-xl">
            <div className="text-mute-text font-semibold dark:text-black/80">
              Total profit
            </div>
            <div className="font-bold text-white dark:text-black">10 USDT</div>
          </div>
        </div>
      </div>
      <div className="h-[407px] w-full flex items-center gap-5 mt-10 max-2xl:h-full max-2xl:flex-col">
        <div className="bg-lite-black dark:bg-lite-sidebar-bg dark:text-black text-white rounded-[18px] h-[407px] w-full p-8 flex flex-col gap-6">
          <div className="font-semibold text-xl text-white dark:text-black flex items-center gap-10">
            <button
              className={`${
                selectStack == 1 &&
                "border-b-[3px] border-purple-btn dark:border-b-black "
              } pb-2`}
              onClick={() => setSelectedStack(1)}
            >
              Staking
            </button>
            <button
              className={`${
                selectStack == 2 &&
                "border-b-[3px] border-purple-btn dark:border-b-black "
              } pb-2`}
              onClick={() => setSelectedStack(2)}
            >
              Unstaking
            </button>
            <button
              className={`${
                selectStack == 3 &&
                "border-b-[3px] border-purple-btn dark:border-b-black "
              } pb-2`}
              onClick={() => setSelectedStack(3)}
            >
              Claiming
            </button>
          </div>
          {selectStack == 1 && <Stacking />}
          {selectStack == 2 && <Unstaking />}
          {selectStack == 3 && <Claiming />}
        </div>
        <div className="bg-lite-black dark:bg-lite-sidebar-bg dark:text-black rounded-[18px] h-full w-full text-white p-8">
          <h2 className="font-semibold text-xl">Balance</h2>
          <div className="flex flex-col gap-14 mt-8">
            <button className="w-[167px] h-[53px] rounded-2xl bg-purple-btn font-semibold text-2xl dark:text-white">
              1039 PPR
            </button>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[29px]">Available to stake</h3>
              <button className="w-[132px] h-[28px] rounded-2xl bg-stake-purple font-semibold text-2xl">
                1039 PPR
              </button>
            </div>
            <StakeBtn title={"BUY PPR"} />
          </div>
        </div>
      </div>
      <div className="w-full text-white bg-lite-black dark:bg-lite-sidebar-bg dark:text-black py-8 px-12 mt-10 rounded-[18px]">
        <h2 className="text-[29px] font-semibold">
          How do I benefit from <br /> staking?
        </h2>
        <p className="text-xl mt-4">
          Protocol takes a flat 1.5% fee on each trade. Half of this amount is
          redistributed among the XTZ token stackers. Stakers will receive USDT
          continuously proportional to their portion of the total PPR in
          staking. Rewards will accrue every 1 hour.
        </p>
      </div>
    </div>
  )
}
