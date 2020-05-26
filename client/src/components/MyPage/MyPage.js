import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const MusicianDiv = styled.div`
    border-bottom: 1px solid;
`
const MyPage = ({match}) => {
  const classes = useStyles();
  const userName = match.params.name;
  const userId = match.params.id;
  const [supportingMusicians, setSupportingMusicians] = useState();
  const [likeMusic, setLikeMusic] = useState();
  useEffect(()=>{
      // todo : 좋아요 한 음악 가져오기
      //axios.get(API_URL+"/api/mypage/likedmusic")
  })
  useEffect(()=>{
    // todo : 후원한 가수 가져오기
    })
  return (
    <div>
        <h3>안녕하세요  </h3>
    </div>
  );
}
export default MyPage;