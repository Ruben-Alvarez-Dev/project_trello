import { Paper, CssBaseline, makeStyles } from '@material-ui/core';
import { ListTitle } from './ListTitle';
import { TrelloCard } from './TrelloCard';
import { AddCardorList } from './AddCardorList';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export const TrelloList = ({ list, index }) => {
  const classes = useStyle();

  return (
    <Draggable draggableId={list.id} index={index}>
      {(draggableProvided) => (
        <div ref={draggableProvided.innerRef} {...draggableProvided.draggableProps}>
          <Paper className={classes.root}>
            <CssBaseline />
            <div {...draggableProvided.dragHandleProps}>
              <ListTitle title={list.title} listId={list.id} />
            </div>
            <Droppable droppableId={list.id}>
              {(droppableProvided) => (
                <div ref={droppableProvided.innerRef}>
                  {list.cards.map((card, index) => (
                    <TrelloCard card={card} key={card.id} index={index} />
                  ))}
                  {droppableProvided.placeholder}
                </div>
              )}
            </Droppable>
            <AddCardorList type="card" listId={list.id} />
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    width: '300px',
    backgroundColor: '#ebecf0',
    margin: theme.spacing(1),
  },
}));