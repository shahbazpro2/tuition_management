import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import Container from './components/common/Container';
import { routes } from './routes';


function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          {routes.map(([element, path], index) =>
            <Route key={index} element={element} path={path} />
          )}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
