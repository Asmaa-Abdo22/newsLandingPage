import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CardImg from "../CardImg/CardImg";
import CardBoth from "../CardBoth/CardBoth";
import axios from "axios";
import OnlyImg from "../onlyImg/OnlyImg";
import OnlyText from "../onlyText/OnlyText";
import SideBar from "../sideBar/SideBar";
export default function Layout() {
  const [allData, setallData] = useState(null);
  async function getData() {
    try {
      const { data } = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-12-23&sortBy=publishedAt&apiKey=56fd3d86847f4852ac1d783fb60f3da5"
      );
      const result = data.articles;
      console.log("Fetched Data:", result);
      setallData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (allData) {
      console.log("Updated allData:", allData);
    }
  }, [allData]);

  return (
    <>
      {/* --------Nav 1-------- */}
      <nav className="navbar navbar-expand-lg bg-black ">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            NEWSLETTER
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <form className="d-flex ms-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search For Headlines"
                aria-label="Search"
              />
              <button className="btn btn-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* --------Nav 2-------- */}
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to={"politics"}>
                  Politics
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active-link" to={"world"}>
                  World
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"economy"}>
                  Economy
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"science & Tech"}>
                  Science & Tech
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"business"}>
                  Business
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"travel"}>
                  Travel
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"climate"}>
                  Climate
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"lifestyle"}>
                  Lifestyle
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"food"}>
                  Food
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"sports"}>
                  Sports
                </Link>
              </li>
            </ul>

            <div className="d-flex ms-auto text-white">
              <span>13:40 </span>
              <span className="ms-3">
                <i className="fa-solid fa-cloud-rain"></i> 24 °C
              </span>
            </div>
          </div>
        </div>
      </nav>
      {/* ---------API---------- */}
      {/* ----------------container one--------------- */}
      <div className="container bg-light  ">
        <div className="row my-4">
          <div className="col-md-6  ">
            <CardImg allData={allData} />
          </div>

          <div className="col-md-6 ">
            <div>
              <CardBoth cardBothData={allData} />
            </div>
            <>
              {allData && allData.length > 3 ? (
                <div className= "mediaOne d-flex justify-content-around align-items-center p-2 gap-3">
                  <img
                    src={allData[3].urlToImage}
                    alt={allData[3].title}
                    className="w-50"
                  />
                  <p>{allData[3].description}</p>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </>
          </div>
        </div>
      </div>
      {/* ----------------container two--------------- */}
      <div className="container p-4">
        <div className="row">
          <div className="col-md-8 bg-light p-4">
            <div>
              <h2 className="latestNews">Latest News</h2>
              <div className="latesNewsDiv d-flex justify-content-between align-align-items-center gap-2">
                <OnlyImg allData={allData} />
                <OnlyImg allData={allData} />
              </div>
              <div className=" d-flex justify-content-between align-align-items-center gap-2">
                <OnlyText allData={allData} />
                <OnlyText allData={allData} />
              </div>
              <div className="latesNewsDiv d-flex justify-content-between align-align-items-center gap-2">
                <OnlyImg allData={allData} />
                <OnlyImg allData={allData} />
              </div>
              <div className="latesNewsDiv d-flex justify-content-between align-align-items-center gap-2">
                <OnlyText allData={allData} />
                <OnlyImg allData={allData} />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <h4 className="mb-3">Trending Headlines </h4>
              <SideBar cardBothData={allData} />
            </div>
          </div>
        </div>
      </div>
    <div className="m-auto w-50 mb-3">
    <button className="btn btn-success ">view more</button>
    </div>
     
    
      {/* ----------------footer--------------- */}
      <footer className="bg-black text-white  d-flex justify-content-around align-items-center p-2 flex-wrap">
        <h4> NEWSLETTE</h4>
        <div className="spanfooter my-2">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Copyright Policy</span>
          <span>Data Policy</span>
          <span>Accessibility</span>
          <span>Help</span>
          <p className="text-center mt-2">
            © 2023 Newsletter, All rights reserved
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center p-2">
          <div>
            <p>Politics</p>
            <p>World</p>
            <p>Economy</p>
            <p>Science&Tech</p>
            <p>Business</p>
          </div>
          <div className="ms-4">
            <p>Travel</p>
            <p>Climate</p>
            <p>Lifestyle</p>
            <p>Food</p>
            <p>Sports</p>
          </div>
        </div>
      </footer>
    </>
  );
}
