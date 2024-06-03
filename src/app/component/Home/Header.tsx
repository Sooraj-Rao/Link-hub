import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/toggle-theme";

const Header = () => {
  return (
    <div className=" flex justify-between px-4  items-center sm:px-10  py-3  shadow-slate-200 dark:shadow-none border-b-2  poppins-medium ">
      <Link
        href={"/"}
        className="scroll-m-20  flex items-center gap-x-3  w-full font-bold  pb-2 text-3xl  tracking-tight first:mt-0"
      >
        {/* <Image
                width={100}
                height={100}
                src={'https://imgs.search.brave.com/K9G993q1MsSQyvKEroRTeBgk21CRrKoIY3cliwRJhhU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5icmFuZGZldGNo/LmlvL2lkX3ROSW0w/NU4vaWRmLWVsN1pL/SS5zdmc_dXBkYXRl/ZD0xNjY4MDcwNDE4/NTEx.svg'}
                className="sm:h-7 h-5  sm:w-[11rem] w-[9rem] dark:hidden block"
                alt=""
                />
        <Image
        width={100}
        height={100}
            src={'https://imgs.search.brave.com/K9G993q1MsSQyvKEroRTeBgk21CRrKoIY3cliwRJhhU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5icmFuZGZldGNo/LmlvL2lkX3ROSW0w/NU4vaWRmLWVsN1pL/SS5zdmc_dXBkYXRl/ZD0xNjY4MDcwNDE4/NTEx.svg'}
          className=" sm:h-7 h-5  sm:w-[11rem] w-[9rem] dark:block hidden "
          alt=""
        /> */}
        Link Tree
      </Link>
      <div className="  flex sm:gap-x-4 ">
        <ModeToggle />
        <a href={"https://github.com/Sooraj-Rao/link-Tree"} target="_blank">
          <Button
            variant="link"
            className=" py-2 px-4 border border-slate-400  dark:border-slate-800 rounded md:flex hidden items-center gap-x-1"
          >
            <Github />
            <span>Github</span>
          </Button>
        </a>
        <a href={"https://soorajrao.xyz"} target="_blank">
          <Button
            variant="link"
            className=" py-2 px-4 border  border-slate-400 dark:border-slate-800 rounded md:flex hidden items-center gap-x-1"
          >
            <ExternalLink />
            <span>Developer</span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
