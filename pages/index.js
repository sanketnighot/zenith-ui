import Container from "@/components/Index/Container";
import IndexBtn from "@/components/Index/IndexBtn";
import StepsCard from "@/components/Index/StepsCard";
import Link from "next/link";
import React from "react";
import ReactTyped from "../components/react-typed";
import Head from 'next/head'

function index() {
  return (
    <div className="bg-index-bg relative font-inter text-white overflow-x-hidden">
      <Head>
        <title>Zenith</title>
      </Head>
      <img className="absolute top-0 left-0" src="/assets/hero-tl.png" alt="" />
      <header className="relative mx-auto max-xl:w-full max-xl:px-5 xl:w-[1180px] flex items-center justify-between pt-5 h-20 ">
        <h1 className="ml-[1 58px] font-extrabold text-4xl">ZENITH</h1>
        <ul className="font-semibold text-sm flex items-center gap-8 max-md:hidden">
          <Link href={"https://payperfi.com"}>
            <li>Home</li>
          </Link>
          <Link href={"/xtz-usdt"}>
            <li>Trade</li>
          </Link>
          <Link href={"/#"}>
            <li>Staking</li>
          </Link>
          <Link href={"https://docs.payperfi.com"}>
            <li>Docs</li>
          </Link>
          <Link href={"mailto:support@payeperfi.com"}>
            <li>Support</li>
          </Link>
        </ul>
        <button className="w-[152px] font-extrabold h-[40px] rounded-[10px] bg-gradient-to-tr from-[#933FFE] to-[#042CCB]">
          Whitelist Now
        </button>
      </header>
      {/* hero */}
      <div className="relative">
        <Container>
          <div className="lg:h-[711px] flex items-center max-lg:flex-col-reverse gap-10 lg:justify-between">
            <div className="lg:w-[780px] flex flex-col gap-9">
              <h2 className="font-black max-sm:text-[50px] text-[65px]">
                We make{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF00F8] to-[#0055FE]">
                  <ReactTyped
                    showCursor={false}
                    loop
                    strings={["#defi", "#derivatives", "#trading"]}
                    typeSpeed={120}
                    backSpeed={50}
                  />
                  {/*<Typist></Typist> */}
                </span>
                <br /> clear and simple
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-index-hero-p">
                  Your first perpetual derivaties platform using Virtual Market
                  Maker (VMM) <br /> on Tezos by Payper Finance
                </p>
                <Link href="/xtz-usdt"><IndexBtn title={"Trade Now"} /></Link>
              </div>
            </div>
            <div className="relative flex flex-col items-center">
              <img
                className="absolute max-lg:hidden lg:-top-28 "
                src="/assets/star.png"
                alt="star"
              />
              <img
                className="max-lg:mt-10"
                src="/assets/zenith-hero.png"
                alt="zenith-hero"
              />
            </div>
          </div>
        </Container>
        <img
          className="absolute top-0 right-0"
          src="/assets/hero-tr.png"
          alt=""
        />
      </div>
      {/* steps */}
      <div className="flex flex-col gap-[111px] relative">
        {/* <div className="lg:w-[780px] max-lg:mt-20 relative z-10 mx-auto text-center">
          <h2 className="font-black text-[50px]">
            STEPS TO GET <span className="text-[#DF01F9]">WHITELISTED</span>{" "}
            <br /> ON TESTNET
          </h2>
          <p className="text-index-hero-p">
            Only first 100 users will get whitelisted for phase-1
          </p>
        </div> */}
        <div className="relative z-10">
          <Container>
            <div className="flex flex-col gap-[111px]">
              <div className="flex items-center gap-5 max-lg:flex-wrap lg:justify-between">
                <StepsCard
                  img={"connectivity.png"}
                  step={"Futures"}
                  subDescTop="Trade Perpetual future In XTZ,BTC,ETH without worrying about liquidity"
                  subDescBottom="Connect you wallet"
                />
                <StepsCard
                  img={"camera.png"}
                  step={"VMM"}
                  subDescTop="A VMM model has higher capital efficiency and is most suitable for under-collateralized derivative products as compared to the AMM model."
                  subDescBottom="Discord id,telegram id"
                />
                <StepsCard
                  img={"wallet.png"}
                  step={"Staking"}
                  subDescTop="Stake our Token and earn constant APY irrespective of market volatality,alsoearn bonus tokens for staking certain period of time."
                  subDescBottom="join our discord and telegram
            to know next announcement"
                />
              </div>

              {/* <div className="flex flex-col gap-9">
                <h2 className="font-black text-[50px]">
                  Benifits and rewards for joining
                  <span className="text-[#DF01F9]">Whitelist</span> <br />
                </h2>
                <ol className="text-index-hero-p list-decimal ml-6 text-[33px]">
                  <li>Successful whitelisted will get 10 ZNTH Token.</li>
                  <li>Taking a trade you can earn 2 ZNTH Token.</li>
                  <li>
                    At end of each day top 5 profitable traders get 50 ZNTH
                    token.
                  </li>
                  <li>If position gets liquidated you get 1 ZNTH Token.</li>
                  <li>
                    Reporting bug to the team you can earn 50 to 1000 ZNTH
                    tokens.
                  </li>
                </ol>
              </div> */}
            </div>
          </Container>
        </div>
        <img
          className="absolute z-[9] top-[55%] left-20"
          src="/assets/star-sm.png"
          alt=""
        />
        <img
          className="absolute z-[9] left-24 top-[60%]"
          src="/assets/star.png"
          alt=""
        />
        <img
          className="absolute top-0 right-0"
          src="/assets/ring.png"
          alt="ring"
        />
      </div>
      {/* get started */}
      <div className="h-[562px] flex items-center justify-center ">
        <div className="w-full max-lg:px-5 lg:w-[1000px] mx-auto flex flex-col items-center justify-center gap-8">
          <div className="text-center z-[1]">
            <h2 className="font-black max-md:mx-auto  max-md:w-10/12 max-md:text-4xl md:text-[50px]">
              Trade and grow your crypto with{" "}
              <span className="text-transparent w-full bg-clip-text bg-gradient-to-r from-[#DF00F8] to-[#0055FE]">
                Zenith
              </span>
              , <br /> the platform dedicated to every trader at every
              level.
            </h2>
            <p className="text-index-hero-p w-full">
              Start trading perpetual futures using VMM on Zenith with as low as
              1 ꜩ
            </p>
          </div>
          <Link href="/xtz-usdt"><IndexBtn title={"Get Started"} /></Link>
        </div>
      </div>
      {/* trading */}
      <div className="relative max-lg:my-20">
        <div className="relative z-10 ">
          <Container>
            <div className="flex lg:h-[546px] items-center gap-5 max-lg:flex-col lg:justify-between max-lg:mb-16">
              <img src="/assets/server.png" alt="" />
              <div className="md:w-[580px] flex flex-col gap-8 max-lg:items-center lg:items-start">
                <div className="max-lg:text-center">
                  <p className="font-black text-[50px]">
                    Completely decentralized on-chain trading platform
                  </p>
                  <p className="text-index-hero-p">
                    This will provide higher leverage and a less manipulative
                    market and slippage.
                  </p>
                </div>
                <Link href="/xtz-usdt"><button className="w-[156px] h-[56px] rounded-md border max-lg:text-center border-white">
                  Get Started
                </button></Link>
              </div>
            </div>
          </Container>
        </div>
        <img
          className="absolute z-[9] top-0 left-0 rotate-180"
          src="/assets/ring.png"
          alt="ring"
        />
        <img
          className="absolute z-[9] bottom-40 left-28"
          src="/assets/star-sm.png"
          alt=""
        />
        <img
          className="absolute z-[9] bottom-16 left-32"
          src="/assets/star.png"
          alt=""
        />
        <img
          className="absolute z-[9] top-0 left-0"
          src="/assets/trading-shape.png"
          alt=""
        />
        <img
          className="absolute z-[9] top-0 right-0"
          src="/assets/paste-shape.png"
          alt=""
        />
      </div>
      {/* buy and sell */}
      <div className="lg:h-[984px] max-lg:py-10 relative">
        <div className="relative z-10 ">
          <div className="lg:w-[780px] mx-auto flex flex-col items-center justify-center gap-8 mb-14">
            <div className="text-center">
              <h2 className="font-black text-[50px]">
                Buy and sell with the lowest fees in the industry
              </h2>
              <p className="text-index-hero-p">
                New users can start trading with as less as 1 ꜩ using stable
                coins, without being exposed to volatility in the market.
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-[#B982FF] font-semibold">Learn More</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9091 7L18 12M18 12L12.9091 17M18 12L6 12"
                  stroke="#B982FF"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </svg>
            </div>
          </div>
          <Container>
            <div className="xl:w-[1180px] max-xl:w-full h-[304px] bg-index-card rounded-[25px] py-5 px-8 overflow-hidden">
              <hr className="border-[#2B2C3B] mb-4" />
              <hr className="border-[#2B2C3B]" />
              <div className="flex flex-col gap-8 w-full overflow-x-scroll xl:overflow-x-hidden">
                {/* --- XTZ --- */}
                <div className="font-bold text-xl w-[1116px] flex items-center max-xl:justify-between xl:justify-center gap-4">
                  <div className="min-w-[207px]">Tezos</div>
                  <div className="min-w-[91px] text-[#B982FF]">XTZ</div>
                  <div className="min-w-[211px] text-right">$1.88</div>
                  <div className="min-w-[100px] text-[#0DBB7C]">+3.43%</div>
                  <div className="min-w-[213px]">
                    <img src="/assets/line.png" alt="" />
                  </div>
                  <Link href="/xtz-usdt"><div className="min-w-[134px] flex items-center gap-1">
                    Trade Now
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.9091 7L18 12M18 12L12.9091 17M18 12L6 12"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="square"
                      />
                    </svg>
                  </div></Link>
                </div>
                {/* --- ETH --- */}
                <div className="font-bold text-xl w-[1116px] flex items-center max-xl:justify-between xl:justify-center gap-4">
                  <div className="min-w-[207px]">Ethereum</div>
                  <div className="min-w-[91px] text-[#B982FF]">ETH</div>
                  <div className="min-w-[211px] text-right">$1.88</div>
                  <div className="min-w-[100px] text-[#0DBB7C]">+3.43%</div>
                  <div className="min-w-[213px]">
                    <img src="/assets/line.png" alt="" />
                  </div>
                  <Link href="/eth-usdt"><div className="min-w-[134px] flex items-center gap-1">
                    Trade Now
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.9091 7L18 12M18 12L12.9091 17M18 12L6 12"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="square"
                      />
                    </svg>
                  </div></Link>
                </div>
                {/* --- BTC --- */}
                <div className="font-bold text-xl w-[1116px] flex items-center max-xl:justify-between xl:justify-center gap-4">
                  <div className="min-w-[207px]">Bitcoin</div>
                  <div className="min-w-[91px] text-[#B982FF]">BTC</div>
                  <div className="min-w-[211px] text-right">$1.88</div>
                  <div className="min-w-[100px] text-[#0DBB7C]">+3.43%</div>
                  <div className="min-w-[213px]">
                    <img src="/assets/line.png" alt="" />
                  </div>
                  <Link href="/btc-usdt"><div className="min-w-[134px] flex items-center gap-1">
                    Trade Now
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.9091 7L18 12M18 12L12.9091 17M18 12L6 12"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="square"
                      />
                    </svg>
                  </div></Link>
                </div>
              </div>
              <hr className="border-[#2B2C3B] mb-4" />
              <hr className="border-[#2B2C3B]" />
            </div>
          </Container>
        </div>
        <img
          className="absolute z-[9] top-0 right-0"
          src="/assets/full-shape.png"
          alt=""
        />
      </div>
      {/* crypto */}
      <Container>
        <div className="flex items-center max-xl:flex-col-reverse xl:justify-between">
          <div className="flex flex-col gap-4 max-xl:items-center">
            <h2 className="font-black text-[50px] max-xl:text-center">
              Take your first step into safe, secure crypto derivatives trading
            </h2>
            <Link href="/xtz-usdt"><IndexBtn title={"Get Started"} /></Link>
          </div>
          <img src="/assets/file.png" alt="" />
        </div>
      </Container>
      {/* footer */}
      <div className="h-[802px] relative">
        <div className="absolute z-10 flex flex-col h-full justify-between py-20 w-full">
          <div className="w-full flex flex-col gap-9 items-center justify-center">
            <h2 className="font-semibold text-[50px]">
              Join us here for latest updates
            </h2>
            <h6 className="text-[#898ca9]">
              To keep up to date, join our Discord server
            </h6>
            <Link href="https://discord.gg/AXjvbngY8P" target="_blank"><button className="font-semibold text-2xl text-[#565976] px-4 py-3.5 rounded-lg border border-purple-btn">
              JOIN DISCORD
            </button></Link>
          </div>
          <div className="flex items-center justify-between px-16">
            <div className="flex items-center gap-4">
              <img
                className="max-lg:mt-10"
                src="/assets/zenith-logo.png"
                alt="zenith-logo"
              />
              <h1 className="font-extrabold text-4xl">ZENITH</h1>
            </div>
            <ul className="flex items-center gap-1 border px-2 py-3 border-purple-btn rounded-lg">
              <li>
                <a
                  href="https://discord.gg/AXjvbngY8P"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="w-11" src="/assets/social/discord.png" />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.payperfi.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="w-11 rounded-lg" src="/assets/social/gitbook.png" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/PayperFinance"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="w-11" src="/assets/social/twitter.png" />
                </a>
              </li>
              <li>
                <a
                  href=" https://t.me/Payper_Finance"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="w-11" src="/assets/social/telegram.png" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/payper-finance/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="w-11" src="/assets/social/linkdn.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <svg
          className="w-full absolute left-0 right-0 bottom-0 z-[9]"
          viewBox="0 0 1440 802"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M139.829 937.989C148.515 972.292 172.823 1000.95 209.426 1023.4C246.031 1045.84 294.905 1062.05 352.645 1071.45C468.125 1090.24 618.974 1081.76 777.81 1041.54C936.646 1001.31 1073.35 936.973 1165.97 865.486C1212.28 829.741 1247.55 792.225 1269.06 755.062C1290.56 717.903 1298.3 681.127 1289.62 646.825C1280.93 612.522 1256.62 583.861 1220.02 561.417C1183.41 538.972 1134.54 522.763 1076.8 513.368C961.319 494.577 810.47 503.055 651.634 543.278C492.798 583.5 356.095 647.84 263.477 719.328C217.168 755.072 181.899 792.589 160.388 829.751C138.88 866.911 131.142 903.686 139.829 937.989Z"
            stroke="url(#paint0_linear_2_1250)"
          />
          <path
            d="M-120.778 1003.98C-108.138 1053.9 -72.7719 1095.58 -19.5567 1128.21C33.6611 1160.84 104.702 1184.4 188.613 1198.05C356.434 1225.36 575.639 1213.04 806.44 1154.59C1037.24 1096.15 1235.89 1002.65 1370.49 898.764C1437.79 846.819 1489.05 792.289 1520.33 738.261C1551.6 684.236 1562.86 630.743 1550.22 580.83C1537.58 530.917 1502.22 489.232 1449 456.602C1395.78 423.97 1324.74 400.412 1240.83 386.759C1073.01 359.452 853.805 371.773 623.004 430.22C392.204 488.666 193.554 582.159 58.9561 686.049C-8.34334 737.995 -59.6098 792.524 -90.8824 846.552C-122.153 900.577 -133.417 954.071 -120.778 1003.98Z"
            stroke="url(#paint1_linear_2_1250)"
          />
          <path
            d="M-437.887 1084.29C-420.438 1153.19 -371.616 1210.73 -298.186 1255.75C-224.754 1300.78 -126.74 1333.28 -10.9833 1352.11C220.528 1389.79 522.909 1372.79 841.277 1292.16C1159.65 1211.54 1433.67 1082.58 1619.35 939.259C1712.19 867.6 1782.92 792.368 1826.08 717.818C1869.23 643.271 1884.78 569.435 1867.33 500.528C1849.88 431.62 1801.06 374.087 1727.63 329.061C1654.2 284.034 1556.18 251.535 1440.43 232.699C1208.92 195.029 906.535 212.028 588.167 292.65C269.799 373.271 -4.22913 502.238 -189.908 645.555C-282.748 717.214 -353.481 792.446 -396.632 866.996C-439.782 941.543 -455.337 1015.38 -437.887 1084.29Z"
            stroke="url(#paint2_linear_2_1250)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_1250"
              x1="1249.8"
              y1="626.959"
              x2="253.739"
              y2="1040.19"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#484848" />
              <stop
                offset="0.491388"
                stop-color="#484848"
                stop-opacity="0.36"
              />
              <stop offset="1" stop-color="#484848" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2_1250"
              x1="1492.15"
              y1="552.022"
              x2="44.9454"
              y2="1152.42"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#484848" />
              <stop
                offset="0.491388"
                stop-color="#484848"
                stop-opacity="0.36"
              />
              <stop offset="1" stop-color="#484848" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2_1250"
              x1="1787.05"
              y1="460.839"
              x2="-209.117"
              y2="1288.98"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#484848" />
              <stop
                offset="0.491388"
                stop-color="#484848"
                stop-opacity="0.36"
              />
              <stop offset="1" stop-color="#484848" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default index;
