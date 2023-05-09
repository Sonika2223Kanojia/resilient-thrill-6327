// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Navbar from './component/Navbar';
import Technology from './pages/Technology';


function App() {
  return (
    <div className="App">
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='trending' element={<Trending/>}/>
      <Route path='tech' element={<Technology/>}/>
      <Route path='news' element={<Trending/>}/>
      <Route path='company' element={<Trending/>}/>
      
    </Routes>
    
    </div>
  );
}

export default App;
