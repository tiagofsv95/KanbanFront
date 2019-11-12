import React, { Component } from 'react';

import './Kanban.css';

class Cards extends Component {
    
    constructor(props){
        super(props);
        this.mouseIn = this.mouseIn.bind(this);
		this.mouseOut = this.mouseOut.bind(this);

    }
    mouseIn(obj){
        console.log("Hiago IN");
    }

    mouseOut(obj){
        console.log("Hiago Out: ");
    }
    render(){
        return(
            <div className="cartao" onMouseOver={this.mouseIn} onMouseOut={this.mouseOut} draggable={true}
            onDragEnd={(e) => {this.props.onDragEnd(e, this.props.cards)}}
            >
                <div className="cartaoHead">
                    <h2>{this.props.cards.title}</h2>
                </div>
                <div>
                    <p>Tempo: {this.props.cards.duration} h
                    <br/>Pontos: {this.props.cards.points}</p>
                </div>
            </div>
        )
    }
}

export default Cards;