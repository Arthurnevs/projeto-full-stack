import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './views/Login';
import { UserContext, UserProvider } from './Context/UserContext';
import Main from './views/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserProvider>
        <Main />
      </UserProvider>
  </React.StrictMode>
);
