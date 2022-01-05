import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import Container from './components/common/Container';
import Home from './pages/home'
import Login from './pages/login'
import HqMain from './pages/hqMain'
import Center from './pages/center'
import Student from './pages/student'
import Register from './components/pages/student/Register';
import { url_center, url_editStudent, url_hq, url_login, url_registerStudent, url_student } from './components/functions/pageUrls';


function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route path={url_login} element={<Login />} />
          <Route path={url_login} element={<Login />} />
          <Route path={url_hq} element={<HqMain />} />
          <Route path={url_center} element={<Center />} />
          <Route path={url_student} element={<Student />} />
          <Route path={url_registerStudent} element={<Register />} />
          <Route path={url_editStudent} element={<Register />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
