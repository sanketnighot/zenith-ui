import React from "react";
import StackBar from "../utils/StackBar";
import StakeBtn from "../utils/StakeBtn";

function Claiming() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <StackBar title="You will recieve" placeholder={0} price={"0.00 kUSD"} claim={true} />
      </div>

      <StakeBtn title={"CLAIM"} />
    </div>
  );
}

export default Claiming;
