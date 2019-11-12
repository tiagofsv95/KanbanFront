import  React, { Component } from 'react';
import Cards from './Cards.js';

import './Kanban.css';

class Colunas extends Component {
    
    render()
    {
        return(
            <div className="coluna"  
           onDragEnter={(e)=>this.props.onDragEnter(e, this.props.id)}>
                <div className="colunaHead"> 
                    <h2>{this.props.nome}</h2>
                </div>
                {this.props.cards.map((cards) =>{
                    if(cards.status === this.props.id){
                        return (
                            /*console.log(cards, this.props)*/
                            <Cards cards = {cards} key = {cards._id}
                            onDragEnd = {this.props.onDragEnd}
                            />
                        );
                    }else return null;
                })}
            </div>
        )
    }
}

export default Colunas;