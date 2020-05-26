import React from 'react';
import styled from 'styled-components'
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: 70px 35px 300px 300px;
  grid-gap: 1rem;
  justify-content: center;
  font-family: "NanumSquare", sans-serif;

  a {
    color: black;
  }
  
  .image {
    background: black;
  }
  
  img:hover {
    transition: .4s;
    opacity: 0.7;
  }


`

const Title = styled.p`
  text-align: center;
  grid-column: 1 / 4;
  font-size: 29px;
  font-weight: bold;
  color: black;
`

const LatestMusicTitleDiv = styled.div`
  grid-row: 2;
  grid-column: 1;
  border-bottom: 1px solid darkgrey;
  font-size: 23px;
`

const CarouselDiv = styled.div`
  grid-row: 3;
  grid-column: 1;
`

const SupportTitleDiv = styled.div`
  grid-row: 2;
  grid-column: 2 / 4;
  border-bottom: 1px solid darkgrey;
  font-size: 23px;
`

const HomePage = () => {
    return (
        <StyledDiv>
            <Title>Win:G는 인디 아티스트들을 위한 플랫폼 입니다.</Title>
            <LatestMusicTitleDiv><Link to={"/streaming/"}>최신음악</Link></LatestMusicTitleDiv>
            <CarouselDiv>
                <Carousel>
                    <CarouselItem>
                        <Link to={'/streaming/album/8'}>
                            <div className="image">
                                <img style={{ width: "300px", height: "300px" }}
                                     alt="test"
                                     src="weare.png"/>
                            </div>
                        </Link>
                    </CarouselItem>
                    <CarouselItem>
                        <Link to={'/streaming/album/7'}>
                            <div className="image">
                                <img style={{ width: "300px", height: "300px" }}
                                     alt="test"
                                     src="casker.png"/>
                            </div>
                        </Link>
                    </CarouselItem>
                    <CarouselItem>
                        <Link to={'/streaming/album/9'}>
                            <div className="image">
                                <img style={{ width: "300px", height: "300px" }}
                                     alt="test"
                                     src="woo.png"/>
                            </div>
                        </Link>
                    </CarouselItem>
                </Carousel>
            </CarouselDiv>
            <SupportTitleDiv>뮤지션 후원하기</SupportTitleDiv>
        </StyledDiv>
    );

}
export default HomePage;