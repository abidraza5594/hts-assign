import './App.css';
import {Routes,Route} from "react-router-dom"
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <>    
    <div className="App">
      
    </div>

      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </>

  );
}

export default App;
