import './App.css';
import bg from './assets/bg.jpeg';
import { useContext, useState } from 'react';
import { TrelloList } from './components/TrelloList';
import { makeStyles } from '@material-ui/core';
import { AddCardorList } from './components/AddCardorList';
import { mockData } from './mockdata';
import ContextAPI from './ContextAPI';
import uuid from 'react-uuid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

function App() {
  const classes = useStyle();
  const [data, setData] = useState(mockData);

    
  const updateListTitle = (updatedTitle, listId) => {
    const list = data.lists[listId];
    list.title = updatedTitle;
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list
      }
    })
  }
  const addCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    }
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list
      }
    })
  }
  const addList = (title) => {
    const newListId = uuid();
    setData({
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: {
          id: newListId,
          title,
          cards: []
        }
      }
    })
        
  }
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.table(result);
  
    if (!destination) {
      return;
    }
  
    if (type === 'list') {
      const newListIds = Array.from(data.listIds);
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
  
      const newData = {
        ...data,
        listIds: newListIds,
      };
  
      setData(newData);
      return;
    }
  };
  return (
    <>
      <ContextAPI.Provider value={{ updateListTitle, addCard, addList }}>

        <div className={classes.root}>

          <DragDropContext onDragEnd={ onDragEnd }>
            <Droppable droppableId="board" type="list" direction="horizontal">
            
                {(droppableProvided) => (
                  <div
                    className={classes.container}
                    ref={droppableProvided.innerRef} 
                    {...droppableProvided.droppableProps}
                  >
                      {
                        data.listIds.map((listId) => {
                          const list = data.lists[listId];
                          return <TrelloList list={list} key={listId}/>
                        })
                      }
                    <div>
                      <AddCardorList type="list"/>
                      {droppableProvided.placeholder}
                    </div>
                  </div>
                )}
              
            </Droppable>
          </DragDropContext>

        </div>

      </ContextAPI.Provider>
      
    </>
  );
}

export default App

const useStyle = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    overflowY: 'auto',
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

  },
  container: {
    display: 'flex',
    padding: theme.spacing(1),
  }
  

}))