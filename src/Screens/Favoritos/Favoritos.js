import { Component } from "react";
import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import Formulario from "../../components/Formulario/Formulario";
import Favorito from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"

let apikey = 'd39a94778431335cc790439556f16732'


class Favoritos extends Component {
  constructor(props){
    super(props);
    this.state = {
      peliculas: [],
      series: []
    };
  }

  leerLista(clave){
    const texto = localStorage.getItem(clave);
    if (!texto) {
      return [];
    }
    try {
      const lista = JSON.parse(texto);
      if (lista) {
        return lista;
      } else {
        return [];
      }
    } catch (e) {
      return [];
    }
  }

  componentDidMount(){
    this.cargarFavoritos();
  }

  cargarFavoritos(){
    const idsPeliculas = this.leerLista("pelisFav");
    const idsSeries    = this.leerLista("seriesFav");

    this.setState({ peliculas: [], series: [] });

  
    idsPeliculas.map((idPeli) => {
      const url = "https://api.themoviedb.org/3/movie/" + idPeli + "?api_key=" + apikey;
      fetch(url)
        .then(function(respuesta){ return respuesta.json(); })
        .then((data) => {
          if (data) {
            if (data.id) {
              const copia = this.state.peliculas.map(function(item){ return item; });
              copia.push(data);
              this.setState({ peliculas: copia });
            }
          }
        })
        .catch(function(){});
      return null;
    });


    idsSeries.map((idSerie) => {
      const url = "https://api.themoviedb.org/3/tv/" + idSerie + "?api_key=" + apikey;
      fetch(url)
        .then(function(respuesta){ return respuesta.json(); })
        .then((data) => {
          if (data) {
            if (data.id) {
              const copia = this.state.series.map(function(item){ return item; });
              copia.push(data);
              this.setState({ series: copia });
            }
          }
        })
        .catch(function(){});
      return null;
    });
  }

  borrarDeFavoritos(idContenido, seccion){
    const esPeli = (seccion === "peliculas") ? true : false;
    const clave  = esPeli ? "pelisFav" : "seriesFav";


    const idsActualizados = this.leerLista(clave).filter(function(guardado){
      return guardado !== idContenido;
    });
    localStorage.setItem(clave, JSON.stringify(idsActualizados));


    const listaActual = esPeli ? this.state.peliculas : this.state.series;
    const listaNueva  = listaActual.filter(function(elemento){
      return elemento.id !== idContenido;
    });

    if (esPeli) {
      this.setState({ peliculas: listaNueva });
    } else {
      this.setState({ series: listaNueva });
    }
}
render(){
    return (
      <div className="container">
        <Header />
        <h1>Favoritos</h1>

        <div>
          <h2>Películas favoritas</h2>
          <div>
            {this.state.peliculas.map((item) => {
              const nombre = item.title;
              const poster = item.poster_path ? ("https://image.tmdb.org/t/p/w500" + item.poster_path) : "";
              return (
                <div key={"peliculas-" + item.id}>
                  <Link to={"/detalle/movie/" + item.id}>
                    {poster ? <img src={poster} alt={nombre} /> : ""}
                  </Link>
                  <p>{nombre}</p>
                  <button onClick={() => this.borrarDeFavoritos(item.id, "peliculas")}>
                    Eliminar
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2>Series favoritas</h2>
          <div>
            {this.state.series.map((item) => {
              const nombre = item.name;
              const poster = item.poster_path ? ("https://image.tmdb.org/t/p/w500" + item.poster_path) : "";
              return (
                <div key={"series-" + item.id}>
                  <Link to={"/detalle/tv/" + item.id}>
                    {poster ? <img src={poster} alt={nombre} /> : ""}
                  </Link>
                  <p>{nombre}</p>
                  <button onClick={() => this.borrarDeFavoritos(item.id, "series")}>
                    Eliminar
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

   
export default withRouter(Favoritos)