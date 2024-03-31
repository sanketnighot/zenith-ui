import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import CardBtn from "../utils/CardBtn";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const [showLong, setShowLong] = useState(false);
  const [showShort, setShowShort] = useState(false);
  const pathName = usePathname();
  const [isValidPage, setValidPage] = useState(false);

  useEffect(() => {
    const _page = ["/", "/leaderboard", "/stake", "/trade"].includes(pathName);

    setValidPage(_page);
  }, [pathName]);
  return (
    <div className="w-full h-screen bg-primary-bg dark:bg-white overflow-hidden">
      <div className="flex">
        <Sidebar
          showLong={showLong}
          setShowLong={setShowLong}
          showShort={showShort}
          setShowShort={setShowShort}
        />
        <div className="flex flex-col max-2xl:w-screen 2xl:fixed 2xl:left-[416px] 2xl:right-0">
          <Header />
          <div className={`overflow-x-hidden ${isValidPage ? `max-2xl:pb-4` : `max-2xl:pb-56`} !overflow-y-auto h-[calc(100vh-100px)]`}>
            {children}
          </div>
        </div>
        {!isValidPage && (
          <div className="max-2xl:fixed max-2xl:z-[12] max-2xl:bottom-0 2xl:hidden text-white dark:bg-purple-btn bg-sidebar-bg rounded-t-2xl mt-5 p-10 max-h-[344px] w-full">
            <div className="flex flex-col h-full gap-10">
              <h3 className="font-semibold text-xl text-center">
                By adding Long position, you <br /> can earn 350.54 % APR.
              </h3>
              <div className="flex items-center justify-center gap-6">
                <CardBtn
                  onClick={() => setShowLong(!showLong)}
                  title={"Long"}
                  color={"bg-green-btn"}
                />
                <CardBtn
                  onClick={() => setShowShort(!showShort)}
                  title={"Short"}
                  color={"bg-red-btn"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Layout;
