import React from 'react'
const { GotServiceConsumer } = require("../service-context/GotServiceContext")



const withService = (Wrapped) => {
    return (props) => {
        return <GotServiceConsumer>
            {
                (gotService) => {
                    return (
                        <Wrapped {...props} gotService = {gotService}/>
                    )
                }
            }
        </GotServiceConsumer>
    }  
}

export default withService