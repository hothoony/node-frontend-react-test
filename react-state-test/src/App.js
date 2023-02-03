import './App.css';
import Counter from './components/Counter';
import MultipleInput from './components/MultipleInput';
import SingleInput from './components/SingleInput';
import UserAddForm_multipleState from './components/UserAddForm_multipleState';
import UserAddForm_singleState from './components/UserAddForm_singleState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <Counter/> */}
        {/* <SingleInput/> */}
        {/* <MultipleInput/> */}
        <UserAddForm_multipleState/>
        <UserAddForm_singleState/>

      </header>
    </div>
  );
}

export default App;
