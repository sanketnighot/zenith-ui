import React from "react";

function StackItemList({ title, text }) {
  return (
    <div className="flex font-semibold text-[17px] items-center justify-between">
      <div className="dark:text-black">{title}</div>
      <div className="dark:text-black">
        <span className="text-green-btn dark:text-white">{text}</span> USDT
      </div>
    </div>
  );
}

export default StackItemList;
