import React, { useEffect, useState } from "react"
import axios from "axios";
import Link from "@material-ui/core/Link";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 30px 10px 60px 400px 400px 400px;
  grid-column-gap: 1rem;
  margin-top: 1rem; 
  font-family: "NanumBarunGothic", sans-serif;
  
  h2 {
    grid-column: 1 / 4;
  }
  
  p {
    grid-column: 1 / 4;
  }
  
  #line {
    grid-column: 1 / 4;
  }
  
  .MuiLink-root {
    color: black;
  }
`

const Recommend = () => {

    const [isResponseOk, setIsResponseOk] = useState(false);
    const [recommendObject, setRecommendObject] = useState([]);

    useEffect(() => {
        axios.get("http://ec2-13-124-91-36.ap-northeast-2.compute.amazonaws.com:8080/api/music?name=")
            .then(res => {
                setRecommendObject(recommendObject.concat(res.data.slice(0, 9)));
                setIsResponseOk(true);
                console.log("렌더링")
            })
            .catch(err => {
                alert(err)
            })
    }, [])

    return (
        <StyledDiv>
            <p><h2>당신의 취향을 저격할 노래들</h2></p>
            <div id="line"><hr/><br/></div>
            <p style={{fontSize: "20px", marginTop: "1rem"}}>사용자의 음악 청취 패턴, 선호 장르를 종합한 결과입니다.</p>
            {
                isResponseOk ? recommendObject.map((music, index) => {
                    return (
                        <div style={{ gridColumn: `${(index % 3) + 1} / ${(index % 3) + 2}`, width: "300px", height: "370px", marginRight: "1rem", marginBottom: "1rem"}}>
                            <Link href={music.fileUri}>
                                <img style={{ width: "300px", height: "300px" }} src={music.albumImage}/><br/>
                                <div style={{fontSize: "20px"}}>{music.albumName}</div>
                                <span style={{color: "grey"}}>{music.artistList.map(obj => obj.artistName)} - {music.musicName}</span>
                            </Link>
                        </div>
                    )
                })
                    : <div id="loading">loading..</div>
            }
        </StyledDiv>
    )
}

export default Recommend