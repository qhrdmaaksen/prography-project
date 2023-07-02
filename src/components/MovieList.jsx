import React, { useEffect, useState } from "react";
import classes from "./MovieList.module.css";
import axios from "axios";

export const MovieList = () => {
  const [movieData, setMovieData] = useState(null);

  // 컴포넌트가 처음 나타났을 때 한번만 실행
  useEffect(() => {
    movieFetchData();
  }, []);

  const movieFetchData = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          "https://yts.mx/api/v2/list_movies.json?limit=50"
        );
        setMovieData(response.data.data.movies); // 가져온 데이터를 state 로 설정
        resolve(response.data.data.movies); // 응답 데이터로 promise 해결
      } catch (error) {
        console.error("Movie API error ::", error);
        reject(error); // 오류가 있는 promise 를 거부합니다.
      }
    });
  };

  return (
    <div className={classes.container}>
      <h1>MovieList</h1>
      {movieData ? (
        <ul className={classes.movieListULtag}>
          {movieData.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
