"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { fetchLinks } from "@/components/widgets/create/createTree";
import ShareModal from "@/components/widgets/tree-view/shareModal";
import { TooltipWrap } from "@/helpers/TooltipParent";
import axios from "axios";
import { EllipsisVertical, Lock, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Page = ({ params: { user } }: { params: { user: string } }) => {
  const [linkData, setLinkData] = useState([]);
  const [loader, setloader] = useState(true);
  const [ValidLink, setValidLink] = useState([]);
  const [DialogShow, setDialogShow] = useState("");
  const [InputKey, setInputKey] = useState("");
  const [ShareView, setShareView] = useState("");
  const { toast } = useToast();

  const fetchLinks = async () => {
    try {
      const res = await axios.get(`/api/getlinks?user=${user}`);
      const { error, message, links } = res.data;
      const onlyLinks = links?.map((item) => {
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

  const handleValidate = ({ _id, lock }: { _id: string; lock: string }) => {
    if (InputKey == lock) {
      setValidLink([...ValidLink, _id]);
      setDialogShow("");
      linkData?.map((item, i) => {
        if (item._id == _id) {
          item.lock = "";
          return item;
        }
      });
      toast({
        title: "Link Unlocked!",
        description: "",
      });
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
  }, [user]);

  return (
    <div className=" flex relative justify-center mt-4  ">
      <div className=" absolute top-10 bg-slate-700 flex items-center justify-center rounded-full  h-10 w-10 right-1/3 ">
        <TooltipWrap text={"Share this page"}>
          <button
            onClick={() => setShareView({ user })}
            className=" hover:text-slate-400 "
          >
            <EllipsisVertical />
          </button>
        </TooltipWrap>
      </div>
      <ShareModal setShareView={setShareView} ShareView={ShareView} />
      <div className=" w-[30rem]   flex flex-col items-center p-4 rounded-md">
        <Avatar className=" h-16 w-16">
          <AvatarImage
          // src={`https://avatar.iran.liara.run/public/boy?username=${user}`}
          />
          <AvatarFallback>
            <span className=" capitalize text-3xl">{user.split("")[0]}</span>
          </AvatarFallback>
        </Avatar>

        <h1 className=" text-center mt-4 text-2xl capitalize ">@{user}</h1>
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
          ) : linkData.length != 0 ? (
            linkData?.map((item, i) => {
              const {
                link,
                title,
                description,
                _id,
                lock,
              }: {
                link: string;
                title: string;
                description: string;
                _id: string;
                lock: string;
              } = item;
              item.user = user;
              return (
                <div key={_id} className="my-5">
                  <div className=" relative text-center    p-3 w-full bg-gray-800 rounded-md">
                    <TooltipWrap text={"Share this link"}>
                      <button
                        onClick={() => setShareView(item)}
                        className=" hover:text-slate-400 duration-300 cursor-pointer absolute right-0  transform translate-y-[-50%] translate-x-[-50%] top-[50%]"
                      >
                        <EllipsisVertical />
                      </button>
                    </TooltipWrap>
                    <span className={`${lock ? "block" : "hidden"}`}>
                      <TooltipWrap text={"This link is protected"}>
                        <h1 className=" hover:text-slate-400 duration-300 cursor-pointer absolute left-5  transform translate-y-[-50%] translate-x-[-50%] top-[50%]">
                          <Lock className=" h-5" />
                        </h1>
                      </TooltipWrap>
                    </span>
                    {lock ? (
                      <TooltipWrap text={"Click here to unlock"}>
                        <span
                          onClick={() => setDialogShow(_id)}
                          className=" cursor-pointer text-lg hover:text-slate-400 "
                        >
                          {title}
                        </span>
                      </TooltipWrap>
                    ) : (
                      <a
                        href={link}
                        target="_blank"
                        className=" text-lg hover:text-slate-400 "
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
              );
            })
          ) : (
            <h1>No Data</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
