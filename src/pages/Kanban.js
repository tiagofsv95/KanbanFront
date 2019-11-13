import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import Colunas from '../components/Colunas';
import io from 'socket.io-client';

import './Kanban.css';

class Kanban extends Component {

    constructor(props){
        super(props);
        this.colunas = [
            {id: 0, name:"Backlog", className: "backlogColumn"},
            {id: 1, name:"A Fazer", className: "toDoColumn"},
            {id: 2, name:"Fazendo", className: "doingColumn"},
            {id: 3, name:"Validações", className: "validationColumn"},
            {id: 4, name:"Concluído", className: "doneColumn"},
        ];
     
    }
    
    state = {
        cards: [],
        draggedOverCol: 0,
    };
    
    async componentDidMount(){
        this.registerToSocket();

        const response = await api.get('/cards');

        this.setState({ cards: response.data });
    }

    registerToSocket = () => {
        const socket = io('http://localhost:3333');

        socket.on('post', newcard => {
            this.setState({ cards: [newcard, ...this.state.cards] });
        })
        
        socket.on('change', cardUpdate => {
            this.setState({
                cards: this.state.cards.map(card =>
                    card._id === cardUpdate._id ? cardUpdate : card
                )
            })
        });
    }

    handleOnDragEnter = (e, id) => {
        this.setState({draggedOverCol: id});
    }
    
    handleOnDragEnd = (e, cards) => {
        var stateCopy = Object.assign({}, this.state.cards.find((item) => {
            return item._id === cards._id
        }));
        
        api.put(`/cards/${stateCopy._id}/${this.state.draggedOverCol}`);
    }

    render() {
        return(
            <div className="kanban">
                <div className="kanbanHead">
                    <ul>
                        <li>
                            <Link to = "/new"> 
                                <button className="button">Novo cartão</button>
                            </Link>
                        </li>
                        <li> <h1>Simple Kanban</h1> </li>
                    </ul>                                  
                </div>
                
                <div className="colunas">
                    {
                        this.colunas.map((coluna) => {
                            return(
                                <Colunas id = {coluna.id} name = {coluna.name} key={coluna.id} cards = {this.state.cards}
                                    onDragEnter = {this.handleOnDragEnter}
                                    onDragEnd = {this.handleOnDragEnd}
                                /> 
                            );
                        }
                    )
                    }
                </div>
            </div>
        );
    }
    
}

export default Kanban;