function CloseMargin() {
  return (
    <div className="h-fit w-full bg-lite-black dark:bg-white rounded-[18px] flex items-center gap-5 max-2xl:h-full max-2xl:flex-col">
      <div className="bg-lite-black dark:bg-white dark:text-black rounded-[18px] h-full w-full text-white p-8">
        <h2 className="font-semibold text-xl">Close Position</h2>
        <div className="flex flex-col gap-8 mt-8">
          <p className="font-semibold text-xs text-gray-600">
            Are you sure, you want to close the position?{" "}
          </p>
          <div className="font-bold text-md flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3>Expected Close Price: </h3>
              <p className="text-white dark:text-black">98.01 kUSD</p>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <h3>Your Profit</h3>
              <p className="text-green-btn">98.01 kUSD</p>
            </div>
          </div>

          <div className="flex items-center gap-4 font-bold text-md dark:text-white">
            <button className={`bg-green-btn w-full h-[41px] rounded-lg`}>
              Yes
            </button>
            {/* <button className={`bg-red-btn w-full h-[41px] rounded-lg`}>
              No
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloseMargin;
