import React from 'react';
import SupportList from './SupportList';
import SupportDetail from './SupportDetail';
import { Route, Switch } from 'react-router-dom';

const SupportPage = () => {
    return (
        <>
            <Switch>
                <Route exact path="/support" component={SupportList}/>
                <Route exact path="/support/:pageNum" component={SupportList}/>
                <Route exact path="/support/detail/:artistId" component={SupportDetail}/>
            </Switch>
        </>
    )
}

export default SupportPage;
