import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from './Home/HomePage'
import LivePage from './Live/LivePage'
import StreamingPage from './Streaming/StreamingPage'
import SupportPage from './Support/SupportPage'
import ConcertPage from './Concert/ConcertPage'

function Root() {
    return (
        <>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/home" component={HomePage}/>
            <Route exact path="/streaming" component={StreamingPage}/>
            <Route exact path="/live" component={LivePage}/>
            <Route exact path="/support" component={SupportPage}/>
            <Route exact path="/concert" component={ConcertPage}/>
        </>
    );
}

export default Root;