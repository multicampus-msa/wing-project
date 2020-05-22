import { Link } from "react-router-dom";
import React from "react";


const GenreList = ({ GenreObject }) => {

    return (
        GenreObject.map(music => {
            return (
                <div style={{ marginLeft: "2rem" }}>
                    <img style={{ width: "100px", height: "100px" }}
                         alt="test"
                         src={music.albumImage}/>
                    {
                        music.artistList.map(artist => {
                            return (
                                <p style={{ marginTop: "1rem", width: "130px" }}>
                                    <Link style={{fontSize: "18px", color: "black"}} to={"/streaming/artist/" + artist.artistId}>{artist.artistName}</Link>
                                </p>
                            )
                        })
                    }
                    <p style={{ width: "130px" }}>{music.musicName}</p>
                </div>
            )
        })
    )
}

export default GenreList