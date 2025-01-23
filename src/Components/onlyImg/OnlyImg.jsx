import React from 'react'

export default function OnlyImg({allData}) {
    if(!allData || allData.length===0){
        return <p>Loading...</p>;
    }
    const data = allData.slice(0,1);
  return <>
  <div className='w-50 mt-2'>
  {data.map((item ,index)=> <img key={index} src={item.urlToImage} alt="only img" className='w-100' />)}
  </div>

  </>
}
