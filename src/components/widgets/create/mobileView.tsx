import React from "react";

const TreeMobileView = ({ UserData }) => {
  
  return (
    <div className=" h-[400px] w-96 bg-slate-600">
      <div>
        {UserData?.linktree ? (
          UserData.linktree.map((item, i) => {
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
