import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import API_URL from "../Constants/API_URL";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
      height: 300,
      float: 'left',
      margin: '30px',
      border: '1px solid gray',
      '&:hover': {
        transform: 'scale(1.02)',
      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    headerTitle: {
      fontSize: '20px',
      fontWeight: "bold",
    },
    headerRoot: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      height: "40px",
    },
  }));

  const ConcertPoster = ({artistId}) => {
    const classes = useStyles();
    const [artist, setArtist] = useState(null);
  
    useEffect(() => {
      axios.get(API_URL + '/api/artist/' + artistId)
        .then(res => setArtist(res.data));
    })
  

    return (
      <div>
        {
          artist==null ||
          <Link to={`/concert/detail/${artist.artistId}`}>
            <Card className={classes.root}>
              <CardHeader classes={{title: classes.headerTitle, root: classes.headerRoot}}
                title={artist.artistName}
              />
              <CardMedia
                className={classes.media}
                image={artist.imageUri}
                title={artist.artistName}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" align='left' >
                  {(artist.description.split('.')[0]).length > 55 ? artist.description.substr(0, 55) + '...' : artist.description.split('.')[0]}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        }
      </div>
    );
  }

export default ConcertPoster;