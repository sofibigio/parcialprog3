import { Component } from "react";
import Header from "../../components/Header/Header";
import ListaCards from "../../components/ListaCards/ListaCards";
import Footer from "../../components/Footer/Footer";


let apikey = '66374e925f9ce0061d8e10191732f374'

class Peliculas extends Component{
    constructor(props){
        super(props);
        this.state = {
            pelis: [],
            loading: true,
            page: 2,
            pelisFiltradas: [],
            busqueda: ''
        }
    }

    componentDidMount(){       
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo == 'popular' ? 'popular' : 'now_playing'}?api_key=${apikey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({pelis: data.results, loading: false})
        })
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo == 'popular' ? 'popular' : 'now_playing'}?api_key=${apikey}&page=${this.state.page}`)
        .then(res => res.json())
        .then(data => {
            this.setState({pelis: this.state.pelis.concat(data.results), page: this.state.page + 1})
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
                    <input placeholder="fitlrar peliculas" onChange={(e) => this.filtrarPelis(e)} />
                </form>

                <h2 class="alert alert-primary">{this.props.match.params.tipo == 'popular' ? 'Popular movies this week' : 'Movies playing this week'}</h2>
                {this.state.loading == true ? <p>cargando...</p> : this.state.busqueda == '' ? <ListaCards data={this.state.pelis} /> : <ListaCards data={this.state.pelisFiltradas} />}
                

                <button onClick={() => this.cargarMas()} className="btn btn-primary">Cargar mas</button>
                <Footer />
            </div>
        )
    }
}

export default Peliculas;