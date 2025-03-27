
import './App.css';
import Navbar from './Component/Header/navbar';
import HomeScreen from './Screen/HomeScreen/homeScreen';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Routes,Route} from 'react-router-dom';
import Profile from './Component/About/profile';
import SecondBar from './Component/Header/secondbar';


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
       <Navbar/>
      <HomeScreen/>
=======
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="About/profile" element={<Profile/>}/>
      </Routes>
    
>>>>>>> ea93917 (updated header)
  
    </div>
  );
}

export default App;
