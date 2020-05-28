import React, {useState, useEffect, useContext} from 'react'
import { Button, withStyles } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
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

const LoginButton = ({ token, name, image, login, logout }) => {
    const classes = useStyles();
    return(
        <>
        {token ? 
                // todo : 로그인 시 프로필 이미지 보이게 하기
                // 이름을 누르면 마이페이지로 이동                
                <>    
                        
                    <Link to={`/mypage/${name}`}>
                        <div className={classes.root}>
                            <Avatar src = {image} alt = "Profile Image"/>
                        </div>
                            {name} 님 안녕하세요
                    </Link>                                
                    <StyledButton className = "logoutBtn" onClick={logout} variant="contained" color="secondary">Logout</StyledButton> 
                </>
                
                : <StyledButton className = "loginBtn" onClick={login} variant="contained" color="primary">Login</StyledButton>}                
        </>

    );
}
export default LoginButton;
