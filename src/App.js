
import './App.css';
import Navbar from './Component/Header/navbar';
import HomeScreen from './Screen/HomeScreen/homeScreen';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeScreen/>
    </div>
  );
}

export default App;
