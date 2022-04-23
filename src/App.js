import "./resources/styles/styles.scss";


// import { Route, Routes, Switch } from 'react-router-dom';
import React, { useContext } from "react";
import { Route } from 'react-router-dom';
import LockScreen from './templates/views/LockScreen';
import UserPage from './templates/views/UserPage';
import { Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
export const isAuthorisedContext = React.createContext(null);



function App() {

  const [isAuth, setIsAuth] = useState(false);
  const value = { state: { isAuth }, actions: { setIsAuth } };
  return (
    <Switch>
      <isAuthorisedContext.Provider value={value}>

        {!isAuth ? (
          <Route exact path="/" component={LockScreen} />
        ) : (
          <>
            <Route path="/" component={UserPage} />
          </>
        )}
      </isAuthorisedContext.Provider>

    </Switch>
  );
}

export default App;
