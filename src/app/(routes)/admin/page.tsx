"use client";
import SideBar from "@/components/widgets/create/sidebar";
import {CreateTree} from "@/components/widgets/create/createTree";
import React, { useState } from "react";

const CreatePage = () => {
  const login = true;
  const [sideBarClose, setsideBarClose] = useState(false);

  const SidebarPops = {
    sideBarClose,
    setsideBarClose,
  };
  return (
    <div className=" flex w-screen">
      <div
        className={` h-[calc(100vh-100px)] duration-500 relative group  flex flex-col justify-between    bg-slate-950 border-r border-r-slate-500 m-3 
    ${sideBarClose ? "w-20   " : " w-60    "}
    `}
      >
        <SideBar {...SidebarPops} />
      </div>
      <div className="mx-10 my-5 w-[calc(100vw-150px)]">
        <CreateTree />
      </div>
    </div>
  );
};

export default CreatePage;
