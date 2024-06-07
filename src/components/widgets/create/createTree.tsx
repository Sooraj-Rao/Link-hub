"use client";
import { Button } from "@/components/ui/button";
import { Edit, Info, Lock, Stars, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import TreeMobileView from "./mobileView";
import AddDialog from "./addDialog";
import axios from "axios";
import DeleteDialog from "@/components/tools/ValidateDelete";

import { TooltipWrap } from "@/helpers/TooltipParent";
import LockDialog from "@/components/tools/LockDialog";
import { useZustandStore } from "@/zustand/store";

export const CreateTree = () => {
  const [AddDialogShow, setAddDialogShow] = useState(false);
  const [linkData, setLinkData] = useState([]);
  const [loader, setloader] = useState(true);
  const [DeleteModalShow, setDeleteModalShow] = useState("");
  const [Drawer, setDrawer] = useState("");
  const { userData, setUserData } = useZustandStore();

  const linktreeURL =
    process.env.NEXT_PUBLIC_SITE_URL + "/" + userData?.userName;

  const fetchLinks = async () => {
    try {
      const res = await axios.get("/api/getlinks");
      const { error, message, links } = res.data;
      setUserData(links?.UserData);
      const onlyLinks = links?.Result?.map((item, i) => {
        return item?.linkData;
      });

      if (error) {
        console.log(message);
      } else {
        setLinkData(onlyLinks);
      }
    } catch (error) {
      console.log(error);

      console.log("Failed to get links");
    } finally {
      setloader(false);
    }
  };
  useEffect(() => {
    fetchLinks();
  }, []);

  const ValidateDelteDialog = (id) => {
    setDeleteModalShow(id);
  };

  const DialogProps = {
    AddDialogShow,
    setAddDialogShow,
    fetchLinks,
  };

  const DeleteDialogProps = {
    fetchLinks,
    DeleteModalShow,
    setDeleteModalShow,
  };

  return (
    <div className=" flex justify-between ">
      {DeleteModalShow && <DeleteDialog {...DeleteDialogProps} />}
      <div className=" min-w-[60%]">
        <div
          className={`${userData ? "" : " rounded-md DarkLoader h-20 w-full"}`}
        >
          <div
            className={` ${
              userData ? "block" : "hidden"
            } bg-slate-900 rounded-md py-5 flex justify-between gap-x-14 items-center px-10`}
          >
            <h1>
              Your Linktree is live:
              <a
                target="_blank"
                href={linktreeURL}
                className=" underline text-blue-500 ml-1 cursor-pointer"
              >
                {linktreeURL}
              </a>
            </h1>
            <Button>Copy Linktree URL</Button>
          </div>
        </div>
        <div className=" mt-10 flex justify-between items-center ">
          {!userData ? (
            <>
              <h1 className=" h-10 w-32 DarkLoader rounded-md"></h1>
              <h1 className=" h-10 w-32 DarkLoader rounded-md"></h1 >
            </>
          ) : (
            <>
              <AddDialog {...DialogProps} />
              <Button>
                Create custom tree <Stars className=" h-4 ml-1" />
              </Button>
            </>
          )}
        </div>

        <div className=" mt-10">
          <h1
            className={` text-xl mb-4 hidden ${
              !loader && linkData?.length != 0 && "block"
            }`}
          >
            Here is your link-tree{" "}
          </h1>
          {loader ? (
            <div>
              {Array(3)
                .fill("")
                .map((item, i) => {
                  return (
                    <div
                      key={i}
                      className=" w-full animate-pulse my-2 bg-slate-900 h-fit p-4 rounded-md"
                    >
                      <h1 className=" h-6 bg-slate-600    DarkLoader w-1/2 my-2 animate-pulse rounded-md"></h1>
                      <h1 className=" h-4   my-2 bg-slate-600 DarkLoader w-3/4 animate-pulse rounded-md"></h1>
                      <div className=" flex">
                        <h1 className=" h-8 w-8 rounded-md mr-2  bg-slate-600 DarkLoader"></h1>
                        <h1 className=" h-8 w-8 rounded-md mx-2  bg-slate-600 DarkLoader"></h1>
                        <h1 className=" h-8 w-8 rounded-md mx-2  bg-slate-600 DarkLoader"></h1>
                        <h1 className=" h-8 w-8 rounded-md mx-2  bg-slate-600 DarkLoader"></h1>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : linkData?.length != 0 ? (
            linkData?.map((item, i) => {
              const { link, title, descriptionm, _id, lock } = item;

              return (
                <div key={i} className="my-2 w-full">
                  <div className=" w-full bg-slate-900  p-4 rounded-md">
                    <h1 className=" my-1 text-xl font-semibold">{title}</h1>
                    <a
                      href={link}
                      target="_blank"
                      className=" underline text-blue-500 my-2"
                    >
                      {link}
                    </a>
                    <div className=" mb-2 mt-4 flex gap-x-4 items-center text-slate-300">
                      <TooltipWrap text={"Edit"}>
                        <Edit className=" h-5 hover:text-white  cursor-pointer hover:scale-110 duration-300" />
                      </TooltipWrap>
                      <TooltipWrap text={"Delete"}>
                        <Trash
                          onClick={() => ValidateDelteDialog(_id)}
                          className=" h-5 hover:text-slate-50 cursor-pointer hover:scale-110 duration-300"
                        />
                      </TooltipWrap>
                      <TooltipWrap text={lock ? "Locked" : "Lock"}>
                        <span
                          className={` p-1
                        ${lock ? "bg-blue-500 rounded-md" : ""}
                        ${Drawer == _id ? "bg-blue-900 rounded-md " : ""}
                         `}
                        >
                          <Lock
                            onClick={() => {
                              Drawer == _id ? setDrawer("") : setDrawer(_id);
                            }}
                            className={` h-5 hover:text-slate-50 cursor-pointer hover:scale-110 duration-300
                        `}
                          />
                        </span>
                      </TooltipWrap>
                    </div>
                  </div>
                  {Drawer == _id && (
                    <LockDialog
                      lock={lock}
                      id={_id}
                      Drawer={Drawer}
                      setDrawer={setDrawer}
                      fetchLinks={fetchLinks}
                    />
                  )}
                </div>
              );
            })
          ) : (
            <h1
              className={` text-center mt-10 flex items-center justify-center gap-x-2 `}
            >
              <span>
                <Info />
              </span>
              No links exist..Start adding links now!
            </h1>
          )}
        </div>
      </div>

      <div>
        <TreeMobileView linkData={linkData} />
      </div>
    </div>
  );
};

export let fetchLinks: any;
