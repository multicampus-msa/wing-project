import React, { Component } from 'react';
import socketio from 'socket.io-client';
import ChatList from './ChatList';

const socket = socketio.connect('http://localhost:3001'); 

class ChatListTemplate extends Component {
    
    constructor(props){
        super(props); 
        this.state = {
            logs : []
        }
    }

    componentDidMount(){
        socket.emit('joinRoom', {roomName: this.props.playUrl});
        socket.on('message', (data) =>{
            const logs2 = this.state.logs; 
            data.key = 'key_' + (this.state.logs.length + 1); 
            logs2.push(data);   
            this.setState({logs : logs2}); 
        });
    }
    
    render() {
        return (
            <div style = {{backgroundColor : '#f2f2f2', marginTop:'80px', marginBottom:'15px', height : '800px'}}>
                <ChatList logs={this.state.logs}/>
            </div>
        );
    }
}

export default ChatListTemplate;
