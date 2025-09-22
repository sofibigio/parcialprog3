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
      }}




  render(){
     return (
      <div className="container">
        <Header/>
        <h1>Favoritos</h1>

       
        <Footer/>
      </div>
    )
  }
   
}
  
  


export default withRouter(Favoritos)