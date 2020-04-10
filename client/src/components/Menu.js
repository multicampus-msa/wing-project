import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import MenuButtons from "./Main/MenuButtons";
import MainLoginButton from "./Main/MainLoginButton";

const StyledDiv = styled.div`
text-align: center;
`;

const Menu = () => {
    return (
        <StyledDiv>
            <Link to="/"><img src="logo.png" alt="Win:G 로고"></img></Link>
            <MainLoginButton/>
            <br /><br />
            <MenuButtons />
            <hr />
        </StyledDiv>
    )
};

export default Menu;