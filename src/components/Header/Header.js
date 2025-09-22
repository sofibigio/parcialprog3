import { Component } from "react";
import './Header.css'
import React from "react";


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <img className="logo1" src="/logo.png" alt="logo"/>
                <h1 className="title">BAS Movies</h1>
                            <nav>
                <ul class="nav nav-tabs my-4">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/peliculas/popular">Películas populares</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/peliculas/now_playing">Peliculas en cartelera</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/tv/airing_today">Series de hoy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/tv/on_the_air">Series al aire</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/favoritos">Favoritas</a>
                    </li>
                </ul>
               
            </nav>
            </React.Fragment>

        )
    }
}

export default Header;