import React from "react";

function StepsCard({ img, step, subDescTop, subDescBottom }) {
  return (
    <div className="max-lg:w-full lg:w-[380px] gap-4 flex flex-col items-center justify-center h-[300px] rounded-[25px] bg-index-card">
      <img className="w-20" src={`/assets/${img}`} alt="" />
      <h2 className="font-black text-[32px]">{step}</h2>
      <p className="text-index-hero-p text-center">
        {subDescTop} <br /> {subDescBottom}
      </p>
    </div>
  );
}

export default StepsCard;
