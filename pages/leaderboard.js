import React from "react";
import Head from 'next/head'

function leaderboard() {
  return (
    <div className="p-8 flex flex-col gap-8">
      <Head>
        <title>Zenith | Leaderboard</title>
      </Head>
      <div>
        <input className="w-full dark:text-black dark:placeholder:text-black dark:bg-extra-lite-purple/60 focus:outline-none text-lg h-16 bg-purple-card rounded-xl px-10 text-white" placeholder="Search..." type="text" name="" id="" />
      </div>
      <div className="h-[646px] flex flex-col justify-between bg-purple-card dark:bg-extra-lite-purple/60 rounded-xl">
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
      </div>
    </div>
  );
}

export default leaderboard;
