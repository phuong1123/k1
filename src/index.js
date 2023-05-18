import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { store } from './redux/store'
import { Provider } from 'react-redux'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './sass/index.scss'


import Layout from './components/Layout'
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthContextProvider>
      <Layout />
    </AuthContextProvider> 
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
