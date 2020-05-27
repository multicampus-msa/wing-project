import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const TitleDiv = styled.div`
  margin-top: 1rem;
  grid-row: 4;
  grid-column: 2;
  border-bottom: 1px solid darkgrey;
  font-size: 25px;
  background: whitesmoke;
`

const ConcertSampleDiv = styled.div`
  grid-row: 5;
  grid-column: 2;
  background: darkblue;

`

const HomeConcert = () => {
    return (
        <>
            <TitleDiv><Link to={"/concert"}>공연 정보</Link></TitleDiv>
            <ConcertSampleDiv>공연 콘텐츠</ConcertSampleDiv>
        </>
    )
}

export default HomeConcert