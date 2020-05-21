import React from 'react';
import ReactPlayer from 'react-player'

const VideoPlayer = ({playUrl}) =>{
    console.log(playUrl);
    return (
    <div style={{marginTop : '5rem', marginBottom : '5rem'}}>
    <ReactPlayer 
         url= {playUrl} 
         width = "80rem"   // 플레이어 가로 크기 
         height = "50rem"  // 플레이어 높이 크기 
         playing = "true"  // 처음에 열렸을 때 바로 재생할 지  true : 바로 재생. false : 정지상태 
         controls // 재생버튼, 음량 등 제어 버튼 생성 
         />
         </div>);
}

export default VideoPlayer;

