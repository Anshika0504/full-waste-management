
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import AddWaste from './components/AddWaste';
import UpdateWaste from './components/UpdateWaste';
import SumWaste from './components/SumWaste';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/"element={<AddWaste/>} ></Route>
    <Route path="/update/:id"element={<UpdateWaste/>} ></Route>
    <Route path="/add"element={<SumWaste/>} ></Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
