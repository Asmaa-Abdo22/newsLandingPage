import React from "react";

export default function CardBoth({ cardBothData }) {
  if (!cardBothData || cardBothData.length === 0) {
    return <p>Loading...</p>;
  }
  let secondObj = cardBothData[1];
  return (
    <>
      <div className="cardBoth d-flex justify-content-between align-items-center p-2 gap-2  mb-2">
        <p className="w-100 me-2">{secondObj.description}</p>
        <div>
          <img src={secondObj.urlToImage} alt="card both image" className="w-100" />
        </div>
      </div>
    </>
  );
}
