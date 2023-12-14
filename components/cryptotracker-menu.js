import { useCallback, useEffect } from "react";

const CryptotrackerMenu = ({ onClose }) => {
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

  const onFrameButton2Click = useCallback(() => {
    window.open("https://serparking.vercel.app");
  }, []);

  return (
    <div
      className="bg-teal w-[241px] h-[762px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-full max-h-full overflow-auto [&.animate]:md:animate-[1s_ease-in-out_0s_1_normal_forwards_slide-in-right] md:opacity-[0]"
      data-animate-on-scroll
    >
      <button className="cursor-pointer [border:none] p-0 bg-gray-200 absolute top-[119px] left-[41px] rounded-xl shadow-[0px_0px_0px_1px_#000] w-[149px] h-[22px] overflow-hidden">
        <b className="absolute top-[0px] left-[11px] text-mini font-inika text-white text-center">
          Buy Cryptotracker
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-gray-200 absolute top-[183px] left-[50px] rounded-xl shadow-[0px_0px_0px_1px_#000] w-[133px] h-[22px] overflow-hidden">
        <b className="absolute top-[0px] left-[35px] text-mini font-inika text-white text-center">
          Price Bot
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-gray-200 absolute top-[247px] left-[49px] rounded-xl shadow-[0px_0px_0px_1px_#000] w-[133px] h-[22px] overflow-hidden"
        onClick={onFrameButton2Click}
      >
        <b className="absolute top-[0px] left-[31px] text-mini font-inika text-white text-center">
          Developer
        </b>
      </button>
      <img
        className="absolute top-[17px] left-[199px] w-[30px] h-[21px] overflow-hidden object-cover cursor-pointer"
        alt=""
        src="/frame-371@2x.png"
        onClick={onClose}
      />
    </div>
  );
};

export default CryptotrackerMenu;
