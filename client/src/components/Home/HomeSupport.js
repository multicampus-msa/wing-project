import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const TitleDiv = styled.div`
  grid-row: 2;
  grid-column: 2;
  border-bottom: 1px solid darkgrey;
  font-size: 25px;
  background: whitesmoke;
`

const SupportSampleDiv = styled.div`
  grid-row: 3;
  grid-column: 2;
  background: aqua;

`
const HomeSupport = () => {
    return (
        <>
            <TitleDiv><Link to={"/support"}>뮤지션 후원하기</Link></TitleDiv>
            <SupportSampleDiv>후원 콘텐츠</SupportSampleDiv>
        </>
    )
}

export default HomeSupport