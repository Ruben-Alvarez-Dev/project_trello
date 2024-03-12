import { Collapse, alpha, makeStyles, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import { AddCardorListText } from "./AddCardorListText";

export const AddCardorList = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
      <div className={classes.root}>
        <Collapse in={open}>
          <AddCardorListText />
        </Collapse>
        <Collapse in={!open}>
          <Paper className={classes.AddCardorListText}>
            <Typography>
              + Add another card
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

