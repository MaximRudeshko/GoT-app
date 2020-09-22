import React, { Component } from 'react'
import ItemList from '../items-list/ItemsList'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'
import ItemDetails from '../ItemDetails/ItemDetails'
import GotService from '../../services/GotService'
import Row from '../row/Row'
import {Record} from '../ItemDetails/ItemDetails'
import { GotServiceConsumer } from '../service-context/GotServiceContext'



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

        const charactersList = (
           <GotServiceConsumer>
               {({getAllCharacters}) => {
                   return (
                    <ItemList onItemSelected = {this.onCharSelected} 
                        getData = {getAllCharacters}
                        title = {<h3>Characters:</h3>}
                    >
                        {({name}) => <span>{name}</span>}
                    </ItemList>
                   )
               }}
           </GotServiceConsumer>
        )

        
        const characterDetails = (
            <ErrorBoundry>
                <ItemDetails itemId = {this.state.selectedChar} 
                            getData = {this.gotService.getCharacter} 
                            title = {<h3>Please choose a character</h3>}
                >
                    <Record field = 'gender' label = 'Gender'/>
                </ItemDetails>
            </ErrorBoundry>
        )


        return <Row left = {charactersList} right = {characterDetails}/> 
    }
} 
export default CharatersPage