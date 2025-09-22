import { Component } from "react";
import Header from "../../components/Header/Header";
import ListaCards from "../../components/ListaCards/ListaCards";
import Footer from "../../components/Footer/Footer";


let apikey = 'd39a94778431335cc790439556f16732'

class Series extends Component{
    constructor(props){
        super(props);
        this.state = {
            series: [],
            loading: true,
            page: 2,
            seriesFiltradas: [],
            busqueda: ''
        }
    }

    componentDidMount(){       
        fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.tipo == 'airing_today' ? 'airing_today' : 'on_the_air'}?api_key=${apikey}`)
        .then(res => res.json())
        .then(data => {
            this.setState({series: data.results, loading: false})
        })
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.tipo == 'airing_today' ? 'airing_today' : 'on_the_air'}?api_key=${apikey}&page=${this.state.page}`)
        .then(res => res.json())
        .then(data => {
            this.setState({series: this.state.series.concat(data.results), page: this.state.page + 1})
        })
    }

    filtrarSeries(e){
        console.log(e);
        let busqueda = e.target.value;

        let seriesFiltradas = this.state.series.filter(unaPeli => {
            return unaPeli.title.toLowerCase().includes(busqueda.toLowerCase())
        })

        console.log(seriesFiltradas);

        this.setState({busqueda: busqueda, seriesFiltradas: seriesFiltradas})
        
        
    }

    render(){
        return(
            <div className="container">
                <Header />

                <form>
                    <input placeholder="fitlrar series" onChange={(e) => this.filtrarSeries(e)} />
                </form>

                <h2 class="alert alert-primary">{this.props.match.params.tipo == 'airing_today' ? 'Series de hoy' : 'Series al aire'}</h2>
                {this.state.loading == true ? <p>cargando...</p> : this.state.busqueda == '' ? <ListaCards data={this.state.series} tipo="movie" /> : <ListaCards data={this.state.seriesFiltradas} tipo="movie"/>}
                

                <button onClick={() => this.cargarMas()} className="btn btn-primary">Cargar mas</button>
                <Footer />
            </div>
        )
    }
}

export default Series;