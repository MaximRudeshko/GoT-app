import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GotService from '../../services/GotService'
import Loader from '../loader/Loader';
import './ItemsList.scss'
import Error from '../Error/Error';


class ItemList extends Component{

    renderItems = (data) => {
        return data.map(item => {
            const label = this.props.renderName(item)
            return (
                <li className = 'list-group-item dark'
                    key = {item.id}
                    onClick = {() => this.props.onItemSelected(item.id)}
                >
                    {label}
                </li>
            )
        })
    }

    render(){
        const {data} = this.props

        const items = this.renderItems(data)

        

        return(
            <div className = 'jumbotron dark characters-list list'>
                {this.props.title}
                {items}
            </div>
        )
    }
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    getData: PropTypes.func,
    renderName: PropTypes.func,
    title:PropTypes.node
}

const withData = (View) => {
    return class extends Component{
        gotService = new GotService();

        state = {
            item: null,
            loading:true,
            hasError: false
        }
    
        componentDidMount(){
            this.fetchItem()
        }

        componentDidCatch(){
            this.setState({
                hasError : true,
                loading:false
            })
        }
    
        fetchItem(){
            this.props.getData()
                .then(items => {
                    this.setState({
                        item:items,
                        loading:false
                    })            
                })
        }

        render(){

            const {item, loading, hasError} = this.state

            if(loading){
                return <Loader/>
            }

            if(hasError){
                return <Error/>
            }

            return <View {...this.props} data = {item}/>
        }

    }
}

export default withData(ItemList)

