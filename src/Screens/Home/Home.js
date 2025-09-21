import { Component } from "react";
import Header from "../../components/Header/Header";
import ListaCards from "../../components/ListaCards/ListaCards";
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import Formulario from "../../components/Formulario/Formulario"

let apikey = 'd39a94778431335cc790439556f16732'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            pelisPopulares: [],
            loadingPelisPopulares: true,
            pelisNow: [],
            loadingPelisNow: true
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({pelisPopulares: data.results, loadingPelisPopulares: false})
        })

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({pelisNow: data.results, loadingPelisNow: false})
        })
    }

    render(){
        return(
            <div className="container">
                <Header />
                <Formulario /> 
                <h2 class="alert alert-primary">Popular movies this week <Link to='/peliculas/popular' className='btn btn-primary'>Ver todas</Link></h2>
                {this.state.loadingPelisPopulares ? <p>Cargando... </p> : <ListaCards data={this.state.pelisPopulares.slice(0,5)} tipo="movie" /> }

                <h2 class="alert alert-primary">Movies playing this week <Link to='/peliculas/now_playing' className='btn btn-primary'>Ver todas</Link></h2>
                {this.state.loadingPelisNow ? <p>Cargando...</p> : <ListaCards data={this.state.pelisNow.slice(0,5)} tipo="movie"/> }
                <Footer />
            </div>
            
        )
    }
}

export default Home;