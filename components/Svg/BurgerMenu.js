import React from "react";

function BurgerMenu({ className }) {
  return (
    <svg
      className={className}
      width="23"
      height="15"
      viewBox="0 0 23 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1.5" x2="23" y2="1.5" stroke="#DDDDDD" strokeWidth="3" />
      <line y1="7.5" x2="23" y2="7.5" stroke="#DDDDDD" strokeWidth="3" />
      <line y1="13.5" x2="23" y2="13.5" stroke="#DDDDDD" strokeWidth="3" />
    </svg>
  );
}

export default BurgerMenu;
