import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home_pg from './pages/Home_pg';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home_pg />} />
      </Routes>
    </div>
  );
}

export default App;
