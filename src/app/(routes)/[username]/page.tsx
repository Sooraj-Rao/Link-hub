"use client";
import NotFound from "@/app/not-found";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { fetchLinks } from "@/components/widgets/create/createTree";
import ShareModal from "@/components/widgets/tree-view/shareModal";
import { TooltipWrap } from "@/helpers/TooltipParent";
import { useZustandStore } from "@/zustand/store";
import axios from "axios";
import { EllipsisVertical, Info, Lock, Star, Stars, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LinkTreePage = (props) => {
  let active = 0;
  let showMsg;
  const { linkData, setLinkData } = useZustandStore();
  const [loader, setloader] = useState(true);
  const [InvalidUser, setInvalidUser] = useState(false);
  const [DialogShow, setDialogShow] = useState("");
  const [InputKey, setInputKey] = useState("");
  const [ShareView, setShareView] = useState(null);
  const [ShakeAnim, setShakeAnim] = useState(false);
  const { toast } = useToast();
  const user =
    props?.params?.username?.split("%40")[1] || props?.username?.split("@")[1];
  const ref = props?.searchParams?.ref;

  const fetchLinks = async () => {
    try {
      const res = await axios.get(`/api/getlinks?user=${user}`);
      const { error, message, links, noUser } = res?.data;

      const onlyLinks = links?.map((item: any) => {
        return item?.linkData;
      });
      if (noUser) {
        setInvalidUser(true);
      }
      if (error) {
        console.log(message);
      } else if (onlyLinks) {
        setLinkData(onlyLinks);
      }
    } catch (error) {
      console.log(error);

      console.log("Failed to get links");
    } finally {
      setloader(false);
    }
  };

  const handleValidate = ({ _id, lock }: { _id: string; lock: string }) => {
    if (InputKey == lock) {
      const neww = linkData?.map((item: any, i: number) => {
        if (item._id == _id) item.lock = "";
        return item;
      });
      setLinkData(neww);
      toast({
        title: "Link Unlocked!",
        description: "",
      });
      setDialogShow("");
      setInputKey("");
    } else {
      toast({
        variant: "destructive",
        title: "Invalid Key!",
        description: "Looks like you entered a wrong key",
      });
    }
  };

  useEffect(() => {
    fetchLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.username]);

  return (
    <>
      {!props?.view && ShareView && (
        <ShareModal setShareView={setShareView} ShareView={ShareView} />
      )}
      <div className={`${InvalidUser ? "block" : "hidden"}`}>
        <NotFound header={"User Not Found "} />
      </div>
      <div
        className={`  relative   justify-center mt-4  ${
          InvalidUser ? "hidden" : "flex"
        } `}
      >
        <div className=" w-[30rem] p-5">
          <div className=" w-full">
            {loader ? (
              Array(4)
                .fill("")
                .map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="  text-center  DarkLoader  my-5  py-9 w-full  rounded-md"
                    ></div>
                  );
                })
            ) : linkData?.length == 0 ? (
              <>
                <h1 className={`${props?.view ? "hidden" : "block"}`}>
                  No Data
                </h1>
              </>
            ) : (
              <div>
                <div className=" flex flex-col items-center   relative">
                  <div
                    className={`  absolute right-[6px] top-3  bg-slate-700 flex items-center justify-center rounded-full  h-10 w-10  `}
                  >
                    <TooltipWrap
                      hide={props?.view ? true : false}
                      text="Share this page"
                    >
                      <button
                        onClick={() => {
                          props.view ? "" : setShareView({ user });
                        }}
                        className=" hover:text-slate-400 "
                      >
                        <EllipsisVertical />
                      </button>
                    </TooltipWrap>
                  </div>

                  <Avatar className=" h-16 w-16">
                    <AvatarImage
                    // src={`https://avatar.iran.liara.run/public/boy?username=${user}`}
                    />
                    <AvatarFallback>
                      <span className=" capitalize text-3xl">
                        {user?.split("")[0]}
                      </span>
                    </AvatarFallback>
                  </Avatar>
                  <h1 className=" text-center mt-4 text-2xl capitalize ">
                    @{user}
                  </h1>
                </div>

                {linkData?.map((item: any, i: number) => {
                  const {
                    link,
                    title,
                    description,
                    shortLink,
                    _id,
                    isActive,
                    lock,
                  }: {
                    link: string;
                    title: string;
                    description: string;
                    _id: string;
                    isActive: boolean;
                    shortLink: string;
                    lock: string;
                  } = item;

                  item.user = user;
                  if (!isActive) active++;
                  showMsg = linkData.length == active ? true : false;
                  return (
                    <div key={_id}>
                      {showMsg && (
                        <div className=" cursor-default text-center flex gap-x-1 items-center justify-center mt-10 bg-slate-900 py-2 rounded-xl">
                          <span>
                            <Info className=" h-5" />
                          </span>
                          <span className=" capitalize text-blue-100">
                            {user}
                          </span>
                          <span>has not shown any links.</span>
                        </div>
                      )}
                      <div
                        className={`my-5  ${!isActive ? "hidden" : "block"}`}
                      >
                        <div
                          className={`  relative text-center    p-3 w-full  border border-gray-500 rounded-md
                        ${ref == shortLink && "    viewAnim  "}
                        `}
                        >
                          <TooltipWrap
                            hide={props?.view ? true : false}
                            text={"Share this link"}
                          >
                            <button
                              onClick={() => {
                                props?.view ? "" : setShareView(item);
                              }}
                              className=" hover:text-slate-400 duration-300 cursor-pointer absolute right-0  transform translate-y-[-50%] translate-x-[-50%] top-[50%]"
                            >
                              <EllipsisVertical />
                            </button>
                          </TooltipWrap>
                          <span className={`${lock ? "block" : "hidden"}`}>
                            <TooltipWrap
                              hide={props?.view ? true : false}
                              text={"This link is protected"}
                            >
                              <h1 className=" hover:text-slate-400 duration-300 cursor-pointer absolute left-5  transform translate-y-[-50%] translate-x-[-50%] top-[50%]">
                                <Lock className=" h-5" />
                              </h1>
                            </TooltipWrap>
                          </span>
                          {lock ? (
                            <TooltipWrap
                              hide={props?.view ? true : false}
                              text={"Click here to unlock"}
                            >
                              <span
                                onClick={() => {
                                  props?.view ? "" : setDialogShow(_id);
                                }}
                                className=" cursor-pointer text-lg  text-blue-500 hover:text-blue-400"
                              >
                                {title}
                              </span>
                            </TooltipWrap>
                          ) : (
                            <a
                              href={link}
                              target="_blank"
                              className=" text-lg text-blue-500 hover:text-blue-400 "
                            >
                              {title}
                            </a>
                          )}
                          <br />
                          <h1 className=" text-sm ">
                            {description?.length > 40
                              ? description?.slice(0, 40) + "..."
                              : description}
                          </h1>
                        </div>
                        <div
                          className={` relative  duration-200 overflow-hidden bg-slate-900  justify-center gap-x-4 flex items-center
                    ${DialogShow == _id ? "h-16" : "h-0"}
                    `}
                        >
                          <h1
                            onClick={() => {
                              setDialogShow("");
                              setInputKey("");
                            }}
                            className=" absolute right-1 top-2 duration-300 cursor-pointer hover:bg-slate-800 rounded"
                          >
                            <X className=" h-4" />
                          </h1>
                          {/* <h1>Enter key</h1> */}
                          <Input
                            placeholder="Enter the passkey"
                            value={InputKey}
                            onChange={(e) => setInputKey(e.target.value)}
                            className=" h-8 w-40 px-2"
                          />
                          <Button
                            onClick={() => {
                              if (!InputKey) return;
                              handleValidate({ _id, lock });
                            }}
                            className={`h-8 ${
                              InputKey.length == 0
                                ? "  cursor-not-allowed brightness-75"
                                : " "
                            }`}
                          >
                            Submit
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <Link href={"/"} className={`${props?.view ? "hidden" : "block"}`}>
        <Button className=" flex items-center gap-x-2 fixed bottom-10  w-fit rounded-md   left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <span>Crete your Linkhub</span>
          <Stars className=" h-4 w-4 translate-y-[1px]" />
        </Button>
      </Link>
    </>
  );
};

export default LinkTreePage;
