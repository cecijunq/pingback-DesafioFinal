import React, { Component } from 'react';
 
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
 
import Start from './components/Start';
import Questions from './components/Questions';
import Result from './components/Results';
import Results from './components/Results';
 
 
class App extends Component {
  state = {  }
  render() {
    return (
      <>
 
        <Router>
          <Route path="/questions" component={Questions}/>
          <Route path="/results" component={Results}/>
          <Route path="/start" component={Start}/>
        </Router>
      </>
 
    );
  }
}
 
export default App;
