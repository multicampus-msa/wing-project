import React, { Component, Fragment } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";
import _ from "lodash";
import SearchBar from "./SearchBar";
import RecommandVideoList from "./RecommandVideoList";
import SearchData from "./SearchData";
import VideoPlayer from "./VideoPlayer";
import ChatBar from '../ChatTemplate/ChatBar'; 

const API_KEY = "AIzaSyAbHU2YayTtCVZw08IGVCni7uVVUitPhPs"; // 상우 API KEY
//const API_KEY = "AIzaSyAuwZEvGnPgEkdiYMxey0RXsCfclb0vJ7k"; // 성건 API KEY

class LiveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      playUrl : ''
    };
    this.videoSearch(); // 초기 검색값 설정할 수 있다.
  }

  videoSearch(term) {
    SearchData({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
        playUrl: ''
      });
    });
  }

  
  render() {
    //const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    const videoSearch = term => {
      // 키보드로 입력하고 검색 또는 엔터키 눌렀을 때 검색.
      this.videoSearch(term);
    };
    
    const playFlag = this.state.playUrl === '' ? false : true; 

    return (
      <div className= "Main" style={{ marginLeft: "25rem" }}>
        {playFlag ? (
          <div style= {{ display : 'flex'}}>
          <VideoPlayer playUrl={this.state.playUrl} />
          <ChatBar />
          </div>
        ) : (
          <Fragment>
            <div
              style={{
                marginLeft: "70rem",
                marginTop: "1rem",
                display: "flex"
              }}
            >
              <SearchBar onSearchTermChange={videoSearch} /> &nbsp;
            </div>
            <br></br>

            <div>
              <RecommandVideoList
                onVideoSelect={selectedVideo =>
                  this.setState({ selectedVideo })
                }
                videos={this.state.videos}
                setPlay = {playUrl => {
                  this.setState({playUrl}) 
                }}
              />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default LiveList;
