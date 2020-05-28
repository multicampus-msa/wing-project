import React, {useState, useEffect, useContext} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components'
import axios from 'axios';
import API_URL from '../Constants/API_URL';
import MusicTable from '../Streaming/MusicTable'
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import UserContext from "../Context/UserContext";

import Table from '@material-ui/core/Table';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
      },
    },
    inline: {
        display: 'inline',
    },
    table: {
      minWidth: 650,
  },
}));


const MyPage = () => {
  const classes = useStyles();  
  const userState = useContext(UserContext);
  const [likedMusicList, setLikedMusicList] = useState([]);

 // const [supportingMusician, setSupportingMusician] = useState({});
  useEffect(()=>{
      // 좋아요 한 음악 가져오기       
      if(userState.userId === "") return;
      axios.get(API_URL+"/api/user/liked/"+ userState.userId)
      .then(res =>{
        console.log(res.data); // musicIdSet에 들어있는 musicId, 
        setLikedMusicList(res.data.musicSet);
        console.log(likedMusicList ) // empty
      })
      .catch(err=>alert("로그인하세요"))
      //axios.get(API_URL+"/api/mypage/likedmusic")

  }, [userState.userId]) //  [userId, likedMusicList] -> 무한 렌더링
  
// 후원 뮤지션 : Collapsible table 사용  https://material-ui.com/components/tables/#collapsible-table
  return (
    <>
    <CssBaseline/>
    <Container maxWidth="lg">
            <Avatar src = {userState.imageUrl } alt = "Profile Image"/>
            <h4>{userState.name}님 안녕하세요</h4>
            <p>{userState.name}님이  좋아하는 음악 입니다</p>
      <Typography component = "div">
        <div>         
          <div clas sName={classes.root}>
            <TableContainer component={Paper}>
              <MusicTable musicList={likedMusicList} />  
            </TableContainer>
          </div>
        </div>
      </Typography>
    </Container>

    </>
  );
}
export default MyPage;