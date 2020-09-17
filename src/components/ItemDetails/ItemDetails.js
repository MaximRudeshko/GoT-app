import React, { Component } from 'react'
import GotService from '../../services/GotService'
import Error from '../Error/Error'

import Loader from '../loader/Loader'
import './ItemDetails.scss'

class ItemDetails extends Component{

    state = {
        char: null,
        loading:false,
        error:false
    }

    gotService = new GotService()

    componentDidMount(){
        this.updateChar()
    }



    componentDidUpdate(prevProps){
        if(this.props.charId !== prevProps.charId){
            this.setState({
                loading:true
            })
            this.updateChar()
        }
        
    }

    updateChar = () => {

        if(!this.props.charId){
            return
        }

       try {
            this.gotService.getCharacter(this.props.charId)
            .then(char => {
                this.setState({
                    char,
                    loading:false
                })  
            })
       } catch (e) {
            this.setState({
                error:true,
                loading:false,
                char:null
            })
       }
    }





    render(){

        const title = !this.state.char ? <h3>Please choose a character</h3> : null

        return(
            <div className = 'jumbotron dark details-wrap'>
                {title}
                
             
                {!this.state.loading && this.state.char ? <View char = {this.state.char}/>: null}
                {this.state.loading ? <Loader/> : null}
                {this.state.error ? <Error/> : null}
            </div>
        )
    }
}

const View = ({char}) => {
    return (
        <React.Fragment>
            
            <div className="card dark" >
                <div className="card-body">
                    <h5 className="card-title">{char.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Подзаголовок карты</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Ссылка карты</a>
                    <a href="#" className="card-link">Другая ссылка</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemDetails