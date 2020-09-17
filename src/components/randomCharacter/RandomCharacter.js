import React, { Component } from 'react'
import GotService from '../../services/GotService'
import Error from '../Error/Error';
import Loader from '../loader/Loader';
import './RandomCharacter.scss'


class RandomCharacter extends Component{


    state = {
        char: {},
        loading:true,
        error:false
    }
    
    gotService = new GotService();

    componentDidMount(){
        this.updateCharacter()
        this.timerId = setInterval(this.updateCharacter, 3000)
    }

    componentDidCatch(){
        clearInterval(this.timerId)
    }

    updateCharacter = () => {
        const id = Math.floor(Math.random() * 115 + 25)
        this.gotService.getCharacter(id)
            .then(char => {
                this.setState({
                    char,
                    loading:false
                })
            })
            .catch(() => {
                this.setState({
                    error:true,
                    loading: false
                })
            })
    }

    render(){
        const {char, loading, error}  = this.state

        const errorMessage = error ? <Error/> : null
        const content = !(loading  || error) ? <View char = {char}/> : null
        const loader = loading ? <Loader/> : null 

        return( 
            <div className = 'random-character jumbotron mt-3 dark'>
                    {errorMessage}
                    {loader}
                    {content}      
            </div>
        )
    }
}

const View = ({char}) => {

    const {name, gender, culture, born, died} = char

    return(
        <React.Fragment>
             <h2 className = 'random-character__name'>Random Character: {name} </h2>
                <ul className = 'random-character__details details'>
                    <li className = 'details__item'>
                        Gender: {gender ? gender : 'Неизвестно'}
                    </li>
                    <li className = 'details__item'>
                        Born: {born ? born: 'Неизвестно'}
                    </li>
                    <li className = 'details__item'>
                        Died: {died ? died : 'Неизвестно'}
                    </li>
                    <li className = 'details__item'>
                        Culture: {culture ? culture : 'Неизвестно'}
                    </li>
                </ul>
        </React.Fragment>
    )
}

export default RandomCharacter