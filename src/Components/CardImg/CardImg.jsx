import React from "react";
export default function CardImg({ allData }) {
  if (!allData || allData.length === 0) {
    return <p>Loading...</p>;
  }
  const firstArticle = allData[0];
  return (
    <>
      <div className="cardImgParent">
        <img src={firstArticle.urlToImage} alt="this is image" />
        {/* <p>{firstArticle.author}</p> */}
        <div className="mediaOne d-flex justify-content-around align-items-center p-2 mt-4">
          <div>
            <h5>{firstArticle.title}</h5>
            <p>{firstArticle.description}</p>
          </div>
          <div className="divofsmallimg p-2 ms-3">
            <img
              src={firstArticle.urlToImage}
              alt="small img of the card  image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
