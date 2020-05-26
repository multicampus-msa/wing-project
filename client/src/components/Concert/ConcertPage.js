import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ConcertList from './ConcertList';
import ConcertDetail from './ConcertDetail';

const ConcertPage = () => {
    return (
        <BrowserRouter>
            <Route exact path="/concert" component={ConcertList}/>
            <Route exact path="/concert/detail/:artistId" component={ConcertDetail}/>
        </BrowserRouter>
    )
}

export default ConcertPage;