import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { LockKeyhole } from "lucide-react";
import { Button } from "../ui/button";

const LockDialog = ({ id, Drawer }: { id: string; Drawer: string }) => {
  const [lock, setLock] = useState("");

const handleSubmit=()=>{
    try {
        
    } catch (error) {
     console.log(error);
        
    }
}

  return (
    <form onSubmit={handleSubmit}
      className={` duration-300 w-full bg-slate-800 
  ${Drawer == id ? "h-40 p-4" : "h-0 overflow-hidden "}
  `}
    >
      <h1 className=" text-xl  mb-5 flex items-center gap-x-2">
        <span className=" font-semibold">Secure your Link</span>
        <span>
          <LockKeyhole className=" h-5 " strokeWidth={2.5} />
        </span>
      </h1>
      <Label className="text-right ">
        Enter password or pass key to encrypt this link
      </Label>
      <div className=" flex items-center  gap-x-4 mt-2">
        <Input
          value={lock}
          onChange={(e) => setLock(e.target.value)}
          className=" duration-200  w-60"
          placeholder="Enter here.."
        />
        <Button>Save</Button>
      </div>
    </form>
  );
};

export default LockDialog;
