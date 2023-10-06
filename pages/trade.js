import ApexChart from "@/components/Chart/Chart";
import CardBtn from "@/components/utils/CardBtn";
import TitlePrice from "@/components/utils/TitlePrice";

export default function Home() {
  return (
    <div className="p-8">
      <div className="flex gap-4 text-white  font-semibold">
        <img
          className="w-[60px] h-[60px]"
          src={`/assets/bitcoin.png`}
          alt="bitcoin"
        />
        <div>
          <h2 className="text-2xl">BTC-PREP</h2>
          <p className="text-xl">Bitcoin</p>
        </div>
      </div>

      <div className="h-[128px] w-full bg-purple-card mt-9 rounded-[19px] px-[72px] py-9 flex items-center justify-between">
        <TitlePrice />
        <TitlePrice
          title="Index price"
          price="2.52 kUSD"
          subtitleColor="text-white"
        />
        <TitlePrice
          title="Next funding"
          price="16:02"
          subtitleColor="text-white"
        />
        <TitlePrice
          title="Long funding rate"
          price="0.0056%"
          subtitleColor="text-green-btn"
        />
        <TitlePrice
          title="Short funding rate"
          price="-0.0056%"
          subtitleColor="text-red-btn"
        />
        <TitlePrice
          title="Ecpected long/Short Rate"
          price="10.0056%/"
          dualColor="-0.0056%"
          subtitleColor="text-red-btn"
        />
      </div>

      <div className="h-[387px] mt-4 w-full rounded-[34px] bg-black-card">
        <ApexChart />
      </div>
      <div className="flex gap-4">
        <div className="h-[387px] mt-4 min-w-[569px] max-w-[569px] rounded-[34px] bg-purple-card  text-white py-10 px-[74px] flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">Position Health</h2>
            <div className="bg-[#096340] h-5 border-2 border-green-btn rounded-l-full rounded-r-full flex items-center px-1">
              <div className="bg-green-btn w-[40%] h-2.5 rounded-l-full rounded-r-full"></div>
            </div>
          </div>
          <div className=" font-semibold text-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3>Margin</h3>
              <p>98.01 kUSD</p>
            </div>
            <div className="flex items-center justify-between">
              <h3>Margin Ratio</h3>
              <p>0.001</p>
            </div>
            <div className="flex items-center justify-between">
              <h3>Liquidation Price</h3>
              <p>98.01 kUSD</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CardBtn title={"+ADD"} color={"bg-green-btn"} />
            <CardBtn title={"-REDUCE"} color={"bg-red-btn"} />
          </div>
        </div>
        <div className="h-[387px] mt-4 w-full rounded-[34px] bg-purple-card  text-white py-10 px-[74px] flex flex-col gap-12">
          <h2 className="font-bold text-xl">Position Status</h2>
          <div className="flex w-full justify-between">
            <div className="flex flex-col h-full justify-between">
              <button className="w-[169px] h-[36px] border border-white bg-lite-black-btn rounded-[18px]  text-white font-semibold text-lg">
                Long Position
              </button>
              <button className="w-[169px] h-[36px] border border-white bg-lite-black-btn rounded-[18px]  text-white font-semibold text-sm">
                CLOSE POSITION
              </button>
            </div>
            <div className=" font-semibold text-sm flex flex-col gap-4 w-[360px]">
              <div className="flex items-center justify-between">
                <h3>Margin</h3>
                <p>98.01 kUSD</p>
              </div>
              <div className="flex items-center justify-between">
                <h3>Margin Ratio</h3>
                <p>0.001</p>
              </div>
              <div className="flex items-center justify-between">
                <h3>Margin Ratio</h3>
                <p>0.001</p>
              </div>
              <div className="flex items-center justify-between">
                <h3>Margin Ratio</h3>
                <p>0.001</p>
              </div>
              <div className="flex items-center justify-between">
                <h3>Liquidation Price</h3>
                <p>98.01 kUSD</p>
              </div>
              <div className="flex items-center justify-end gap-3">
                <CardBtn title={"+INCREASE"} color={"bg-green-btn"} />
                <CardBtn title={"-DECREASE"} color={"bg-red-btn"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[428px] mt-4 w-full rounded-[34px] bg-sidebar-bg py-9 text-white">
        <h2 className="font-bold text-xl mb-5 px-[72px] ">Position Health</h2>
        <table className="w-full">
          <thead className="font-semibold text-sm">
            <tr className="h-16 border-t border-b border-white">
              <th>TIME</th>
              <th>DIRECTION</th>
              <th>SYMBOL</th>
              <th>
                COLLATERAL
                <span className="ml-2 px-1.5 h-[17px] rounded-md text-xs bg-lite-purple-btn">
                  USDC
                </span>
              </th>
              <th>
                POSITION SIZE{" "}
                <span className="ml-2 px-1.5 h-[17px] rounded-md text-xs bg-lite-purple-btn">
                  XTZ
                </span>
              </th>
              <th>
                REALIZED PNL{" "}
                <span className="ml-2 px-1.5 h-[17px] rounded-md text-xs bg-lite-purple-btn">
                  XTZ
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="text-center text-sm">
            <tr className="h-12">
              <td>02:00:05</td>
              <td>LONG</td>
              <td>XTZ</td>
              <td>1.60 kUSD</td>
              <td>1 XTZ</td>
              <td>+0.20 kUSD</td>
            </tr>
            <tr className="h-12">
              <td>02:00:05</td>
              <td>LONG</td>
              <td>XTZ</td>
              <td>1.60 kUSD</td>
              <td>1 XTZ</td>
              <td>+0.20 kUSD</td>
            </tr>
            <tr className="h-12">
              <td>02:00:05</td>
              <td>LONG</td>
              <td>XTZ</td>
              <td>1.60 kUSD</td>
              <td>1 XTZ</td>
              <td>+0.20 kUSD</td>
            </tr>
            <tr className="h-12">
              <td>02:00:05</td>
              <td>LONG</td>
              <td>XTZ</td>
              <td>1.60 kUSD</td>
              <td>1 XTZ</td>
              <td>+0.20 kUSD</td>
            </tr>
            <tr className="h-12">
              <td>02:00:05</td>
              <td>LONG</td>
              <td>XTZ</td>
              <td>1.60 kUSD</td>
              <td>1 XTZ</td>
              <td>+0.20 kUSD</td>
            </tr>
            <tr className="h-12">
              <td>02:00:05</td>
              <td>LONG</td>
              <td>XTZ</td>
              <td>1.60 kUSD</td>
              <td>1 XTZ</td>
              <td>+0.20 kUSD</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
