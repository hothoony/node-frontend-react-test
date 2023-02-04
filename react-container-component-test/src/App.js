import './App.css';
import UserCardContainer from './userCard/UserCardContainer';
import UserListContainer from './userList/UserListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <UserCardContainer/>
        <UserListContainer/>

      </header>
    </div>
  );
}

export default App;
