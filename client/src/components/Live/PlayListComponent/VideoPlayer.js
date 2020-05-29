import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import YouTube from 'react-youtube';

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
    wrapperTitle: {
        marginBottom: '10px',
        width: '900px',
        fontFamily: "NanumSquare",
    },
    text: {
        textAlign: 'left',
        wordBreak: 'break-all',
    },
    wrapperVideo: {
        textAlign: 'left',
    },
}));

function VideoPlayer({match}) {

    const classes = useStyles();
    
    return (
        <div className={classes.wrapperBody}>
            <div className={classes.wrapperVideo}>
                <YouTube videoId={match.params.videoId} />
                <p>{match.params.title}</p>
                <p>{match.params.date}</p>
            </div>
        </div>
    );
}

export default VideoPlayer;
