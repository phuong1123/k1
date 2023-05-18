import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
// import Account from './components/Account';
import { Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
        Firebase Auth & Context
      </h1>
      <AuthContextProvider>
        <Switch>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
