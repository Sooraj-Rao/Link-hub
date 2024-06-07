import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { LockKeyhole, X } from "lucide-react";
import { Button } from "../ui/button";
import { UpdateLink } from "@/app/actions/UpdateLinks";
import SpinLoader from "@/app/utils/anim/loader";
import { Switch } from "../ui/switch";

const LockDialog = ({
  id,
  Drawer,
  lock,
  setDrawer,
  fetchLinks,
}: {
  id: string;
  Drawer: string;
  lock: string;
  setDrawer: (val: string) => void;
  fetchLinks: () => void;
}) => {
  const [newLock, setNewLock] = useState(lock || "");
  const [loader, setloader] = useState(false);
  const [isLocked, setisLocked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newLock) return console.log("Lock cannot be empty");
    try {
      setloader(true);
      let neww = !isLocked ? "" : newLock;
      const { error, message } = await UpdateLink({ id, newLock: neww });
      if (error) {
        console.log(message);
      } else {
        console.log(message);
        fetchLinks();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloader(false);
      setDrawer("");
    }
  };

  useEffect(() => {
    if (lock) {
      setisLocked(true);
      setNewLock(lock);
    }
  }, [lock]);


  return (
    <form
      onSubmit={handleSubmit}
      className={` duration-300 relative w-full bg-gray-900 border-t 
  ${Drawer == id ? "h-fit p-4" : "h-0 overflow-hidden "}
  `}
    >
      <h1 onClick={() => setDrawer("")} className="  absolute right-2 top-2  ">
        <X className=" h-5 w-5  rounded-md  text-slate-300 hover:bg-slate-600  cursor-pointer duration-300" />
      </h1>

      <h1 className=" text-xl flex items-center gap-x-2">
        <span className=" font-semibold">Secure your Link</span>
        <span>
          <LockKeyhole className=" h-5 " strokeWidth={2.5} />
        </span>
      </h1>
      <div className=" my-2 flex gap-x-3 items-center">
        <Label className="text-right">
          {isLocked ? "Link is Locked" : "Lock your link"}
        </Label>
        <Switch
          checked={isLocked}
          onCheckedChange={() => {
            setisLocked(!isLocked);
          }}
        />
      </div>
      <div>
        <Label
          className={`text-left 
        `}
        >
          {isLocked
            ? !lock && "Enter password or pass key to encrypt this link"
            : ""}
          {lock &&isLocked&& "Password for opening this link"}
        </Label>
        <div className=" flex items-center  gap-x-4 mt-2">
          <Input
            value={newLock}
            onChange={(e) => setNewLock(e.target.value)}
            className={` duration-200  w-60   ${
              !isLocked ? "hidden" : "block"
            } `}
            placeholder="Enter here.."
          />
          <Button
            className={` hidden
          ${lock ? !isLocked && "block" : isLocked && "block"}
          ${lock !== newLock && "block" }
          `}
          >
            {loader ? (
              <div className=" flex items-center gap-x-2">
                Saving..
                <SpinLoader />
              </div>
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LockDialog;
