import { Typography, makeStyles } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export const ListTitle = () => {
    const classes = useStyle();

    return (
        <div className={classes.title}>
            <Typography className={classes.titleText}>
                To do
            </Typography>
            <MoreHorizIcon />
        </div>
  )
}

const useStyle = makeStyles(theme => ({
    title: {
        display: 'flex',
        alignItems: 'center',
        margin: theme.spacing(1),
    },
    titleText: {
        flexGrow: 1,
        fontWeight: 'bold',
        fontSize: '1.2rem',
        fontWeight: 'bold',

    }
  
  }))