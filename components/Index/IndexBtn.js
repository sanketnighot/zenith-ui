import React from "react";

function IndexBtn({ title }) {
  return (
    <button className="w-[156px] font-extrabold h-[56px] rounded-[10px] bg-gradient-to-tr from-[#933FFE] to-[#18C8FF]">
      {title}
    </button>
  );
}

export default IndexBtn;
