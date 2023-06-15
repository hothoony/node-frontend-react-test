import logo from './logo.svg';
import './App.css';
import MyRadio_select from './components/MyRadio_select';
import MyRadio_defaultValue from './components/MyRadio_defaultValue';
import MyCheckbox_select from './components/MyCheckbox_select';
import MyCheckbox_defaultValue from './components/MyCheckbox_defaultValue';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div>react form test</div>
        
        {/* <MyRadio_select/> */}
        {/* <MyRadio_defaultValue/> */}
        {/* <MyCheckbox_select/> */}
        <MyCheckbox_defaultValue/>

      </header>
    </div>
  );
}

export default App;
