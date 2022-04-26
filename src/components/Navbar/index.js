import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    
    return (
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Clubs </li>
                    <li>National Teams</li>
                    <li>View Shopping Cart</li>
                    <li><Link to="/admin">Admin</Link></li>
                </ul>
                <input
                    type="search"
                    id="site-search"
                    placeholder="Search Items"
                />
                <button>GO!</button>
            </nav>

        </div>
    );
}