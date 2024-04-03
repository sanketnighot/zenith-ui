import React from "react"
import StackBar from "../utils/StackBar"
import StakeBtn from "../utils/StakeBtn"

function Unstaking() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <StackBar title="ZNTH" placeholder={"Amount"} />
        <p className="text-xs text-white dark:text-black mt-1">
          Staked 0 ZNTH.{" "}
          <span className="text-[#626CB6] dark:text-black">
            Spend the entire amount
          </span>
        </p>
      </div>

      <StakeBtn title={"UNSTAKE"} />
    </div>
  )
}

export default Unstaking
