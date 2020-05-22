import React, { Component } from 'react';
import socketio from 'socket.io-client'; 

const socket = socketio.connect('http://localhost:3001'); 


class ChatList extends Component {
    
    constructor(props){
        super(props); 
        this.state = {
            logs : []
        }
    }

    componentDidMount(){
        socket.on('message', (data) =>{
            const logs2 = this.state.logs; 
            data.key = 'key_' + (this.state.logs.length+1); 
            console.log(data); 
            logs2.unshift(data);   
            this.setState({logs : logs2}); 
        }); 
    }
    
    render() {

        const messages = this.state.logs.map(e=>(
            <div key={e.key} >
                <img alt="user icon"src = "man.png"  width="25px" height="25px" style={{marginLeft:'5px'}}/>
                <span style={{color : '#819FF7' , fontWeight : 'bold' }} > {e.name} </span>
                <span>     { e.message } </span>
                <p style={{clear:'both'}} />
            </div>
        ))

        return (
            <div style = {{backgroundColor : '#f2f2f2', marginTop:'80px', marginBottom:'15px', height : '800px'}}>
                {messages}
            </div>
        );
    }
}

export default ChatList;