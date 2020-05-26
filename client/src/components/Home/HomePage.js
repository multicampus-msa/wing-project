import React from 'react';
import styled from 'styled-components'
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: 65px 300px 300px;
  justify-content: center;

`

const Title = styled.p`
  text-align: center;
  grid-column: 1 / 4;
  font-family: "NanumSquare", sans-serif;
  font-size: 33px;
  color: lightgoldenrodyellow;
  background: darkgrey;

`

const HomePage = () => {
    return (
        <StyledDiv>
            <Title>Win:G는 인디 뮤지션과 팬들을 위한 플랫폼 입니다.</Title>
            <Carousel style={{gridColumn: "1 / 4"}}>
                <CarouselItem>
                    <img style={{ width: "300px", height: "300px" }}
                         alt="test"
                         src="https://lh3.googleusercontent.com/proxy/V0ho6dA75yXlryz_x4Qp6jF1hAF5L0x_EmzTq3rAJ8mMPzPGeaX-zwvXb5kHNXnqLtb4wlt6sThPXcgpdmYBBdwCvD26g5rQKiLZNJhhyi6_8Nlzpnq7fBCfx9I9Dqs"/>
                    <img style={{ width: "300px", height: "300px" }}
                         alt="test"
                         src="https://img.hani.co.kr/imgdb/resize/2017/0317/148964211022_20170317.JPG"/>
                    <img style={{ width: "300px", height: "300px" }}
                         alt="test"
                         src="https://t1.daumcdn.net/liveboard/melon_magazine/dd06958b0a2e48b98aaa0e1c16b03532.png"/>
                    <Carousel.Caption>
                        <span style={{ background: "rgba(0, 0, 0, 0.5)", fontSize: "25px", fontWeight: "bold" }}>요즘 힙합, 인디씬에서 핫한 아티스트들의 신보</span>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </StyledDiv>
    );

}
export default HomePage;