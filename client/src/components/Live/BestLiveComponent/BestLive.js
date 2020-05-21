import React, { Component } from 'react';
import BringChannelData from './BringChannelData'; 
import BestVideoList from "./BestVideoList"; 
import VideoPlayer from "../RecommandLiveComponent/VideoPlayer"; 
import ChatBar from "../ChatTemplate/ChatBar"; 

const API_KEY = "AIzaSyAbHU2YayTtCVZw08IGVCni7uVVUitPhPs"; // 상우 API KEY
//const API_KEY = "AIzaSyAuwZEvGnPgEkdiYMxey0RXsCfclb0vJ7k"; // 성건 API KEY 

class BestLive extends Component {

    state = {
      videos: [],
      selectedVideo: null,
      playUrl : ''
    }
    constructor(props) {
        super(props);
        this.ChannelData(); 
      }

      ChannelData = () => { // 채널의 재생목록 정보를 긁어 오는 함수 
        BringChannelData({key: API_KEY}, videos => {
          this.setState({
            videos: videos,
            selectedVideo: videos[0],
            playUrl: ''
          });
        });     
      }


    render() {
        
        //console.log(this.state.videos); // 재생목록에서 긁어온 채널 정보 확인.  
        
        const playFlag = this.state.playUrl === '' ? false : true; // 선택한 영상이 있는지 없는지 구분하는 flag

        return (
            <>
            <div style={{ marginLeft: "25rem" }}>
                {playFlag ? ( //선택한 영상이 있을 경우 react-player 실행 
                    <div style= {{ display : 'flex'}}>
                        <VideoPlayer playUrl={this.state.playUrl} />
                        <ChatBar />
                    </div>
                ) : 
                    (<BestVideoList     // 선택한 영상이 없을 경우 목록 보여주는 컴포넌트 실행 
                        onVideoSelect={selectedVideo =>
                          this.setState({ selectedVideo })
                        }
                        videos={this.state.videos}
                        setPlay = {playUrl => {
                            this.setState({playUrl}) 
                        }}
                   />)}
            </div>
            </>
        )};
}

export default BestLive;