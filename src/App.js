import {Routes,Route} from 'react-router-dom'
import './App.css';
import Nbar from './component/Nbar';
import Userlist from './component/Userlist';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Usercard from './component/Usercard';

function App() {
  return (
    <div className="App">
      <Nbar/>
      
       <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/users' element={<Userlist/>}/>
        <Route  path='/admin' element={<Admin/>}/>
      </Routes> 
    </div>
  );
}

export default App;
