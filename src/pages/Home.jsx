import React, { useState, useEffect } from "react";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/services';

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    // const [topRatedMovies, setTopRatedMovies] = useState([]);
    // const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        // llamar a las APIs, solo una vez
        const fetchMovies = async () => {
            try {
                const { results } = await getPopularMovies();
                setPopularMovies(results);
            } catch (error) {
                console.error('Failed to fetch:', error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Pelis Populares</h1>
            <ul>
                {
                    popularMovies?.map((movie) => (
                        <li key={movie?.id}>{movie?.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Home;