import React from 'react'
import Button from "@material-ui/core/Button";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Recommend from "./Recommend";
import StreamingMain from "./StreamingMain";
import Electronica from "./Electronica";
import Pop from "./Pop";
import Ballad from "./Ballad";
import Hiphop from "./Hiphop";
import styled from "styled-components";
import ArtistDetailPage from "./Artist/ArtistDetailPage";
import AlbumDetailPage from "./Album/AlbumDetailPage";
import MusicDetailPage from "./Music/MusicDetailPage";

const StyledDiv = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(3, 300px);
  grid-template-columns: repeat(7, 150px);
  grid-gap: 3rem 1rem;
  
  .MuiButton-root {
    justify-content: left;
    width: 145px;
    font-size: 1.2rem;
    font-weight: bolder;
    font-family: "NanumSquare", sans-serif;
    background: whitesmoke;
  }
`

const StreamingPage = () => {

    return (
        <BrowserRouter>
            <StyledDiv>
                <div style={{ gridRow: "1 / 7", gridColumn: "1 / 2" }}>
                    <Link to={'/Streaming'}>
                        <Button>최신음악</Button>
                    </Link>

                    <Link to={'/Streaming/recommend'}>
                        <Button>취향저격</Button>
                    </Link>


                    <Link to={'/Streaming/electronica'}>
                        <Button>일렉트로니카</Button>
                    </Link>

                    <Link to={'/Streaming/pop'}>
                        <Button>포크 / 팝</Button>
                    </Link>


                    <Link to={'/Streaming/hiphop'}>
                        <Button>힙합</Button>
                    </Link>


                    <Link to={'/Streaming/ballad'}>
                        <Button>발라드</Button>
                    </Link>
                </div>

                <Route exact path={'/Streaming/'} component={StreamingMain}/>
                <Route path={'/Streaming/recommend'} component={Recommend}/>
                <Route exact path={'/Streaming/electronica'} component={Electronica}/>
                <Route exact path={'/Streaming/pop'} component={Pop}/>
                <Route exact path={'/Streaming/hiphop'} component={Hiphop}/>
                <Route exact path={'/Streaming/ballad'} component={Ballad}/>
                <Route exact path={'/Streaming/artist/:id'} component={ArtistDetailPage}/>
                <Route exact path={'/Streaming/album/:id'} component={AlbumDetailPage}/>
                <Route exact path={'/Streaming/music/:id'} component={MusicDetailPage}/>
            </StyledDiv>
        </BrowserRouter>
    )
};


export default StreamingPage



