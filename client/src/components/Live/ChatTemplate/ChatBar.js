import React from 'react';
import ChatList from './ChatList'; 
import ChatInput from './ChatInput'; 

const ChatBar = ({playUrl}) => { 

    console.log(playUrl);

    return (
        <div style={{display: 'flex', flexDirection:'column', marginLeft:'20px'}}>
            <ChatList playUrl={playUrl}/>

            <ChatInput playUrl={playUrl}/>
        </div>
    ); 
}

export default ChatBar; 
