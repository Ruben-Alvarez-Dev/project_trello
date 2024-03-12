import { Paper, CssBaseline } from '@material-ui/core';
import { ListTitle } from './ListTitle';
import { TrelloCard } from './TrelloCard';
import { AddCardorList } from './AddCardorList';
export const TrelloList = () => {
  return (
    <Paper>
      <CssBaseline />
      <ListTitle />
      <TrelloCard />
      <TrelloCard />
      <AddCardorList />

    </Paper>
  )
}
