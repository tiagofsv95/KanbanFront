import React, { Component } from 'react';

class Cards extends Component {
    
    render(){
        return(
            <div className="cartao" onMouseOver={this.mouseIn} onMouseOut={this.mouseOut} draggable={true}
            onDragEnd={(e) => {this.props.onDragEnd(e, this.props.cartao)}}
            >
                <div className="cartaoHead">
                    <h2>{this.props.cartao.nome}</h2>
                </div>
                <div>
                    <p>Tempo: {this.props.cartao.tempo} h
                    <br/> {this.props.cartao.dificuldade}</p>
                </div>
            </div>
        )
    }
}

export default Cards;