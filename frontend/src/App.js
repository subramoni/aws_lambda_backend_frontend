
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Rigister from './Register';
import Login from './Login';
import PremiumContent from './PremiumContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Smart Business Solutions</h1>
          <div className='header'>
              <Link  to='/'>Home</Link>
              <Link  to='/register'>Register</Link>
              <Link  to='/login'>Login</Link>
              <Link  to='/premium-content'>Premium Content</Link>
          </div>
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/register' element={<Rigister/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/premium-content' element={<PremiumContent/>}/>
            </Routes>
          </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
