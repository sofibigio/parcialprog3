import { Component } from "react";
import React from "react";
import Header from "../../components/Header/Header";
import ListaCards from "../../components/ListaCards/ListaCards";

let apikey = 'd39a94778431335cc790439556f16732'

class Busqueda extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            elementos: []
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
    render(){
        return(
             <div className="container">
                <Header />

                <h2 class="alert alert-primary">resultado de busqueda</h2>
                {this.state.loading ? <p>Cargando... </p> : <ListaCards data={this.state.elementos} tipo={this.props.match.params.tipo} /> }

                
            </div>
        )
            
    }
}

export default Busqueda;