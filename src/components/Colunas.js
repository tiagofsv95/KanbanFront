import  { Component } from 'react';
//import Cards from './Cards.js';

class Colunas extends Component {
    render()
    {
        return(
           console.log(this.props.cards)
            /*<div className="coluna"  
           onDragEnter={(e)=>this.props.onDragEnter(e, this.props.id)}>
                <div className="colunaHead"> 
                    <h2>{this.props}</h2>
                </div>
                {this.cartoes.map((cartao) =>{
                    if(cartao.idColuna === this.props.id){
                        return (
                            <Cards cartao = {cartao} key = {cartao.id}
                            onDragEnd = {this.props.onDragEnd}
                            />
                        );
                    }else return null;
                })}
            </div>*/
        )
    }
}

export default Colunas;