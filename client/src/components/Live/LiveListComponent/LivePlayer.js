import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import ChatBar from './../ChatTemplate/ChatBar';

const useStyles = makeStyles((theme) => ({
    wrapperBody: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px',
        textAlign: 'center',
        width: '1400px',
        display: 'flex',
        flexWrap: 'wrap',
        fontFamily: "NanumSquare"
    },
    wrapperVideo: {
        textAlign: 'left',
    },
    wrapperTitle: {
        marginBottom: '10px',
        width: '900px',
        fontFamily: "NanumSquare",
    },
    text: {
        textAlign: 'left',
        wordBreak: 'break-all',
    }
}));

function LivePlayer({match}) {

    const classes = useStyles();
    
    return (
        <>
            <div className={classes.wrapperTitle}>
                <p style={{ fontSize: "29px", borderBottom: "1px solid", borderColor: "#c2c2c2", gridColumn: "1 / 7", marginTop: '20px'}}>라이브 영상</p>
            </div>
            <div className={classes.wrapperBody}>
                <div className={classes.wrapperVideo}>
                    <YouTube videoId={match.params.videoId} />
                    <p>{match.params.title}</p>
                    <p>실시간 스트리밍 중</p>
                </div>
                <ChatBar />
            </div>
        </>
    );
}

export default LivePlayer;
