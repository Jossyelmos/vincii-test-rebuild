import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className="fab fa-react" /> My Testing App
            </h1>
            <ul>
                <li>
                    <Link to="/question1">Question 1</Link>
                </li>
                <li>
                    <Link to="/question2">Question 2</Link>
                </li>
                <li>
                    <Link to="/question3">Question 3</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;
