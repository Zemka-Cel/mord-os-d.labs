import "./resources/styles/styles.scss";


// import { Route, Routes, Switch } from 'react-router-dom';
import React, { useContext } from "react";
import { Route } from 'react-router-dom';
import LockScreen from './templates/views/LockScreen';
import UserPage from './templates/views/UserPage';
import { Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {

  const [isAuth, setIsAuth] = useState(false);
  return (
        <Switch>
        {!isAuth ? (
        <Route exact path="/" ><LockScreen setIsAuth={setIsAuth}/></Route>
        ) : ( 
          <>
         { console.log("userpage")}
            <Route path="/"><UserPage setIsAuth={setIsAuth}/></Route>
          </>
        )}
        </Switch>
  );
}

export default App;
