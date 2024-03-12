import './App.css';
import { TrelloList } from './components/TrelloList';
import { makeStyles } from '@material-ui/core';
import bg from './assets/bg.jpeg';
import { AddCardorList } from './components/AddCardorList';


export const App = () => {
const classes = useStyle()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TrelloList />
        <TrelloList />
        <TrelloList />
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