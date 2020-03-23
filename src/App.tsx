import React from 'react';
import classes from './App.module.scss';
import { BrowserRouter } from 'react-router-dom'
import Routes from './containers/routes/Routes';
import AuthContextContainer from './containers/auth/AuthContextContainer';
import NavbarContainer from './containers/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {

  return (
    <div className={classes.App}>
      <BrowserRouter>
        <AuthContextContainer>
          <NavbarContainer>
          <ToastContainer/>
            <Routes />
          </NavbarContainer>
        </AuthContextContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
