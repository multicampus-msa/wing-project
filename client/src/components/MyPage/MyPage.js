import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components'
import axios from 'axios';
import API_URL from '../Constants/API_URL';
import MusicTable from '../Streaming/MusicTable'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UserContext from "../Context/UserContext";


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
}));

const MusicianDiv = styled.div`
    border-bottom: 1px solid;
`
const MyPage = () => {
  const classes = useStyles();
  const userState = useContext(UserContext);

  const [likedMusicList, setLikedMusicList] = useState([]);

 // const [supportingMusician, setSupportingMusician] = useState({});

  useEffect(()=>{
      // 좋아요 한 음악 가져오기 
      
      axios.get(API_URL+"/api/user/liked/"+ userState.userId)
      .then(res =>{
        console.log(res.data); // musicIdSet에 들어있는 musicId, 
        setLikedMusicList(res.data.musicSet);
        console.log(likedMusicList ) // empty
      })
      .catch(err=>alert(err))
      //axios.get(API_URL+"/api/mypage/likedmusic")

  }, [userState.userId]) //  [userId, likedMusicList] -> 무한 렌더링
  

  return (
      <div>         
        <div className={classes.root}>
          <Avatar src = {userState.imageUrl } alt = "Profile Image"/>
        </div>
        <h4>{userState.name}님 안녕하세요</h4>
        <p>{userState.name}님이  좋아하는 음악 입니다</p>
        <TableContainer component={Paper}>
          <MusicTable musicList={likedMusicList} />  
        </TableContainer>
    </div>
  );
}
export default MyPage;