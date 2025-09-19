import { Component } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

let apikey = '66374e925f9ce0061d8e10191732f374'

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

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)
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
                <p>Rating: {pelicula.vote_average}</p>

                <Footer/>
            </div>
        ) 
    }
}

export default UnaPelicula;
