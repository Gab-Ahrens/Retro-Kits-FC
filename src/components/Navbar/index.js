import React from "react";

export function Navbar() {
    
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#"> Home </a></li>
                    <li><a href="#">Clubs</a></li>
                    <li><a href="#">National Teams</a></li>
                    <li><a href="#"> View Shopping Cart</a></li>
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