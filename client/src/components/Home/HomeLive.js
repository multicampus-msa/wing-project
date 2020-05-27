import React from 'react'
import styled from "styled-components";

const TitleDiv = styled.div`
  margin-top: 1rem;
  grid-row: 4;  
  grid-column: 1;
  border-bottom: 1px solid darkgrey;
  font-size: 23px;
`

const LiveSampleDiv = styled.div`
  grid-row: 5;
  grid-column: 1;
  background: green;

`

const HomeLive = () => {
    return (
        <>
            <TitleDiv>
                Live Now!
            </TitleDiv>
            <LiveSampleDiv>
                라이브 콘텐츠
            </LiveSampleDiv>
        </>
    )
}

export default HomeLive