import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Button, TextField, withStyles } from '@material-ui/core'


const StyledDiv = styled.div`
text-align: center;
`

const StyledButton = withStyles({
    root: {
      background: 'green',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 30,
      padding: '0 30px',
      fontSize: 15
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


const Menu = () => {

    // 버튼 클릭했을 때 색상 처리
    const [colorSwitch, setColorSwitch] = useState([1, 0, 0, 0, 0]);

    const buttons = ["Home", "Streaming", "Live", "Support", "Concert"];

    const onClick = id => {
        const nextColor = colorSwitch.map((val, idx) => idx === id)
        setColorSwitch(nextColor);
    }

    // 버튼 컴포넌트 5개 생성
    const buttonList = buttons.map(
        (button, idx) => {
            return (
                <Link style={{ textDecoration: 'none' }} to={'/' + button}>
                    <Button
                        size="large" variant="contained" color={colorSwitch[idx] ? "secondary" : "primary"}
                        onClick={() => onClick(idx)}>
                        {button}
                    </Button>
                </Link>
            )
        }
    )

    // 검색창에 엔터키 입력했을 때 처리
    const HandleKey = (e) => {
        if (e.key === "Enter") alert(e.target.value + " 검색 기능 수행")
    }


    return (
        <StyledDiv>
            <Link to="/"><img src="logo.png" alt="Win:G 로고"></img></Link>


            {/* 로그인 버튼*/}
            <StyledButton
                variant="contained"
                color="secondary"
                style={{ left: "65%", width: "100px", float: 'right', position: "absolute" }}>
                <img src="login.png" alt="로그인 버튼 이미지"></img>
            </StyledButton>
            <br /><br />

            {buttonList}
            
            {/* 검색어 입력필드*/}
            <TextField size="small" id="outlined-basic" label="Search" variant="outlined" onKeyPress={HandleKey} />
            <hr />
        </StyledDiv>
    )
}

export default Menu;