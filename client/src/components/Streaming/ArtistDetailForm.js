import React, { useEffect, useState } from 'react'
import axios from 'axios'
import API_URL from "../Constants/API_URL";
import styled from 'styled-components'

const DiscographyDiv = styled.div`
  grid-row: 8 / 9;
  

`

const ArtistDetailForm = ({ id }) => {

    const [artistObject, setArtistObject] = useState({})
    const [isResponseOk, setIsResponseOk] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(API_URL + "/api/artist/" + id)
            .then(res => {
                setArtistObject(res.data);
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
                            <div style={{ marginLeft: "1rem", gridRow: "2 / 6", gridColumn: "1 / 3" }}>
                                <img style={{ width: "400px", height: "400px" }}
                                     src={artistObject.imageUri}
                                     alt="profileImage"
                                />
                            </div>
                            <div style={{
                                gridRow: "2 / 3",
                                gridColumn: "3 / 6",
                                fontSize: "32px",
                                fontWeight: "bold",
                                marginTop: "3rem"
                            }}>{artistObject.artistName}</div>
                            <div style={{ gridRow: "3 / 4", gridColumn: "3 / 4", fontSize: "25px" }}>Debut</div>
                            <div style={{
                                gridRow: "3 / 4",
                                gridColumn: "4 / 5",
                                fontSize: "25px"
                            }}>{artistObject.debutDate}</div>

                            <div style={{ gridRow: "4 / 5", gridColumn: "3 / 4", fontSize: "25px" }}>Genre</div>
                            <div style={{
                                gridRow: "4 / 5",
                                gridColumn: "4 / 5",
                                fontSize: "25px"
                            }}>{artistObject.artistGenre}</div>
                            <div style={{ gridRow: "5 / 6", gridColumn: "3 / 4", fontSize: "25px" }}>Company</div>
                            <div style={{
                                gridRow: "5 / 6",
                                gridColumn: "4 / 6",
                                fontSize: "25px"
                            }}>{artistObject.artistCompany}</div>
                        </>
                    )
                    : <span> </span>
            }
        </>
    )
}

export default ArtistDetailForm