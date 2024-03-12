import { Button, alpha, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import { useState } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { MoreHoriz } from '@material-ui/icons';

export const AddCardorListText = ({ type }) => {
    const [title, setTitle] = useState('');
    const classes = useStyle();
    
    return (
    <>
        <Paper className={classes.card}>
            <InputBase 
                multiline
                value={title} 
                onChange={e=>setTitle(e.target.value)}
                    placeholder={

                        type === "card"
                            ? 'Enter a card title...'
                            : 'Enter a list title...'
                    }
                        
                inputProps={{className: classes.input}}
            />
        </Paper>
        <div className={classes.confirm}>
            <div className={classes.options}>   
                <Button className={classes.btnConfirm}>
                    {
                        type === "card"
                            ? 'Add card'
                            : 'Add list'
                    }
                </Button>
                <IconButton>
                    <ClearIcon />
                </IconButton>
            </div>
                <IconButton>
                    <MoreHoriz />
                </IconButton> 
            </div>

    </>
  )
}

const useStyle = makeStyles( theme => ({
    card: {
        width: '280px',
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4),
    },
    input: {
        margin: theme.spacing(1),
    },
    confirm: {
        display: "flex",
        margin: theme.spacing(0,1,1,0),
    }, 
    options: {
        flexGrow: 1,
        display: "flex", 
        
    },
    btnConfirm: {
        background: '#5aac44',
        color: "#fff",
        "&:hover": {
            background: alpha("#5aac44", 0.75)
        },
        margin: theme.spacing(1),
        
    },
  
  }))
