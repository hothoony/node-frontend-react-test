import { RecoilRoot } from 'recoil';
import './App.css';
import Page01 from './components/Page01';
import Page02 from './components/Page02';

function App() {
  return (
    <RecoilRoot>{/* RecoilRoot 추가 */}
      <div className="App">
        <header className="App-header">
          <div>React Recoil</div>
          <Page01 />
          <Page02 />
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;
