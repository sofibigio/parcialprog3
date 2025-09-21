
import { Component } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

let apikey = 'd39a94778431335cc790439556f16732'

class Formulario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tipo:"",
            texto:""
        }
    }
manejartexto(e){
    this.setState({texto:e.target.value})
}
manejartipo(e){
    this.setState({tipo:e.target.value})
}
manejarsubmit(e){
    e.preventDefault()
    this.props.history.push(`/busqueda/${this.state.tipo}/${this.state.texto}`)
}
    render() {



        return (
            <form class="search-form" action="results.html" method="get" onSubmit={e=>this.manejarsubmit(e)}>
                <input type="text" class="" name="searchData" placeholder="Buscar..." onChange={(e)=>this.manejartexto(e)} />
                <label>Pelicula</label>
                <input type="radio" name="tipo" value="movie" onChange={(e)=>this.manejartipo(e)} />
                <label>Serie</label>
                 <input type="radio" name="tipo" value="tv" onChange={(e)=>this.manejartipo(e)} />
                <button type="submit" class="btn btn-success btn-sm">Buscar</button>

            </form>


        )
    }
}

export default withRouter(Formulario);