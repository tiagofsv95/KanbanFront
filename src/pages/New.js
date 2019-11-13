import React, { Component } from 'react';
import api from '../services/api'

import './New.css'

class New extends Component {
    state = {
        title: '',
        status: 0,
        duration: '',
        points: '',
    };

    handleSubmit = async e => {
        e.preventDefault();

        await api.post('/cards', this.state);

        this.props.history.push('/');
    }

    handleChange = e => {
        const re = /^[0-9\b]+$/
        if(e.target.name !== 'title'){
            if (e.target.value === '' || re.test(e.target.value)) {
                this.setState({ [e.target.name]: e.target.value });
            }
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }
    
    render() {
        return(
            <form id="new-card" onSubmit={this.handleSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="Titulo"
                    onChange={this.handleChange}
                    value={this.state.title}
                />

                <input
                    type="text"
                    name="duration"
                    placeholder="Duração"
                    onChange={this.handleChange}
                    value={this.state.duration}
                />

                <input
                    type="text"
                    name="points"
                    placeholder="Pontos"
                    onChange={this.handleChange}
                    value={this.state.points}
                />

                <button type="submit"> Enviar </button>

            </form>
        );
    }
}

export default New;