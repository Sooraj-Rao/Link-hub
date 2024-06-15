import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound({ header }: { header: string }) {
  return (
    <div className="  mt-20  flex flex-col items-center">
      <h2 className=" text-5xl my-4">{header ? header : "Page Not Found"}</h2>
      <p className=" my-4 text-lg">
        Could not find requested {header ? header?.split(" ")[0] : "resource"}
      </p>
      <Button className="  pr-4 pl-2 mt-10">
        <Link href="/" className=" group flex items-center  ">
          <ChevronLeft className=" group-hover:-translate-x-1 h-5 w-5 translate-y-[1px]  duration-200" />
          <h1>Return Home</h1>
        </Link>
      </Button>
    </div>
  );
}
