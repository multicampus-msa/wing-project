import React, { useEffect, useState } from 'react'
import axios from 'axios'
import API_URL from "../../Constants/API_URL";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContentDiv = styled.div`
  font-size: 25px;
  
`

const ArtistDetailForm = ({ id }) => {

    const [artistObject, setArtistObject] = useState({})
    const [albumObject, setAlbumObject] = useState([]);
    const [isResponseOk, setIsResponseOk] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(API_URL + "/api/artist/" + id)
            .then(res => {
                setArtistObject(res.data);
                setAlbumObject(res.data.albumList);
                console.log(res.data.albumList);
                setIsResponseOk(true);
            })
            .catch(err => alert(err))
    }, [id])


    return (
        <>
            <div style={{
                outline: "none",
                gridColumn: "1 / 5",
                marginTop: "1rem",
                fontSize: "32px",
                fontWeight: "bold"
            }}>Artist
            </div>
            {
                isResponseOk ? (
                        <>
                            <div style={{ gridRow: "2 / 6", gridColumn: "1 / 3" }}>
                                <img style={{ width: "350px", height: "350px" }}
                                     src={artistObject.imageUri}
                                     alt="profileImage"
                                />
                            </div>
                            <div style={{ gridColumn: "3 / 5", fontSize: "33px", fontWeight: "bold" }}>{artistObject.artistName}</div>
                            <ContentDiv>Debut</ContentDiv>
                            <ContentDiv>{artistObject.debutDate}</ContentDiv>
                            <ContentDiv>Genre</ContentDiv>
                            <ContentDiv>{artistObject.artistGenre}</ContentDiv>
                            <ContentDiv>Company</ContentDiv>
                            <ContentDiv>{artistObject.artistCompany}</ContentDiv>

                            <div style={{fontSize: "33px", fontWeight: "bold", gridColumn: "1 / 5"}}>
                                Description
                            </div>
                            <div style={{fontSize: "18px", gridColumn: "1 / 5"}}>
                                {artistObject.description}
                            </div>
                            <div style={{fontSize: "33px", fontWeight: "bold", gridColumn: "1 / 5"}}>
                                Discography
                            </div>
                            {
                                albumObject.map(album => {
                                    return (
                                            <div style={{ gridRow: "9", outline: "none" }}>
                                                <Link to={"/streaming/album/" + album.albumId}>
                                                <img alt="albumImage" style={{ width: "170px", height: "170px" }} src={album.ImageUri}/>
                                                <p>{album.albumName}</p>
                                                <p>{album.date}</p>
                                                </Link>
                                            </div>
                                    )
                                })
                            }
                        </>
                    )
                    : <span> </span>
            }
        </>
    )
}

export default ArtistDetailForm