import './App.css';
import { useState } from 'react';
import { TrelloList } from './components/TrelloList';
import { makeStyles } from '@material-ui/core';
import bg from './assets/bg.jpeg';
import { AddCardorList } from './components/AddCardorList';
import { mockData } from './mockdata';


function App() {
  const classes = useStyle();
  const [data, setData] = useState(mockData);
  
  return (
    <div className={classes.root}>
      <div className={classes.container}>

        {
          data.listIds.map((listId) => {
            const list = data.lists[listId];
            return <TrelloList list={list} key={listId} />
          })
        }
        
        <AddCardorList type="list" />
      </div>
    </div>
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