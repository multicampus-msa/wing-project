import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ConcertLocation from './ConcertLocation';
import { Link } from "react-router-dom";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    fontSize: '20px',
    fontFamily: "NanumSquare",
  },
  box: {
    width: '1200px',
    height: '500px'
  },
  image: {
    width: '400px',
    height: '400px',
    display: 'block',
    float: 'left',
    marginLeft: '100px',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  },
  name: {
    fontSize: '30px',
    fontWeight: 'bold',
    fontFamily: 'NanumSquare',
    float: "left",
    marginLeft: '100px',
    marginTop: 'auto',
    display: 'block',
    color: 'black',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  }
}));

const ConcertTab = ({place, artistList}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  console.log(artistList);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example" centered>
            <Tab className={classes.title} label="아티스트 정보" {...a11yProps(0)} />
            <Tab className={classes.title} label="공연장 위치" {...a11yProps(1)} />
            <Tab className={classes.title} label="예매시 주의사항" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel className={classes.box} value={value} index={0}>
          {
            artistList !== undefined ? (artistList.map((artist) => {
              return (
                <>
                  <Link to={"/streaming/artist/" + artist.artistId}>
                    <img className={classes.image} src={artist.imageUri} alt="아타스트이미지"/>
                  </Link>
                  <Link to={"/streaming/artist/" + artist.artistId}>
                    <div className={classes.name}>{artist.artistName}</div>
                  </Link>
                </>
              )
            }))
            :
            <span>loading...</span>
          }


        </TabPanel>
        <TabPanel value={value} index={1}>
          {place}
          <ConcertLocation place={place}/>
        </TabPanel>
        <TabPanel className={classes.box} value={value} index={2}>
          <h5>티켓 수령 방법 안내</h5>
          <span>현장수령</span>
          <p>
          - 예매번호가 포함되어 있는 예매확인서와 예매자의 실물 신분증(복사본 및 사진 불가) 을 매표소에 제출하시면 편리하게 티켓을 수령하실 수 있습니다.
          <br></br>
          ※ 공연별 정책이 상이하니 자세한 내용은 예매페이지 내 상세정보 확인 부탁드립니다.
          </p>
          
          <span>배송</span>
          <p>
          - 배송을 선택하신 경우 예매완료(결제익일) 기준 4~5일 이내에 예매 시 입력하신 주소로 배송됩니다. (주말/공휴일 제외한 영업일 기준)
          <br></br>
          - 일괄배송의 경우 공연 별로 배송일자가 상이하며 지정된 배송일자 기준으로 배송이 시작됩니다. (지정된 배송일자는 상세정보 및 예매공지사항에서 확인할 수 있습니다.)
          <br></br>
          - 지역 및 배송서비스 사정에 따라 배송사가 변경될 수 있으며, 배송일이 추가적으로 소요될 수 있습니다. (CJ대한통운, 우체국 외 1개 업체)
          </p>
        </TabPanel>
      </div>
    );

}

export default ConcertTab;