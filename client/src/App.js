import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import LivePage from './components/Live/LivePage'
import StreamingPage from './components/Streaming/StreamingPage'
import SupportPage from './components/Support/SupportPage'
import ConcertPage from './components/Concert/ConcertPage'

function App() {
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

export default App;
