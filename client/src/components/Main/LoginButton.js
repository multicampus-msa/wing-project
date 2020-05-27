import React, {useState, useEffect, useContext} from 'react'
import { Button, withStyles } from "@material-ui/core";
import axios from 'axios';
import { Link } from "react-router-dom";

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

const LoginButton = ({ token, name, login, logout }) => {
    return(
        <>
        {token ? 
                // todo : 로그인 시 프로필 이미지 보이게 하기
                // 이름을 누르면 마이페이지로 이동                
                <>    
                    <Link to={`/mypage/${name}`}>
                        <div>
                            {name} 님 안녕하세요!!!!
                        </div>
                    </Link>                                
                    <StyledButton className = "logoutBtn" onClick={logout} variant="contained" color="secondary">Logout</StyledButton> 
                </>
                
                : <StyledButton className = "loginBtn" onClick={login} variant="contained" color="primary">Login</StyledButton>}                
        </>

    );
}
export default LoginButton;
