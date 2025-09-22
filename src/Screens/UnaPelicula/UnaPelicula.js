import { Component } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

let apikey = 'd39a94778431335cc790439556f16732'

class UnaPelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula: null,
            loading: true,
            textoFavorito: "🩶",
            esFavorito: false,
            favs: "Sacar de favoritos"
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
         const tipo = this.props.match.params.tipo;
        fetch(`https://api.themoviedb.org/3/${tipo}/${id}?api_key=${apikey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({pelicula: data, loading: false })
        })
    }
    botonFavorito() {
        this.setState(
            {
                esFavorito: !this.state.esFavorito,
                textoFavorito: this.state.textoFavorito === "🩶" ? "Sacar de favoritos" : "🩶",
                favs: this.state.textoFavorito === "🩶" ? "" : "noMostrar"
            }
        )
    }

    render(){
        
 
        if(this.state.loading) return <p>Cargando...</p>; 

     
        

        return( 
            <div className="container">
                <Header/>

                <h2>{ this.props.match.params.tipo=="movie"?this.state.pelicula.title:this.state.pelicula.name} </h2>
                <img src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />                
                <p>Rating: {this.state.pelicula.vote_average}</p>
                <p>Fecha de estreno: {this.props.match.params.tipo=="movie"?this.state.pelicula.release_date:this.state.pelicula.first_air_date}</p>
              {this.props.match.params.tipo=="movie"? <p> Duración: {this.state.pelicula.runtime} </p>:""}
                <p>Sinopsis: {this.state.pelicula.overview} </p>
                <p>Género: {this.state.pelicula.genres.map(gen => gen.name)} </p> 
                <button className="favorito" onClick={() => this.botonFavorito()}>{this.state.textoFavorito} </button>

                <Footer/>
            </div>
        ) 
    }
}

export default UnaPelicula;
