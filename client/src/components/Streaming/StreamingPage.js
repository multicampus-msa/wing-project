import React from 'react'
import styled from 'styled-components'
import Button from "@material-ui/core/Button";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Recommend from "./Recommend";
import StreamingMain from "./StreamingMain";
import Electronica from "./Electronica";
import Pop from "./Pop";
import Ballad from "./Ballad";
import Hiphop from "./Hiphop";
import StreamingPageStyledDiv from "./StyledComponents/StreamingPageStyledDiv";


const StreamingPage = () => {

    return (
        <>
            <BrowserRouter>
                <StreamingPageStyledDiv>
                    <div style={{ gridRow: "1 / 2", gridColumn: "1 / 2" }}>
                        <Link to={'/Streaming'}>
                            <Button>스트리밍 메인</Button>
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
                    <Route exact path={'/Streaming/recommend'} component={Recommend}/>
                    <Route exact path={'/Streaming/electronica'} component={Electronica}/>
                    <Route exact path={'/Streaming/pop'} component={Pop}/>
                    <Route exact path={'/Streaming/hiphop'} component={Hiphop}/>
                    <Route exact path={'/Streaming/ballad'} component={Ballad}/>
                </StreamingPageStyledDiv>
            </BrowserRouter>
        </>
    )
};


export default StreamingPage



