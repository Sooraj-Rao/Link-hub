import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className=" flex  h-[20rem] flex-col items-center">
      <h1 className="scroll-m-20 my-20 text-center  text-4xl font-extrabold tracking-tight lg:text-7xl">
        One hub for all links
      </h1>
      <h4 className=" mb-3">Start creating your link hub</h4>
      <Link href={"/auth/login"}>
        <Button>Get started</Button>
      </Link>
    </div>
  );
};

export default Hero;
