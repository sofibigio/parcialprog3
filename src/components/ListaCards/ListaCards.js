import { Component } from "react";
import Card from "../Card/Card";
import './ListaCards.css';

class ListaCards extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <section class="row cards" id="movies">
                {this.props.data.map((unaPeli, idx) => <Card key={idx} data={unaPeli} /> )}
            </section>
        )
    }
}

export default ListaCards;