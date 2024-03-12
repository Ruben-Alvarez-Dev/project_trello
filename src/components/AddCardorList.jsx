import { Collapse, alpha, makeStyles, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import { AddCardorListText } from "./AddCardorListText";

export const AddCardorList = ({ type }) => {
  const [open, setOpen] = useState(true);
  const classes = useStyle();

  return (
      <div className={classes.root}>
        <Collapse in={open}>
          <AddCardorListText type={type} setOpen={setOpen}/>
        </Collapse>
        <Collapse in={!open}>
          <Paper 
            className={classes.AddCardorListText}
            onClick={() => setOpen(true)}
          >
            <Typography>
                {
                    type === "card" 
                      ? " + Add a card"
                      : " + Add another list"
                }
            </Typography>
          </Paper>
        </Collapse>
      </div>
  )
}

const useStyle = makeStyles(theme => ({
  root: {
    width: '300px',
    marginTop: theme.spacing(1),
  },
  AddCardorListText: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    backgroundColor: '#ebecf0',
    '&:hover': {
      backgroundColor: alpha('#000000', 0.25)
    }
  }

}))

