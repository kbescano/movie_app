import React from 'react'
import SearchBox from './SearchBox'
import { Route, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <Link to='/' className="navbar_name"><h1>Screen Scene</h1></Link>
                <Route render={({ history }) => <SearchBox history={history} key={'Clear'} />} />
            </div>
        </header>
    )
}

export default Navbar
