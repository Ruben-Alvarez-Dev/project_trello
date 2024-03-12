import { Paper, CssBaseline, makeStyles } from '@material-ui/core';
import { ListTitle } from './ListTitle';
import { TrelloCard } from './TrelloCard';
import { AddCardorList } from './AddCardorList';

export const TrelloList = ({ list }) => {
  const classes = useStyle();
  console.log(list);

  return (
      <Paper className={classes.root}>
        <CssBaseline />
        <ListTitle />
        {
          list.cards.map(card => {
            return <TrelloCard card={card} key={card.id} />
          })
        }
        
        <AddCardorList type="card"/>
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