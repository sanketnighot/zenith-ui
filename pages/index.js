import Link from "next/link";
import React from "react";
import Head from "next/head";

/* App Components */
import Container from "@/components/Index/Container";
import IndexBtn from "@/components/Index/IndexBtn";
import StepsCard from "@/components/Index/StepsCard";
import ReactTyped from "../components/react-typed";


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
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/xtz-usdt"}>
            <li>Trade</li>
          </Link>
          <Link href={"/stake"}>
            <li>Staking</li>
          </Link>
          <Link href={"https://docs.payperfi.com"}>
            <li>Docs</li>
          </Link>
          <Link href={"mailto:support@payeperfi.com"}>
            <li>Support</li>
          </Link>
        </ul>
        <Link href={"/xtz-usdt"}>
        <button className="w-[152px] font-extrabold h-[40px] rounded-[10px] bg-gradient-to-tr from-[#933FFE] to-[#042CCB]">
          Trade Now
        </button>
        </Link>
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
                <br /> accessible to all
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-index-hero-p">
                  Your first perpetual derivaties platform using Virtual Market
                  Maker (VMM) <br /> on Tezos by Payper Finance
                </p>
                <Link href="/xtz-usdt">
                  <IndexBtn title={"Trade Now"} />
                </Link>
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
        <div className="relative z-10 mt-20 lg:mt-0">
          <Container>
            <div className="flex flex-col gap-[111px]">
              <div className="flex  gap-5 max-lg:flex-wrap lg:justify-between">
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
              , <br /> the platform dedicated to every trader at every level.
            </h2>
            <p className="text-index-hero-p w-full">
              Start trading perpetual futures using VMM on Zenith with as low as
              1 ꜩ
            </p>
          </div>
          <Link href="/xtz-usdt">
            <IndexBtn title={"Get Started"} />
          </Link>
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
                <Link href="/xtz-usdt">
                  <button className="w-[156px] h-[56px] rounded-md border max-lg:text-center border-white">
                    Get Started
                  </button>
                </Link>
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
            <div className="text-center px-2">
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
                  strokeWidth="2"
                  strokeLinecap="square"
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
                  <Link href="/xtz-usdt">
                    <div className="min-w-[134px] flex items-center gap-1">
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
                          strokeWidth="2"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                  </Link>
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
                  <Link href="/eth-usdt">
                    <div className="min-w-[134px] flex items-center gap-1">
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
                          strokeWidth="2"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                  </Link>
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
                  <Link href="/btc-usdt">
                    <div className="min-w-[134px] flex items-center gap-1">
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
                          strokeWidth="2"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                  </Link>
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
            <Link href="/xtz-usdt">
              <IndexBtn title={"Get Started"} />
            </Link>
          </div>
          <img src="/assets/file.png" alt="" />
        </div>
      </Container>
      {/* footer */}
      <div className="h-[802px] relative">
        <div className="absolute z-10 flex flex-col h-full justify-between py-20 w-full">
          <div className="w-full flex flex-col gap-9 items-center justify-center px-2">
            <h2 className="font-semibold text-[50px] text-center">
              Join us here for latest updates
            </h2>
            <h6 className="text-[#898ca9] text-center">
              To keep up to date, join our Discord server
            </h6>
            <Link
              href="https://discord.gg/AXjvbngY8P"
              target="_blank"
              className="font-semibold text-2xl text-[#565976] px-4 py-3.5 rounded-lg border border-purple-btn transition-all duration-300 hover:bg-purple-btn  hover:text-white"
            >
              JOIN DISCORD
            </Link>
          </div>

          <div className="flex-col flex gap-y-6 items-center justify-between px-16 md:flex-row">
            <div className="flex items-center gap-4">
              <img
                className="shrink-0"
                src="/assets/zenith-logo.png"
                alt="zenith-logo"
              />
              <h1 className="font-extrabold text-4xl">ZENITH</h1>
            </div>
            <ul className="flex items-center gap-2 ounded-lg">
              <li>
                <Link
                  href="https://discord.gg/AXjvbngY8P"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300  bg-[rgba(10,10,10,0.01)] border-purple-btn border-2 inline-block p-2 rounded-lg hover:bg-purple-btn hover:border-transparent"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="fill-white"
                  >
                    <path d="M18.9225 5.26675C17.6558 4.67625 16.2844 4.24767 14.8557 4.00004C14.8432 3.99964 14.8308 4.00199 14.8192 4.00693C14.8077 4.01187 14.7974 4.01927 14.7891 4.02862C14.6176 4.34291 14.4176 4.75245 14.2843 5.06674C12.769 4.83816 11.228 4.83816 9.71275 5.06674C9.57941 4.74292 9.37941 4.34291 9.19845 4.02862C9.18893 4.00957 9.16035 4.00004 9.13178 4.00004C7.70317 4.24767 6.34123 4.67625 5.065 5.26675C5.05548 5.26675 5.04595 5.27627 5.03643 5.28579C2.44588 9.16209 1.73158 12.9336 2.08397 16.6671C2.08397 16.6861 2.09349 16.7052 2.11254 16.7147C3.82687 17.9719 5.47454 18.7338 7.10315 19.2386C7.13173 19.2481 7.1603 19.2386 7.16982 19.2195C7.55078 18.6957 7.89365 18.1433 8.1889 17.5623C8.20795 17.5242 8.1889 17.4861 8.1508 17.4766C7.60793 17.2671 7.09363 17.0194 6.58885 16.7337C6.55076 16.7147 6.55076 16.6575 6.57933 16.629C6.68409 16.5528 6.78886 16.4671 6.89362 16.3909C6.91267 16.3718 6.94124 16.3718 6.96029 16.3813C10.2366 17.8766 13.77 17.8766 17.0082 16.3813C17.0272 16.3718 17.0558 16.3718 17.0749 16.3909C17.1796 16.4766 17.2844 16.5528 17.3891 16.6385C17.4272 16.6671 17.4272 16.7242 17.3796 16.7432C16.8844 17.0385 16.3606 17.2766 15.8177 17.4861C15.7796 17.4957 15.7701 17.5433 15.7796 17.5718C16.0844 18.1528 16.4272 18.7052 16.7987 19.229C16.8272 19.2386 16.8558 19.2481 16.8844 19.2386C18.5225 18.7338 20.1702 17.9719 21.8845 16.7147C21.9036 16.7052 21.9131 16.6861 21.9131 16.6671C22.3321 12.3527 21.2178 8.60969 18.9606 5.28579C18.9511 5.27627 18.9416 5.26675 18.9225 5.26675ZM8.68415 14.3908C7.70317 14.3908 6.8841 13.486 6.8841 12.3717C6.8841 11.2574 7.68412 10.3526 8.68415 10.3526C9.6937 10.3526 10.4937 11.2669 10.4842 12.3717C10.4842 13.486 9.68418 14.3908 8.68415 14.3908ZM15.3224 14.3908C14.3414 14.3908 13.5224 13.486 13.5224 12.3717C13.5224 11.2574 14.3224 10.3526 15.3224 10.3526C16.332 10.3526 17.132 11.2669 17.1225 12.3717C17.1225 13.486 16.332 14.3908 15.3224 14.3908Z" />
                  </svg>

                  {/* <img className="w-11" src="/assets/social/discord.png" /> */}
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.payperfi.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300  bg-[rgba(10,10,10,0.01)] border-purple-btn border-2 inline-block p-2 rounded-lg hover:bg-purple-btn hover:border-transparent"
                >
                  {/* <img
                    className="w-11 rounded-lg"
                    src="/assets/social/gitbook.png"
                  /> */}
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="fill-white "
                  >
                    <path d="M11.0017 16.8085C11.0787 16.8086 11.1548 16.8239 11.2259 16.8535C11.2969 16.883 11.3614 16.9262 11.4157 16.9807C11.4701 17.0352 11.5131 17.0998 11.5425 17.171C11.5718 17.2421 11.5869 17.3183 11.5867 17.3952C11.5866 17.4722 11.5714 17.5483 11.5418 17.6193C11.5123 17.6904 11.469 17.7549 11.4146 17.8092C11.3601 17.8635 11.2954 17.9066 11.2243 17.9359C11.1532 17.9653 11.077 17.9803 11.0001 17.9802C10.8447 17.98 10.6958 17.9181 10.5861 17.808C10.4763 17.698 10.4148 17.5489 10.4151 17.3935C10.4153 17.2382 10.4772 17.0893 10.5872 16.9795C10.6973 16.8698 10.8464 16.8083 11.0017 16.8085ZM20.1885 13.186C20.1116 13.1859 20.0354 13.1707 19.9644 13.1412C19.8933 13.1117 19.8288 13.0685 19.7744 13.0141C19.7201 12.9597 19.6769 12.895 19.6476 12.8239C19.6182 12.7528 19.6031 12.6767 19.6031 12.5997C19.6032 12.5228 19.6184 12.4466 19.6479 12.3756C19.6774 12.3045 19.7206 12.24 19.775 12.1856C19.8294 12.1312 19.8941 12.0881 19.9652 12.0587C20.0363 12.0293 20.1124 12.0142 20.1894 12.0143C20.3448 12.0144 20.4937 12.0762 20.6035 12.1862C20.7133 12.2961 20.7749 12.4452 20.7748 12.6006C20.7747 12.7559 20.7129 12.9049 20.6029 13.0147C20.493 13.1245 20.3439 13.1861 20.1885 13.186ZM20.1885 10.7893C19.7082 10.7897 19.2476 10.9807 18.908 11.3204C18.5683 11.6601 18.3773 12.1206 18.3769 12.601C18.3769 12.7951 18.4094 12.9885 18.4727 13.1768L12.4884 16.3627C12.3225 16.1218 12.1005 15.9248 11.8415 15.7888C11.5825 15.6527 11.2943 15.5817 11.0017 15.5819C10.3109 15.5819 9.68171 15.9777 9.37671 16.5952L4.00079 13.7602C3.43245 13.4618 3.00744 12.5268 3.05244 11.6751C3.07577 11.2309 3.22911 10.8859 3.46328 10.7526C3.61162 10.6693 3.78995 10.6759 3.97996 10.7751L4.01496 10.7943C5.43998 11.5443 10.1017 14.0002 10.2984 14.091C10.6009 14.2318 10.7692 14.2885 11.2859 14.0435L20.9227 9.03175C21.0644 8.97841 21.2294 8.84258 21.2294 8.63674C21.2294 8.35174 20.9344 8.23923 20.9336 8.23923C20.3852 7.97673 19.5427 7.58256 18.721 7.19755C16.9643 6.37504 14.9735 5.44336 14.0993 4.98502C13.3443 4.59001 12.7368 4.92335 12.6284 4.99002L12.4184 5.09418C8.48336 7.04005 3.21661 9.64842 2.91661 9.83093C2.38076 10.1576 2.04826 10.8084 2.00492 11.616C1.93826 12.8968 2.59077 14.2327 3.52495 14.7218L9.21004 17.6536C9.27267 18.0842 9.48814 18.4779 9.81711 18.7628C10.1461 19.0477 10.5666 19.2048 11.0017 19.2052C11.477 19.2044 11.933 19.0172 12.2716 18.6837C12.6103 18.3502 12.8045 17.8971 12.8126 17.4219L19.0744 14.0277C19.391 14.276 19.7852 14.4118 20.1885 14.4118C20.6689 14.4114 21.1295 14.2204 21.4691 13.8807C21.8088 13.5411 21.9998 13.0805 22.0002 12.6001C21.9998 12.1198 21.8088 11.6592 21.4691 11.3196C21.1295 10.9799 20.6689 10.7889 20.1885 10.7884" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/PayperFinance"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300  bg-[rgba(10,10,10,0.01)] border-purple-btn border-2 inline-block p-2 rounded-lg hover:bg-purple-btn hover:border-transparent"
                >
                  {/* <img className="w-11" src="/assets/social/twitter.png" /> */}
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="fill-white "
                  >
                    <path d="M22 6.28583C21.2639 6.62043 20.4704 6.84032 19.6482 6.94548C20.4895 6.43879 21.1396 5.63573 21.4455 4.67015C20.652 5.14816 19.7725 5.48277 18.8451 5.67397C18.0899 4.85179 17.0287 4.37378 15.8241 4.37378C13.5774 4.37378 11.7419 6.20934 11.7419 8.47512C11.7419 8.80017 11.7801 9.11565 11.847 9.41202C8.4436 9.23994 5.413 7.60514 3.39579 5.12904C3.04207 5.73133 2.8413 6.43879 2.8413 7.18449C2.8413 8.60896 3.55832 9.87091 4.6673 10.5879C3.98853 10.5879 3.35755 10.3967 2.80306 10.1099V10.1386C2.80306 12.1271 4.21797 13.7906 6.09178 14.1635C5.49018 14.3281 4.8586 14.351 4.24665 14.2304C4.50632 15.0454 5.01485 15.7585 5.70078 16.2695C6.38671 16.7805 7.21553 17.0637 8.07075 17.0793C6.62106 18.227 4.82409 18.8473 2.97514 18.8384C2.6501 18.8384 2.32505 18.8193 2 18.781C3.81644 19.9474 5.97706 20.6262 8.29063 20.6262C15.8241 20.6262 19.9637 14.3738 19.9637 8.95313C19.9637 8.77149 19.9637 8.5994 19.9541 8.41776C20.7572 7.84414 21.4455 7.11757 22 6.28583Z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/Payper_Finance"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300  bg-[rgba(10,10,10,0.01)] border-purple-btn border-2 inline-block p-2 rounded-lg hover:bg-purple-btn hover:border-transparent"
                >
                  {/* <img className="w-11" src="/assets/social/telegram.png" /> */}
                  <svg
                    className="fill-white "
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.6163 19.919V19.917L18.6345 19.8737L21.6572 4.63385V4.58547C21.6572 4.20548 21.5161 3.87388 21.2117 3.67532C20.9446 3.50094 20.6372 3.48885 20.4215 3.50498C20.2207 3.52314 20.0226 3.5637 19.8309 3.62593C19.7491 3.65229 19.6684 3.68188 19.589 3.71462L19.5759 3.71966L2.72335 10.3306L2.71831 10.3327C2.66708 10.3502 2.61693 10.3707 2.56813 10.3941C2.44828 10.448 2.33329 10.5121 2.22443 10.5856C2.00773 10.7348 1.59549 11.0856 1.66503 11.642C1.72248 12.1036 2.03998 12.3959 2.25467 12.5481C2.38139 12.6369 2.51763 12.7113 2.66086 12.7698L2.69312 12.7839L2.7032 12.787L2.71025 12.79L5.65944 13.7828C5.64936 13.9672 5.6675 14.1557 5.71689 14.3422L7.1935 19.9452C7.27417 20.2507 7.44847 20.5231 7.69194 20.7244C7.93541 20.9257 8.23581 21.0457 8.55095 21.0674C8.86609 21.0892 9.18014 21.0118 9.449 20.8459C9.71786 20.6801 9.92802 20.4342 10.05 20.1428L12.3561 17.6774L16.3162 20.7133L16.3727 20.7375C16.7325 20.8947 17.0681 20.9441 17.3756 20.9028C17.683 20.8604 17.9269 20.7314 18.1103 20.5853C18.3225 20.4133 18.4916 20.1941 18.6042 19.9452L18.6123 19.9281L18.6153 19.9221L18.6163 19.919ZM7.17838 13.9572C7.16203 13.895 7.16592 13.8292 7.18948 13.7694C7.21304 13.7096 7.25505 13.6589 7.30941 13.6245L17.309 7.27462C17.309 7.27462 17.8977 6.9168 17.8765 7.27462C17.8765 7.27462 17.9813 7.33711 17.6658 7.63041C17.3675 7.90961 10.5388 14.5024 9.84737 15.1697C9.80892 15.207 9.78199 15.2546 9.76976 15.3068L8.65499 19.5602L7.17838 13.9572Z"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/payper-finance/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300  bg-[rgba(10,10,10,0.01)] border-purple-btn border-2 inline-block p-2 rounded-lg hover:bg-purple-btn hover:border-transparent"
                >
                  {/* <img className="w-11" src="/assets/social/linkdn.png" /> */}
                  <svg
                    className="fill-white "
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.24474 4.67785C6.24447 5.23278 6.02376 5.76487 5.63116 6.15706C5.23858 6.54925 4.70627 6.76943 4.15135 6.76916C3.59643 6.76887 3.06435 6.54816 2.67215 6.15558C2.27996 5.76299 2.05978 5.23069 2.06006 4.67577C2.06033 4.12085 2.28104 3.58876 2.67363 3.19656C3.06621 2.80438 3.59852 2.5842 4.15345 2.58447C4.70837 2.58475 5.24046 2.80546 5.63264 3.19804C6.02484 3.59063 6.24502 4.12293 6.24474 4.67785ZM6.30751 8.31853H2.12283V21.4166H6.30751V8.31853ZM12.9193 8.31853H8.75555V21.4166H12.8775V14.5433C12.8775 10.7142 17.8676 10.3586 17.8676 14.5433V21.4166H22.0001V13.1204C22.0001 6.66558 14.6141 6.9062 12.8775 10.0761L12.9193 8.31853Z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Background lines */}
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
              <stop stopColor="#484848" />
              <stop offset="0.491388" stopColor="#484848" stopOpacity="0.36" />
              <stop offset="1" stopColor="#484848" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2_1250"
              x1="1492.15"
              y1="552.022"
              x2="44.9454"
              y2="1152.42"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#484848" />
              <stop offset="0.491388" stopColor="#484848" stopOpacity="0.36" />
              <stop offset="1" stopColor="#484848" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2_1250"
              x1="1787.05"
              y1="460.839"
              x2="-209.117"
              y2="1288.98"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#484848" />
              <stop offset="0.491388" stopColor="#484848" stopOpacity="0.36" />
              <stop offset="1" stopColor="#484848" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default index;
