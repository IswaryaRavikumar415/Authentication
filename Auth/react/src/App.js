import React from 'react';
import Register from './auth/register';
import Login from './auth/login';
import ProtectedRouter from './auth/protected';
import Home from './auth/home';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Switch, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
        <Switch>
          <Route exact path="/" component ={Login} />
          <Route exact path="/login" component ={Login} />
          <Route exact path="/register" component ={Register} />
          <ProtectedRouter exact path="/home" component={Home} />
        </Switch>
        <ToastContainer/>
    </div>
  )
}
export default App;