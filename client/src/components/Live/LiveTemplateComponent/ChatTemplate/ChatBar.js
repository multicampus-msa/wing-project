import React, {Fragment, Component} from 'react'; 
import ChatList from './ChatList'; 
import ChatInput from './ChatInput'; 

const ChatBar = () => { 

    return (
        <div style={{display: 'flex', flexDirection:'column', marginLeft:'20px'}}>
            <ChatList />

            <ChatInput />
        </div>
    ); 
}

export default ChatBar; 
