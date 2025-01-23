import React from "react";

export default function SideBar({ cardBothData }) {
  if (!cardBothData || cardBothData.length === 0) {
    return <p>Loading...</p>;
  }
  let secondObj = cardBothData.slice(0, 8);
  return (
    <>
      {secondObj.map((item, index) => (
        <>
          <div
            key={index}
            className="cardBoth d-flex justify-content-between align-items-center p-2 gap-2  mb-2"
          >
            <div className="w-50">
              <img
                src={item.urlToImage}
                alt="card both image"
                className="w-100"
              />
            </div>
            <div className="w-45   text-center">
              <p className=" text-primary w-100">{item.title}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
