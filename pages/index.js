import { useEffect } from "react";
import HeaderSection from "../components/header-section";

const CryptotrackerBot = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="relative [background:linear-gradient(89.62deg,_#009e9e,_#000)] w-full h-[5253px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-left text-11xl text-white font-inconsolata md:h-[7000px]">
      <div className="my-0 mx-[!important] absolute top-[5185px] left-[10px] rounded-[5px] flex flex-row items-center justify-start gap-[7px] z-[0] text-center text-[14px] font-inika lg:pb-0 lg:box-border md:pt-[1770px] md:box-border">
        <img
          className="relative rounded-[40px] w-5 h-5 object-cover"
          alt=""
          src="/circled-c@2x.png"
        />
        <div className="relative">Copy Right</div>
      </div>
      <div
        className="my-0 mx-[!important] absolute top-[181px] left-[0px] w-[1071px] flex flex-row items-start justify-end gap-[556px] [&.animate]:animate-[1s_linear_0s_1_normal_none_bounce-in-top] opacity-[1] z-[1] lg:w-[800px] lg:gap-[300px] md:w-[500px] md:pr-5 md:box-border"
        data-animate-on-scroll
      >
        <div className="relative w-[54px] h-[17px] overflow-hidden shrink-0" />
        <div className="relative font-black inline-block w-[428px] h-[41px] shrink-0 md:text-xl">
          Welcome to CryptoTrackerBot
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[222px] left-[0px] w-[1107px] flex flex-row items-start justify-end gap-[563px] z-[2] text-xl font-im-fell-english lg:w-[830px] md:w-[530px] md:pr-5 md:box-border">
        <div className="relative w-[23px] h-6 overflow-hidden shrink-0" />
        <div className="relative inline-block w-[462px] h-12 shrink-0 md:text-mini">
          Your Gateway to Real-Time Cryptocurrency Insights
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[317px] left-[2px] w-[993px] flex flex-row items-center justify-end gap-[662px] z-[3] lg:w-[750px] md:w-[400px] md:pr-10 md:box-border">
        <div className="relative w-[17px] h-[38px] overflow-hidden shrink-0" />
        <img
          className="w-[370px] h-[303px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-372@2x.png"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[734px] left-[0px] w-[1125px] flex flex-row items-center justify-end gap-[530px] z-[4] text-center text-xl lg:w-[850px] md:w-[400px] md:pr-[15px] md:box-border">
        <div className="relative w-[23px] h-[21px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[566px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_none_tilt-in-top-1] opacity-[1] md:text-mid md:w-[350px]"
          data-animate-on-scroll
        >
          CryptoTrackerBot is your go-to solution for staying on top of the
          dynamic world of cryptocurrencies. Our intelligent Telegram bot,
          backed by cutting-edge AI algorithms, delivers real-time price
          updates, personalized notifications, and market insights directly to
          your fingertips.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1000px] left-[0px] w-[1054px] flex flex-row items-center justify-end gap-[610px] z-[5] lg:w-[750px] md:w-[420px] md:pr-2.5 md:box-border">
        <div className="relative w-[23px] h-11 overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[390px] h-[261px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-375@2x.png"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[1343px] left-[2px] w-[948px] flex flex-row items-end justify-end gap-[741px] z-[6] lg:w-[900px] lg:gap-[300px] lg:items-end lg:justify-center md:w-[300px] md:flex-col md:gap-[0px] md:items-end md:justify-start sm:w-[300px]">
        <div className="relative w-px h-4 overflow-hidden shrink-0" />
        <div className="relative font-black">Key Features</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1464px] left-[0px] w-[1722px] flex flex-row items-start justify-center gap-[256px] z-[7] text-lg lg:w-[1200px] md:flex-col md:gap-[122px] md:pl-5 md:box-border">
        <div className="relative w-[390px] h-[450px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(9,_152,_152,_0.99),_#100e0e)] shadow-[0px_0px_0px_5px_#000] w-[390px] h-[164px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[13px] left-[65px] rounded-3xs bg-gray-100 shadow-[0px_0px_0px_1px_#a1ff08] w-60 h-[38px] overflow-hidden">
              <div className="absolute top-[9px] left-[12px] font-black inline-block w-[216px]">
                Real-Time Price Updaste
              </div>
            </div>
            <div className="absolute top-[68px] left-[4px] text-base font-medium text-center inline-block w-[381px] h-[84px]">
              Stay informed with minute-by-minute cryptocurrency price updates.
              Whether you're tracking Bitcoin, Ethereum, or any other digital
              asset, CryptoTrackerBot ensures you have the latest data at your
              disposal.
            </div>
          </div>
          <div
            className="absolute top-[286px] left-[0px] rounded-xl [background:radial-gradient(50%_50%_at_50%_50%,_#0c9e91,_#100e0e)] shadow-[0px_0px_0px_5px_#000] w-[390px] h-[164px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[14px] left-[71px] rounded-3xs bg-gray-100 shadow-[0px_0px_0px_1px_#ff80fa] w-[247px] h-[38px] overflow-hidden">
              <div className="absolute top-[9px] left-[7px] font-black inline-block w-[234px]">
                Personalized Notifications
              </div>
            </div>
            <div className="absolute top-[68px] left-[24px] text-base font-medium text-center inline-block w-[341px] h-[84px]">
              Set custom price alerts for your favorite cryptocurrencies.
              Receive instant notifications on Telegram when prices hit your
              specified thresholds, keeping you ahead of the market.
            </div>
          </div>
        </div>
        <div className="relative w-[390px] h-[450px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:radial-gradient(50%_50%_at_50%_50%,_#0c9e91,_#100e0e)] shadow-[0px_0px_0px_5px_#000] w-[390px] h-[164px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[13px] left-[65px] rounded-3xs bg-gray-100 shadow-[0px_0px_0px_1px_#01ffff] w-60 h-[38px] overflow-hidden">
              <div className="absolute top-[9px] left-[17px] font-black inline-block w-[205px]">
                User-Friendly Commands
              </div>
            </div>
            <div className="absolute top-[68px] left-[24px] text-base font-medium text-center inline-block w-[341px] h-[84px]">
              Simple and intuitive commands allow you to effortlessly retrieve
              the information you need. Just type /price [cryptocurrency] to get
              instant updates.
            </div>
          </div>
          <div
            className="absolute top-[286px] left-[0px] rounded-xl [background:radial-gradient(50%_50%_at_50%_50%,_#0c9e91,_#100e0e)] shadow-[0px_0px_0px_5px_#000] w-[390px] h-[164px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[14px] left-[71px] rounded-3xs bg-gray-100 shadow-[0px_0px_0px_1px_#ffdd07] w-[247px] h-[38px] overflow-hidden">
              <div className="absolute top-[9px] left-[36px] font-black inline-block w-[175px]">
                AI-powered Insight
              </div>
            </div>
            <div className="absolute top-[80px] left-[24px] text-base font-medium text-center inline-block w-[341px] h-[84px]">
              Gain a competitive edge with AI-driven market insights. Our
              algorithms analyze historical data to provide you with valuable
              information and predictions.
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2023px] left-[0px] w-[1060px] flex flex-row items-center justify-end gap-[704px] z-[8] lg:w-[770px] md:w-[400px] md:flex-col md:gap-[500px]">
        <div className="relative w-[17px] h-[25px] overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[368px] h-[364px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-379@2x.png"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[2450px] left-[0px] flex flex-row items-start justify-end gap-[794px] z-[9] lg:gap-[510px] md:flex-col md:pl-[150px] md:box-border">
        <div className="relative w-[17px] h-[27px] overflow-hidden shrink-0" />
        <div className="relative font-black">Roadmap</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2590px] left-[0px] w-[1722px] flex flex-row items-start justify-center gap-[265px] z-[10] text-lg lg:w-[1200px] md:flex-col md:gap-[154px] md:pl-5 md:pt-[520px] md:box-border">
        <div className="relative w-[390px] h-[482px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:radial-gradient(50%_50%_at_50%_50%,_#fc0e0e,_#19181d)] shadow-[0px_0px_0px_5px_#000] w-[390px] h-[164px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[14px] left-[57px] rounded-3xs bg-gray-100 shadow-[0px_0px_0px_1px_#fff] w-[275px] h-[38px] overflow-hidden">
              <div className="absolute top-[9px] left-[25px] font-black inline-block w-[250px]">
                Phase 1: Real-Time Updates
              </div>
            </div>
            <div className="absolute top-[82px] left-[0px] text-inherit font-medium font-inherit inline-block w-[383px] h-[67px]">
              <ul className="m-0 pl-[21px]">
                <li className="mb-0">Implement real-time data fetching.</li>
              </ul>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-[21px]">
                <li>Ensure accurate cryptocurrency prices every minute.</li>
              </ul>
            </div>
          </div>
          <div
            className="absolute top-[318px] left-[0px] rounded-xl [background:radial-gradient(50%_50%_at_50%_50%,_#fc0e0e,_#19181d)] shadow-[0px_0px_0px_5px_#000] w-[390px] h-[164px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[14px] left-[90px] rounded-3xs bg-gray-100 shadow-[0px_0px_0px_1px_#ffa94e] w-[204px] h-[38px] overflow-hidden">
              <div className="absolute top-[9px] left-[28px] font-black inline-block w-[148px]">
                AI Intergration
              </div>
            </div>
            <div className="absolute top-[82px] left-[0px] text-inherit font-medium font-inherit inline-block w-[383px] h-[67px]">
              <ul className="m-0 pl-[21px]">
                <li className="mb-0">
                  Harness the power of AI for market trend analysis.
                </li>
                <li>
                  Provide users with actionable insights based on historical
                  data.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative w-[390px] h-[482px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:radial-gradient(50%_50%_at_50%_50%,_#fc0e0e,_#19181d)] shadow-[0px_0px_0px_5px_#000] w-[390px] h-[164px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[18px] left-[5px] rounded-3xs bg-gray-100 shadow-[0px_0px_0px_1px_#ff80fa] w-[380px] h-[38px] overflow-hidden">
              <div className="absolute top-[9px] left-[8px] font-black inline-block w-[363px]">
                Phase 2: User Commands and Notifications
              </div>
            </div>
            <div className="absolute top-[68px] left-[0px] text-inherit font-medium font-inherit inline-block w-[385px] h-[67px]">
              <ul className="m-0 pl-[21px]">
                <li className="mb-0">
                  Develop user-friendly commands for seamless interaction.
                </li>
              </ul>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-[21px]">
                <li>Introduce personalized notifications for custom alerts.</li>
              </ul>
            </div>
          </div>
          <div
            className="absolute top-[318px] left-[0px] rounded-xl [background:radial-gradient(50%_50%_at_50%_50%,_#fc0e0e,_#19181d)] shadow-[0px_0px_0px_5px_#000] w-[390px] h-[164px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[18px] left-[13px] rounded-3xs bg-gray-100 shadow-[0px_0px_0px_1px_#fc0e0e] w-[359px] h-[38px] overflow-hidden">
              <div className="absolute top-[9px] left-[8px] font-black inline-block w-[343px]">
                Phase 4: Graphical Data Visualization
              </div>
            </div>
            <div className="absolute top-[82px] left-[0px] text-inherit font-medium font-inherit inline-block w-[385px] h-[67px]">
              <ul className="m-0 pl-[21px]">
                <li className="mb-0">
                  Enhance user experience with interactive charts and graphs.
                </li>
                <li>
                  Integrate candlestick charts for detailed market analysis.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3190px] left-[0px] w-[1032px] flex flex-row items-center justify-end gap-[660px] z-[11] lg:w-[780px] md:w-[410px] md:flex-col md:pl-0 md:pt-[600px] md:pr-0 md:box-border">
        <div className="relative w-5 h-9 overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[368px] h-[364px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-384@2x.png"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[3617px] left-[0px] w-[989px] flex flex-row items-start justify-end gap-[620px] z-[12] lg:w-[1200px] lg:gap-[400px] lg:items-start lg:justify-start md:flex-col md:pl-[70px] md:pt-[950px] md:box-border">
        <div className="relative w-[43px] h-[26px] overflow-hidden shrink-0" />
        <div className="relative font-black">What Sets Us Apart?</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3766px] left-[4px] w-[1718px] flex flex-row items-start justify-center gap-[256px] z-[13] text-lg lg:w-[1200px] md:flex-col md:gap-[136px] md:pl-[17px] md:pt-[1350px] md:box-border">
        <div className="relative w-[390px] h-[464px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:radial-gradient(50%_50%_at_50%_50%,_#e9cc8a,_#19181d)] shadow-[0px_0px_0px_5px_#000] w-[390px] h-[164px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[14px] left-[90px] rounded-3xs bg-gray-100 shadow-[0px_0px_0px_1px_#ffa94e] w-[204px] h-[38px] overflow-hidden">
              <div className="absolute top-[9px] left-[9px] font-black inline-block w-[195px]">
                User-centric Designs
              </div>
            </div>
            <div className="absolute top-[82px] left-[19px] text-base font-medium text-center inline-block w-[345px] h-12">
              CryptoTrackerBot is designed with you in mind, ensuring a smooth
              and enjoyable experience.
            </div>
          </div>
          <div
            className="absolute top-[300px] left-[0px] rounded-xl [background:radial-gradient(50%_50%_at_50%_50%,_#e9cc8a,_#19181d)] shadow-[0px_0px_0px_5px_#000] w-[390px] h-[164px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[14px] left-[90px] rounded-3xs bg-gray-100 shadow-[0px_0px_0px_1px_#ffa94e] w-[204px] h-[38px] overflow-hidden">
              <div className="absolute top-[9px] left-[9px] font-black inline-block w-[182px]">
                Constant Improvement
              </div>
            </div>
            <div className="absolute top-[82px] left-[19px] text-base font-medium text-center inline-block w-[345px] h-12">
              We value user feedback. Continuous updates and improvements are
              driven by your insights and suggestions.
            </div>
          </div>
        </div>
        <div
          className="relative rounded-xl [background:radial-gradient(50%_50%_at_50%_50%,_#e9cc8a,_#19181d)] shadow-[0px_0px_0px_5px_#000] w-[390px] h-[164px] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[14px] left-[90px] rounded-3xs bg-gray-100 shadow-[0px_0px_0px_1px_#ffa94e] w-[204px] h-[38px] overflow-hidden">
            <div className="absolute top-[9px] left-[9px] font-black inline-block w-[182px]">
              Privacy and Security
            </div>
          </div>
          <div className="absolute top-[82px] left-[19px] text-base font-medium text-center inline-block w-[345px] h-12">
            Your data security is our priority. We implement robust measures to
            protect your personal information.
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4313px] left-[0px] flex flex-row items-center justify-end gap-[710px] z-[14] lg:gap-[470px] md:flex-col md:gap-[470px] md:pl-20 md:pt-[1200px] md:box-border">
        <div className="relative w-5 h-[25px] overflow-hidden shrink-0" />
        <img
          className="relative rounded-xl w-[238px] h-52 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-374@2x.png"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[4566px] left-[0px] flex flex-row items-center justify-end gap-[621px] z-[15] text-center text-lg font-inika lg:gap-[400px] md:flex-col md:pl-5 md:pt-[1300px] md:box-border">
        <div className="relative w-[25px] h-11 overflow-hidden shrink-0" />
        <div className="relative rounded-xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(233,_204,_138,_0.01),_rgba(25,_24,_29,_0.01))] shadow-[0px_0px_0px_5px_#000] w-[390px] h-[391px] overflow-hidden shrink-0">
          <div className="absolute top-[5px] left-[20px] inline-block w-[350px] h-[345px]">
            <p className="m-0 font-black font-inknut-antiqua">
              Get Started Today
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Join our Telegram Channel: Start receiving real-time updates by
              joining our Telegram channel.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Set Custom Alerts: Tailor CryptoTrackerBot to your preferences by
              setting custom price alerts.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Explore AI Insights: Dive into AI-powered insights to make
              informed decisions in the cryptocurrency market.
            </p>
          </div>
        </div>
      </div>
      <HeaderSection />
      <div className="my-0 mx-[!important] absolute top-[5084px] left-[0px] flex flex-row items-center justify-start z-[17] md:pt-[1800px] md:box-border">
        <div className="relative w-[5px] h-2.5 overflow-hidden shrink-0" />
        <div className="rounded-3xs [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_#01ffff)] flex flex-row items-start justify-start gap-[50px] md:gap-[20px] md:pt-0 md:box-border">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[58px] bg-[url('/twitterx@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/telegramapp@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/youtube@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/discord@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        </div>
      </div>
    </div>
  );
};

export default CryptotrackerBot;
