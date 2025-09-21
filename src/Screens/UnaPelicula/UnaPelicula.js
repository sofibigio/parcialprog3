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
         const tipo = this.props.match.params.tipo;
        fetch(`https://api.themoviedb.org/3/${tipo}/${id}?api_key=${apikey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({pelicula: data, loading: false })
        })
    }

    render(){
        const pelicula=this.state.pelicula
        const loading=this.state.loading

        if(loading) return <p>Cargando...</p>; 

        return( 
            <div className="container">
                <Header/>

                <h2>{ this.props.match.params.tipo=="movie"?pelicula.title:pelicula.name} </h2>
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />                
                <p>Rating: {pelicula.vote_average}</p>
                <p>Fecha de estreno: {this.props.match.params.tipo=="movie"?pelicula.release_date:pelicula.first_air_date}</p>
              {this.props.match.params.tipo=="movie"? <p> Duración: {pelicula.runtime} </p>:""}
                <p>Sinopsis: {pelicula.overview} </p>
                <p>Género: {pelicula.genre_ids} </p>

                <Footer/>
            </div>
        ) 
    }
}

export default UnaPelicula;
