import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CamPage from './component/CamPage.js.js'
import Landing from './component/Landing.js.js'

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/video' component={CamPage} />
          </Switch>
        </Router>

      </div>
    )
  }
}

export default App;
