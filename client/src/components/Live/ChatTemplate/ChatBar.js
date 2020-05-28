import React from 'react';
import ChatListTemplate from './ChatListTemplate'; 
import ChatInput from './ChatInput'; 

const ChatBar = ({playUrl}) => { 

    console.log(playUrl);

    return (
        <div style={{display: 'flex', flexDirection:'column', marginLeft:'20px'}}>
            <ChatListTemplate playUrl={playUrl}/>

            <ChatInput playUrl={playUrl}/>
        </div>
    ); 
}

export default ChatBar; 
