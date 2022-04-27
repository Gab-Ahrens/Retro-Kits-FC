import React from "react";
import { Link } from "react-router-dom";
import { AdminPage } from "../../pages/Admin";
import { Home } from "../../pages/Home";
import { Clubes } from "../../pages/Clubes"
import { Selecoes } from "../../pages/Selecoes"
import { Carrinho } from "../../pages/Carrinho"
import "./styles.modules.css"

export function Navbar() {
    
    return (
        <div>
            <nav className="navbar">
                <img src={require("../../assets/logo/retrofclogo.png")}/>
                <ul className="navbarul">
                    <li><Link to='/' component={<Home/>} className='link'>Home</Link></li>
                    <li><Link to='/clubes' component={<Clubes />} className='link'>Clubes</Link> </li>
                    <li><Link to='/selecoes' component={<Selecoes />} className='link'>Seleções</Link></li>
                    <li><Link to='/carrinho' component={<Carrinho />} className='link'>Ver Carrinho</Link></li>
                    <li><Link to="/admin" component={<AdminPage/>} className='link'>Admin</Link></li>
                </ul>
                <form className="navform">
                <input
                    type="search"
                    id="site-search"
                    placeholder="Busque seu manto"
                    className="navinput"
                />
                <button className="navbutton">Buscar!</button>
                </form>
            </nav>

        </div>
    );
}