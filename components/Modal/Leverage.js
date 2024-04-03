import React, { useState } from "react"

function Leverage() {
  const [minMax, setMinMax] = useState(1)
  return (
    <div className="min-w-full h-[85px] bg-purple-btn flex flex-col gap-2 justify-center px-2">
      <div className="flex items-center justify-between text-[#AEACAC] dark:text-white font-semibold">
        <h3 className="font-black">Leverage</h3>
        <p className="text-[13px]">x1</p>
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

      <div className="flex items-center justify-between text-[#AEACAC] dark:text-white font-semibold">
        <h3>x1</h3>
        <p className="text-[13px]">x{minMax}</p>
      </div>
    </div>
  )
}

export default Leverage
