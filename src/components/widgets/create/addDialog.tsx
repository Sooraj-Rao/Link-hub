"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import axios from "axios";
import { Plus } from "lucide-react";
import { useState } from "react";

export type t_InputData = {
  link: string;
  title: string;
  description: string;
  lock: string;
  isLocked?: boolean;
};

const EmptyInputData = {
  link: "",
  title: "",
  description: "",
  lock: "",
  isLocked: false,
};

const AddDialog = ({ setAddDialogShow, fetchLinks, AddDialogShow }) => {
  const [position, setPosition] = useState("Visible");
  const [InputData, setInputData] = useState<t_InputData>(EmptyInputData);
  const [loader, setloader] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputData({ ...InputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloader(true);
    try {
      const res = await axios.post("/api/createLink", InputData);
      console.log(res.data);
      setAddDialogShow(false);
      setInputData(EmptyInputData);
      fetchLinks();
    } catch (error) {
      console.log(error);
    } finally {
      setloader(false);
    }
  };

  return (
    <Dialog open={AddDialogShow}>
      <DialogTrigger>
        <Button
          type="button"
          onClick={() => setAddDialogShow(true)}
          className=" "
        >
          {" "}
          Add Links
          <Plus className=" h-4" />
        </Button>
      </DialogTrigger>
      <form onSubmit={handleSubmit}>
        <DialogContent
          setAddDialogShow={setAddDialogShow}
          className="sm:max-w-[425px]"
        >
          <DialogHeader>
            <DialogTitle>Add a Link</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Title</Label>
              <Input
                name={"title"}
                value={InputData.title}
                onChange={handleChange}
                className="col-span-3 duration-200"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">URL (Link)</Label>
              <Input
                name={"link"}
                value={InputData.link}
                onChange={handleChange}

                className="col-span-3 duration-200"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Description</Label>
              <Input
                name={"description"}
                value={InputData.description}
                onChange={handleChange}
                className="col-span-3 duration-200"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 ">
              <Label className="text-right">Password to open</Label>
              <Switch
                onCheckedChange={() =>
                  setInputData({ ...InputData, isLocked: !InputData.isLocked })
                }
                id="lock"
              />
              <Label htmlFor="lock">
                {InputData.isLocked ? "Locked" : "No lock"}
              </Label>

              <Input
                name={"lock"}
                value={InputData.lock}
                onChange={handleChange}
                placeholder="Enter some password"
                className={`col-span-3  duration-100
                ${InputData.isLocked ? " h-fit" : " h-0 transform -translate-y-4 -z-10 invisible   "}
                `}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSubmit} type="submit" className=" flex">
              {loader ? (
                <>
                  <h1>Creating.. </h1>
                  <h1 className=" h-4 w-4 border-2 rounded-full border-t-transparent animate-spin ml-2 "></h1>
                </>
              ) : (
                <h1>Create Link</h1>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddDialog;
