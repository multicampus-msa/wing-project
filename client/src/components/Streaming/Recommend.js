import React, { useEffect, useState } from "react"
import axios from "axios";
import Link from "@material-ui/core/Link";
import Carousel from "react-material-ui-carousel";

const Recommend = () => {

    const [recommendObject, setRecommendObject] = useState([]);

    useEffect(() => {
        axios.get("http://ec2-13-124-91-36.ap-northeast-2.compute.amazonaws.com:8080/api/music?name=")
            .then(res => {
                setRecommendObject(recommendObject.concat(res.data.slice(0, 3)));
                console.log("렌더링")
            })
            .catch(err => {
                alert(err)
            })
    }, [])

    return (
        <div style={{gridColumn: "2 / 8", marginTop: "1rem", fontFamily: "NanumBarunGothic"}}>
            <h2>당신의 취향을 저격할 노래들</h2>
            <div style={{ display: "grid", gridRow: "1000px", gridTemplateColumn: "300px 300px 300px" }}>
                {
                    recommendObject.map(music => {
                        return (
                            <div style={{ gridRow: "1 / 2", width: "300px", height: "370px", marginRight: "1rem", marginBottom: "1rem"}}>
                                <Link href={music.fileUri}>
                                    <img style={{ width: "300px", height: "300px" }} src={music.albumImage}/><br/>
                                    <h3>{music.albumName}</h3><br/>
                                    {music.artistList.map(obj => obj.artistName)} - {music.musicName}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Recommend