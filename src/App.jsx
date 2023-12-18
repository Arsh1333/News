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
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=d7c4f4afd3db4a1c8bd13ef56b92040e"
      )
      .then((res) => {
        console.log(res.data);
        setMyData(res.data.articles);
      })
      .catch((error) => {
        console.log(error);
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
                    <p className="p-display">{i.author}</p>
                    <p className="p-display">{i.source.name}</p>
                    <p className="p-display">{i.content}</p>
                    <p className="read">
                      <a href={i.url}>Read More</a>
                    </p>
                  </div>
                  <div className="content-image-container">
                    <img
                      className="content-img"
                      src={
                        i.urlToImage ||
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACUCAMAAADMOLmaAAAAMFBMVEXp7vG6vsHs8fTBxcjl6u28wcTEyMve4+bM0NO1uLu3u77Q1NfY3eDh5unT2Nvu9PdnWQIZAAABxElEQVR4nO3Z63KrIBRAYUEUBUne/22rqRrUmEKmZTud9f07zXG6ZuOFmqoCAAAAAAAAAAAAAAAXpiuTbTyooKFtsrVDuUTtnVPZnCuWqG2f3/cQShV24wSbNtM0xVuhIep6DDQ6k+mV68oEzoW5R1EYiwq1sYMNSWeXTKG+NcqpxqccJVPYfd8WXZ1wlEShHpb7ovM/L7RIYbPeihMuHIlCEz0t7GGIwwUKQ/Rw3j9y777vtj8SuVLOZzjuLfY9Iudhuw6x2f0PP33iNlMUmeG6zP12kb8D1bZI5n44qMes9nsWv5THSULPlNCq3rV28/HdP6+gaKHFdg660seLREWJ4oWHD/32D4R1ilcp3Ac+p3iVwkPgmihZqG07/+v+InBZaMnC4Nx8ab8MnKcoWGinLU5tzgPnfYZYYZgjTpZYvtAuFXV3/h5CsFDb5y72zYsSwcKQ9v5GrjCa4DULQ1qfXKFJfkUnVZh4EkoWpgZSeF74j1a5lrqWbbLqOjvYcxTGpkIVct+025KFj31W7ldSruC3FdOCfST/1PiUvr3bDJ5xL14y/l2i7epsXdp3Br+VWPB3AQAAAAAAAAAAAACAIr4AdboYA+fBeQsAAAAASUVORK5CYII="
                      }
                      alt="Image not found"
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
