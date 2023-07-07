import React from "react";

function Card() {
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          className="block w-full h-full object-cover rounded-lg"
          src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?compress=1&resize=1600x1200"
        />
      </div>
      <div className="absolute l-2/4 translate-x-[4%] translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-x-3">
            <img
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?compress=1&resize=1600x1200"
            />
            <span className="text-[16px] color-[#333] font-light ">
              @zndrson
            </span>
          </div>
          <div className="">256</div>
        </div>
        <div className="flex justify-between align-center">
          <h3 className="text-[18px] font-medium text-black">
            Cosmic Perspective
          </h3>
          <span className="text-lg font-bold text-transparent text-clip-text bg-primary-gradien">
            12,000 PSL
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
