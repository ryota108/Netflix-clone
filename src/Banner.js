import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import classes from "./Banner.module.css";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  function truncate ( str,n){
    return str?.length > n ? str.substr(0,n-1) + "...":  str;
  }

  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
      )`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.bannerContents}>
        <h1 className={classes.bannerTitle}>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className={classes.bannerButtons}>
       <button className={classes.bannerButton}>Play</button>
       <button className={classes.bannerButton}>My List</button>
        </div>

        <h1 className={classes.bannerDescription}>
          {truncate(movie?.overview,150)}
        </h1>
      </div>
      <div className={classes.bannerFadeBottom}/>
    </header>
  );
}

export default Banner;
