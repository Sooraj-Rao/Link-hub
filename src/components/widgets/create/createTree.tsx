"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  Brush,
  BrushIcon,
  Delete,
  DeleteIcon,
  Dessert,
  Edit,
  Info,
  LucideDelete,
  MagnetIcon,
  Plus,
  Share,
  Star,
  StarHalf,
  Stars,
  TreePine,
  WrapText,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import TreeMobileView from "./mobileView";
import AddDialog from "./addDialog";
import axios from "axios";

const CreateTree = () => {
  const [AddDialogShow, setAddDialogShow] = useState(false);
  const [UserData, setUserData] = useState("");
  const [loader, setloader] = useState(true);

  const fetchLinks = async () => {
    try {
      const res = await axios.get("/api/getlinks");
      const { error, message, linkData } = res.data;
      if (error) {
        console.log(message);
      } else {
        setUserData(linkData);
      }
    } catch (error) {
      console.log("Failed to get links");
    } finally {
      setloader(false);
    }
  };
  useEffect(() => {
    fetchLinks();
  }, []);

  const DialogProps = {
    AddDialogShow,
    setAddDialogShow,
    fetchLinks,
  };

  return (
    <div className=" flex justify-between">
      <div>
        <div className=" bg-slate-900 rounded-md py-5 flex justify-between gap-x-14 items-center px-10">
          <h1>
            Your Linktree is live:
            <a
              href="https://linktr.ee/SoorajRao"
              className=" underline text-blue-500 ml-1 cursor-pointer"
            >
              https://linktr.ee/SoorajRao
            </a>
          </h1>
          <Button>Copy Linktree URL</Button>
        </div>
        <div className=" mt-10 flex justify-between items-center">
          <AddDialog {...DialogProps} />
          <Button>
            Create custom tree <Stars className=" h-4 ml-1" />
          </Button>
        </div>

        <div className=" mt-10">
          <h1
            className={` text-xl mb-4 hidden ${
              !loader && UserData.linktree.length != 0 && "block"
            }`}
          >
            Here is your link-tree{" "}
          </h1>
          {loader ? (
            <h1>Loading...</h1>
          ) : UserData?.linktree?.length != 0 ? (
            UserData?.linktree?.map((item, i) => {
              return (
                <div
                  key={i}
                  className=" w-full bg-slate-900 my-2 p-4 rounded-md"
                >
                  <h1>{item?.title}</h1>
                  <a href={item?.link} className=" underline text-blue-500">
                    {item?.link}
                  </a>
                  <div>
                    <Edit />
                  </div>
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
        <TreeMobileView UserData={UserData} />
      </div>
    </div>
  );
};

export default CreateTree;
