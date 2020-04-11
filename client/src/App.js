import React, { Component, Fragment } from 'react';
import Menu from './components/Menu';
import Root from './components/Root';

class App extends Component {
    render(){
        return(
            <Fragment>
                <Menu />
                <Root />
            </Fragment>
        );
    }
}
export default App;
