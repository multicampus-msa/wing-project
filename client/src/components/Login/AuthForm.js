import React from 'react'
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const AuthFormBlock = styled.div`
  h3 {
    text-align: center;
  }
`;

const StyledInput = styled.input`
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid dimgray;
  outline: none;
  width: 100%;
  height: 50px;
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

`;

const AuthForm = () => {
    return (
        <AuthFormBlock>
            <h3>로그인</h3>
            <form>
                <StyledInput autoComplete="username" name="username" placeholder="이메일" />
                <StyledInput autoComplete="new-password" name="password" placeholder="비밀번호" type="password"/>
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