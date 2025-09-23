import { Component } from "react";
import './Card.css'
import { Link } from 'react-router-dom'
import { jsx } from "react/jsx-runtime";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarDescripcion: false,
            textoBoton: 'Mostrar descripcion',
            textoFavorito: "🩶",
            esFavorito: false,
            favs: "Sacar de favoritos"
        }
    }
componentDidMount(){
  const id = this.props.data.id;
  const esPeli = (this.props.tipo == "movie");
  const clave  = esPeli ? "pelisFav" : "seriesFav";

  const texto = localStorage.getItem(clave);
  if (!texto) { return; }

  try {
    const lista = JSON.parse(texto);
    const yaEsta = lista.filter(function(item){ return item == id; }).length > 0;
    if (yaEsta) {
      this.setState({
        esFavorito: true,
        textoFavorito: "Sacar de favoritos"
      });
    }
  } catch(e){}
}


    manejarDescripcion() {
        if (this.state.mostrarDescripcion == false) {
            this.setState({ mostrarDescripcion: true, textoBoton: 'Ocultar descripcion' })
        } else {
            this.setState({ mostrarDescripcion: false, textoBoton: 'Mostrar descripcion' })
        }
    }


    botonFavorito() {
        const id = this.props.data.id;
        const esPeli = (this.props.tipo == "movie");

        let favSeries = localStorage.getItem("seriesFav")
        let favPelis = localStorage.getItem("pelisFav")

        if (this.state.esFavorito === false) {
            if (esPeli == false) {
                if (favSeries === null) {
                    let series = []
                    series.push(id)
                    let favString = JSON.stringify(series)
                    localStorage.setItem("seriesFav", favString)
                } else {
                    let parseado = JSON.parse(favSeries)
                    parseado.push(id)
                    let favString = JSON.stringify(parseado)
                    localStorage.setItem("seriesFav", favString)
                }
                this.setState({
                    esFavorito: true,
                    textoFavorito: "Sacar de favoritos"
                })
            }

            if (esPeli === true) {
                if (favPelis === null) {
                    let pelis = []
                    pelis.push(id)
                    let favString = JSON.stringify(pelis)
                    localStorage.setItem("pelisFav", favString)
                } else {
                    let parseado = JSON.parse(favPelis)
                    parseado.push(id)
                    let favString = JSON.stringify(parseado)
                    localStorage.setItem("pelisFav", favString)
                }
                this.setState({
                    esFavorito: true,
                    textoFavorito: "Sacar de favoritos"
                })
            }
        } else {
            if (esPeli == false) {
                if (favSeries) {
                    let parseado = JSON.parse(favSeries)
                    let nuevoFiltro = parseado.filter(ids => ids != id)
                    let favString = JSON.stringify(nuevoFiltro)
                    localStorage.setItem("seriesFav", favString)
                }
                this.setState({
                    esFavorito: false,
                    textoFavorito: "🩶"
                })
            }
        
        if (esPeli == true) {
            if (favPelis) {
                let parseado = JSON.parse(favPelis);
                let nuevoFiltro = parseado.filter(function (ids) { return ids != id; });
                let favString = JSON.stringify(nuevoFiltro);
                localStorage.setItem("pelisFav", favString);
            }
            this.setState({ esFavorito: false, textoFavorito: "🩶" });
        }
    }
}


render() {
    return (
        <article class="single-card">
            <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} class="card-img-top"
                alt="..." />
            <div class="cardBody">
                <h5 class="card-title">{this.props.tipo == "movie" ? this.props.data.title : this.props.data.name}</h5>
                <button onClick={() => this.manejarDescripcion()} className="btn btn-primary">{this.state.textoBoton}</button>
                {this.state.mostrarDescripcion ? <p class="card-text">{this.props.data.overview} </p> : ''}
                <Link to={`/detalle/${this.props.tipo}/${this.props.data.id}`} class="btn btn-primary">Ver más</Link>
                <button className="favorito" onClick={() => this.botonFavorito()}>{this.state.textoFavorito} </button>
            </div>
        </article>
    )

    }
}


export default Card;