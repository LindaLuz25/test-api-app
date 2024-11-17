import React, { useState, useEffect } from "react";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/services";
import Movie from "../components/Movie";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    // llamar a las APIs, solo una vez
    const fetchMovies = async () => {
      try {
        const fetchPopular = await getPopularMovies();
        const fetchTop = await getTopRatedMovies();
        const fetchUpcoming = await getUpcomingMovies();
        setPopularMovies(fetchPopular?.results?.slice(0, 4));
        setTopRatedMovies(fetchTop?.results?.slice(0, 4));
        setUpcomingMovies(fetchUpcoming?.results?.slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold m-4">Popular Movies</h2>
      <div className="container mx-auto p-4 grid grid-cols-4 gap-6">
        {popularMovies.map((movie) => {
          return <Movie data={movie} key={movie.id} />;
        })}
      </div>
      <h2 className="text-3xl font-bold m-4">Top Movies</h2>
      <div className="container mx-auto p-4 grid grid-cols-4 gap-6">
        {topRatedMovies.map((movie) => {
          return <Movie data={movie} key={movie.id} />;
        })}
      </div>
      <h2 className="text-3xl font-bold m-4">Por estrenar</h2>
      <div className="container mx-auto p-4 grid grid-cols-4 gap-6">
        {upcomingMovies.map((movie) => {
          return <Movie data={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
