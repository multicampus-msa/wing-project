import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
import Menu from './Menu'

const Root = () => {
    return (
        <BrowserRouter>
            <Menu />
            <App />
        </BrowserRouter>
    )
}

export default Root