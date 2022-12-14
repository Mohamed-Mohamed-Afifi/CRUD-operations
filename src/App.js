import React from 'react';
import './styles/App.css'
import Users from './Pages/Users';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/registeration/login';
import Register from './Pages/registeration/Regeister'
import ForgetPass from './Pages/registeration/ForgetPass';
import ChangePass from './Pages/registeration/ChangePass';
import Protected from './Pages/protectRoutes/Protected';
import NotFound from './Pages/NotFound';
import Admin from './Pages/protectRoutes/Admin';
import Dashboard from './Pages/Dashboard';
import Singleuser from './Pages/SingleUser';

function App() {
  return (
    <div className="App">
      <div className='container'>
        {/* <Users/> */}
        <Routes>
          <Route path='/' element={<Admin><Dashboard/></Admin>}/>
          <Route path='/users' element={<Admin><Users /></Admin>} />
          <Route path='/users/:userId' element={<Singleuser/>}/>
          <Route path='/login' element={<Protected><Login /></Protected>} />
          <Route path='/register' element={<Protected><Register /></Protected>} />
          <Route path='/resetPasseord' element={<Protected><ForgetPass /></Protected>} />
          <Route path='/changePassword' element={<Protected><ChangePass /></Protected>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
