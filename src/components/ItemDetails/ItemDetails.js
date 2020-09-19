import React, { Component } from 'react'
import GotService from '../../services/GotService'
import Error from '../Error/Error'
import Loader from '../loader/Loader'
import './ItemDetails.scss'


const Record = ({item, label, field}) => {
    return(
        <React.Fragment>
            <span>{label}: </span>
            <span>{item[field]}</span>
        </React.Fragment>
    )
}

export {Record}


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
                {!this.state.loading && this.state.item ? <View record = {this.props.children} item = {this.state.item} renderSubtitle = {this.props.renderSubtitle}/>: null}
                {this.state.loading ? <Loader/> : null}
                {this.state.error ? <Error/> : null}
            </div>
        )
    }
}

const View = ({item, renderSubtitle, record}) => {


    return (
        <React.Fragment>
            <div className="card dark" >
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    {
                        React.Children.map(record, () => {
                            return React.cloneElement(record, {item})
                        })
                    }
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemDetails