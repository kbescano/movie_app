import React, { useState } from 'react'

const SearchBox = ({ history }) => {

    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/movies/search/${keyword}`)
        } else if (!keyword) {
            history.push('/')
        }
        else {
            history.push('/movies')
        }
    }


    return (
        <form onSubmit={submitHandler} className='searchBox'>
            <input type="text" placeholder="Search Movies" onChange={(e) => setKeyword(e.target.value)} />
            <button><i className='fas fa-search' /></button>
        </form>
    )
}

export default SearchBox
