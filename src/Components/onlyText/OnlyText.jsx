import React from "react";

export default function OnlyText({allData}) {
    if (!allData || allData.length === 0) {
        return <p>Loading...</p>;
      }
      const newdataa= allData.slice(0,1)
  return (
    <>
     {newdataa.map((item,index)=> <>
        <div key={index} className="onlyText p-2 w-50 bg-white my-2">
        <h3>
         {item.title}
        </h3>
        <p className="my-2">
        {item.description}
        </p>
        <p>
        {item.author}
        </p>
      </div>
     </>)}
    </>
  );
}
