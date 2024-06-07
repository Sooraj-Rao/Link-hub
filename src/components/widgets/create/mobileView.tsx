import React from "react";

const TreeMobileView = ({ linkData }) => {
  
  return (
    <div className=" h-[400px] w-96 bg-slate-600">
      <div>
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
      </div>
    </div>
  );
};

export default TreeMobileView;
