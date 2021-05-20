import React from 'react'
import Navbar from '../components/Navbar'
import Movie from '../components/Movie'
import Return from '../components/Return'

const MovieScreen = ({ match }) => {

    const keyword = match.params.id

    return (
        <>
            <Navbar />
            <Return />
            <Movie fetchUrl={`https://api.themoviedb.org/3/movie/${keyword}?api_key=4dbb03c420d180299c229b42ca915e35&language=en-US`} />
        </>
    )
}

export default MovieScreen
