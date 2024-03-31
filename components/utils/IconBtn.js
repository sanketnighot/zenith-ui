import React from "react";

function IconBtn({
  title = "CONNECT WALLET",
  icon = "wallet-icon.png",
  alt = "wallet-icon",
}) {
  return (
    <button className="group z-10 max-2xl:hidden flex items-center gap-4 py-3 px-4 rounded-xl border relative border-white">
      <img src={`/assets/${icon}`} alt={alt} width={24} />
      <p className="text-[16px] font-semibold text-white dark:text-black">
        {title}
      </p>
      <div className="group-hover:block hidden absolute right-0 top-3/4 w-full pt-5 cursor-auto">
        <div className="z-10 rounded-xl bg-primary-bg dark:bg-purple-btn border dark:border-transparent  border-white p-4 space-y-3">
          <div
            role="button"
            className="pointer-events-auto cursor-pointer text-[16px] p-2 rounded-lg dark:bg-white  bg-purple-card font-semibold text-white dark:text-black"
          >
            Copy Address
          </div>
          <div
            role="button"
            className="pointer-events-auto cursor-pointer text-[16px] p-2 rounded-lg dark:bg-white  bg-purple-card font-semibold text-white dark:text-black"
          >
            Disconnect Wallet
          </div>
        </div>
      </div>
    </button>
  );
}

export default IconBtn;
