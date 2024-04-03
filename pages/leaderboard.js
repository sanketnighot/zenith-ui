import React from "react"
import Head from "next/head"

const leaderboardData = [
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "LONG",
    totalPnL: "+20%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "SHORT",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "SHORT",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "LONG",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "LONG",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "LONG",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "LONG",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "SHORT",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "LONG",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "SHORT",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "LONG",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "SHORT",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "LONG",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "SHORT",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "SHORT",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "SHORT",
    totalPnL: "-40%",
  },
  {
    walletAddress: "tz2VENvydo3B3rSxxHHmbnXsG79PdGrwjTYk",
    position: "LONG",
    totalPnL: "-40%",
  },
]

function leaderboard() {
  return (
    <div className="text-[16px] p-8 flex flex-col gap-8">
      <Head>
        <title>Zenith | Leaderboard</title>
      </Head>
      <div>
        <input
          className="w-full dark:text-black dark:placeholder:text-black dark:bg-extra-lite-purple/60 focus:outline-none text-lg h-16 bg-purple-card rounded-xl px-10 text-white"
          placeholder="Search..."
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="relative z-[1] mt-4 rounded-xl bg-purple-card  dark:bg-lite-sidebar-bg/40 border-8 dark:border-lite-sidebar-bg/10 border-purple-card  text-white dark:text-black">
        <h2 className="sticky top-0 z-10 font-bold text-xl px-8 py-4 dark:bg-[#dec3ff] bg-purple-card">
          All Traders
        </h2>
        <div className="overflow-y-auto block max-h-[600px]">
          <table className="w-full ">
            <thead className="sticky top-0 bg-[#774bb1] dark:bg-lite-sidebar-bg">
              <tr className="align-top">
                <th className="py-5 min-w-[70px]">Sr. No.</th>
                <th className="py-5 min-w-[180px]">Wallet Address</th>
                {/* <th className="py-5 min-w-[110px]">Position</th> */}
                <th className="py-5 min-w-[110px]">Total PnL</th>
              </tr>
            </thead>
            <tbody className="max-h-[450px] overflow-y-auto text-center text-sm ">
              {leaderboardData.map((entry, index) => (
                <tr key={index} className="h-12">
                  <td className="min-w-[70px]">{index + 1}</td>
                  <td className="min-w-[180px]">{entry.walletAddress}</td>
                  {/* <td className="min-w-[110px]">{entry.position}</td> */}
                  <td className="min-w-[110px]">{entry.totalPnL}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-4 dark:bg-lite-sidebar-bg/10 bg-purple-card text-white dark:text-black">
          <div className="flex items-center gap-6">
            <span>«</span>
            <span>‹</span>
          </div>
          <div className="flex items-center gap-6 rotate-180">
            <span>«</span>
            <span>‹</span>
          </div>
        </div>
      </div>
      {/* <div className="h-[646px] flex flex-col justify-between bg-purple-card dark:bg-extra-lite-purple/60 rounded-xl">
        <div className="bg-purple-card/60 dark:bg-lite-sidebar-bg dark:text-black p-4 text-white rounded-t-xl">
          <h1 className="font-semibold text-xl">All Traders</h1>
        </div>
        <div className="flex items-center justify-between px-4 bg-purple-card/60 rounded-b-xl text-white dark:bg-lite-sidebar-bg dark:text-black">
          <div className="flex items-center gap-6">
            <span>«</span>
            <span>‹</span>
          </div>
          <div className="flex items-center gap-6 rotate-180">
            <span>«</span>
            <span>‹</span>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default leaderboard
