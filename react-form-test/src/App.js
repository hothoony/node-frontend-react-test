import logo from './logo.svg';
import './App.css';
import MyRadio from './components/form/radio/MyRadio';
import MyRadio_defaultValue from './components/form/radio/MyRadio_defaultValue';
import MyCheckbox from './components/form/checkbox/MyCheckbox';
import MyCheckbox_defaultValue from './components/form/checkbox/MyCheckbox_defaultValue';
import MySelect from './components/form/select/MySelect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div>react form test</div>
        
        {/* <MyRadio/> */}
        {/* <MyRadio_defaultValue/> */}
        {/* <MyCheckbox/> */}
        {/* <MyCheckbox_defaultValue/> */}
        <MySelect/>

      </header>
    </div>
  );
}

export default App;
