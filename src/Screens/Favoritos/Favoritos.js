import { Component } from "react";
import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import Formulario from "../../components/Formulario/Formulario";
import Favorito from "../../components/Footer/Footer";
import Header from "../../components/Formulario/Formulario"

let apikey = 'd39a94778431335cc790439556f16732'
class Favoritos extends Component{
    constructor(props){
        super(props);
        this.state = {
            peliculas: [],
            loadingPelisPopulares: true,
            series: [],
            loadingPelisNow: true
        }
    }

    render(){
        return(
          <div>
            <Header />
            <Favorito/>
            <Footer />
          </div>
                    
        )
    }
  }


export default withRouter(Favoritos)