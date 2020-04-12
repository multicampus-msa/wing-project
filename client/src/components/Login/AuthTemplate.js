import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 로그인 페이지 레이아웃

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

const WhiteBox = styled.div`
    position: absolute;
    bottom: 22rem;
    .logo-area {
        display: block;
        padding-bottom: 4rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
        
    }
    
    box-shadow: 0 0 8px rgba(0,0,0,0.025);
    padding: 2rem;
    width: 600px;
    background: white;
    border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo-area">
                    <Link to='/'><img src="logo.png" alt="logo"/></Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    )
};

export default AuthTemplate;