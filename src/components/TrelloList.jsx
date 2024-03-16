import { Paper, CssBaseline, makeStyles } from '@material-ui/core';
import { ListTitle } from './ListTitle';
import { TrelloCard } from './TrelloCard';
import { AddCardorList } from './AddCardorList';
import { Draggable, Droppable } from 'react-beautiful-dnd';


export const TrelloList = ({ list, index }) => {
  const classes = useStyle();
  console.log(list);

  return (
      <Draggable draggableId={list.id} index={index}> 
      {(draggableProvided)=>(
        <div {...draggableProvided.draggableProps} ref={draggableProvided.innerRef}>
          <Paper className={classes.root}>
            <CssBaseline />
            <ListTitle title={list.title} listId={list.id}/>
            <Droppable droppableId={list.id}>
              {(droppableProvided)=> (
                  
                    <div ref={droppableProvided.innerRef} {...droppableProvided.draggableProps}>
                        {
                        list.cards.map((card, index) => (
                            <TrelloCard card={card} key={card.id} index={index}/>
                        ))
                        }
                      {droppableProvided.placeholder}
                    </div>
                  
              )}
              </Droppable>
            <AddCardorList type="card" listId={list.id}/>
          </Paper>   
        </div>
      )}
      </Draggable>
  )
}

const useStyle = makeStyles(theme => ({
  root: {
    width: '300px',
    backgroundColor: '#ebecf0',
    margin: theme.spacing(1)
  }

}))