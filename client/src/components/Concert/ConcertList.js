import React from 'react';
import ConcertPoster from './ConcertPoster';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'block',
        width: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px',
        position: 'relative',
        fontFamily: "NanumSquare",
        
    },
    root: {
        justifyContent: 'center',
        display: 'block',
        height: '300px',
        marginBottom: '100px',
    },
    body: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '50px',
        textAlign: 'center',
        color: '#FFF',
        width: '1080px',
        display: 'grid',
    },
    title: {
        textAlign: 'center',
        marginBottom: '10px',
        fontWeight: 'bold',
    },
    line: {
        borderWidth: '2px',
    },
  }));

const ConcertList = () => {
    const classes = useStyles();
    const index = [0, 1, 2, 3];

    
    return (
        <div className={classes.wrapper} >
            <h2 className={classes.title}>콘서트 목록</h2>
            <hr className={classes.line}/>
            <div className={classes.body}>               
                <div className={classes.root}>
                {
                    index.map((id) => 
                        <ConcertPoster concertId={id + 1}/>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default ConcertList;
