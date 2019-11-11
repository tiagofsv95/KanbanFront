import React, { Component } from 'react';
import api from '../services/api';
//import io from 'socket.io-client';
//import Colunas from './Colunas.js';
import './Kanban.css';

class Kanban extends Component {

    constructor(props){
        super(props);
        this.colunas = [
            {id: 0, nome:"Backlog"},
            {id: 1, nome:"A Fazer"},
            {id: 2, nome:"FAzendo"},
            {id: 3, nome:"Teste/Validações"},
            {id: 4, nome:"Concluído"},
        ];
    }
    
    state = {
        kanban: []
    };
    
    async componentDidMount(){
        this.registerToSocket();

        const response = await api.get('cards');

        this.setState({ kanban: response.data });
    }

    registerToSocket = () => {
        //const socket = io('http://localhost:3333');

        /*socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed] });
        })
        
        socket.on('like', likedPost => {
            this.setState({
                feed: this.state.feed.map(post =>
                    post._id === likedPost._id ? likedPost : post
                )
            })
        })*/
    }

    render() {
        return(
            <section id="kanban-list">
                <div className="colunas">
                    {
                        this.colunas.map((coluna) => {
                        return(
                            <div id = {coluna.id} nome = {coluna.nome} key={coluna.id}>
                                <header className="colunaHead">
                                    <span>{coluna.nome}</span>
                                </header> 
                                <div className="card-info" 
                                    onDragEnter = { this.handleOnDragEnter}
                                    onDragEnd = {this.handleOnDragEnd}
                                >
                                    { 
                                    this.state.kanban.map((card) => (    
                                        (card.status === coluna.id) ? (
                                            <article key={card._id}>
                                                <span className="title">{card.title}</span>
                                                <span className="duration"> Duração: {card.duration} horas</span>
                                                <span className="points">Pontos: {card.points}</span>
                                            </article>
                                        ) : null
                                    ))
                                    }
                                </div>
                            </div>
                        );
                        }
                    )
                    }
                </div>
            </section>
        );
    }
    /*constructor(props){
        super(props);
        this.colunas = [
            {id: 0, nome:"Espera"},
            {id: 1, nome:"Análise"},
            {id: 2, nome:"Desenvolvimento"},
            {id: 3, nome:"Teste"},
            {id: 4, nome:"Concluído"},
        ];
    }

    handleOnDragEnter(e, id){
        this.setState({draggedOverCol: id});
    }

    handleOnDragEnd(e, cartao){
        this.cartoes.find((item) => {
            return item.id === cartao.id
        }).idColuna = this.state.draggedOverCol;
            this.setState({cartoes : this.cartoes});

    }
    alterarPopUp(){
        this.setState({
            popUpAberto: !this.state.popUpAberto
    });}

   salvarCartao(cartao){
        this.setState({
            popUpAberto: !this.state.popUpAberto
    })
        this.cartoes.push(this.cartao)
    ;}
    
 
    render(){
        return(
            <div className="kanban">
                <div className="kanbanHead">
                    <ul>
                        <li><button className="button" onClick = {this.alterarPopUp.bind(this)}>Novo cartão</button></li>
                        <li> <h1>Kanban Hiago Rubio</h1>      </li>
                        {this.state.popUpAberto ? 
                            <Popup
                                text='Close Me'
                                closePopup={this.alterarPopUp.bind(this)}
                                salvarCartao={this.salvarCartao.bind(this)}
                                cartoes={this.cartoes}
                            />
                            : null
                        }
                    </ul>                                  
                </div>
                <div className="colunas">
                    {this.colunas.map((coluna) => {
                        return(
                            <Colunas id = {coluna.id} nome = {coluna.nome} key={coluna.id} cartoes={this.cartoes}
                                onDragEnter = {this.handleOnDragEnter}
                                onDragEnd = {this.handleOnDragEnd}
                            /> 
                        );
                        }
                    )
                    }
                                   
                </div>
            </div>
        )
    }*/

}

export default Kanban;