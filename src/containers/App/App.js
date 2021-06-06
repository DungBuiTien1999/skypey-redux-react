import _ from 'lodash';

import './App.css';
import Main from '../../components/Main';
import SideBar from '../../components/SideBar';
import store from '../../store';


function App() {

  const { contacts, user, activeUserId } = store.getState();

  return (
    <div className="App" >
      <SideBar contacts = {_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
