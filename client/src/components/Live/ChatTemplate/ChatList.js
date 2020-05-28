import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      position: 'relative',
      overflow: 'auto',
      height: 800,
    },
}));

const ChatList = ({logs}) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {
                logs.map((value) => (
                    <ListItem key={value.key}>
                        <ListItemAvatar>
                            <Avatar src={``} />
                        </ListItemAvatar>
                        <ListItemText id={value.key} primary={value.name} secondary={value.message} />
                    </ListItem>
                ))
            }
        </List>
    );
}

export default ChatList;
