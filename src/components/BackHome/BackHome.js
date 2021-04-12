import React from 'react';
import { Link } from 'react-router-dom';
import './BackHome.css';

function BackHome() {
    return (
        <div className="not-found-wrapper">
            <h1> wishlist</h1>
            <Link to="/">return back home </Link>
        </div>
    );
}

export default BackHome;
