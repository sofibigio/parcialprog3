import { Component } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

let apikey = 'd39a94778431335cc790439556f16732'

class UnaPelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula:null,
            loading: true
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({pelicula: data, loading: false })
        })
    }

    render(){
        const {pelicula, loading} = this.state; 

        if(loading || !pelicula) return <p>Cargando...</p>; 

        return( 
            <div className="container">
                <Header/>

                <h2>{pelicula.title} </h2>
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />                
                <p>Rating: {pelicula.vote_average}</p>
                <p>Fecha de estreno: {pelicula.release_date}</p>
                <p> Duración: </p>
                <p>Sinopsis: {pelicula.overview} </p>
                <p>Género: {pelicula.genre_ids} </p>

                <Footer/>
            </div>
        ) 
    }
}

export default UnaPelicula;
