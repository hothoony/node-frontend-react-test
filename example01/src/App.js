import Navbar from './comp/Navbar';
import Home from './comp/Home';
import TestEventHandling from './comp/TestEventHandling';
import TestHookState from './comp/TestHookState';
import TestList from './comp/TestList';
import TestListProp from './comp/TestListProp';
import TestFetchJson from './comp/TestFetchJson';
import TestCustomHook from './comp/TestCustomHook';

function App() {

  const title = 'hell there';
  const num = 30;
  const ary = [1,2,3];
  const obj = {name: 'steve'};
  const link = 'http://www.google.com';

  return (
    <div className="App">
      <div className="content">
        {/* <p>{title}</p>
        <p>{num}</p>
        <p>{ary}</p>
        <p>{ "string" }</p>
        <p>{ 123 }</p>
        <p>{ [11, 22, 33] }</p>
        <p>{ obj.name }</p>
        <p>{ {name: 'james'}.name }</p>
        <a href={link}>Google</a> */}
        {/* <Home/>
        <Navbar/>
        <TestEventHandling />
        <TestHookState />
        <TestList /> */}
        {/* <TestListProp /> */}
        {/* <TestFetchJson /> */}
        <TestCustomHook />
      </div>
    </div>
  );
}

export default App;
