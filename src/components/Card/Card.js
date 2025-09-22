import { Component } from "react";
import './Card.css'
import { Link } from 'react-router-dom'

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            mostrarDescripcion: false,
            textoBoton: 'Mostrar descripcion',
            textoFavorito: "🩶",
            esFavorito: false,
            favs: "Sacar de favoritos"
        }
    }

    manejarDescripcion(){
        if(this.state.mostrarDescripcion == false){
            this.setState({mostrarDescripcion: true, textoBoton: 'Ocultar descripcion'})
        } else {
            this.setState({mostrarDescripcion: false, textoBoton: 'Mostrar descripcion'})
        }
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
        return(
            <article class="single-card">
                <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} class="card-img-top"
                    alt="..." />
                <div class="cardBody">
                    <h5 class="card-title">{this.props.tipo=="movie"?this.props.data.title:this.props.data.name}</h5>
                    <button onClick={() => this.manejarDescripcion()} className="btn btn-primary">{this.state.textoBoton}</button>
                    { this.state.mostrarDescripcion ? <p class="card-text">{this.props.data.overview} </p> : '' }
                    <Link to={`/detalle/${this.props.tipo}/${this.props.data.id}`} class="btn btn-primary">Ver más</Link>
                    <button className="favorito" onClick={() => this.botonFavorito()}>{this.state.textoFavorito} </button>
                </div>
            </article>
        )
    }
}

export default Card;