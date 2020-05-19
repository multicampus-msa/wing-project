import React, { useEffect, useState } from 'react'
import axios from "axios";
import API_URL from "../../Constants/API_URL";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@material-ui/core"

const ContentDiv = styled.div`
  font-size: 25px;
 
`
const TitleDiv = styled.div`
  border-bottom: 1px solid;
  
`

const AlbumDetailForm = ({ id }) => {

    const [albumObject, setAlbumObject] = useState({});
    const [isResponseOk, setIsResponseOk] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(API_URL + "/api/album/" + id)
            .then(res => {
                setAlbumObject(res.data);
                setIsResponseOk(true);
            })
    }, [id])


    return (
        <>
            <div style={{
                outline: "none",
                gridColumn: "1 / 5",
                marginTop: "1rem",
                fontSize: "32px",
                fontWeight: "bold"
            }}>
                <TitleDiv>
                    Album
                </TitleDiv>
            </div>
            {
                isResponseOk ?
                    <>
                        <div style={{ gridRow: "2 / 6", gridColumn: "1 / 3" }}>
                            <img style={{ width: "350px", height: "350px" }}
                                 src={albumObject.imageUri}
                                 alt="albumImage"
                            />
                        </div>
                        <div style={{ gridColumn: "3 / 5", fontSize: "33px", fontWeight: "bold" }}>
                            {albumObject.albumName}
                            <br/>
                            {albumObject.artistList.map(obj => {
                                return (
                                    <p style={{ fontSize: "22px" }}>
                                        <RouterLink
                                            style={{ color: "Green" }}
                                            to={"/streaming/artist/" + obj.artistId}>
                                            {obj.artistName}
                                        </RouterLink>
                                    </p>
                                )
                            })}
                        </div>
                        <ContentDiv style={{ marginTop: "2rem" }}>Date</ContentDiv>
                        <ContentDiv style={{ marginTop: "2rem" }}>{albumObject.date}</ContentDiv>
                        <ContentDiv>Company</ContentDiv>
                        <ContentDiv>{albumObject.company}</ContentDiv>
                        <ContentDiv style={{ marginTop: "-2rem" }}>Distributor</ContentDiv>
                        <ContentDiv style={{ marginTop: "-2rem" }}>{albumObject.distributor}</ContentDiv>

                        <div style={{ fontSize: "33px", fontWeight: "bold", gridColumn: "1 / 5" }}>
                            <TitleDiv>
                                Description
                            </TitleDiv>
                        </div>
                        <div style={{ fontSize: "18px", gridColumn: "1 / 5" }}>
                            {albumObject.description}
                        </div>
                        <div style={{ fontSize: "33px", fontWeight: "bold", gridColumn: "1 / 5" }}>
                            <TitleDiv>
                                Tracklist
                            </TitleDiv>
                        </div>

                        {
                            albumObject.musicList.map(music => {
                                return (
                                    <div style={{
                                        background: "whitesmoke",
                                        marginTop: "1rem",
                                        display: "inline-grid",
                                        fontSize: "23px",
                                        border: "1px solid",
                                        gridRow: `${8 + Number(music.trackNumber)}`,
                                        gridColumn: "1 / 5",
                                        alignItems: "center",
                                        borderColor: "grey"
                                    }}>
                                        <MuiLink style={{marginLeft: "7px", marginTop: "-1rem"}} href={music.fileUri}>
                                            {music.trackNumber}. {music.musicName}
                                        </MuiLink>
                                    </div>
                                )
                            })
                        }

                        <div className="footer" style={{display: "absolute", bottom: "100%", width: "100%", height: "200px"}}> </div>
                    </>

                    :

                    <span>로딩중~</span>
            }
        </>

    )
}

export default AlbumDetailForm