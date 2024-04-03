import React from "react"

function StakeBtn({ title }) {
  return (
    <button className="h-[53px] font-extrabold dark:bg-white dark:text-black text-[22px] w-full rounded-2xl bg-stake-purple">
      {title}
    </button>
  )
}

export default StakeBtn
