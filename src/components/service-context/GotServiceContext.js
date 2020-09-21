import React from 'react'


const {Provider: GotServiceProvider , Consumer: GotServiceConsumer} = React.createContext()

export {
    GotServiceConsumer,
    GotServiceProvider
}