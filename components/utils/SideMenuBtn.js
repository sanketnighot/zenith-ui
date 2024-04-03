import React from "react"

function SideMenuBtn({
  icon = "tezos.png",
  alt = "tezos",
  title = "Tezos",
  subtitle = "XTZ",
  amount = "1.60 USDt",
  active,
}) {
  return (
    <button
      className={`${
        active && "bg-purple-btn dark:bg-white"
      }  font-semibold p-3.5 flex items-start justify-between w-full min-w-[250px] h-[74px] text-white dark:text-black rounded-2xl`}
    >
      <div className="flex gap-4 items-start">
        <img
          className="w-7  aspect-square object-contain shrink-0"
          src={`/assets/${icon}`}
          alt={alt}
        />
        <div className="flex flex-col items-start">
          <h2 className="text-xl">{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      <h2 className="text-xl">{amount}</h2>
    </button>
  )
}

export default SideMenuBtn
