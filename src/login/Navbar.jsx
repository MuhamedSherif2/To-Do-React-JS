import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='nav'>
            <h1>Final</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign in</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
