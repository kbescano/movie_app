import React, { useState, useEffect, useRef } from 'react'
import axios from "../axios";
import { Link } from 'react-router-dom'
import { TweenLite, Power3 } from 'gsap'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

const baseImgUrl = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl }) => {

    let con = useRef(null)
    let a = useRef(null)
    let b = useRef(null)

    gsap.registerPlugin(CSSPlugin)

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl]);


    useEffect(() => {
        if (fetchUrl) {
            TweenLite.to(con, 0, { css: { visibility: "visible" } })
            TweenLite.staggerFrom([a, b], .8, { opacity: 0, x: 10, ease: Power3.easeInOut }, .2)
        }

    }, [fetchUrl])

    return (
        <div className="row" ref={el => con = el}>
            <h2 ref={el => a = el}>{title}</h2>

            <div className="row_posters" ref={el => b = el}>
                {movies.map(
                    (movie) =>
                        movie.backdrop_path !== null && (
                            <div className="row_posters_container" key={movie.id}>
                                <h1>{movie.original_title ? movie.original_title.substring(0, 40) : movie.name.substring(0, 30)}</h1>
                                <Link to={`/movies/${movie.id}`}>
                                    <img
                                        src={`${baseImgUrl}${movie.backdrop_path ? movie.backdrop_path : movie.logo_path ? movie.logo_path : ''}`}
                                        alt={movie.name}


                                    /></Link>
                            </div>
                        )
                )}
            </div>

        </div>
    )
}

export default Row
