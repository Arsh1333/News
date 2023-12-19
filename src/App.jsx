import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import tetImg from "./assets/downloadtet.png";
import tgImg from "./assets/downloadtg.png";
import ftImg from "./assets/downloadft.png";
import wsgImg from "./assets/downloadwsj.png";
import smartphone from "./assets/downloadsmartphone.png";
import shift from "./assets/ShiftscreenDownloads.png";
import "./App.css";

function App() {
  const [myData, setMyData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://real-time-news-data.p.rapidapi.com/search",
      params: {
        query: "Elon Musk",
        country: "US",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": "87928b50bemsh0d22aea7bc9662ep16211ajsnb16d72ec89b4",
        "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => {
        setMyData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  //darkmode useEffect starts here
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#1f2937" : "#fff";
    //document.body.style.color = isDarkMode ? "#fff" : "#333";
    const logoElement = document.querySelector(".logoA");
    const dispalyElement = document.querySelector(".display");
    const expElement = document.querySelector(".exp-real");

    expElement.style.color = isDarkMode ? "#fff" : "#333";
    logoElement.style.color = isDarkMode ? "lightBlue" : "#333"; // 333nge color accordingly
    dispalyElement.style.backgroundColor = isDarkMode ? "#1f2937" : "#fff"; // 333nge color accordingly
  }, [isDarkMode]);

  const moonHandler = () => {
    setIsDarkMode((prev) => !prev); //NOT operator used for going dark and getting back to light mode after clicking twice
  };

  return (
    <>
      <div>
        <div className="hero">
          <nav className="nav">
            <div className="logo">
              <a href="/" className="logoA">
                Newzy
              </a>
            </div>
            <ul>
              <li className="today">
                <a href="#news">Today</a>
              </li>
              <li className="exp-real">Explore</li>
            </ul>
            <button className="moon-btn" onClick={moonHandler}>
              <ion-icon className="moon" name="moon-outline"></ion-icon>
            </button>
            <button className="button-sign">Signup</button>
          </nav>
          <div className="hero-content">
            <h1 className="main-head">Daily Briefs.</h1>
            <div className="hero-sub">
              <div className="main-head-sub">
                <h1> For Presidents and everyone else</h1>
                <p className="p-sub">
                  Created for the people , so they stay updated.{" "}
                  <span className="p-sub-span">From trusted sources.</span>
                </p>
                <div className="img-es">
                  <img className="img-sub" height="20px" src={tgImg} alt="" />
                  <img className="img-sub" height="20px" src={ftImg} alt="" />
                  <img
                    className="img-sub"
                    height="30px"
                    width="100px"
                    src={wsgImg}
                    alt=""
                  />
                  <img className="img-sub" height="20px" src={tetImg} alt="" />
                </div>
              </div>

              <div className="img-container">
                <img className="main-img-2" src={smartphone} alt="" />

                {/* <img className="main-img-1" src={shift} height="300px" alt="" />*/}
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div id="news">
          <h1 className="news-heading">Top News</h1>
          {/*<div className="card">
          <div className="card-img">
            <img src="" alt="" />
          </div>
          <div className="p-card">Lorem ipsum dolor sit amet.</div>
        </div>*/}
          {/*<ul>
          {myData.map((i) => {
            return (
              <li key={i.title}>
                <div className="display-li">
                  <div className="card">
                    <div className="card-img">
                      <img height="80px" src={i.urlToImage} alt="" />
                    </div>
                    <div className="p-card">{i.title}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>*/}
          <div className="display">
            {myData.map((i, index) => {
              return (
                <div className="display-content" key={index}>
                  <div className="content-text">
                    <h3 className="p-display-main">{i.title}</h3>
                    <p className="p-display">{i.title}</p>
                    <p className="p-display">{i.title}</p>
                    <p className="read">
                      <a href={i.link}>Read More</a>
                    </p>
                  </div>
                  <div className="content-image-container">
                    <img
                      src={i.photo_url}
                      height="200px"
                      width="100px"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <footer>
          <div className="footer-container">
            <h4>&copy;2023 Newzy inc.</h4>
            <a className="turn" href="/">
              Top
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
