import React from "react";

const LinkLoader = () => {
  return (
    <div>
      {Array(3)
        .fill("")
        .map((item, i) => {
          return (
            <div
              key={i}
              className=" w-full animate-pulse my-2 bg-slate-900 h-fit p-4 rounded-md"
            >
              <h1 className=" h-6 bg-slate-600    DarkLoader w-1/2 my-2 animate-pulse rounded-md"></h1>
              <h1 className=" h-4   my-2 bg-slate-600 DarkLoader w-3/4 animate-pulse rounded-md"></h1>
              <div className=" flex">
                <h1 className=" h-8 w-8 rounded-md mr-2  bg-slate-600 DarkLoader"></h1>
                <h1 className=" h-8 w-8 rounded-md mx-2  bg-slate-600 DarkLoader"></h1>
                <h1 className=" h-8 w-8 rounded-md mx-2  bg-slate-600 DarkLoader"></h1>
                <h1 className=" h-8 w-8 rounded-md mx-2  bg-slate-600 DarkLoader"></h1>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default LinkLoader;
