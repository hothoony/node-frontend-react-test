import './App.css';
import VerticalChartV1 from './components/VerticalChartV1';
import VerticalChartV2 from './components/VerticalChartV2';
import MemberChartV1 from './components/MemberChartV1';
import MemberChartV2 from './components/MemberChartV2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MemberChartV2/>
        <MemberChartV1/>
        <VerticalChartV1/>
        <VerticalChartV2/>
      </header>
    </div>
  );
}

export default App;