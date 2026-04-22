import Link from "next/link";
import React from "react";


const TuzCard = ({ title, subTitle }) => {
  return (
    <div className="w-full self-stretch border-l-[6px] border-l-gray-500 pl-2 group flex relative">
      <Link href="#">
        <div className="w-4 h-4 absolute top-1/2 left-0 -translate-x-[13px] -translate-y-1/2">
          <span className="absolute w-5 h-5 rounded-full flex justify-center items-center bg-gray-400 ">
            <span className="w-3 h-3 rounded-full bg-gray-200 inline-flex group-hover:bg-red-600 duration-400"></span>
          </span>
        </div>
        <div className="w-full bg-gray-100 hover:bg-gray-300 duration-400 rounded-lg px-6 py-4 flex justify-start items-center gap-10 shadow-xl">
          <div className="">
            <div className="">
              <h3 className="text-md font-semibold group-hover:text-gray-600 ">
                {title}
              </h3>
              <p className="text-sm text-text ">{subTitle}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TuzCard;
