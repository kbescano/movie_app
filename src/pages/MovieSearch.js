import React from 'react'
import Navbar from '../components/Navbar'
import Return from '../components/Return'
import Row from '../components/Row'

const MovieSearch = ({ match }) => {

    const keyword = match.params.keyword

    return (
        <>
            <Navbar />
            <Return />
            <Row title='Search Result' fetchUrl={`https://api.themoviedb.org/3/search/movie?api_key=4dbb03c420d180299c229b42ca915e35&language=en-US&query=${keyword}&page=1&include_adult=false`} />
        </>
    )
}

export default MovieSearch
