import React, {Component} from 'react'
import Loader from '../loader/Loader'
import Error from '../Error/Error'

const withData = (View) => {
    return class extends Component{
        
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

export default withData