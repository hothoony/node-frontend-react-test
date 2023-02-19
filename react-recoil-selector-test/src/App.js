import { RecoilRoot } from 'recoil';
import './App.css';
import DateTimeView from './components/datetime/DateTimeView';
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          
          recoil selector
          {/* <TodoList/> */}
          <DateTimeView/>

        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;
