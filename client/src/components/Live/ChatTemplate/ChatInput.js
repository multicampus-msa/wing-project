import React, {useState} from 'react';
import {MdSend} from 'react-icons/md';
import {Button} from 'reactstrap'; 
import socketio from 'socket.io-client'; 

const ChatInput = () => {
    const [name, setName] = useState(''); 
    const [value, setValue] = useState(''); 
    const socket = socketio.connect('http://localhost:3001'); 

    const handleName = (e) => {
        setName(e.target.value); 
    }

    const handleChange = (e) =>{ // input 창 입력 변화 이벤트 처리 
        setValue(e.target.value); 
    }

    const handleClick = () => { // 보내기 버튼 클릭 시 이벤트 처리 
        console.log(value); 
        socket.emit('message', {name : name, message : value}); 
        setValue(''); 
    }

    const handleKeypress = (e) => { // 엔터를 이용하여 전송할 경우 이벤트 처리 
        if(e.key === 'Enter'){
            handleClick();
        }
    }

    return (
        <div style = {{display : 'flex'}}>
            <input name = {name} onChange = {handleName} onKeyPress = {handleKeypress} placeholder="닉네임을 입력하세요" style={{marginRight : '5px'}}/>
            <input placeholder="채팅을 입력하세요" value = {value} onChange = {handleChange} onKeyPress={handleKeypress} style={{marginRight:'5px', width:'auto'}}/>
            <Button outline color = "info" size="sm" onClick= {handleClick}> <MdSend /> </Button>
        </div>
    );
};

export default ChatInput;