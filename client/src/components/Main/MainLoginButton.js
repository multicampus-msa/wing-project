import { Button, withStyles } from "@material-ui/core";
import React, { Component, Fragment } from 'react'
const StyledButton = withStyles({
    root: {
        justifyContent: 'center',
        display: 'black',
        
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
    constructor(props){
        super(props);
        this.state={token:''}
    }

    componentDidMount(){
        this.googleSDK();
    }

    login=()=>{
        this.auth2.signIn().then(googleUser=>{
            let profile = googleUser.getBasicProfile();
            console.log('ID : '+profile.getId());
            console.log('Name : '+profile.getName());
            console.log('Image URL : '+profile.getImageUrl());
            console.log('Email : '+profile.getEmail());
            this.setState({token: googleUser.getAuthResponse().id_token});
        })
    }

    logout=()=>{
        this.setState({token:''});
        console.log("로그아웃 합니다");
        this.auth2.disconnect();
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
        //const isLoggedIn = this.state.isLoggedIn;
        //console.log(isLoggedIn);
        return(
            <Fragment> 
                {this.state.token ? 
                <StyledButton className = "logoutBtn" onClick={this.logout} variant="contained" color="secondary">구글로그아웃이다</StyledButton> 
                : <StyledButton className = "loginBtn" onClick={this.login} variant="contained" color="primary">구글로그인이다</StyledButton>}
                
            </Fragment>
        )
    }
}

export default MainLoginButton;