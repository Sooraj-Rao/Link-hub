"use client";
import { TooltipWrap } from "@/helpers/TooltipParent";
import {
  Bolt,
  Boxes,
  Bug,
  ChevronLeft,
  ChevronRight,
  CircleUser,
  LineChart,
  Rows3,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

const SideBar = (props) => {
  const { sideBarClose, setsideBarClose } = props;
  const routes = [
    { title: "Links", icon: <Rows3 /> },
    { title: "Appearences", icon: <Boxes /> },
    { title: "Analytics", icon: <LineChart /> },
    { title: "Settings  ", icon: <Bolt /> },
    { title: "Report issue", icon: <Bug /> },
  ];
  return (
    <>
      <TooltipWrap text={!sideBarClose ? "Minimize" : "Maximize"}>
        <button
          onClick={() => setsideBarClose(!sideBarClose)}
          className="group-hover:scale-100 scale-0 duration-300 absolute -right-2 top-0 bg-white  hover:text-blue-500  text-black rounded-full"
        >
          {sideBarClose ? (
            <ChevronRight className=" h-6 w-6" />
          ) : (
            <ChevronLeft className=" h-6 w-6" />
          )}
        </button>
      </TooltipWrap>
      <ul className=" w-full p-3  overflow-hidden ">
        {routes.map((item, i) => {
          return (
            <div
              key={i}
              className=" hover:cursor-pointer  rounded-md px-4 hover:bg-slate-800 w-full flex py-3 items-center r gap-x-3"
            >
              <h1>{item.icon}</h1>
              <h1
                className={`${sideBarClose ? "hidden" : " block"} text-nowrap`}
              >
                {item.title}
              </h1>
            </div>
          );
        })}
      </ul>
      <div
        className={`w-full  
      ${sideBarClose ? "px-0" : "px-12"}
         `}
      >
        <button className="  bg-blue-600 mb-5 hover:bg-blue-900 hover:duration-300 duration-300 hover:cursor-pointer  flex items-center gap-x-2 cursor-pointer px-5 py-2 rounded-md">
          <span>
            {" "}
            <Zap className=" h-5" />
          </span>
          <span className={`${sideBarClose ? "hidden" : "block"}`}>
            Upgrade
          </span>
        </button>
        <hr className=" bg-white" />
        <div
          className={`flex gap-x-3 py-5  cursor-pointer
        ${sideBarClose ? "px-5" : "px-2"}
        `}
        >
          <span>
            <CircleUser />
          </span>
          <h1 className={`${sideBarClose ? "hidden" : "block"}`}>SoorajRao</h1>
        </div>
      </div>
    </>
  );
};

export default SideBar;
