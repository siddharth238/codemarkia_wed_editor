import Editor from './Editorpage/Editor'
import SavedProjectsPage from './Project/Project'
import React, { useState } from 'react';
 
import {
    BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom";
const App = () => {
   

  return (
   
         <Router>
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
                 
      </Switch>
    </Router>
     
     )
};
export default App;