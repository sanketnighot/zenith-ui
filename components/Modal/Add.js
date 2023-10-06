import React, { useState } from "react";

function AddMargin({ title, btnColor, btnName, marginName }) {
  const [minMax, setMinMax] = useState(1);

  return (
    <div className="h-fit w-full bg-lite-black dark:bg-white rounded-[18px] flex items-center gap-5 mt-10 max-2xl:h-full max-2xl:flex-col">
      <div className="bg-lite-black dark:bg-white dark:text-black rounded-[18px] h-full w-full text-white p-8">
        <h2 className="font-semibold text-xl">{title}</h2>
        <div className="flex flex-col gap-8 mt-8">
          <div
            className={`h-[50px] items-center justify-between flex px-5 text-white text-xl w-full bg-option-black dark:bg-extra-lite-purple dark:text-black rounded-md`}
          >
            <img src="/assets/kUsd.png" alt="" />
            <input
              placeholder={"1"}
              className="h-full dark:placeholder:text-black text-right bg-transparent w-3/12 outline-none focus:outline-none"
              type="text"
            />
          </div>
          <input
            onInput={(e) => setMinMax(Number(e.target.value))}
            type="range"
            name=""
            id=""
            min={1}
            max={5}
            value={minMax}
          />
          <div className="flex items-center font-semibold justify-between">
            <h3>{marginName}</h3>
            <p>98.01 kUSD</p>
          </div>

          <button
            className={`${btnColor} dark:text-white w-full h-[41px]  font-bold text-lg rounded-lg`}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMargin;
