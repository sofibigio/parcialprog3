import { Component } from "react";
import Header from "../../components/Header/Header";
import ListaCards from "../../components/ListaCards/ListaCards";
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";

let apikey = "d39a94778431335cc790439556f16732";

class Home extends Component{
    render(){
        return(
            <div className="container">
                <Header />
                <Footer />
            </div>
            
        )
    }
}

export default Home;

