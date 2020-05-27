import React from 'react'
import styled from "styled-components";

const TitleDiv = styled.div`
  grid-row: 2;
  grid-column: 2;
  border-bottom: 1px solid darkgrey;
  font-size: 23px;
`

const SupportSampleDiv = styled.div`
  grid-row: 3;
  grid-column: 2;
  background: aqua;

`
const HomeSupport = () => {
    return (
        <>
            <TitleDiv>뮤지션 후원하기</TitleDiv>
            <SupportSampleDiv>후원 콘텐츠</SupportSampleDiv>
        </>
    )
}

export default HomeSupport