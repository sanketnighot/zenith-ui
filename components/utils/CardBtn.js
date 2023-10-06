import React from "react";

function CardBtn({ title, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${color} w-[141px] h-[41px] dark:text-white font-bold text-lg rounded-lg`}
    >
      {title}
    </button>
  );
}

export default CardBtn;
