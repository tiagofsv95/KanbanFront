import React, { Component } from 'react';
import api from '../services/api';
import Colunas from './Colunas';
//import io from 'socket.io-client';
//import Colunas from './Colunas.js';

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
        //this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
		//this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
    }
    
    state = {
        cards: [],
        draggedOverCol: 0,
    };
    
    async componentDidMount(){
        this.registerToSocket();

        const response = await api.get('cards');

        this.setState({ cards: response.data });
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

    handleOnDragEnter = (e, id) => {
        this.setState({draggedOverCol: id});
    }
    
    handleOnDragEnd = (e, cards) => {
        var stateCopy = Object.assign({}, this.state.cards.find((item) => {
            return item._id === cards._id
        }));
        var draggedOverCol = this.state.draggedOverCol;
        console.log(this.state);
        stateCopy.status = draggedOverCol;
        var stateToSave = {
            cards: Object.values(stateCopy),
            draggedOverCol: draggedOverCol,
        }
        console.log(stateToSave);
        //this.setState({cards: Object.values(stateCopy)});

        /*this.state.cards.find((item) => {
            return item._id === cards._id
        }).status = this.state.draggedOverCol;
        this.setState({ cards : this.state.cards});*/
        //console.log(this.state, cards);

    }

    render() {
        return(
            <div className="kanban">
                <div className="kanbanHead">
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