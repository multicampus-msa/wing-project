import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import axios from 'axios'
import API_URL from "../Constants/API_URL";
import GenreList from "./GenreList";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 150px);
  grid-template-rows: 65px 240px 65px 240px 65px 240px 65px 240px;
  grid-gap: 1rem 1rem;
  margin-top: 1rem;
  margin-left: 1rem;
  outline: none;
  font-family: "NanumSquare", sans-serif;
  
  .MuiLink-root {
    color: black;
  }
  
  h2, p, #line {
    grid-column: 1 / 4;
  }
  
`
const Genre = () => {

    const [electronicaObject, setElectronicaObject] = useState([]);
    const [popObject, setPopObject] = useState([]);
    const [hiphopObject, setHiphopObject] = useState([]);
    const [rockObject, setRockObject] = useState([]);
    const [isResponseOk, setIsResponseOk] = useState(false);

    useEffect(() => {
        axios.get(API_URL + "/api/music?name=")
            .then(res => {
                setElectronicaObject(res.data.slice(0, 5));
                setPopObject(res.data.slice(5, 10));
                setHiphopObject(res.data.slice(10, 15));
                setRockObject(res.data.slice(15, 20));
                setIsResponseOk(true);
            })
            .catch(err => alert(err))
    }, [])


    return (
        <>

            <StyledDiv>
                <p style={{
                    fontSize: "29px",
                    gridColumn: "1 / 7",
                    borderBottom: "1px solid",
                    borderColor: "#c2c2c2",
                    width: "900px"
                }}>일렉트로니카</p>
                {
                    isResponseOk ?
                        <GenreList GenreObject={electronicaObject}/>
                        : <span> </span>
                }

                <p style={{
                    fontSize: "29px",
                    gridColumn: "1 / 7",
                    borderBottom: "1px solid",
                    borderColor: "#c2c2c2",
                    width: "900px"
                }}>포크 / 팝 / 발라드</p>

                {
                    isResponseOk ?
                        <GenreList GenreObject={popObject}/>
                        : <span> </span>
                }

                <p style={{
                    fontSize: "29px",
                    gridColumn: "1 / 7",
                    borderBottom: "1px solid",
                    borderColor: "#c2c2c2",
                    width: "900px"
                }}>힙합</p>

                {
                    isResponseOk ?
                        <GenreList GenreObject={hiphopObject}/>
                        : <span> </span>
                }

                <p style={{
                    fontSize: "29px",
                    gridColumn: "1 / 7",
                    borderBottom: "1px solid",
                    borderColor: "#c2c2c2",
                    width: "900px"
                }}>락</p>

                {
                    isResponseOk ?
                        <GenreList GenreObject={rockObject}/>
                        : <span> </span>
                }
            </StyledDiv>

        </>
    );
}

export default Genre