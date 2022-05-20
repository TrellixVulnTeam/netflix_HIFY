import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthContextProvider} from "./context/authContext/AuthContext";
import {MovieContextProvider} from "./context/movieContext/MovieContext";
import {ListContextProvider} from "./context/listContext/ListContext";
import {UserContextProvider} from "./context/userContext/UserContext";



ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <UserContextProvider>
    <MovieContextProvider>
     <ListContextProvider>
      <App />
      </ListContextProvider>
    </MovieContextProvider>
    </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
