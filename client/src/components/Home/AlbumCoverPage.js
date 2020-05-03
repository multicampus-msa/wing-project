import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import styled from "styled-components";
import {Paper, Button} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16)
        }
    }
}));

function AlbumCoverPage(props) {
    const classes = useStyles();
    let items = [ // 캐러셀에 들어갈 것. 
        {
            
        },

        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            url : "https://image.dongascience.com/Photo/2018/01/15159739972169[1].jpg"
        }, {
            name: "Random Name #2",
            description: "Hello World!",
            url : "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fholapet%2F0e5f90af436e4c218343073164a5f657.JPG"
        }
    ]

    return (
        <Fragment>
            
            <Carousel interval={1000} indicators="fade">
                {items.map(item => {
                    return (
                        <img src = "items.url"/>                        
                    )
                })
        }
            </Carousel>
        </Fragment>
    )
}

export default AlbumCoverPage;