import { Button, withStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const StyledButton = withStyles({
    root: {
        background: 'green',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 30px',
        fontSize: 15
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const MainLoginButton = () => {

    {/* 로그인 버튼*/}
    return (
        <Link style={{ textDecoration: 'none' }} to={'/login'}>
            <StyledButton
                variant="contained"
                color="secondary"
                style={{ left: "65%", width: "100px", float: 'right', position: "absolute" }}
            >
                <img src="login.png" alt="로그인 버튼 이미지"/>
            </StyledButton>
        </Link>
    )
};

export default MainLoginButton;