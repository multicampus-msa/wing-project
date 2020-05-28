import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components'
import MenuButtons from "./Main/MenuButtons";
import axios from 'axios'
import LOGO_URL from "./Constants/LOGO_URL";
import LoginButton from './Main/LoginButton';
import Root from './Root'
import UserContext from "./Context/UserContext";

const LogoDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: 80px 1px 1px;
  justify-content: center;
  
  
  .logo {
    grid-column: 3;
    grid-row: 1;
    margin-left: -5rem;
  }
  
  .login {
    margin-left: 5.5rem;
    grid-column: 5;
    grid-row: 2;
  }
  
`

const ButtonDiv = styled.div`

    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`

// todo : 로그인 버튼 위치 수정 필요
const BtnStyle = styled.div`
    margin-left: 88rem;
    margin-bottom: -1rem;
`;

const Menu = ({ history }) => {

    const [userId, setUserId] = useState(null);
    const [token, setToken] = useState(null);
    const [name, setName] = useState("");// 로그인 된 사용자 정보 
    const [auth2, setAuth2] = useState(null);
    const [userState, setUserState] = useState({
        userId: "",
        name: "",
        email: ""
    })

    const login = () => {
        auth2.signIn().then(googleUser => {
            let profile = googleUser.getBasicProfile();
            const data = {
                userId: profile.getId(),
                name: profile.getName(),
                email: profile.getEmail(),
                imageUri: profile.getImageUrl(),
                role: "USER",
            }

            setUserState({
                ...userState,
                userId: profile.getId(),
                name: profile.getName(),
                email: profile.getEmail()
            })

            const targetUrl = 'http://localhost:8080/api/user/save'
            console.log(data);
            axios.post(targetUrl, data)
                .then(response => {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                })
            // console.log('ID : '+profile.getId());
            // console.log('Name : '+profile.getName());
            // console.log('Image URL : '+profile.getImageUrl());
            // console.log('Email : '+profile.getEmail());
            setUserId(profile.getId());
            setName(profile.getName())
            setToken(googleUser.getAuthResponse().id_token)

        })
    }
    const logout = () => {
        setToken('')
        console.log("로그아웃 합니다");
        auth2.disconnect();
        setUserId(null);
        setName(null)
        setToken(null)
        history.push(`/`);

    }
    const googleSDK = () => {
        // platform.js 스크립트 로드 후 .. 
        window['googleSDKLoaded'] = () => {
            window['gapi'].load('auth2', () => {
                setAuth2(window['gapi'].auth2.init({
                    client_id: '4141518158-olfgnnv29g8163c0v5saq6dorpg806l2.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email'
                }));
            })
        }
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    }
    useEffect(() => { // token 값이 업데이트 될 때만 실행
        googleSDK()
        //console.log(auth2)
    }, [token]);

    return (
        <UserContext.Provider value={userState}>
            <Fragment>
                <LogoDiv>
                    <div className="logo">
                        <Link to="/"><img src={LOGO_URL}
                                          alt="Win:G 로고"
                                          style={{ width: "330px", height: "120px" }}
                        /></Link>
                    </div>
                    <div className="login">
                        <LoginButton token={token} name={name} login={login} logout={logout}/>
                    </div>
                </LogoDiv>
                <br/>
                <br/>
                <ButtonDiv>
                    <MenuButtons/>
                </ButtonDiv>
                <hr/>
                <Root/>
            </Fragment>
        </UserContext.Provider>
    )
};

export default withRouter(Menu);