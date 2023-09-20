// import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import AddUser from './component/AddUser';
import AllUser from './component/AllUser';
import EditUser from './component/EditUser';
import NavBar from './component/NavBar';
import NotFound from './component/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/all' element={<AllUser />} />
          <Route path='/edit/:id' element={<EditUser />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
