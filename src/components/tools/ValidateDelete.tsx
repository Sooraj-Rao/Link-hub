import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import SpinLoader from "@/app/utils/anim/loader";

const DeleteDialog = ({
  DeleteModalShow,
  setDeleteModalShow,
  fetchLinks,
}: {
  DeleteModalShow: string;
  setDeleteModalShow: (val: string) => void;
  fetchLinks: () => void;
}) => {
  const [loader, setloader] = useState(false);

  const Validate = (val: boolean) => {
    if (val) {
      handleDeleteLink(DeleteModalShow);
    } else {
      setDeleteModalShow("");
    }
  };

  const handleDeleteLink = async (id: string) => {
    try {
      if (!id) {
        console.log("Failed to delete!");
      } else {
        setloader(true);
        const res = await axios.post("/api/deleteLink", {
          linkId: id,
        });
        const { error, message } = res.data;
        if (error) {
          console.log(message);
        } else {
          console.log(message);
          setDeleteModalShow("");
          fetchLinks();
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloader(true);
    }
  };

  return (
    <div>
      <AlertDialog open={DeleteModalShow}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => Validate(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => Validate(true)}>
              {loader ? (
                <>
                  Deleting.. 
                  <SpinLoader  />
                </>
              ) : (
                "Continue"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteDialog;
