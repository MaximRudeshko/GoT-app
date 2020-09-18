import React, { Component } from 'react'
import ItemList from '../items-list/ItemsList'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'
import ItemDetails from '../ItemDetails/ItemDetails'
import GotService from '../../services/GotService'


const Row = ({right, left}) => {
    return (
        <div className = 'row pl-3 pr-3 justify-content-between'>
            {left}
            {right}
        </div>
    ) 
}

class CharatersPage extends Component{

    state = {
        selectedChar: null,
      }
    
    
    onCharSelected = (id) => {
        this.setState({
          selectedChar: id
        }) 
    }

    gotService = new GotService()
    

    render(){

        const itemList = (
            <ItemList onItemSelected = {this.onCharSelected} 
                getData = {() => this.gotService.getAllCharacters()}
                title = {<h3>Characters:</h3>}
                renderItem = {(item) => <span>{item.name}</span>}
            />
        )

        const itemDetails = (
            <ErrorBoundry>
                <ItemDetails itemId = {this.state.selectedChar} 
                            getData = {this.gotService.getCharacter} 
                            title = {<h3>Please choose a character</h3>}
                />
            </ErrorBoundry>
        )


        return <Row left = {itemList} right = {itemDetails}/>
    }
} 
export default CharatersPage