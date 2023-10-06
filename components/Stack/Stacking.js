import React from "react";
import StackItemList from "../utils/StackItemList";
import StackBar from "../utils/StackBar";
import StakeBtn from "../utils/StakeBtn";

function Stacking() {
  return (
    <div className="flex flex-col h-full justify-between">
      <StackBar title="PPR" placeholder={"1039.00"} />
      <div className="text-white flex flex-col gap-3">
        <StackItemList title={"Daily profit"} text={"+10.0000"} />
        <StackItemList title={"Monthly profit"} text={"+20.0000"} />
        <StackItemList title={"Yearly profit"} text={"+30.0000"} />
      </div>
      <StakeBtn title={"STAKE"} />
    </div>
  );
}

export default Stacking;
