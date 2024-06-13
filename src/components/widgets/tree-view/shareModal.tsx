import {
  FacebookIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
  WhatsppIcon,
} from "@/components/tools/svg";
import { Button } from "@/components/ui/button";
import { siteMetadata } from "@/app/data/siteMetaData";
import {
  ChevronRight,
  MessageCircle,
  MessageCircleDashed,
  MessageSquareWarning,
  X,
} from "lucide-react";
import React, { useRef } from "react";

const url = process.env.NEXT_PUBLIC_SITE_URL;
const siteName = siteMetadata?.siteUrl;

const ShareModal = ({
  setShareView,
  ShareView,
}: {
  ShareView: object | string;
  setShareView: (item: string) => void;
}) => {
  const profileURL = url + "/@" + ShareView?.user;
  const shortURL = url + "/l/" + ShareView?.shortLink;
  const shareUrl = ShareView?.shortLink ? shortURL : profileURL;
  const copyRef = useRef();

  const SocialData = [
    {
      icon: TwitterIcon,
      title: "Share on X",
      link: `https://x.com/intent/tweet?text=Check%20out%20this%20${siteName}!%20-%20${shareUrl}`,
    },
    {
      icon: WhatsppIcon,
      title: "Share via WhatsApp",
      link: `https://wa.me/?text=Check%20out%20this%20${siteName}!%20-%20${shareUrl}`,
    },
    {
      icon: MailIcon,
      title: "Share via Email",
      link: `mailto:?subject=%20Check%20out%20this${siteName}!%20&body=%20Check%20out%20this ${siteName}!%20-%20${shareUrl}`,
    },
    {
      icon: FacebookIcon,
      title: "Share on Facebook",
      link: `https://www.facebook.com/sharer.php?u=${shareUrl}`,
    },
    {
      icon: LinkedinIcon,
      title: "Share on Linkedin",
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    },
  ];

  const CopyURL = (url: string) => {
    window.navigator.clipboard.writeText(url);
    if (copyRef.current) copyRef.current.innerText = "Copied";

    setTimeout(() => {
      if (copyRef.current) copyRef.current.innerText = "Copy";
    }, 1000);
  };

  return (
    <div
      className={`top-0 left-0 fixed h-screen bg-slate-900/70 flex justify-center items-center w-screen  z-[9999] ${
        ShareView ? "visible " : "invisible"
      }`}
    >
      <div
        className={`bg-white font-semibold text-black w-96 px-5 relative rounded-3xl h-[calc(100vh-100px)] ${
          ShareView ? "visible scale-100 duration-200" : "invisible scale-0"
        }`}
      >
        <span className="absolute right-5 top-6">
          <X
            onClick={() => setShareView("")}
            className="cursor-pointer text-slate-500 hover:text-slate-800 duration-200 rounded-full"
          />
        </span>
        <h1 className="text-center my-6  ">
          Share this {ShareView?.shortLink ? "Link" : "Page"}
        </h1>
        {SocialData.map((item, i) => {
          return (
            <a
              href={item.link}
              target="_blank"
              key={i}
              className=" group  cursor-pointer hover:bg-slate-100 flex justify-between p-4 rounded-lg "
            >
              <div className="flex justify-start  items-center gap-x-2 text-black">
                <span>{item.icon}</span>
                <span className={`${item.title == "Share on X" ? "ml-1" : ""}`}>
                  {item.title}
                </span>
              </div>
              <span>
                <ChevronRight className="group-hover:translate-x-1 duration-300 text-slate-500" />
              </span>
            </a>
          );
        })}
        <div
          onClick={() => CopyURL(shareUrl)}
          className=" mt-5 mb-3 border border-slate-200 rounded-lg duration-200 hover:bg-slate-100 h-16 mx-3  w-full flex items-center justify-around"
        >
          <h1>{shareUrl.slice(7)}</h1>
          <Button ref={copyRef} variant="secondary" className=" w-20">
            Copy
          </Button>
        </div>
        <div className=" p-4">
          <h1>Create your own Linkhub</h1>
          <div className=" flex justify-center gap-x-5 mb-3">
            <Button variant="secondary" className=" mt-4">
              Sign up free
            </Button>
            <Button className=" mt-4 border">Learn more</Button>
          </div>
          <Button className=" border-t border-t-slate-400 w-full  flex items-center gap-x-2">
            <MessageSquareWarning className=" h-4 w-4" />
            <span>Report this Linkhub</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
