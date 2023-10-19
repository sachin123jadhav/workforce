"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import GroupChart5 from "@/components/partials/widget/chart/group-chart5";
import Link from "next/link";
import SimpleBar from "simplebar-react";
import HistoryChart from "@/components/partials/widget/chart/history-chart";
import AccountReceivable from "@/components/partials/widget/chart/account-receivable";
import AccountPayable from "@/components/partials/widget/chart/account-payable";

import ImageBlock2 from "@/components/partials/widget/block/image-block-2";
import HomeBredCurbs from "@/components/partials/HomeBredCurbs";

import DateComponent from "@/components/partials/widget/DateComponent";

import SignIn from "@/components/SignIn";
import { birthdaysData } from "@/constant/data";
import { newHires } from "@/constant/data";
import { upcomingHolidays } from "@/constant/data";


import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

import DasboardBlock from "@/components/partials/widget/block/dasboard-block";
import Simple from "@/components/partials/froms/Simple";

const StarterPage = () => {
  return (
    <>
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            {" "}
            <HomeBredCurbs title="Dashboard" />
          </div>

          <div className="flex justify-end">
            <Modal
              title="Apply Leave"
              label="Apply Leave"
              icon="heroicons-outline:plus-sm"
              iconClass="text-lg"
              labelClass="btn-primary  rounded-[999px]"
              uncontrol
              centered
              footerContent={
                <Button
                  text="Accept"
                  className="btn-dark "
                  onClick={() => {
                    alert("use Control Modal");
                  }}
                />
              }
            >
              <h4 className="font-medium text-lg mb-3 text-slate-900">
                Lorem ipsum dolor sit.
              </h4>
              <div className="text-base text-slate-600 dark:text-slate-300">
               
              </div>
            </Modal>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 mb-5">
          <div className="2xl:col-span-3 lg:col-span-4 col-span-12">
            <ImageBlock2 />
          </div>

          <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
            <DasboardBlock />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 mb-5">
          <div className="2xl:col-span-3 lg:col-span-4 col-span-12 text-center">
            <Card title="Attendance" className="h-full bg-white content-center">
              <SignIn></SignIn>
              <DateComponent></DateComponent>
            </Card>
          </div>

          <div className="2xl:col-span-3 lg:col-span-4 col-span-12 text-center">
            <Card title="Birthdays">
              {birthdaysData.map((person, id) => (
                <div
                  key={id}
                  className="shadow-lg p-3 border border-gray-300 hover:border-gray-900 transition-all duration-150 rounded-sm [&:not(:first-child)]:mt-2"
                >
                  <div className="flex justify-start items-center">
                    <div className="w-[60px] h-[60px]  bg-blue-800 text-center p-2 flex content-center justify-center mr-2 items-center text border-dashed border-white border">
                      <h3 className="text-cyan-50 text-lg leading-6">
                        {person.date}
                      </h3>
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg black-500">{person.name}</h4>
                      <h3 className="text-lg text-gray-700">{person.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </div>

          <div className="2xl:col-span-3 lg:col-span-4 col-span-12 text-center">
          <Card title="New Hires">
            {newHires.map((person, id) => (
              <div
                key={id}
                className="shadow-lg p-3 border border-gray-300 hover:border-gray-900 transition-all duration-150 rounded-sm [&:not(:first-child)]:mt-2"
              >
                <div className="flex justify-start items-center">
                  <div className="w-[60px] h-[60px] rounded-full bg-blue-800 text-center flex content-center justify-center mr-2 items-center text overflow-hidden border-double border-4">
                    
                      <img src={ person.image }></img>
                    
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg black-500">{person.name}</h4>
                    <h3 className="text-lg text-gray-700">{person.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </div>
        <div className="2xl:col-span-3 lg:col-span-4 col-span-12 text-center">
            <Card title="Upcoming Holidays">
              {upcomingHolidays.map((index, id) => (
                <div
                  key={id}
                  className="shadow-lg p-3 border border-gray-300 hover:border-gray-900 transition-all duration-150 rounded-sm [&:not(:first-child)]:mt-2"
                >
                  <div className="flex justify-start items-center">
                    <div className="w-[60px] h-[60px]  bg-blue-700 text-center p-2 flex content-center justify-center mr-2 items-center text border-dashed border-white border">
                      <h3 className="text-cyan-50 text-lg leading-6">
                        {index.date}
                      </h3>
                    </div>
                    <div className="text-left">
                      
                      <h3 className="text-lg text-gray-700">{index.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarterPage;
