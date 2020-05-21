import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import MenuButtons from "./Main/MenuButtons";
import MainLoginButton from "./Main/MainLoginButton";
//import Login from './Login/Login';
import LOGO_URL from "./Constants/LOGO_URL";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;

// todo : 로그인 버튼 위치 수정 필요
const BtnStlye = styled.button`
    margin-left: 70rem;
    margin-bottom: 1rem;
`;

const Menu = () => {
    return (
        <Fragment>
            <StyledDiv>
                <Link to="/"><img src={LOGO_URL} alt="Win:G 로고"/></Link>
            </StyledDiv>
            <br/>
            <BtnStlye>
                <MainLoginButton/>
            </BtnStlye>
            <br/>
            <StyledDiv>
                <MenuButtons />
            </StyledDiv>
            <hr/>
        </Fragment>
    )
};

export default Menu;