import React from 'react';
import { useHistory } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../sass/css/account.css'
const Account = () => {
  const { user, logout } = UserAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='container'>
      <p>{user && user.email}</p>
      <button onClick={handleLogout} className='btn-logout'>
        Logout
      </button>
    </div>
  );
};

export default Account;
