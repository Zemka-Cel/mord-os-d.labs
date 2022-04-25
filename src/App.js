import "./resources/styles/styles.scss";


// import { Route, Routes, Switch } from 'react-router-dom';
import React, { useContext } from "react";
import { Route } from 'react-router-dom';
import LockScreen from './templates/views/LockScreen';
import UserPage from './templates/views/UserPage';
import { Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
export const isAuthorisedContext = React.createContext(null);
export const fileContext = React.createContext(null);



function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [files, setFiles] = useState([{}]);

  const filesContext = { files: { files }, setFiles: { setFiles } };

  useEffect(() => {
        localStorage.setItem('files', JSON.stringify(files));
    }, [files]);

  const isAuthorised = { state: { isAuth }, actions: { setIsAuth } };
  return (
    <Switch>
      <isAuthorisedContext.Provider value={isAuthorised}>
      <fileContext.Provider value={filesContext}>
        {!isAuth ? (
          <Route exact path="/" component={LockScreen} />
        ) : (
          <>
            <Route path="/" component={UserPage} />
          </>
        )}
        </fileContext.Provider>
      </isAuthorisedContext.Provider>

    </Switch>
  );
}

export default App;
