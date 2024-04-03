import React from "react"

function TitlePrice({
  title = "Market price",
  price = "2.402 USDt",
  subtitleColor = "text-green-btn",
  dualColor,
}) {
  return (
    <div className="flex flex-col gap-[10px]">
      <h2 className="font-extrabold text-white dark:text-black">{title}</h2>
      {!dualColor && <p className={`font-bold ${subtitleColor}`}>{price}</p>}
      {dualColor && (
        <p className={`font-bold ${subtitleColor}`}>
          <span className="text-green-btn">{price}</span>
          <span className="text-red-btn">{dualColor}</span>
        </p>
      )}
    </div>
  )
}

export default TitlePrice
