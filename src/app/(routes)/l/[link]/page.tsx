"use client";
import NotFound from "@/app/not-found";
import { useToast } from "@/components/ui/use-toast";
import { useZustandStore } from "@/zustand/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GetDataByLink = ({ params: { link } }) => {
  const [Error, setError] = useState(false);
  const { toast } = useToast();
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  const fetchLinkData = async () => {
    try {
      const res = await axios.get(`/api/getlinks?shortLink=${link}`);
      const { user, shortLink, error, noLink, message } = res.data;
      console.log(res.data);

      if (error) {
        return toast({
          variant: "destructive",
          title: "Error Occured",
          description: message,
        });
      } else if (noLink) {
        return setError(true);
      }
      if (user && shortLink) router.push(`/@${user}?ref=${shortLink}`);
     
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchLinkData();
  }, [link]);

  return (
    <>
      {loader ? (
        <div className="text-center gap-x-3 mt-20 text-xl flex items-center justify-center">
          <span>Loading Data...</span>
          <h1 className="h-5 w-5 rounded-full border-2 border-t-transparent border-white animate-spin"></h1>
        </div>
      ) : (
        Error && <NotFound header={"Link Not Found"} />
      )}
    </>
  );
};

export default GetDataByLink;
