import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Form01 from './pages/Form01';
import Form02 from './pages/Form02';
import Form03 from './pages/Form03';
import Form04 from './pages/Form04';
import Form05 from './pages/Form05';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/form01' element={<Form01 />} />
        <Route path='/form02' element={<Form02 />} />
        <Route path='/form03' element={<Form03 />} />
        <Route path='/form04' element={<Form04 />} />
        <Route path='/form05' element={<Form05 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
