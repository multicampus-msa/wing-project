import React from 'react'; 
import { Button } from 'reactstrap';

const VideoListItem = ({video, onVideoSelect, setPlay}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoUrl = "https://youtu.be/"+video.id.videoId;
    //const videoUrl = "https://youtu.be/"+video.snippet.resourceId.videoId;
    //const videoUrl = "https://youtu.be/"+video.snippet.resourceId.videoId; 
    //console.log(video);
    //console.log(video.snippet.resourceId.videoId); 

    return (
        <li onClick ={()=>onVideoSelect(video)} 
            className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img alt="media "className="media object" src={imageUrl} />
                </div>
                <div className="media-body" style ={{marginLeft : '2rem', marginTop : '0.5rem', display : 'block'}}>
                        <div className="media-heading" style={{fontSize : '20px'}}><b>{video.snippet.title}</b></div>
                        <br></br>
                        <div className="media-channel" style={{color:'yellowgreen'}}>채널명 : {video.snippet.channelTitle}</div>
                </div>
                <Button  style = {{marginLeft : '1rem', color:'white' , background : 'red', marginTop : '1.6rem'}} onClick = {() => setPlay(videoUrl) } > Live 시청 </Button>
            </div>
        </li>
    )
}

export default VideoListItem; 