import React, { useState, useEffect} from 'react'
import axios from 'axios'
import request from './request'
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(request.fetchNetflixOriginals); 
            const randomMovie = req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]
            setMovie(randomMovie)
            return request
        }

        fetchData(); 
    }, [])

    console.log('movie', movie)

    function truncate(str, n){
        console.log('str', str)
        return (str?.length > n) ? str.substr(0, n-1) + '...' : str;
      };

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>

                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner--fadeBottom">
                
            </div>
        </header>
    )
}

export default Banner
