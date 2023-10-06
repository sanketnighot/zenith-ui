import React from "react";

function StackBar({ title, placeholder, claim }) {
  return (
    <div
      className={`${
        claim ? "flex-col py-2" : " h-[50px] items-center justify-between"
      } flex  px-5 text-white text-xl w-full bg-option-black dark:bg-white dark:text-black rounded-md`}
    >
      <p className="font-semibold">{title}</p>
      <input
        placeholder={placeholder}
        className="h-full text-right dark:placeholder:text-black bg-transparent w-3/12 outline-none focus:outline-none"
        type="text"
      />
    </div>
  );
}

export default StackBar;
