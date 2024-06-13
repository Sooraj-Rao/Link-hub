import LinkTreePage from "@/app/(routes)/[username]/page";
import React from "react";

const TreeMobileView = ({ linkData }) => {
  return (
    <div className=" h-[calc(100vh-150px)] w-96 border">
      {/* <div>
        {linkData?.length!=0 ? (
          linkData?.map((item, i) => {
            return (
              <div key={i}>
                <a href={item.link}>{item?.title}</a>
              </div>
            );
          })
        ) : (
          <h1>No data</h1>
        )}
      </div> */}
      <LinkTreePage username="@soorajrao" view={true} />
    </div>
  );
};

export default TreeMobileView;
