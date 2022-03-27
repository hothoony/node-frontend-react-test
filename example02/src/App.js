import './App.css';
import TestButtonClick from './test/TestButtonClick';
import Create from './comp/Create';
import Home from './comp/Home';
import Navbar from './comp/Navbar';
import Test_useState from './test/Test_useState';
import TestList from './test/TestList';
import TestProps from './test/props/TestProps';
import Test_useEffect from './test/Test_useEffect';
import Test_useEffect_fetch from './test/Test_useEffect_fetch';
import Test_useFetch from './test/useFetch/Test_useFetch';
import Test_BrowserRouter from './test/Test_BrowserRouter';

function App() {
  return (
    <div className="App">
      <div>
        <h1>App</h1>
        {/* <Home /> */}
        {/* <Create /> */}
        {/* <TestButtonClick /> */}
        {/* <Test_useState /> */}
        {/* <TestList /> */}
        {/* <TestProps /> */}
        {/* <Test_useEffect /> */}
        {/* <Test_useEffect_fetch /> */}
        {/* <Test_useFetch /> */}
        <Test_BrowserRouter />
      </div>
    </div>
  );
}

export default App;
