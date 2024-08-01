
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import AddWaste from './components/AddWaste';
import UpdateWaste from './components/UpdateWaste';
import SumWaste from './components/SumWaste';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/"element={<AddWaste/>} ></Route>
    <Route path="/update/:id"element={<UpdateWaste/>} ></Route>
    <Route path="/add"element={<SumWaste/>} ></Route>
  </Routes>
  <ToastContainer/>
  </BrowserRouter>
  </>
  );
}

export default App;
