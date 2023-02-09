import Editor from './Editorpage/Editor'
import SavedProjectsPage from './Project/Project'
import React, { useState } from 'react';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import Login from './Login/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom";
const App = () => {
  const [user, loading] = useAuthState(auth);

  return (
   
         <Router>{
          !user?(<Login/>):(
            <Switch >
            <Route path="/" exact>
                
                  <Editor />
                </Route>
                <Route path="/saved" exact>
                  <SavedProjectsPage />
                </Route>
                <Route path="/edit/:id" exact>
                  <Editor />
                  </Route>
                 
      </Switch>)}
    </Router>
     
     )
};
export default App;