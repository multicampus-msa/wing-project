import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import API_URL from "../Constants/API_URL";
import ConcertTab from './ConcertTab';
import { Button } from '@material-ui/core';

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
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    line: {
        borderWidth: '2px',
    },
    image: {
        width: '430px',
        height: '600px',
        float: 'left'
    },
    concertInfo: {
        width: '600px',
        height: '600px',
        display: 'block',
        float: 'left',
        marginLeft: '100px',
    },
    tab: {
        display: 'block'
    },
    infoTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '25px',
    },
    infoText: {
        textAlign: 'left',
        fontSize: '21px',
        padding: '0px 5px',
    }
}));



const ConcertDetail = ({match}) => {
    const classes = useStyles();
    const [concert, setConcert] = useState([]);
  
    useEffect(() => {
      axios.get(API_URL + '/api/concert/' + match.params.concertId)
        .then(res => setConcert(res.data));
    }, [match.params.concertId]);

    return (
        <>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>{concert.concertName}</h2>
                <hr className={classes.line}/>
                <img className={classes.image} src={concert.imageUri} alt="공연포스터이미지"/>
                <div className={classes.concertInfo}>
                    <p className={classes.infoTitle}>공연날짜</p>
                    <hr className={classes.line}/>
                    <p className={classes.infoText}>시작 : {concert.dateStart} ~ 끝 : {concert.dateEnd}</p>
                    <p className={classes.infoTitle}>공연설명</p>
                    <hr className={classes.line}/>
                    <p className={classes.infoText}>{concert.description}</p>
                    <p>{concert.place}</p>
                    <Button variant="contained" color="primary" href={concert.ticketUri}>예매하기</Button>
                </div>
                <ConcertTab className={classes.tab} place={concert.place}/>

            </div>
        </>
    )
};

export default ConcertDetail;
