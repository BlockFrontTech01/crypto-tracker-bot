import { useState, useCallback } from "react";
import CryptotrackerMenu from "./cryptotracker-menu";
import PortalPopup from "./portal-popup";

const HeaderSection = () => {
  const [isCryptotrackerMenuPopupOpen, setCryptotrackerMenuPopupOpen] =
    useState(false);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://serparking.vercel.app");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://parkingswing.vercel.app");
  }, []);

  const openCryptotrackerMenuPopup = useCallback(() => {
    setCryptotrackerMenuPopupOpen(true);
  }, []);

  const closeCryptotrackerMenuPopup = useCallback(() => {
    setCryptotrackerMenuPopupOpen(false);
  }, []);

  return (
    <>
      <div className="fixed my-0 mx-[!important] top-[0px] left-[2px] w-[1726px] h-[60px] overflow-hidden shrink-0 z-[16]">
        <div className="absolute top-[8px] left-[6px] flex flex-row items-start justify-center gap-[400px] md:gap-[330px]">
          <img
            className="relative rounded-31xl w-[45px] h-[45px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-135@2x.png"
          />
          <div className="relative w-[610px] h-10">
            <div className="absolute top-[9px] left-[77px] w-[619px] h-[22px] md:hidden">
              <button
                className="cursor-pointer [border:none] p-0 bg-gold absolute top-[0px] left-[494px] rounded-3xs shadow-[0px_4px_0px_1px_#000] w-[125px] h-[22px] overflow-hidden hidden"
                onClick={onFrameButtonClick}
              >
                <b className="absolute top-[0px] left-[24px] text-mid font-inika text-black text-center">
                  Developer
                </b>
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-gray-200 absolute top-[0px] left-[332px] rounded-3xs shadow-[0px_0px_0px_1px_#000] w-[125px] h-[22px] overflow-hidden"
                onClick={onFrameButton1Click}
              >
                <b className="absolute top-[0px] left-[24px] text-mid font-inika text-white text-center">
                  Developer
                </b>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-gray-200 absolute top-[0px] left-[170px] rounded-3xs shadow-[0px_0px_0px_1px_#000] w-[125px] h-[22px] overflow-hidden">
                <b className="absolute top-[0px] left-[28px] text-mid font-inika text-white text-center">
                  Price Bot
                </b>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-darkcyan absolute top-[0px] left-[0px] rounded-3xs shadow-[0px_0px_0px_1px_#000] w-[140px] h-[22px] overflow-hidden">
                <b className="absolute top-[0px] left-[55px] text-mid font-inika text-white text-center">
                  Buy
                </b>
              </button>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] rounded-3xs w-10 h-10 bg-[url('/menu@2x.png')] bg-cover bg-no-repeat bg-[top] hidden md:flex md:w-10 sm:flex"
              onClick={openCryptotrackerMenuPopup}
            />
          </div>
        </div>
      </div>
      {isCryptotrackerMenuPopupOpen && (
        <PortalPopup placement="Top right">
          <CryptotrackerMenu onClose={closeCryptotrackerMenuPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HeaderSection;
