import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client'; 

const socket = socketio.connect('http://localhost:3001');

function ChatList(props) {

    const [logs, setLogs] = useState([]);

    useEffect(() => {
        socket.emit('joinRoom', {roomName: props.playUrl});
        socket.on('message', (data) =>{
            setLogs(logs.concat({
                ...data,
                key: 'key_' + (logs.length + 1)
            }));
        });
    })

    return (
        <div style = {{backgroundColor : '#f2f2f2', marginTop:'80px', marginBottom:'15px', height : '800px'}}>
            {
                logs.map(e=>(
                    <div key={e.key} >
                        <img alt="user icon" src = "man.png"  width="25px" height="25px" style={{marginLeft:'5px'}}/>
                        <span style={{color : '#819FF7' , fontWeight : 'bold' }} > {e.name} </span>
                        <span>     { e.message } </span>
                        <p style={{clear:'both'}} />
                    </div>
                ))
            }
        </div>
    );
}

export default ChatList;
