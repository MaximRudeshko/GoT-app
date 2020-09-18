import React, { Component } from 'react'
import GotService from '../../services/GotService'
import Loader from '../loader/Loader';
import './ItemsList.scss'



export default class ItemList extends Component{

    gotService = new GotService();

    state = {
        item: null
    }

    componentDidMount(){
        this.fetchItem()
    }

    fetchItem(){
        this.props.getData()
            .then(items => {
                this.setState({
                    item:items
                })            
            })
    }

    render(){
        const {item} = this.state
        return(
            <div className = 'jumbotron dark characters-list list'>
                {this.props.title}
                {!item ? <Loader/>: 
                    <ul className="list-group">
                        {item.map((item) => {
                            const label = this.props.renderItem(item)
                            return (
                                <li 
                                key = {item.id}
                                onClick = {() => this.props.onItemSelected(item.id)}
                                className="list-group-item dark">
                                    {label}
                                </li>
                            )
                        })}  
                    </ul>
                } 
            </div>
        )
    }
}


