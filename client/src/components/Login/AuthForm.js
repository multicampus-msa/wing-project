import React from 'react'
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const AuthFormBlock = styled.div`
  h3 {
  text-align: center;
  margin: 0 0 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px solid dimgray;
  padding-bottom: 0.2rem;
  outline: none;
  width: 100%;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  a {
    color: gray();
    text-decoration: underline;
    &:hover {
      color: lightseagreen;
    }
  }

`

const AuthForm = () => {



    return (
        <AuthFormBlock>
            <h3>로그인</h3>
            <form>
                <StyledInput autoComplete="username" name="username" placeholer="아이디" />
                <StyledInput autoComplete="new-password" name="password" placeholer="비밀번호" type="password"/>
                <div style={{paddingTop: "1rem", width: "100%", display: "flex", justifyContent:"center"}}>
                    <Button fullWidth={true} type="submit" style={{minWidth: "150px"}} color="primary" variant="contained">로그인</Button>
                </div>
            </form>
            <Footer>
                <Link to="/register">회원가입</Link>
            </Footer>
        </AuthFormBlock>
    )
};

export default AuthForm;