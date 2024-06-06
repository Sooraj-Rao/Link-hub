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
import axios from "axios";
import { Plus } from "lucide-react";
import { useState } from "react";

export type t_InputData = {
  link: string;
  title: string;
  description: string;
};

const AddDialog = (props) => {
  const [position, setPosition] = useState("Visible");
  const [InputData, setInputData] = useState<t_InputData>({
    link: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputData({ ...InputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/createLink", InputData);
    console.log(res.data);
    props.setAddDialogShow(false);
    props.fetchLinks();
  };

  return (
    <form >
      <Dialog>
        <DialogTrigger>
          <Button
            type="button"
            onClick={() => props.setAddDialogShow(true)}
            className=" "
          >
            {" "}
            Add Links
            <Plus className=" h-4" /> 
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add a Link</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                name={"title"}
                value={InputData.title}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                URL (Link)
              </Label>
              <Input
                name={"link"}
                value={InputData.link}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                name={"description"}
                value={InputData.description}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSubmit} type="submit">Create Link</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default AddDialog;
