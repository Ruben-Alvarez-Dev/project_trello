import { makeStyles, Paper } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

export const TrelloCard = ({card, index}) => {
    const classes = useStyle();
    return (
        <Draggable draggableId={card.id} index={index}>
            {(draggableProvided) => (
                    <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        {...draggableProvided.draggableProps}
                    >
                        <Paper className={classes.trelloCard}>
                            {card.title}
                        </Paper>
                    </div>
                )
            }
        </Draggable>
  )
}

const useStyle = makeStyles(theme => ({
    trelloCard: {
        padding: theme.spacing(1, 1, 1, 2), 
        margin: theme.spacing(1) 
    }
  
  })) 