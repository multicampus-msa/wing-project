import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 240,
    height: 350,
    float: 'left',
    margin: '5px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function SupportCard(props) {
  const classes = useStyles();
  const [artist, setArtist] = useState(null);

  axios.get('http://localhost:8080/api/artist/' + props.artistId)
  .then(res => setArtist(res.data));

  return (
    <div>
      {
        artist==null ||
        <Link to={`/support/detail/${artist.artistId}`}>
          <Card className={classes.root}>
            <CardHeader
              title={artist.artistName}
            />
            <CardMedia
              className={classes.media}
              image={artist.imageUri}
              title={artist.artistName}
            />
            <CardContent>
              <Typography variant="caption" color="textSecondary" component="p">
                  {artist.description}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      }
    </div>
  );
}
