import React, {useState, useEffect, useContext} from 'react'
import { Button, withStyles } from "@material-ui/core";
import axios from 'axios';
import { ctx } from '../Menu'

const StyledButton = withStyles({
    root: {
        justifyContent: 'center',
        display: 'black',        
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 30px',
        fontSize: 15,
        
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const LoginButton = ({ token, login, logout }) => {
    const getCtx = useContext(ctx)

    return(
        <>
        {token ? 
                // todo : 로그인 시  logout 버튼 위에 사용자 이름, 프로필 이미지 보이게 하기
                // 이름을 누르거나 뭐 링크를 누르면 마이페이지로 이동하도록 하기
                <>                
                    <div>
                        {getCtx} 님 안녕하세요
                    </div>              
                    <StyledButton className = "logoutBtn" onClick={logout} variant="contained" color="secondary">Logout</StyledButton> 
                </>
                
                : <StyledButton className = "loginBtn" onClick={login} variant="contained" color="primary">Login</StyledButton>}
                
        </>

    );
}
export default LoginButton;
