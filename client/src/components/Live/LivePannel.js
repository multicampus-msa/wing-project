// 인기 영상과 추천영상에 따른 다른 목록을 나열하기 위한 라우팅 컴포넌트 
import React, { Component } from 'react';
import RecommandLive from './RecommandLiveComponent/RecommandLive';
import BestLive from './BestLiveComponent/BestLive';
import {Route} from 'react-router-dom'; 

class LivePannel extends Component {
    render() {
        return (
            <div>
                <Route exact path="/Live" component={BestLive} />
                <Route exact path="/Live/BestLive" component={BestLive} />
                <Route exact path="/Live/RecommandLive" component={RecommandLive} />
            </div>
        );
    }
}

export default LivePannel;