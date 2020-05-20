import React, { useEffect, useState } from "react"
import axios from "axios";
import { Link as MuiLink } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom"
import styled from "styled-components";
import API_URL from "../Constants/API_URL";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 30px 10px 60px 350px 350px 350px;
  //grid-column-gap: 1rem;
  //grid-row-gap: 1rem;
  margin-top: 1rem;
  margin-left: 1rem;
  outline: none;
  font-family: "NanumSquare", sans-serif;
  
  h2, p, #line {
    grid-column: 1 / 4;
  }
  
  .MuiLink-root {
    color: black;
  }
  
  img {
    transition: .3s;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
  img:hover {
    -ms-transform: scale(1.1,1.1);
    -webkit-transform: scale(1.1,1.1);
    transform: scale(1.1,1.1);
   }
  
  .img_description:hover {
    visibility: visible;
    opacity: 1;
  }
`

const Recommend = () => {

    const [isResponseOk, setIsResponseOk] = useState(false);
    const [recommendObject, setRecommendObject] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "/api/music?name=")
            .then(res => {
                setRecommendObject(res.data.slice(0, 9));
                setIsResponseOk(true);
            })
            .catch(err => {
                alert(err)
            })
    }, [])

    return (
        <StyledDiv>
            <p><h2>당신의 취향을 저격할 노래들</h2></p>
            <div id="line">
                <hr/>
                <br/></div>
            <p style={{ fontSize: "20px", marginTop: "1rem" }}>사용자의 음악 청취 패턴, 선호 장르를 종합한 결과입니다.</p>
            {
                isResponseOk ? recommendObject.map((music, index) => {
                    return (
                        <div style={{
                            gridColumn: `${(index % 3) + 1} / ${(index % 3) + 2}`,
                            width: "300px",
                            height: "370px",
                            marginRight: "1rem",
                            marginBottom: "1rem"
                        }}
                        >
                            <MuiLink
                                id="imgWrapper"
                                href={music.fileUri}>
                                <img style={{ width: "200px", height: "200px" }} src={music.albumImage}/>
                                <br/>
                            </MuiLink>
                            <div style={{ fontSize: "22px" }}>
                                <RouterLink style={{ color: "grey" }} to={"/streaming/album/" + music.albumId}>
                                    {music.albumName}
                                </RouterLink>
                            </div>
                            <span style={{ color: "grey", fontSize: "19px" }}>
                                        {music.artistList.map(obj => {
                                            return (
                                                <RouterLink style={{ color: "grey" }}
                                                            to={"/streaming/artist/" + obj.artistId}>
                                                    {obj.artistName}
                                                </RouterLink>
                                            )
                                        })}
                                <p>{music.musicName}</p>
                                </span>

                        </div>
                    )
                })
            : <div id="loading">loading..</div>
            }
        </StyledDiv>
    )
}

export default Recommend