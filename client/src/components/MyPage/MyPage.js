import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import axios from 'axios';
import API_URL from '../Constants/API_URL';
import {ctx, loginUserId} from '../Menu'
import MusicTable from '../Streaming/MusicTable'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
const MyPage = () => {
  const classes = useStyles();
  const getloginUserName=useContext(ctx);
  const getloginUserId = useContext(loginUserId);
  const userName = getloginUserName;
  const userId = getloginUserId;

  const [likedMusicList, setLikedMusicList] = useState([]);
  const [supportingMusician, setSupportingMusician] = useState({});

  useEffect(()=>{
      // 좋아요 한 음악 가져오기 
      axios.get(API_URL+"/api/user/liked/"+userId)
      .then(res =>{
        console.log(res.data); // musicIdSet에 들어있는 musicId, 
        setLikedMusicList(res.data.musicSet);
        console.log(likedMusicList ) // empty
      })
      .catch(err=>alert(err))
      //axios.get(API_URL+"/api/mypage/likedmusic")

  }, [userId]) //  [userId, likedMusicList] -> 무한 렌더링
  

  return (
    <div>        
        <h4>{userName}님 안녕하세요</h4>
        <p>{userName}님이  좋아하는 음악 입니다</p>            
        <TableContainer component={Paper}>
          <MusicTable musicList={likedMusicList} />  
        </TableContainer>
    </div>
  );
}
export default MyPage;