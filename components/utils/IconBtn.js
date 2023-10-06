import React from "react";

function IconBtn({
  title = "CONNECT WALLET",
  icon = "wallet-icon.png",
  alt = "wallet-icon",
}) {
  return (
    <button className="max-2xl:hidden flex items-center gap-4 px-5 py-4 rounded-2xl border border-white">
      <img src={`/assets/${icon}`} alt={alt} />
      <p className="text-lg font-semibold text-white dark:text-black">{title}</p>
    </button>
  );
}

export default IconBtn;
