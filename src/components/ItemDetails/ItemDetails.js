import React, { Component } from 'react'
import GotService from '../../services/GotService'
import Error from '../Error/Error'
import Loader from '../loader/Loader'
import './ItemDetails.scss'

class ItemDetails extends Component{

    state = {
        item: null,
        loading:false,
        error:false
    }

    gotService = new GotService()

    componentDidMount(){
        this.updateItem()
    }

    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){
            this.setState({
                loading:true
            })
            this.updateItem()
        } 
    }

    updateItem = () => {

        if(!this.props.itemId){
            return
        }
    
        this.props.getData(this.props.itemId)
        .then(item => {
            this.setState({
                item,
                loading:false
            })  
        })
    }

    render(){

        const title = this.props.title

        return(
            <div className = 'jumbotron dark details-wrap'>
                {this.state.item ? null : title }
                {!this.state.loading && this.state.item ? <View item = {this.state.item}/>: null}
                {this.state.loading ? <Loader/> : null}
                {this.state.error ? <Error/> : null}
            </div>
        )
    }
}

const View = ({item}) => {
    return (
        <React.Fragment>
            <div className="card dark" >
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Подзаголовок карты</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemDetails