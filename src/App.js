import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.scss';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <Routes>
    
    <Route path = "/" element={<Layout />} />
    <Route index element = {<Home/>} />
    </Routes>
    </>
  );
}

export default App;
