// import logo from './logo.svg';
import React ,{useState} from 'react';
import Login from './components/Login';

import './App.css';
import AuthContext from './components/AuthContext';
import Home from './components/Home';

const App=()=>{
       
        const [isLoggedIn, setIsLoggedIn] = useState(false);

        const loginHandler = () => {
          setIsLoggedIn(true);
        };
      
        const logoutHandler = () => {
          setIsLoggedIn(false);
        };
      
        return (
          <AuthContext.Provider
            value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
          >
           <main>
              {!isLoggedIn && <Login onLogin={loginHandler} />}
              {isLoggedIn && <Home onLogout={logoutHandler} />}
              </main>
          </AuthContext.Provider>
        )
  
}

export default App;
