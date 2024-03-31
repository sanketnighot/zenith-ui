import React from "react";
import LongShortAmount from "./LongShortAmount";
import Leverage from "./Leverage";

function LongShortModal({ title, positon }) {
  return (
    <div className="w-[442px] h-[748px] bg-sidebar-bg dark:bg-white dark:text-black px-10 py-14 flex flex-col gap-7">
      <h3 className="font-black text-white dark:text-black text-[30px]">
        {positon ? title + " " + positon : title}
      </h3>
      <LongShortAmount title={"USDt"} text={"Amount"} icon={"USDt.svg"} />
      <Leverage />
      <div className="flex flex-col gap-5">
        <h3 className="font-black text-[15px] text-white dark:text-black">
          You are buying in the long
        </h3>
        <div className="flex items-center justify-between">
          <p className="font-black text-[15px] text-[#797979] dark:text-black/70">Position size</p>
          <div className="text-white dark:text-black font-semibold flex items-center gap-2">
            <p>0 BTC</p>
            <img className="w-5" src="/assets/bitcoin.png" alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-black text-[15px] text-[#797979] dark:text-black/70">Entry price</p>
          <div className="text-white dark:text-black font-semibold flex items-center gap-2">
            <p>0 USDt</p>
            <img className="w-5" src="/assets/USDt.svg" alt="" />
          </div>
        </div>
      </div>
      <hr className="border-[#454545]" />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <p className="font-black text-[15px] text-[#C0C0C0] dark:text-black/70">Amount</p>
          <div className="text-white dark:text-black font-semibold text-[13px]">0 USDt</div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-black text-[15px] text-[#C0C0C0] dark:text-black/70">Commission</p>
          <div className="text-white dark:text-black font-semibold text-[13px]">0 USDt</div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-black text-[15px] text-[#C0C0C0] dark:text-black/70">Price impact</p>
          <div className="text-white dark:text-black font-semibold text-[13px]">0 %</div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-black text-[15px] text-[#C0C0C0] dark:text-black/70">
            Slippage tolerance
          </p>
          <div className="text-white dark:text-black font-semibold text-[13px]">2 %</div>
        </div>
      </div>
      <button
        className={`${['Long', 'Increase'].includes(title) ? "bg-green-btn" : "bg-red-btn"
          } w-full text-white  h-[41px]  font-bold text-lg rounded-lg`}
      >
        {title}
      </button>
    </div>
  );
}

export default LongShortModal;
