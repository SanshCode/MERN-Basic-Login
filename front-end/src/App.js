import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import LoginPage from './loginPage';
import RegisterPage from './registerPage';



const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;