import { Collapse, fade, makeStyles, Paper, Typography } from "@material-ui/core";
import { useState } from "react";

export const AddCardorList = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
      <div>
        <Collapse in={open}>
          <h1>Opened</h1>
        </Collapse>
        <Collapse in={!open}>
          <h1>Closed</h1>
        </Collapse>
      </div>
  )
}

const useStyle = makeStyles(theme => ({
  root: {
    
  }

}))
