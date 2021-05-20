import React, { useState, useEffect, useContext, useRef } from 'react'
import axios from "../axios";
import { GlobalContext } from "../context/GlobalState";
import Favorites from './Favorites'
import { TweenLite, Power3 } from 'gsap'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

const baseImgUrl = "https://image.tmdb.org/t/p/original";

const Movie = ({ fetchUrl }) => {

    let a = useRef(null)
    let b = useRef(null)

    gsap.registerPlugin(CSSPlugin)

    const {
        addMovieToFavorites, removeMovieFromFavorites, favorites
    } = useContext(GlobalContext);

    const [movies, setMovies] = useState('');
    const [genres, setGenres] = useState('')

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data);
            console.log(request.data)
            setGenres(request.data.genres)
            return request;
        }
        fetchData();

    }, [fetchUrl]);

    useEffect(() => {
        TweenLite.staggerFrom([a, b], .8, { opacity: 0, x: 10, ease: Power3.easeInOut }, .2)

    }, [])

    const existMovie = favorites.find(x => x.id === movies.id)

    return (

        <div className="movie" >
            <div className="movie_posters">
                <div className="movie_posters_left" ref={el => a = el} >
                    <img
                        src={`${baseImgUrl}${movies.backdrop_path ? movies.backdrop_path : movies.logo_path ? movies.logo_path : ''}`}
                        alt={movies.name}
                        key={movies.id}

                    />
                </div>
                <div className="movie_posters_right" ref={el => b = el}>
                    <h1>{movies.original_title ? movies.original_title : movies.name}</h1>
                    <p>{movies.overview}</p>
                    <div className="movie_posters_right_genres">
                        {genres && genres.map(item => (

                            <h1 key={item.id}>{item.name}</h1>

                        ))}</div>
                    <p>Release date: {movies.release_date}</p>
                    <p>Ratings: {movies.vote_average}/10</p>
                    {existMovie ? (
                        <button onClick={() => removeMovieFromFavorites(movies.id)}>Remove from Favorites</button>
                    ) : (<button onClick={() => addMovieToFavorites(movies)}>Add to Favorites</button>)}

                </div>

            </div>


            <Favorites />
        </div>

    )
}

export default Movie