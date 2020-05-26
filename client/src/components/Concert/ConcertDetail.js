import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import API_URL from "../Constants/API_URL";
import ConcertLocation from './ConcertLocation';

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
        justifyContent: 'center'
    },
    body: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px',
        textAlign: 'center',
        width: '1080px',
        display: 'block',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    line: {
        borderWidth: '2px',
    },
    video: {
        margin: '20px 5px',
        display: 'grid',
        float: 'left',
    },
    supportInfo: {
        width: '360px',
        height: '350px',
        display: 'block',
        float: 'left',
        justifyContent: 'left',
        margin: '10px 30px',
    },
    infoTitle: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: '25px',
    },
    infoText: {
        textAlign: 'left',
        fontSize: '21px',
        padding: '0px 5px',
    }
}));

const ConcertDetail = ({match}) => {
    const [artist, setArtist] = useState([]);
  
    useEffect(() => {
      axios.get(API_URL + '/api/artist/' + match.params.artistId)
        .then(res => setArtist(res.data));
    })

    return (
        <>
            <p>{artist.artistId}</p>
            <p>{artist.artistName}</p>
            <ConcertLocation></ConcertLocation>
        </>
    )
};

export default ConcertDetail;
