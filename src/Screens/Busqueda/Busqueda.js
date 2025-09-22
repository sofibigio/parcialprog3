import { Component } from "react";
import React from "react";
import Header from "../../components/Header/Header";
import ListaCards from "../../components/ListaCards/ListaCards";

let apikey = 'd39a94778431335cc790439556f16732'

class Busqueda extends Component{
    constructor(props){
        super(props);
        this.state = {
            elementos: [],
            pelis: [],
            loading: true,
            page: 2,
            pelisFiltradas: [],
            busqueda: ''
        }
    }

    componentDidMount(){
        console.log(this.props)
        const url = `https://api.themoviedb.org/3/search/${this.props.match.params.tipo}?query=${this.props.match.params.busqueda}&api_key=${apikey}`;
        fetch(url)
        .then(res => res.json())
        .then(data => { 
            console.log(data) 
            this.setState({elementos: data.results, loading: false})
        })
    }

      filtrarPelis(e){
        console.log(e);
        let busqueda = e.target.value;

        let pelisFiltradas = this.state.pelis.filter(unaPeli => {
            return unaPeli.title.toLowerCase().includes(busqueda.toLowerCase())
        })

        console.log(pelisFiltradas);

        this.setState({busqueda: busqueda, pelisFiltradas: pelisFiltradas})
        
        
    }
    render(){
        return(
             <div className="container">
                <Header />
                 <form>
                    <input placeholder="filtrar películas" onChange={(e) => this.filtrarPelis(e)} />
                </form>
                {this.state.loading == true ? <p>cargando...</p> : this.state.busqueda == '' ? <ListaCards data={this.state.pelis} tipo="movie" /> : <ListaCards data={this.state.pelisFiltradas} tipo="movie"/>}


                <h2 class="alert alert-primary">resultado de busqueda</h2>
                {this.state.loading ? <p>Cargando... </p> : <ListaCards data={this.state.elementos} tipo={this.props.match.params.tipo} /> }

                
            </div>
        )
            
    }
}

export default Busqueda;