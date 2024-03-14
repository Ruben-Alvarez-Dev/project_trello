import './App.css';
import { useContext, useState } from 'react';
import { TrelloList } from './components/TrelloList';
import { makeStyles } from '@material-ui/core';
import bg from './assets/bg.jpeg';
import { AddCardorList } from './components/AddCardorList';
import { mockData } from './mockdata';
import ContextAPI from './ContextAPI';
import uuid from 'react-uuid';

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
    const newList = {
      id: newListId,
      title,
      cards: []
    }
    setData({
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList
      }
    })
  }

  return (
    <>
      <ContextAPI.Provider value={{ 
          updateListTitle,
          addCard,
          addList
      }}>
          <div className={classes.root}>
            <div className={classes.container}>

              {
                data.listIds.map((listId) => {
                  const list = data.lists[listId];
                  return <TrelloList list={list} key={listId} />
                })
              }
              <div>
                <AddCardorList type="list"/>
              </div>
            </div>
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