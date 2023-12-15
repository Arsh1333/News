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
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=d7c4f4afd3db4a1c8bd13ef56b92040e"
      )
      .then((res) => {
        console.log(res.data);
        setMyData(res.data.articles);
      });
  }, []);
  return (
    <>
      <div className="hero">
        <nav className="nav">
          <div className="logo">Newzy</div>
          <ul>
            <li className="today">Today</li>
            <li>Explore</li>
          </ul>
          <button>Signup</button>
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
      <div className="news">
        <ul>
          {/*myData.map((i) => {
            return (
              <li key={i.title}>
                <img src={i.urlToImage} alt="" />
              </li>
            );
          })*/}
        </ul>
      </div>
    </>
  );
}

export default App;
