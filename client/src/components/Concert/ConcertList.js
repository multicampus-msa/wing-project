import React from 'react';
import ConcertPoster from './ConcertPoster';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'block',
        width: '1080px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px',
        position: 'relative',
        fontFamily: "NanumSquare",
        
    },
    root: {
        justifyContent: 'center',
        display: 'block',
        height: '200px',
        marginBottom: '100px',
    },
    page: {
        display: 'grid',
        justifyContent: 'center',
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
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    line: {
        borderWidth: '2px',
    },
  }));

const ConcertList = () => {
    const classes = useStyles();
    const index = [0, 1, 2, 3, 4, 5 ,6 ,7];

    
    return (
        <div className={classes.wrapper} >
            <h2 className={classes.title}>콘서트 목록</h2>
            <hr className={classes.line}/>
            <div className={classes.body}>               
                <div className={classes.root}>
                {
                    index.map((id) => 
                        <ConcertPoster artistId={id + 1}/>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default ConcertList;
