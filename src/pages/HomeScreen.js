import React from 'react'
import Favorites from '../components/Favorites';
import Navbar from '../components/Navbar'
import Row from '../components/Row'
import requests from "../request";

const HomeScreen = () => {
    return (
        <>
            <Navbar />
            <Favorites />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </>
    )
}

export default HomeScreen


