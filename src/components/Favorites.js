import React, { useContext, useRef, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from 'react-router-dom'
import { TweenLite, Power3 } from 'gsap'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

const baseImgUrl = "https://image.tmdb.org/t/p/original";

const Favorites = () => {

    let a = useRef(null)
    let b = useRef(null)

    gsap.registerPlugin(CSSPlugin)

    const { favorites } = useContext(GlobalContext);

    useEffect(() => {
        TweenLite.staggerFrom([a, b], .8, { opacity: 0, x: 10, ease: Power3.easeInOut }, .2)

    }, [favorites])

    return (
        <div className="row" ref={el => a = el} >
            {favorites.length > 0 && (<h2 >Favorites</h2>)}

            <div className="row_posters" ref={el => b = el}>
                {favorites.map(
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
    );
};

export default Favorites