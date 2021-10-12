import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul className="nav_link">
            <Link className="links" to="/UserList">
            <li>Home</li>
            </Link>
                <Link className="links" to="/AddUser">
                <li>Add User</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
