import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextFeild from '@material-ui/core/TextField';


const useStyles = makeStyles( theme => ({
    root: {
        margin: '50px',
        pading: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicsWindow:{
        widith: '30%',
        height: '300px',
        borderRight: '1px solid grey'
    },
    chatWindow: {
        widith: '70%',
        height: '300px',
        padding: '20px'
    },
    chatBox: {
        widith: '85%'
    },
    button: {
        widith: '15%'
    }
}));

export default function Dashboard() {

    const classes = useStyles();

    const [textValue, changeTextValue] = React.useState('');
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" componet="h4">
                    Chat app
                </Typography>
                <Typography variant="h5" componet="h5">    
                                Topic placeholder
                </Typography>
                <div className={classes.flex}>
                        <div className = {classes.topicsWindow} >
                        <List>
                            {
                                ['topic'].map(topic => (
                                    <ListItem key={topic} button>
                                    <ListItemText primary={topic}/>
                                </ListItem>  
                                ))
                            }
                            <ListItem button>
                                <listItemText primary="draft"/>
                            </ListItem>
                        </List>
                        </div>
                        <div className={classes.chatWindow}>
                            {
                                [{from: 'user', msg: 'hello'}].map((chat, i) => (
                                    <div className={classes.flex} key={i}>
                                        <Chip label={chat.from} className={classes.chip}/>
                                        <Typography variant ='p'>
                                            {chat.msg}
                                        </Typography>
                                     </div>
                                ))
                            }        
                        </div>
                </div>

                <div className={classes.flex}>
                    <TextFeild 
                     label="Send a chat" 
                     className={classes.chatBox} 
                    value={textValue}
                    onChange={e => changeTextValue(e.target.value)}
                    />
                    
                <Button variant="contained" color="primary">Send</Button>       
                </div>
            </Paper>
        </div>
    )
}