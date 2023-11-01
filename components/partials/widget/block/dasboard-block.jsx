import React from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";

import { userData } from "@/constant/data";

function DasboardBlock() {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 h-full">
        {" "}
        {userData.map((item, i) => (
          <Card
            key={i}
            bodyClass={`pt-4 pb-3 px-4 flex  items-center h-full  bg-gradient-to-r from-[#054fb9] to-[#0461cf]  ${item.bg} relative`}
          >
            <div className="flex space-x-3 rtl:space-x-reverse w-full h-full items-center">
              <div className="flex-none h-full items-center flex mr-5">
                <div
                  className={` h-[70px] w-[70px] rounded-md  flex flex-col items-center justify-center bg-white border text-3xl text-[#054fb9] ${item.iconColor}`}
                >
                  <Icon icon={item.icon}></Icon>
                </div>
              </div>

              <div className="flex-1">
                <div className="text-white dark:text-slate-300 text-sm mb-1 font-medium">
                  <p className="text-lg"> {item.title}</p>
                </div>
                <div className="text-white dark:text-white text-lg font-medium">
                  <h3 className="text-white">{item.count}</h3>
                </div>
              </div>
              <div className="absolute top-0 right-0 h-full">
                <img
                  src="/assets/images/all-img/bg.svg"
                  width={"100%"}
                  className="h-full"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default DasboardBlock;
