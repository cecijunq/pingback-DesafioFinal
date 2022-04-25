import React, { Component } from 'react';
 
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
 
import Start from './components/Start';
import Questions from './components/Questions';
import Results from './components/Results';
 
 
class App extends Component {
  state = {  }
  render() {
    return (
      <>
 
        <Router>
          <Route exact path="/" component={Start}/>
          <Route path="/questions" component={Questions}/>
          <Route path="/results" component={Results}/>
        </Router>
      </>
 
    );
  }
}
 
export default App;
