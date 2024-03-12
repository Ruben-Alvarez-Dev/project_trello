import { Paper, CssBaseline, makeStyles } from '@material-ui/core';
import { ListTitle } from './ListTitle';
import { TrelloCard } from './TrelloCard';
import { AddCardorList } from './AddCardorList';

export const TrelloList = () => {
  const classes = useStyle();

  return (
      <Paper className={classes.root}>
        <CssBaseline />
        <ListTitle />
        <TrelloCard />
        <TrelloCard />
        <TrelloCard />
        <AddCardorList />
      </Paper>   
  )
}

const useStyle = makeStyles(theme => ({
  root: {
    width: '300px',
    backgroundColor: '#ebecf0',
    margin: theme.spacing(1)
  }

}))