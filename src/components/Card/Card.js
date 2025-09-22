import { Component } from "react";
import './Card.css'
import { Link } from 'react-router-dom'
import { jsx } from "react/jsx-runtime";

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
        let favSeries = localStorage.getItem("seriesFav")
        let favPelis = localStorage.getItem("pelisFav")
        if (this.state.esFavorito === false) {
            
        
        if (favSeries === null) {
            let series = []
            series.push("id de la serie")
            let favString = JSON.stringify(series)
            localStorage.setItem("seriesFav", favString)
        }else{
            let parseado = JSON.parse(favSeries)
            parseado.push("el id de la series")
            let favString = JSON.stringify(parseado)
            localStorage.setItem("seriesFav", favString)
        }
        this.setState({
            esFavorito: true,
            textoFavorito: "Sacar de favoritos"
        })
       
        if(this.state.esFavorito === false){
             let parseado = JSON.parse(favSeries)
             let nuevoFiltro = parseado.filter(ids => ids != "al ide de la serie")
            let favString = JSON.stringify(nuevoFiltro)
            localStorage.setItem("seriesFav", favString)

            this.setState({
            esFavorito: false,
            textoFavorito: "🩶"
        })            
        }
        

        //hacer lo mismo con pelis
          if (favPelis === null) {
            let pelis = []
            series.push("id de las peliculas")
            let favString = JSON.stringify(pelis)
            localStorage.setItem("pelisFav", favString)
        }else{
            let parseado = JSON.parse(favPelis)
            parseado.push("el id de las peliculas")
            let favString = JSON.stringify(parseado)
            localStorage.setItem("pelisFav", favString)
        }
        this.setState({
            esFavorito: true,
            textoFavorito: "Sacar de favoritos"
        })
       
        if(this.state.esFavorito === false){
             let parseado = JSON.parse(favPelis)
             let nuevoFiltro = parseado.filter(ids => ids != "al ide de la pelicula")
            let favString = JSON.stringify(nuevoFiltro)
            localStorage.setItem("pelisFav", favString)

            this.setState({
            esFavorito: false,
            textoFavorito: "🩶"
        })            
        }
        const esPeli = this.props.tipo == "movie";
        this.setState(
            {
                esFavorito: !this.state.esFavorito,
                textoFavorito: this.state.textoFavorito === "🩶" ? "Sacar de favoritos" : "🩶",
                favs: this.state.textoFavorito === "🩶" ? "" : "noMostrar"
            }
        )
    }
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