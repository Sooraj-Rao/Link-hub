"use client";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Edit,
  Info,
  Lock,
  LockKeyhole,
  Pencil,
  Stars,
  Trash,
  Trash2,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import TreeMobileView from "./mobileView";
import AddDialog from "./addDialog";
import axios from "axios";
import DeleteDialog from "@/components/tools/ValidateDelete";

import { TooltipWrap } from "@/helpers/TooltipParent";
import LockDialog from "@/components/tools/LockDialog";
import { useZustandStore } from "@/zustand/store";
import LinkLoader from "@/app/utils/anim/linkLoader";
import { Input } from "@/components/ui/input";
import { updateFieldValue } from "@/app/actions/updateLinkData";
import { useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { isActiveChange } from "@/app/actions/isActiveChange";

export const CreateTree = () => {
  const [AddDialogShow, setAddDialogShow] = useState(false);
  const [loader, setloader] = useState(true);
  const [DeleteModalShow, setDeleteModalShow] = useState("");
  const [Drawer, setDrawer] = useState("");
  const { userData, setUserData, linkData, setLinkData } = useZustandStore();
  const copyRef = useRef();
  const { toast } = useToast();
  const [updateFields, setupdateFields] = useState("");

  const linktreeURL =
    process.env.NEXT_PUBLIC_SITE_URL + "/@" + userData?.userName;

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

  const UpdateValue = async (e) => {
    e.preventDefault();
    try {
      const { error, message } = await updateFieldValue(updateFields);
      if (error) {
        toast({
          variant: "destructive",
          title: "Update failed!",
          description: message,
        });
      } else {
        toast({
          title: "Updated!",
          description: message,
        });
      }
      fetchLinks();
    } catch (error) {
      toast({
        title: "Failed!",
        description: "Update failed,try after some time",
      });
    } finally {
      setupdateFields("");
    }
  };

  const ValidateDelteDialog = (id) => {
    setDeleteModalShow(id);
  };

  const handleIsActive = async (newActive, id) => {
    try {
      const { error, message } = await isActiveChange({
        isActive: newActive,
        id,
      });
      if (error) {
        return toast({
          title: "Failed!",
          description: "Update failed,try after some time",
        });
      }
      const neww = linkData.map((item) => {
        if (item._id == id) {
          item.isActive = newActive;
        }
        return item;
      });

      setLinkData(neww);
    } catch (error) {
      toast({
        title: "Failed!",
        description: "Update failed,try after some time",
      });
    }
  };

  const CopyURL = (url: string) => {
    window.navigator.clipboard.writeText(url);
    if (copyRef.current) copyRef.current.innerText = "Copied";

    setTimeout(() => {
      if (copyRef.current) copyRef.current.innerText = "Copy Linktree URL";
    }, 1500);
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
      <div className=" min-w-[60%] h-fit overflow-y-scrolls">
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
            <Button
              className=" flex items-center gap-x-2"
              ref={copyRef}
              onClick={() => {
                CopyURL(linktreeURL);
              }}
            >
              <span>Copy Linktree URL</span>
              <Copy className=" h-4" />
            </Button>
          </div>
        </div>
        <div className=" mt-10 flex justify-between items-center ">
          {!userData ? (
            <>
              <h1 className=" h-10 w-32 DarkLoader rounded-md"></h1>
              <h1 className=" h-10 w-32 DarkLoader rounded-md"></h1>
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

        <div className=" mt-10 ">
          <h1
            className={` text-xl mb-4  ${
              !loader && linkData?.length != 0 ? "block" : "hidden"
            }`}
          >
            Here is your link-tree{" "}
          </h1>
          {loader ? (
            <LinkLoader />
          ) : linkData?.length != 0 ? (
            linkData?.map((item, i) => {
              const { link, title, descriptionm, _id, lock, isActive } = item;

              return (
                <div
                  key={i}
                  className="my-3 w-full -z-10  "
                >
                  <div className="  w-full bg-gray-900 border flex  items-center justify-between py-5 px-8 rounded-xl">
                    <div>
                      <div className=" flex items-center gap-x-4">
                        {updateFields?.field == "title" &&
                        updateFields?.id == _id ? (
                          <form
                            onSubmit={UpdateValue}
                            className=" flex items-center gap-x-2"
                          >
                            <input
                              className="  bg-transparent border px-2 py-1 focus:outline-none rounded-md "
                              value={updateFields?.value}
                              onChange={(e) =>
                                setupdateFields({
                                  ...updateFields,
                                  value: e.target.value,
                                })
                              }
                            ></input>
                            <Button className=" h-8 px-2 text-xs">Save</Button>
                          </form>
                        ) : (
                          <h1 className=" my-1 text-xl font-semibold">
                            {title}
                          </h1>
                        )}
                        <TooltipWrap hide={false} text={"Update title"}>
                          <Pencil
                            onClick={() =>
                              setupdateFields({
                                field: "title",
                                value: title,
                                id: _id,
                              })
                            }
                            className={` h-4 w-4  cursor-pointer 
                          ${
                            updateFields?.field == "title" &&
                            updateFields?.id == _id
                              ? "hidden"
                              : "block"
                          }
                          `}
                          />
                        </TooltipWrap>
                      </div>
                      <div className=" flex items-center gap-x-4">
                        {updateFields?.field == "link" &&
                        updateFields?.id == _id ? (
                          <form
                            onSubmit={UpdateValue}
                            className=" flex items-center gap-x-2"
                          >
                            <input
                              className="  bg-transparent border px-2 py-1 focus:outline-none rounded-md "
                              value={updateFields?.value}
                              onChange={(e) =>
                                setupdateFields({
                                  ...updateFields,
                                  value: e.target.value,
                                })
                              }
                            ></input>
                            <Button className=" h-8 px-2 text-xs">Save</Button>
                          </form>
                        ) : (
                          <a
                            href={link}
                            className=" my-1  text-blue-500 font-semibold"
                          >
                            {link}
                          </a>
                        )}

                        <TooltipWrap hide={false} text={"Update link"}>
                          <Pencil
                            onClick={() =>
                              setupdateFields({
                                field: "link",
                                value: link,
                                id: _id,
                              })
                            }
                            className={` h-4 w-4 hi cursor-pointer
                          ${
                            updateFields?.field == "link" &&
                            updateFields?.id == _id
                              ? "hidden"
                              : "block"
                          }
                          `}
                          />
                        </TooltipWrap>
                      </div>
                      <div className=" mb-2 mt-4 flex gap-x-4 items-center text-slate-300">
                        <TooltipWrap text={"Delete"}>
                          <Trash2
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
                            <LockKeyhole
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
                    <div>
                      <Switch
                        checked={isActive}
                        onCheckedChange={(e) => handleIsActive(e, _id)}
                        className=" bg-red-600"
                        id="disable"
                      />
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
