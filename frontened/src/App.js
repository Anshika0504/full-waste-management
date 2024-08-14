
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import AddWaste from './components/AddWaste';
import UpdateWaste from './components/UpdateWaste';
import SumWaste from './components/SumWaste';
import { ToastContainer} from 'react-toastify';
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';
import UpdateSchedule from './components/UpdateSchedule';
import SumSchedule from './components/SumSchedule';
import Frontpage from './components/Frontpage';
import Feedback from './components/Feedback';
import Map from './components/Map';


function App() {
  return (
  <>
  
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Frontpage/>}></Route>
    <Route path="/addwaste"element={<AddWaste/>} ></Route>
    <Route path="/update/:id"element={<UpdateWaste/>} ></Route>
    <Route path="/add"element={<SumWaste/>} ></Route>
    <Route path="/schedule" element={<Schedule/>}></Route>
    <Route path="/updatesch/:id" element={<UpdateSchedule/>}></Route>
    <Route path="/addSchedule" element={<SumSchedule/>}></Route>
    <Route path="/feedback" element={<Feedback/>}></Route>
    <Route path="/Map" element={<Map/>}></Route>
  </Routes>
  <ToastContainer/>
  
  </BrowserRouter>
  </>
  );
}

export default App;
