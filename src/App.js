
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddMeeting from './pages/AddMeeting';
import NotFound from './pages/NotFound';
import Mymeetings from './pages/Mymeetings';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/add-meetings" element={<AddMeeting/>}/>
         <Route path="*" element={<NotFound/>}/>
         <Route path="/my-meetings" element={<Mymeetings/>}/>
         

      </Routes>
    </div>
    
  );
}

export default App;
