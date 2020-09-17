import React, { Component } from 'react'
import GotService from '../../services/GotService'
import Loader from '../loader/Loader';
import './ItemsList.scss'


export default class ItemList extends Component{

    gotService = new GotService();

    state = {
        characters: null
    }

    componentDidMount(){
        this.fetchCharacters()
    }

    fetchCharacters(){
        this.gotService.getAllCharacters()
            .then(chars => {
                this.setState({
                    characters:chars
                })             
            })
    }

    render(){
        const {characters} = this.state

        return(
            <div className = 'jumbotron dark characters-list list'>
                <h3>Characters: </h3>
                {!characters ? <Loader/>: 
                    <ul className="list-group">
                        {characters.map((item, i) => {
                            return (
                                <li 
                                key = {i}
                                onClick = {() => this.props.onCharacterSelected(item.id)}
                                className="list-group-item dark">
                                    {item.name}
                                </li>
                            )
                        })}  
                    </ul>
                }
                
            </div>
        )
    }
}


