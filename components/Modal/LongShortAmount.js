import React from "react"

function LongShortAmount({ title, text, icon }) {
  return (
    <div className="flex font-semibold text-[15px] items-center justify-between bg-purple-btn h-11 px-2">
      <div className="text-white flex items-center gap-2">
        <img className="w-[30px]" src={`/assets/${icon}`} alt="" />
        <p>{title}</p>
      </div>
      <input
        placeholder="Amount"
        className="text-white text-xl outline-none bg-purple-btn focus:outline font-normal h-full w-1/4"
      />
    </div>
  )
}

export default LongShortAmount
