import { Component } from "react";
import './Card.css'
import { Link } from 'react-router-dom'

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            mostrarDescripcion: false,
            textoBoton: 'Mostrar descripcion'
        }
    }

    manejarDescripcion(){
        if(this.state.mostrarDescripcion == false){
            this.setState({mostrarDescripcion: true, textoBoton: 'Ocultar descripcion'})
        } else {
            this.setState({mostrarDescripcion: false, textoBoton: 'Mostrar descripcion'})
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
                    <a href="" class="btn alert-primary">🩶</a>
                </div>
            </article>
        )
    }
}

export default Card;