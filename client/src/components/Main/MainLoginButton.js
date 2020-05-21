import { Button, withStyles } from "@material-ui/core";
import React, { Component, Fragment } from 'react'
const StyledButton = withStyles({
    root: {
        justifyContent: 'center',
        display: 'black',
        background: 'green',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 30px',
        fontSize: 15,
        
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

class MainLoginButton extends Component{
    componentDidMount(){
        this.googleSDK();
    }

    prepareLoginButton=()=>{
        this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
            // 로그인 성공
            (googleUser) => {
                let profile = googleUser.getBasicProfile();
                console.log('ID : '+profile.getId());
                console.log('Name : '+profile.getName());
                console.log('Image URL : '+profile.getImageUrl());
                console.log('Email : '+profile.getEmail());
                // TODO ..                

            },

            // 로그인 실패
            (error)=>{
                alert(JSON.stringify(error, undefined, 2));
            });
    }

    googleSDK=()=>{
        // platform.js 스크립트 로드 후 .. 
        window['googleSDKLoaded']=()=>{
            window['gapi'].load('auth2', ()=>{
                this.auth2 = window['gapi'].auth2.init({
                    client_id: '4141518158-olfgnnv29g8163c0v5saq6dorpg806l2.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email'
                });
                this.prepareLoginButton();
            })
        }
        (function(d,s,id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if(d.getElementById(id)){return;}
            js = d.createElement(s);
            js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);  
        }(document, 'script', 'google-jssdk'));        
    }
    render(){
        return(
            <Fragment>
                <StyledButton className = "loginBtn" 
                ref="googleLoginBtn" 
                variant="contained" 
                color="secondary"       
                >로그인
             </StyledButton>
            </Fragment>
        )
    }
}

export default MainLoginButton;