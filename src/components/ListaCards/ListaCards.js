import { Component } from "react";
import Card from "../Card/Card";
import './ListaCards.css';

class ListaCards extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
componentDidMount(){
    console.log(this.props)
}
    render(){
        return(
            <section class="row cards" id="movies">
                {this.props.data.map((unaPeli, idx) => <Card key={idx} data={unaPeli} tipo={this.props.tipo}/> )}
            </section>
        )
    }
}

export default ListaCards;